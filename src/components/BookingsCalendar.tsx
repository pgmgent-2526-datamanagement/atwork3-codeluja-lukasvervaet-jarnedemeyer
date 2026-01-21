"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import BookingModal from "./modals/BookingModal";
import { Booking } from "@/types/bookings/booking.type";
import { BookingsCalendarProps } from "@/types/ui/calendar.type";
import { mapEventBookings } from "@/utils/bookings.util";

export default function BookingsCalendar({ bookings }: BookingsCalendarProps) {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const events = mapEventBookings(bookings);

  // eslint-disable-next-line
  const handleEventClick = (clickInfo: any) => {
    const originalBooking = bookings.find(
      (b) => String(b.id) === clickInfo.event.id,
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
      <div className="p-4 bg-white rounded-lg shadow-xl mt-6 w-full max-w-212.5 mx-auto">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          firstDay={1}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
          contentHeight="auto"
          slotMinTime="09:00:00"
          slotMaxTime="22:30:00"
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
