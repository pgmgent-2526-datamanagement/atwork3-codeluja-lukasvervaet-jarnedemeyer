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
// import { getSelectedHostsForBooking } from "@/app/api/hosts/addToBooking/route";

const BookingModal: React.FC<ModalProps> = ({ booking, onClose }) => {
  const [hosts, setHosts] = React.useState<Host[]>([]);
  const [selectedHosts, setSelectedhosts] = useState<{ host: Host }[]>([]);
  const [pendingHostIds, setPendingHostIds] = useState<string[]>([]);

  const handleAddButtonClick = async () => {
    if (!booking) return;

    try {
      const promises = pendingHostIds.map((hostId) =>
        addHostToBooking(booking.id, parseInt(hostId)),
      );

      await Promise.all(promises);

      const updatedSelected = await getSelectedHostsForBooking(booking.id);
      setSelectedhosts(updatedSelected || []);

      setPendingHostIds([]);
    } catch (error) {
      console.error("Error adding hosts:", error);
    }
  };

  const deleteHost = async (hostId: number, bookingId: number) => {
    try {
      await removeHostFromBooking(bookingId, hostId);
      const updatedSelected = await getSelectedHostsForBooking(bookingId);
      setSelectedhosts(updatedSelected || []);
    } catch (error) {
      console.error("Error removing host:", error);
    }
  };

  const filteredHosts = hosts.filter(
    (host) =>
      !selectedHosts.some(
        (selected: { host: Host }) => selected.host.id === host.id,
      ),
  );

  useEffect(() => {
    if (!booking?.id) return;

    const fetchHosts = async () => {
      try {
        const data = await getHosts();
        console.log("Fetched data:", data);
        setHosts(data || []);

        const selected = await getSelectedHostsForBooking(booking.id);
        console.log("Selected hosts for booking:", selected);
        // store the full bookingHost objects (they include `host`)
        setSelectedhosts(selected || []);
      } catch (error) {
        console.error("Failed to fetch hosts:", error);
      }
    };
    fetchHosts();
  }, [booking?.id]);

  if (!booking) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-0">
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
                    })}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-300" />
                  <span>
                    {new Date(booking.endTime).toLocaleTimeString("nl-NL", {
                      hour: "2-digit",
                      minute: "2-digit",
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
            {/* staff div */}
            <section className="p-8 flex flex-col gap-8 justify-between mx-auto border border-gray-300 rounded-md min-w-[40%]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">Staffing</span>
                </div>
                <p className="text-xl font-bold text-slate-800">
                  {booking.hostsRequired} Hosts Required
                </p>
              </div>
              <div>
                <select
                  name="hosts"
                  id="hosts"
                  className="border rounded-md p-2 h-40 w-full mb-2"
                  multiple
                  value={pendingHostIds}
                  onChange={(e) => {
                    // Correct way to get multiple values from a select element
                    const values = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value,
                    );
                    setPendingHostIds(values);
                  }}
                >
                  {filteredHosts.map((host: Host) => (
                    <option
                      key={host.id}
                      value={host.id}
                      className="bg-gray-300 aria-selected:bg-emerald-300 mb-1 p-2 rounded-md"
                    >
                      {host.firstName} {host.lastName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                {selectedHosts.length > 0 ? (
                  <>
                    <div className="flex flex-col overflow-y-scroll h-30 border rounded-md shadow-lg p-2">
                      <h4 className="font-bold">Assigned Hosts:</h4>
                      {selectedHosts.map((host: any) => (
                        <div key={host.host.id}>
                          {host.host.firstName} {host.host.lastName}{" "}
                          <span
                            className="cursor-pointer"
                            onClick={() => deleteHost(host.host.id, booking.id)}
                          >
                            <Trash className="w-4 h-4 inline-block text-red-500 hover:text-red-700" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div>No hosts assigned yet.</div>
                )}
                <button
                  onClick={handleAddButtonClick}
                  className="py-3 px-4 bg-[#05d8c8] text-white font-bold rounded-xl hover:bg-[#04b3a9] shadow-lg shadow-[#05d8c8] transition-all text-sm w-40 h-10 items-center justify-center m-auto text-center"
                >
                  Add
                </button>
              </div>
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
