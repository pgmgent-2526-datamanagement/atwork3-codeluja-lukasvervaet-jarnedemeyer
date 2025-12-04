export interface ParsedBooking {
  venue: string;
  dayOfWeek: string;
  date: string;
  time: string;
  eposFamily: string;
  bookingDescription: string;
  quantity: number;
  status: string;
}

export function parseBookings(data: unknown[][]): ParsedBooking[] {
  const dataRows = data.slice(1); // Skip header row

  const bookings: ParsedBooking[] = dataRows.map((row) => {
    const r = row as Array<string | number>;
    return {
      venue: String(r[0] || ""),
      dayOfWeek: String(r[1] || ""),
      date: String(r[2] || ""),
      time: String(r[3] || ""),
      eposFamily: String(r[4] || ""),
      bookingDescription: String(r[5] || ""),
      quantity: Number(r[6]) || 0,
      status: String(r[7] || ""),
    };
  });

  return bookings;
}
