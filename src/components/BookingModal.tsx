"use client";

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
} from "@/utils/hosts.util";
import { Host } from "@/types/host.type";
// import { getSelectedHostsForBooking } from "@/app/api/hosts/addToBooking/route";

const BookingModal: React.FC<ModalProps> = ({ booking, onClose }) => {
  const [hosts, setHosts] = React.useState<Host[]>([]);
  // store bookingHost objects returned by the API (contain `host`)
  const [selectedHosts, setSelectedhosts] = useState<any[]>([]);

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

              <div className="mb-3">
                <h3 className="text-sm font-bold text-slate-700 mb-3">
                  Assigned Hosts
                </h3>
                <div className="overflow-y-auto max-h-[250px] space-y-2 pr-2">
                  {booking.bookingHosts && booking.bookingHosts.length > 0 ? (
                    booking.bookingHosts.map(({ host }) => (
                      <div
                        key={host.id}
                        className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-[#05d8c8] transition-colors"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${
                            host.active ? "bg-green-500" : "bg-gray-400"
                          }`}
                        >
                          {host.firstName.charAt(0)}
                          {host.lastName.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-800 truncate">
                            {host.firstName} {host.lastName}
                          </p>
                          <p className="text-xs text-slate-500">
                            {host.status}
                          </p>
                        </div>
                        {host.active && (
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
                            Active
                          </span>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-slate-400">
                      <UsersIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No hosts assigned yet</p>
                    </div>
                  )}
                </div>
              </div>

              {/* this button opens a modal to add hosts */}
              <button className="py-3 px-4 bg-[#05d8c8] text-white font-bold rounded-xl hover:bg-[#04b3a9] shadow-lg shadow-[#05d8c8] transition-all text-sm w-full text-center">
                Add Hosts
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
