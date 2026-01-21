"use client";

import Button from "@/components/Button";
import { refreshData } from "@/utils/auth/refresh.util";
import { useState } from "react";

export default function RefreshBookings({
  onRefresh,
}: {
  onRefresh?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [daysAgo, setDaysAgo] = useState(7);
  const [daysFuture, setDaysFuture] = useState(14);

  const handleClick = async () => {
    setLoading(true);
    await refreshData(onRefresh ?? (() => {}), daysAgo, daysFuture);
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-4 w-full md:w-auto">
      <div className="flex items-center gap-2 justify-between md:justify-start">
        <label
          htmlFor="daysAgo"
          className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap"
        >
          Terug:
        </label>
        <input
          id="daysAgo"
          type="number"
          min="1"
          max="7"
          value={daysAgo}
          onChange={(e) => setDaysAgo(parseInt(e.target.value) || 1)}
          className="w-16 md:w-20 px-2 py-1.5 border border-gray-300 rounded-md text-xs md:text-sm"
          disabled={loading}
        />
      </div>

      <div className="flex items-center gap-2 justify-between md:justify-start">
        <label
          htmlFor="daysFuture"
          className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap"
        >
          Vooruit:
        </label>
        <input
          id="daysFuture"
          type="number"
          min="7"
          max="30"
          value={daysFuture}
          onChange={(e) => setDaysFuture(parseInt(e.target.value) || 7)}
          className="w-16 md:w-20 px-2 py-1.5 border border-gray-300 rounded-md text-xs md:text-sm"
          disabled={loading}
        />
      </div>

      <Button
        width="34"
        title={loading ? "Refreshing..." : "Refresh Boekings"}
        onClick={handleClick}
        loading={loading}
      />
    </div>
  );
}
