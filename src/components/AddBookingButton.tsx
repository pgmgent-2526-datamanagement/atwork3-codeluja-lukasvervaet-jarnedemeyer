"use client";

import Button from "@/components/Button";
import { useState } from "react";

export default function RefreshBookings({
  onRefresh,
}: {
  onRefresh?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/sync", {
      method: "POST",
    });

    if (!res.ok) {
      console.error("Failed to sync bookings", res.status);
      return;
    } else {
      console.log("Bookings synced successfully");
      if (onRefresh) {
        onRefresh();
      }
      setLoading(false);
    }
  };

  return (
    <Button
      width="34"
      title={loading ? "Refreshing..." : "Refresh Bookings"}
      onClick={handleClick}
      loading={loading}
    />
  );
}
