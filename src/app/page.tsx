"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  UserGroupIcon,
  CakeIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import StatsCard from "../components/StatsCard";
import RefreshBookings from "@/components/AddBookingButton";
import HomeLoader from "@/components/HomeLoader";
import BookingModal from "@/components/BookingModal";
import { Booking } from "@/types/booking.type";

export default function Home() {
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

  const fetchData = async () => {
    try {
      const res = await fetch("/api/bookings/week");
      const data = await res.json();
      setBookings(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchB2BData = async () => {
    try {
      const res = await fetch("/api/bookings/b2b");
      const data = await res.json();
      setB2b(data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTodayBookings = async () => {
    try {
      const res = await fetch("/api/bookings/today");
      const data = await res.json();
      setTodayBookings(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      await Promise.all([fetchData(), fetchB2BData(), fetchTodayBookings()]);
      setLoading(false);
    };
    loadAll();
  }, []);

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return (
      date instanceof Date && !isNaN(date.getTime()) && date.getTime() > 3600000
    );
  };

  if (loading) return <HomeLoader />;

  return (
    <main className="min-h-screen bg-gray-50/50 p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Welcome back! Here is your booking overview for today.
            </p>
          </div>
          <RefreshBookings onRefresh={fetchData} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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
            subtext="Corporate clients"
            Icon={BuildingOfficeIcon}
            iconColor="text-purple-600"
            iconBg="bg-purple-100"
          />
          <StatsCard
            title="Staff Available"
            value="0"
            subtext="Currently on shift"
            Icon={UsersIcon}
            iconColor="text-green-600"
            iconBg="bg-green-100"
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
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

        {todayBookings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-120 overflow-y-auto border-2 border-gray-200 rounded-xl p-6 bg-gray-50">
            {todayBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 relative overflow-hidden group min-h-fit"
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full ${
                    booking.is_b2b ? "bg-purple-500" : "bg-blue-500"
                  }`}
                />

                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-gray-900">
                    <UserGroupIcon className="w-5 h-5 text-gray-400" />
                    <span className="text-lg font-bold">
                      {booking.playersCount} Players
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
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

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg">
                    <ClockIcon className="w-4 h-4 text-gray-400" />
                    <span className="font-medium">
                      {isValidDate(booking.startTime)
                        ? `${new Date(booking.startTime).toLocaleTimeString(
                            "nl-NL",
                            { hour: "2-digit", minute: "2-digit" }
                          )} - ${new Date(booking.endTime).toLocaleTimeString(
                            "nl-NL",
                            { hour: "2-digit", minute: "2-digit" }
                          )}`
                        : "Time TBD"}
                    </span>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <CakeIcon className="w-4 h-4" />
                      {booking.food_required ? "Catering" : "No Food"}
                    </div>
                  </div>
                </div>

                <button
                  className="mt-4 w-full py-2 bg-gray-50 text-gray-600 text-sm font-semibold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors cursor-pointer"
                  onClick={() => openModal(booking)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">
              No bookings found for today.
            </p>
          </div>
        )}
        {isModalOpen && (
          <BookingModal
            booking={selectedBooking}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
}
