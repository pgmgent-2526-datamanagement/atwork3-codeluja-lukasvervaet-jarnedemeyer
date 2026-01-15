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
  const handleClick = async () => {
    setLoading(true);
    await refreshData(onRefresh ?? (() => {}));
    setLoading(false);
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
