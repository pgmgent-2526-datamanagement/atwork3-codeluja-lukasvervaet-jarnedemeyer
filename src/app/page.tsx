"use client";

import React, { useEffect, useState } from "react";
import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  // ChartBarSquareIcon,
} from "@heroicons/react/24/outline";

import StatsCard from "../components/StatsCard";
import RefreshBookings from "@/components/AddBookingButton";
import HomeLoader from "@/components/HomeLoader";

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

  if (loading) {
    return <HomeLoader />;
  }
  return (
    <main className="min-h-screen md:p-10 lg:p-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard test</h1>
        <p className="text-base text-gray-500 mt-1">
          Welcome back! Here is your booking overview.
        </p>
      </div>

      <div className="my-3 flex justify-end">
        <RefreshBookings onRefresh={fetchData} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
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
