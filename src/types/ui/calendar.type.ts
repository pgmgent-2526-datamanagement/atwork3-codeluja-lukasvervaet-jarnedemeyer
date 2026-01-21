import { Booking } from "../bookings/booking.type";
interface CalendarEvent {
  id: string;
  title: string;
  start: Date | string;
  end: Date | string;
  allDay?: boolean;
  backgroundColor: string;
}

interface BookingsCalendarProps {
  bookings: Booking[];
}
export type { CalendarEvent, BookingsCalendarProps };
