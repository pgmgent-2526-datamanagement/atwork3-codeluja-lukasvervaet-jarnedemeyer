import { Booking } from "@/types/bookings/booking.type";
import { CalendarEvent } from "@/types/ui/calendar.type";

export const getWeekBookings = async () => {
  try {
    const res = await fetch("/api/bookings/week");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getTodayBookings = async () => {
  try {
    const res = await fetch("/api/bookings/today");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getB2BBookings = async () => {
  try {
    const res = await fetch("/api/bookings/b2b");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getDBBookings = async () => {
  try {
    const res = await fetch("/api/bookings/db");
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const checkValidDate = (dateString: string) => {
  const date = new Date(dateString);
  return (
    date instanceof Date && !isNaN(date.getTime()) && date.getTime() > 3600000
  );
};

export const mapEventBookings = (bookings: Booking[]): CalendarEvent[] => {
  return bookings
    .filter((b) => b.bookingDate && b.startTime && b.endTime)
    .map((booking) => {
      const startDate = new Date(booking.bookingDate);
      const startTime = new Date(booking.startTime);
      const endDate = new Date(booking.bookingDate);
      const endTime = new Date(booking.endTime);

      startDate.setHours(
        startTime.getUTCHours(),
        startTime.getUTCMinutes(),
        startTime.getUTCSeconds(),
      );
      endDate.setHours(
        endTime.getUTCHours(),
        endTime.getUTCMinutes(),
        endTime.getUTCSeconds(),
      );

      return {
        id: String(booking.id),
        title: `${booking.packageName} (${booking.playersCount}p)`,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        backgroundColor: booking.is_b2b ? "#10b981" : "#3b82f6",
      };
    });
};

export const fetchBookings = async (): Promise<Booking[]> => {
  try {
    const dbData = await getDBBookings();
    return dbData || [];
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
