"use client";
import AddBookingButton from "@/components/AddBookingButton";
import BookingsCalendar from "@/components/BookingsCalendar";
// import { randomUUID } from "crypto";
import { useEffect, useState } from "react";

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

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");

  const fetchBookings = async () => {
    const res = await fetch("/api/bookings/db", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch bookings", res.status);
      setBookings([]);
      return [];
    }
    const data = await res.json();
    if (Array.isArray(data)) {
      setBookings(data as Booking[]);
      return data as Booking[];
    }
    setBookings([]);
    return [];
  };

  const filteredTodayBookings = (allBookings: Booking[]) => {
    const today = new Date();
    return allBookings.filter((booking) => {
      const bookingDate = new Date(booking.bookingDate);
      return (
        bookingDate.getDate() === today.getDate() &&
        bookingDate.getMonth() === today.getMonth() &&
        bookingDate.getFullYear() === today.getFullYear()
      );
    });
  };

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(e.target.value as "list" | "calendar");
  };

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    // Checks if the date object is valid AND is not the Epoch Time (plus or minus a few hours for timezone offset)
    return (
      date instanceof Date && !isNaN(date.getTime()) && date.getTime() > 3600000
    ); // Check if time is greater than 1 hour after Epoch
  };

  useEffect(() => {
    const loadBookings = async () => {
      await fetchBookings();
    };
    loadBookings();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center ml-32">
      <header className="flex p-5 justify-between space-x-3 items-center text-center w-full h-min">
        <h1 className="text-2xl font-semibold flex justify-center text-center underline -underline-offset-[-3px] saira-font">
          Your Bookings
        </h1>
        <select
          className="h-7 m-auto border border-gray-300 rounded-md px-2"
          name="filter"
          id="filter"
          value={viewMode}
          onChange={handleViewChange}
        >
          <option value="list">List View (Today)</option>
          <option value="calendar">Calendar View</option>
        </select>
      </header>

      {viewMode === "list" && (
        <div className="overflow-y-scroll bg-white border shadow-md border-gray-100 p-4 rounded-lg  mt-6 text-black flex flex-col flex-row-2  m-auto w-238 h-150">
          {filteredTodayBookings(bookings).map((booking: Booking) => {
            return (
              <div key={booking.id} className="mb-4">
                <div className="flex flex-col w-[95%] justify-start border border-gray-100 p-4 rounded-md space-y-1 shadow-sm mt-2 h-auto">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-semibold">Naam Klant</h2>
                  </div>

                  <p>
                    <span className="font-bold">Players: </span>
                    {booking.playersCount}
                  </p>
                  <p>Hosts: {booking.hostsRequired}</p>

                  <div className="flex justify-between w-[50%] text-gray-500">
                    <p>email@example.com</p>
                    <p>
                      {isValidDate(booking.bookingDate) ? (
                        new Date(booking.bookingDate).toLocaleDateString(
                          "nl-NL",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      ) : (
                        <span className="text-red-500 font-semibold">
                          Missing Date
                        </span>
                      )}
                    </p>
                    <p>
                      {isValidDate(booking.startTime) &&
                      isValidDate(booking.endTime) ? (
                        `${new Date(booking.startTime).toLocaleTimeString(
                          "nl-NL",
                          { hour: "2-digit", minute: "2-digit" }
                        )} - ${new Date(booking.endTime).toLocaleTimeString(
                          "nl-NL",
                          { hour: "2-digit", minute: "2-digit" }
                        )}`
                      ) : (
                        <span className="text-red-500 font-semibold">
                          Missing Time
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold">Package: </span>
                      {booking.packageName}
                    </p>
                    <p>Status: {booking.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {viewMode === "calendar" && (
        <div className="h-[40rem] overflow-y-scroll">
          <BookingsCalendar bookings={bookings} />
        </div>
      )}
    </div>
  );
}
