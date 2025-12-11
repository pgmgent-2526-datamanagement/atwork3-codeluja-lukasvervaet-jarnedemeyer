"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import BookingModal from "./BookingModal";

interface Booking {
  id: number;
  playersCount: number;
  startTime: string;
  endTime: string;
  bookingDate: string;
  bookingDescription: string;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  packageName: string;
  notes: string;
  status: string;
}

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

const mapBookingsToEvents = (bookings: Booking[]): CalendarEvent[] => {
  return bookings
    .filter((b) => b.bookingDate && b.startTime && b.endTime)
    .map((booking) => {
      const startDate = new Date(booking.bookingDate);
      const startTime = new Date(booking.startTime);
      const endDate = new Date(booking.bookingDate);
      const endTime = new Date(booking.endTime);

      startDate.setHours(
        startTime.getHours(),
        startTime.getMinutes(),
        startTime.getSeconds()
      );
      endDate.setHours(
        endTime.getHours(),
        endTime.getMinutes(),
        endTime.getSeconds()
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

export default function BookingsCalendar({ bookings }: BookingsCalendarProps) {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const events = mapBookingsToEvents(bookings);

  const handleEventClick = (clickInfo: any) => {
    const originalBooking = bookings.find(
      (b) => String(b.id) === clickInfo.event.id
    );

    if (originalBooking) {
      setSelectedBooking(originalBooking);
    }
  };

  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-xl mt-6 w-full max-w-[850px] mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
          contentHeight="auto"
          slotMinTime="09:00:00"
          slotMaxTime="22:00:00"
          events={events}
          editable={false}
          locale="nl"
          eventClick={handleEventClick}
          eventContent={(arg) => {
            const timeFormat = {
              hour: "numeric" as const,
              minute: "2-digit" as const,
              meridiem: false,
            };
            const startTime = arg.event.start
              ? arg.event.start.toLocaleTimeString("nl-NL", timeFormat)
              : "";
            const endTime = arg.event.end
              ? arg.event.end.toLocaleTimeString("nl-NL", timeFormat)
              : "";

            return (
              <div className="p-1 text-xs truncate">
                {arg.view.type !== "dayGridMonth" && (
                  <p className="font-mono text-[10px]">
                    {startTime} - {endTime}
                  </p>
                )}
                <p className="font-semibold">{arg.event.title}</p>
              </div>
            );
          }}
        />
      </div>

      <BookingModal booking={selectedBooking} onClose={handleCloseModal} />
    </>
  );
}
