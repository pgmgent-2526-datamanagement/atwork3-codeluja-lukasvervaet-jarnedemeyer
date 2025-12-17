"use client";

import Button from "@/components/Button";

export default function RefreshBookings({
  onRefresh,
}: {
  onRefresh?: () => void;
}) {
  const handleClick = async () => {
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
    }
  };

  return <Button width="32" title="Add Booking" onClick={handleClick} />;
}
