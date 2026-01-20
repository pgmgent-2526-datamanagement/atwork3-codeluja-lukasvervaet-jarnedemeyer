"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CakeIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import StatsCard from "../components/StatsCard";
import RefreshBookings from "@/components/AddBookingButton";
import HomeLoader from "@/components/HomeLoader";
import BookingModal from "@/components/BookingModal";

import {
  checkValidDate,
  getB2BBookings,
  getTodayBookings,
  getWeekBookings,
} from "@/utils/bookings.util";
import { Booking } from "@/types/booking.type";

export default function Home() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [b2b, setB2b] = useState<Booking[]>([]);
  const [todayBookings, setTodayBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const openModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const fetchAllBookings = async () => {
    await Promise.all([
      getWeekBookings().then((data) => setBookings(data || [])),
      getB2BBookings().then((data) => setB2b(data || [])),
      getTodayBookings().then((data) => setTodayBookings(data || [])),
    ]);
  };

  const refreshAllData = async () => {
    setLoading(true);
    await fetchAllBookings();
    setLoading(false);
    router.refresh();
  };

  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      await fetchAllBookings();
      setLoading(false);
    };
    loadAll();
  }, []);

  const handleHostsChanged = async () => {
    await fetchAllBookings();
  };

  if (loading) return <HomeLoader />;

  return (
    <main className="min-h-screen bg-gray-50/50 p-3 sm:p-4 md:p-6 lg:p-10 pb-20 lg:pb-10 w-full lg:ml-64">
      <div className="w-full">
        <div className="flex flex-col gap-3 mb-6 md:mb-10">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1 text-xs md:text-sm">
              Welcome back! Here is your booking overview for today.
            </p>
          </div>
          <RefreshBookings onRefresh={refreshAllData} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-10">
          <StatsCard
            title="Today's Total"
            value={String(todayBookings.length)}
            subtext="Bookings for today"
            Icon={ClockIcon}
            iconColor="text-orange-600"
            iconBg="bg-orange-100"
          />
          <StatsCard
            title="Weekly Total"
            value={String(bookings.length)}
            subtext="Active bookings"
            Icon={CalendarIcon}
            iconColor="text-blue-600"
            iconBg="bg-blue-100"
          />
          <StatsCard
            title="B2B Sessions"
            value={String(b2b.length)}
            subtext="Corporate clients this week"
            Icon={BuildingOfficeIcon}
            iconColor="text-purple-600"
            iconBg="bg-purple-100"
          />
        </div>

        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            Today&apos;s Schedule
          </h2>
          <span className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-gray-500 shadow-sm">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </span>
        </div>

        <div className="max-h-150 overflow-y-auto rounded-xl border border-gray-200 lg:border-2 bg-gray-50">
          {todayBookings.length > 0 ? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-6">
              {todayBookings.map((booking) => (
                <section
                  key={booking.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-3 sm:p-5 relative overflow-hidden group min-h-fit justify-between flex flex-col"
                >
                  <div
                    className={`absolute top-0 left-0 w-1 h-full ${
                      booking.is_b2b ? "bg-[#05d8c8]" : "bg-blue-500"
                    }`}
                  />

                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-gray-900">
                      <UserGroupIcon className="w-5 h-5 text-gray-400" />
                      <span className="text-base sm:text-lg font-bold">
                        {booking.playersCount} Players
                      </span>
                    </div>
                    <div className="flex items-end gap-1">
                      {booking.is_b2b && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-purple-50 text-purple-700 px-2 py-0.5 rounded border border-purple-100">
                          B2B
                        </span>
                      )}
                      {booking.food_required && (
                        <span className="text-[10px] uppercase tracking-wider font-bold bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-100">
                          Food
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">
                        {checkValidDate(booking.startTime)
                          ? `${new Date(booking.startTime).toLocaleTimeString(
                              "nl-NL",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "UTC",
                              },
                            )} - ${new Date(booking.endTime).toLocaleTimeString(
                              "nl-NL",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "UTC",
                              },
                            )}`
                          : "Time TBD"}
                      </span>
                    </div>

                    <div className="pt-1 sm:pt-2 flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <CakeIcon className="w-4 h-4" />
                        {booking.food_required ? "Catering" : "No Food"}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="block text-xs font-semibold text-gray-700 mb-1">
                        Applied Hosts:
                      </span>
                      <div className="flex flex-col gap-2">
                        {booking.bookingHosts &&
                        booking.bookingHosts.length > 0 ? (
                          booking.bookingHosts.map(({ host }) => (
                            <div
                              key={host.id}
                              className="flex items-center gap-3 p-2 bg-slate-50 border border-slate-200 rounded-xl"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#05d8c8] flex items-center justify-center text-white font-bold text-xs">
                                {host.firstName.charAt(0)}
                                {host.lastName.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-slate-800 text-xs">
                                  {host.firstName} {host.lastName}
                                </p>
                                <p className="text-[10px] text-slate-500 uppercase tracking-wide">
                                  {host.status || "STUDENT"}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="flex items-center justify-center h-10 text-slate-400 text-xs">
                            No hosts assigned yet.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    className="mt-3 sm:mt-4 w-full py-2 bg-gray-50 text-gray-600 text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#05d8c8] hover:text-white transition-colors cursor-pointer"
                    onClick={() => openModal(booking)}
                  >
                    View Details
                  </button>
                </section>
              ))}
            </section>
          ) : (
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-6 sm:p-12 text-center">
              <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">
                No bookings found for today.
              </p>
            </div>
          )}
        </div>
        {isModalOpen && (
          <BookingModal
            booking={selectedBooking}
            onClose={() => setIsModalOpen(false)}
            onHostsChanged={handleHostsChanged}
          />
        )}
      </div>
    </main>
  );
}
