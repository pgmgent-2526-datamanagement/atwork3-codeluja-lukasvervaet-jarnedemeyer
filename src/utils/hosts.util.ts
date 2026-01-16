export const getHosts = async () => {
  try {
    const response = await fetch("/api/hosts", { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    // Logic check: Is it an array or an object containing an array?
    return Array.isArray(data) ? data : data.hosts || [];
  } catch (error) {
    console.error("getHosts failed:", error);
    return []; // Return empty array so the UI doesn't crash
  }
};

export const getHostById = async (id: string) => {
  const response = await fetch(`/api/hosts/${id}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch host");
  }
  return response.json();
};
