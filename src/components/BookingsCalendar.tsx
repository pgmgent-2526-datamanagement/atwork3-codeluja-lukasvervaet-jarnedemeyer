"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // <-- IMPORT NEW PLUGIN
// import "bootstrap/dist/css/bootstrap.css"; // Keep commented out if not using all of bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useState } from "react"; // <-- IMPORT useState
import BookingModal from "./BookingModal";

// --- INTERFACES (Keep as is) ---
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
  // Add original booking ID to the FullCalendar event object for easy lookup
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

// --- MAPPING FUNCTION (Keep as is, but ensure 'id' is mapped) ---
const mapBookingsToEvents = (bookings: Booking[]): CalendarEvent[] => {
  return bookings
    .filter((b) => b.bookingDate && b.startTime && b.endTime)
    .map((booking) => {
      // ... date logic remains the same ...
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
        id: String(booking.id), // Map the ID for easy lookup
        title: `${booking.packageName} (${booking.playersCount}p)`,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        backgroundColor: booking.is_b2b ? "#10b981" : "#3b82f6",
      };
    });
};
// --- END MAPPING FUNCTION ---

export default function BookingsCalendar({ bookings }: BookingsCalendarProps) {
  // State to manage the modal visibility and the selected booking data
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const events = mapBookingsToEvents(bookings);

  // Function to handle event click and open modal
  const handleEventClick = (clickInfo: any) => {
    // 1. Find the original booking data using the ID
    const originalBooking = bookings.find(
      (b) => String(b.id) === clickInfo.event.id
    );

    if (originalBooking) {
      setSelectedBooking(originalBooking);
    }
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedBooking(null);
  };

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-xl mt-6 w-full max-w-[850px] mx-auto">
        <FullCalendar
          // 1. ADD timeGridPlugin
          plugins={[dayGridPlugin, timeGridPlugin]}
          // 2. Change initial view to display time
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            // 3. Ensure timeGrid options are available
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          // 4. Set Max Height/Visible Time Slots
          height="auto" // Allows for scrolling if contentHeight is set
          contentHeight="auto" // Default to auto, but you can set a px value here like 500
          // These props set the minimum and maximum visible time slots, effectively
          // limiting the scrollable height of the timeGrid views.
          slotMinTime="09:00:00" // Start displaying from 8 AM
          slotMaxTime="22:00:00" // Stop displaying after 10 PM
          // aspectRatio={2.5} // Remove or adjust this if you use the height/contentHeight props

          events={events}
          editable={false}
          locale="nl"
          // 5. Add the click handler
          eventClick={handleEventClick}
          eventContent={(arg) => {
            // Display time on the event for timeGrid views
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

      {/* 6. Render the Modal */}
      <BookingModal booking={selectedBooking} onClose={handleCloseModal} />
    </>
  );
}
