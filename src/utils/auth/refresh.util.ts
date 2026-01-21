export const refreshData = async (
  onRefresh: () => void,
  daysAgo?: number,
  daysFuture?: number,
) => {
  const params = new URLSearchParams();

  if (daysAgo !== undefined) {
    params.append("daysAgo", daysAgo.toString());
  }

  if (daysFuture !== undefined) {
    params.append("daysFuture", daysFuture.toString());
  }

  const query = params.toString();
  const url = query ? `/api/bookings/sync?${query}` : "/api/bookings/sync";

  const res = await fetch(url, { method: "POST" });

  if (!res.ok) {
    console.error("Failed to sync bookings", res.status);
    return;
  }

  console.log("Bookings synced successfully");
  onRefresh();
};
