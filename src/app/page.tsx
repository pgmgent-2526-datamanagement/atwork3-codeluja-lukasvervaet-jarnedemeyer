"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  // ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { SkeletonBookingItem } from "@/components/Loader";

import StatsCard from "../components/StatsCard";
import RefreshBookings from "@/components/AddBookingButton";
import HomeLoader from "@/components/HomeLoader";

interface Booking {
  id: number;
  playersCount: number;
  startTime: string;
  endTime: string;
  bookingDate: string;
  bookingDescription: string;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  packageName: string;
  notes: string;
  status: string;
}

export default function Home() {
  const [bookings, setBookings] = useState<any[]>([]); // eslint-disable-line
  const [b2b, setB2b] = useState<any[]>([]); // eslint-disable-line
  const [todayBookings, setTodayBookings] = useState<any[]>([]); // eslint-disable-line
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/week", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch data", res.status);
      return [];
    }
    const data = await res.json();
    console.log("Fetched bookings for the week:", data);
    setBookings(data);
    setLoading(false);
    return data;
  };

  const fetchB2BData = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/b2b", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch B2B data", res.status);
      return [];
    }
    const data = await res.json();
    console.log("Fetched B2B bookings for the week:", data);
    setB2b(data);
    setLoading(false);
    return data;
  };

  const fetchTodayBookings = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/today", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch today's bookings", res.status);
      return [];
    }
    const data = await res.json();
    console.log("Fetched today's bookings:", data);
    setTodayBookings(data);
    setLoading(false);
    return data;
  };

  useEffect(() => {
    (async () => {
      await fetchData();
      await fetchB2BData();
      await fetchTodayBookings();
    })();
  }, []);

  const TodayBookings = (allBookings: Booking[]) => {
    const today = new Date();
    return allBookings.filter((booking) => {
      const bookingDate = new Date(booking.bookingDate);
      return (
        bookingDate.getDate() === today.getDate() &&
        bookingDate.getMonth() === today.getMonth() &&
        bookingDate.getFullYear() === today.getFullYear()
      );
    });
  };

  const bookingsToday = TodayBookings(bookings);

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    // Checks if the date object is valid AND is not the Epoch Time (plus or minus a few hours for timezone offset)
    return (
      date instanceof Date && !isNaN(date.getTime()) && date.getTime() > 3600000
    ); // Check if time is greater than 1 hour after Epoch
  };

  if (loading) {
    return <HomeLoader />;
  }
  return (
    <main className="min-h-screen w-full max-w-[90%] md:p-10 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard test</h1>
        <p className="text-base text-gray-500 mt-1">
          Welcome back! Here is your booking overview.
        </p>
      </div>

      <div className="my-3 flex justify-end">
        <RefreshBookings onRefresh={fetchData} />
      </div>

      <div className="my-6">
        {/* // ! when clicking open modal with all the details!! */}
        <div className="flex overflow-x-scroll bg-white border shadow-md border-gray-100 p-4 rounded-lg mt-6 text-black flex-row-2  m-auto w-full h-auto space-x-3">
          {bookingsToday.map((booking: Booking) => {
            return (
              <div key={booking.id} className="w-full">
                <div className="flex flex-col justify-start border border-gray-100 p-4 rounded-md gap-2 shadow-sm mt-2 h-auto min-w-80 w-full">
                  <p>
                    <span className="font-bold">Players: </span>
                    {booking.playersCount}
                  </p>
                  {/* <p>Hosts: {booking.hostsRequired}</p> */}

                  <div className="flex justify-between w-[50%] text-gray-500">
                    {/* <p>
                        {isValidDate(booking.bookingDate) ? (
                          new Date(booking.bookingDate).toLocaleDateString(
                            "nl-NL",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        ) : (
                          <span className="text-red-500 font-semibold">
                            Missing Date
                          </span>
                        )}
                      </p> */}
                    <p>
                      {isValidDate(booking.startTime) &&
                      isValidDate(booking.endTime) ? (
                        `${new Date(booking.startTime).toLocaleTimeString(
                          "nl-NL",
                          { hour: "2-digit", minute: "2-digit" }
                        )} - ${new Date(booking.endTime).toLocaleTimeString(
                          "nl-NL",
                          { hour: "2-digit", minute: "2-digit" }
                        )}`
                      ) : (
                        <span className="text-red-500 font-semibold">
                          Missing Time
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    {/* <p>
                        <span className="font-bold">Package: </span>
                        {booking.packageName}
                      </p> */}

                    <p>
                      <span className="font-semibold">Food Required:</span>
                      {booking.food_required ? "Yes" : "No"}
                    </p>

                    <p>
                      <span className="font-semibold">Is B2B: </span>
                      {booking.is_b2b ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StatsCard
            title="This week"
            value={String(bookings.length)}
            subtext="Bookings scheduled for this week"
            Icon={CalendarIcon}
            iconColor="text-blue-500"
            iconBg="bg-blue-50"
          />

          <StatsCard
            title="Available Staff"
            value="0"
            subtext="Currently available"
            Icon={UsersIcon}
            iconColor="text-green-500"
            iconBg="bg-green-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <StatsCard
            title="Today's Bookings"
            value={String(todayBookings.length)}
            subtext="Total bookings today"
            Icon={ClockIcon}
            iconColor="text-red-500"
            iconBg="bg-red-50"
          />

          <StatsCard
            title="B2B Bookings"
            value={String(b2b.length)}
            subtext="Total B2B bookings this week"
            Icon={ClockIcon}
            iconColor="text-yellow-500"
            iconBg="bg-yellow-50"
          />
        </div>
      </div>
    </main>
  );
}
