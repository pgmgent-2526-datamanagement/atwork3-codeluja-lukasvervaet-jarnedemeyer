"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  // ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

import LargeCard from "../components/LargeCard";
import StatsCard from "../components/StatsCard";
import RefreshBookings from "@/components/AddBookingButton";

export default function Home() {
  const [bookings, setBookings] = useState<any[]>([]);
  const fetchData = async () => {
    const res = await fetch("/api/bookings/week", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch data", res.status);
      return [];
    }
    const data = await res.json();
    console.log("Fetched bookings for the week:", data);
    setBookings(data);
    return data;
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);
  return (
    <main className="min-h-screen p-8 md:p-10 lg:p-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-base text-gray-500 mt-1">
          Welcome back! Here is your booking overview.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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

          <StatsCard
            title="Pending"
            value="0"
            subtext="Awaiting confirmation"
            Icon={ClockIcon}
            iconColor="text-yellow-500"
            iconBg="bg-yellow-50"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LargeCard
            title="Recent Bookings"
            subtext="Your latest booking activities"
          >
            <p>No bookings yet</p>
          </LargeCard>

          <LargeCard
            title="Staff Overview"
            subtext="Current staff availability"
          >
            <p>No staff members yet</p>
          </LargeCard>
        </div>

        <RefreshBookings onRefresh={fetchData} />
      </div>
    </main>
  );
}
