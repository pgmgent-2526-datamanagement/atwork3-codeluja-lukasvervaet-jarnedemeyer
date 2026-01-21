// Utility functions for managing hosts data

// Fetch all hosts from the database
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

export const getHostById = async (id: number) => {
  const response = await fetch(`/api/hosts/${id}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch host");
  }
  return response.json();
};

export const addHostToBooking = async (bookingId: number, hostId: number) => {
  const response = await fetch("/api/hosts/addToBooking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookingId, hostId }),
  });

  if (!response.ok) {
    throw new Error("Failed to add host to booking");
  }

  return response.json();
};

export const getSelectedHostsForBooking = async (bookingId: number) => {
  try {
    // Call the filtered API route which returns bookingHost rows for the booking
    const bookingHostsRes = await fetch(`/api/bookinghosts/${bookingId}`, {
      cache: "no-store",
    });
    if (!bookingHostsRes.ok) {
      console.warn(
        "/api/bookinghosts/:bookingId returned",
        bookingHostsRes.status,
      );
      return [];
    }

    const data = await bookingHostsRes.json();
    console.debug("[GET_SELECTED_HOSTS_RESPONSE] filtered:", data);
    // Expecting an array of BookingHost objects (possibly with `host` included)
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("[GET_SELECTED_HOSTS_ERROR]", err);
    return [];
  }
};

export const removeHostFromBooking = async (
  bookingId: number,
  hostId: number,
) => {
  const response = await fetch("/api/hosts/removeFromBooking", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bookingId, hostId }),
  });

  if (!response.ok) {
    throw new Error("Failed to remove host from booking");
  }

  return response.json();
};

export const deleteHost = async (hostId: number) => {
  const response = await fetch("/api/hosts/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: hostId }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete host");
  }

  return response.json();
};

export const updateHost = async (hostData: {
  id: number;
  active: boolean;
  firstName: string;
  lastName: string;
}) => {
  const response = await fetch(`/api/hosts/edit`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hostData),
  });

  if (!response.ok) {
    throw new Error("Failed to update host");
  }

  return response.json();
};
