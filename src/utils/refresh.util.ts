export const refreshData = async (onRefresh: () => void) => {
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
