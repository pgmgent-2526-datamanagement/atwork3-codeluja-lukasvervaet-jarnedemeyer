"use client";

import Button from "@/components/Button";
import { refreshData } from "@/utils/refresh.util";
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
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="daysAgo" className="text-sm font-medium text-gray-700">
          Dagen terug:
        </label>
        <input
          id="daysAgo"
          type="number"
          min="1"
          max="7"
          value={daysAgo}
          onChange={(e) => setDaysAgo(parseInt(e.target.value) || 1)}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
          disabled={loading}
        />
      </div>

      <div className="flex items-center gap-2">
        <label
          htmlFor="daysFuture"
          className="text-sm font-medium text-gray-700"
        >
          Dagen vooruit:
        </label>
        <input
          id="daysFuture"
          type="number"
          min="7"
          max="30"
          value={daysFuture}
          onChange={(e) => setDaysFuture(parseInt(e.target.value) || 7)}
          className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
          disabled={loading}
        />
      </div>

      <Button
        width="34"
        title={loading ? "Refreshing..." : "Refresh Bookings"}
        onClick={handleClick}
        loading={loading}
      />
    </div>
  );
}
