"use client";

import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  XMarkIcon,
  ClockIcon,
  UsersIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { ModalProps } from "@/types/modal.type";
import {
  addHostToBooking,
  getHosts,
  getSelectedHostsForBooking,
  removeHostFromBooking,
} from "@/utils/hosts.util";
import { Host } from "@/types/host.type";

const BookingModal: React.FC<ModalProps> = ({ booking, onClose }) => {
  const [hosts, setHosts] = useState<Host[]>([]);
  const [selectedHosts, setSelectedHosts] = useState<{ host: Host }[]>([]);
  const [pendingHostIds, setPendingHostIds] = useState<string[]>([]);
  const [isLoadingHosts, setIsLoadingHosts] = useState(true);

  const handleAddButtonClick = async () => {
    if (!booking) return;

    try {
      const promises = pendingHostIds.map((hostId) =>
        addHostToBooking(booking.id, parseInt(hostId)),
      );

      await Promise.all(promises);

      const updatedSelected = await getSelectedHostsForBooking(booking.id);
      setSelectedHosts(updatedSelected || []);

      setPendingHostIds([]);
    } catch (error) {
      console.error("Error adding hosts:", error);
    }
  };

  const deleteHost = async (hostId: number, bookingId: number) => {
    try {
      await removeHostFromBooking(bookingId, hostId);
      const updatedSelected = await getSelectedHostsForBooking(bookingId);
      setSelectedHosts(updatedSelected || []);
    } catch (error) {
      console.error("Error removing host:", error);
    }
  };

  // Check if host has a conflicting booking at the same time
  const hasConflictingBooking = (host: Host): boolean => {
    if (!host.bookingHosts || !booking) return false;

    const bookingStart = new Date(booking.startTime).getTime();
    const bookingEnd = new Date(booking.endTime).getTime();
    const bookingDate = new Date(booking.bookingDate).toDateString();

    return host.bookingHosts.some(({ booking: otherBooking }) => {
      if (otherBooking.id === booking.id) return false;
      if (new Date(otherBooking.bookingDate).toDateString() !== bookingDate)
        return false;

      const otherStart = new Date(otherBooking.startTime).getTime();
      const otherEnd = new Date(otherBooking.endTime).getTime();

      return bookingStart < otherEnd && bookingEnd > otherStart;
    });
  };

  const filteredHosts = hosts.filter(
    (host) =>
      !selectedHosts.some(
        (selected: { host: Host }) => selected.host.id === host.id,
      ),
  );

  const maxSelectable = Math.max(
    0,
    (booking?.hostsRequired || 0) - selectedHosts.length,
  );

  useEffect(() => {
    if (!booking?.id) return;

    const fetchHosts = async () => {
      setIsLoadingHosts(true);
      try {
        const data = await getHosts();
        setHosts(data || []);

        const selected = await getSelectedHostsForBooking(booking.id);
        setSelectedHosts(selected || []);
      } catch (error) {
        console.error("Failed to fetch hosts:", error);
      } finally {
        setIsLoadingHosts(false);
      }
    };
    fetchHosts();
  }, [booking?.id]);

  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white h-full md:h-[95vh] w-full max-w-[90%] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div className="flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${
                booking.is_b2b ? "bg-purple-500" : "bg-blue-500"
              } animate-pulse`}
            />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Booking Ref: #{booking.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-8 bg-slate-50 border-b">
            <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
              {booking.packageName}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {booking.is_b2b && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">
                  Corporate Event
                </span>
              )}
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200 uppercase">
                {booking.status}
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-[#05d8c8] p-3 rounded-xl text-white">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  Event Schedule
                </p>
                <div className="flex items-center gap-2 font-mono text-lg font-bold text-slate-800">
                  <span>
                    {new Date(booking.startTime).toLocaleTimeString("nl-NL", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC",
                    })}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-300" />
                  <span>
                    {new Date(booking.endTime).toLocaleTimeString("nl-NL", {
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "UTC",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <section className="p-8 flex flex-row gap-8 justify-between mx-auto h-[70%] min-h-50">
            {/* detail div */}
            <section className="p-8 w-full min-w-[50%] border border-gray-300 rounded-md">
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <UserGroupIcon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">
                      Attendance
                    </span>
                  </div>
                  <p className="text-xl font-bold text-slate-800">
                    {booking.playersCount} Players
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl border-2 border-slate-50 bg-white group hover:border-blue-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        booking.food_required
                          ? "bg-orange-100 text-orange-600"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <CheckBadgeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">
                        Catering Service
                      </p>
                      <p className="text-xs text-slate-500">
                        {booking.food_required
                          ? "Client requested food"
                          : "No food requirements"}
                      </p>
                    </div>
                  </div>
                  {booking.food_required && (
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Internal Remarks
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 italic text-slate-600 text-sm leading-relaxed">
                    {booking.notes ||
                      booking.bookingDescription ||
                      "No specific instructions provided for this booking."}
                  </div>
                </div>
              </div>
            </section>
            {/* hosts div */}
            <section className="p-8 flex flex-col mx-auto border border-gray-300 rounded-md min-w-[40%] max-h-full">
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Hosting</span>
                </div>
                <p className="text-xl font-bold text-slate-800">
                  {booking.hostsRequired} Hosts Required
                </p>
              </div>

              <div className="flex gap-4 flex-1 min-h-0">
                {/* Available Hosts Selection */}
                <div className="flex-1 flex flex-col">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Available Hosts
                  </h4>
                  {isLoadingHosts ? (
                    <div className="flex-1 border border-slate-200 rounded-xl bg-slate-50 p-4 space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-8 bg-slate-200 rounded animate-pulse"
                        ></div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex-1 border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                      <select
                        name="hosts"
                        id="hosts"
                        className="w-full h-full p-2 bg-transparent focus:outline-none"
                        multiple
                        value={pendingHostIds}
                        onChange={(e) => {
                          let values = Array.from(
                            e.target.selectedOptions,
                            (option) => option.value,
                          );
                          if (values.length > maxSelectable) {
                            values = values.slice(0, maxSelectable);
                          }
                          setPendingHostIds(values);
                        }}
                        disabled={maxSelectable === 0}
                      >
                        {filteredHosts.map((host: Host) => {
                          const isConflicting = hasConflictingBooking(host);
                          const isDisabled =
                            isConflicting ||
                            (pendingHostIds.length >= maxSelectable &&
                              !pendingHostIds.includes(host.id.toString()));

                          return (
                            <option
                              key={host.id}
                              value={host.id}
                              className="p-3 mb-1 hover:bg-[#05d8c8] hover:text-white cursor-pointer rounded-lg"
                              disabled={isDisabled}
                            >
                              {host.firstName} {host.lastName}
                              {isConflicting && " 🔴 Booked"}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Assigned Hosts
                  </h4>
                  <div className="flex-1 overflow-y-auto border border-slate-200 rounded-xl p-3 bg-white">
                    {isLoadingHosts ? (
                      <div className="space-y-2">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                          >
                            <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                              <div className="h-3 bg-slate-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : selectedHosts.length > 0 ? (
                      <div className="space-y-2">
                        {selectedHosts.map((host) => (
                          <div
                            key={host.host.id}
                            className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#05d8c8] transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[#05d8c8] flex items-center justify-center text-white font-bold text-sm">
                                {host.host.firstName.charAt(0)}
                                {host.host.lastName.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-slate-800 text-sm">
                                  {host.host.firstName} {host.host.lastName}
                                </p>
                                <p className="text-xs text-slate-500 uppercase tracking-wide">
                                  {host.host.status || "STUDENT"}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                deleteHost(host.host.id, booking.id)
                              }
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                            >
                              <Trash className="w-4 h-4 text-red-500 hover:text-red-700" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                        No hosts assigned yet.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddButtonClick}
                className="mt-4 w-full py-3 px-4 bg-[#05d8c8] text-white font-bold rounded-xl hover:bg-[#04b3a9] shadow-lg shadow-[#05d8c8]/30 transition-all text-sm"
              >
                Add Selected Hosts
              </button>
            </section>
          </section>
        </div>

        <div className="p-6 bg-white flex gap-3 w-80 mx-auto">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-[#05d8c8] text-white font-bold rounded-xl hover:bg-[#04b3a9] shadow-lg shadow-[#05d8c8] transition-all text-sm w-40 text-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
