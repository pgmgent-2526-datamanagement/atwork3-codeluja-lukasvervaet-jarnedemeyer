"use client";
import AddBookingButton from "@/components/AddBookingButton";
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

//! display bookings in calender style view with date, time, playersCount, packageName, hostsRequired, bookingDescription
//* https://www.untitledui.com/react/components/calendars

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
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
    <div>
      <header className="flex flex-col p-5 justify-between space-y-3">
        <h1 className="mt-3 text-2xl font-semibold flex justify-center items-center underline -underline-offset-[-3px] saira-font">
          Your Bookings
        </h1>
        <p className="bg-gray-200 items-center text-sm p-1 rounded-md shadow-md flex m-auto w-max text-slate-800">
          Bekijk en beheer uw boekingen
        </p>
      </header>
      {/* <AddBookingButton /> */}
      <div>
        <select name="filter" id="filter">
          <option value="list">List View (today)</option>
          <option value="calendar">Calendar View</option>
        </select>
      </div>

      <div className="overflow-y-scroll bg-white border shadow-md border-gray-100 p-4 rounded-lg  mt-6 text-black flex flex-col flex-row-2  m-auto w-312 h-128">
        {bookings.length > 0 ? (
          bookings.map((booking: Booking) => {
            return (
              <div key={booking.id} className="mb-4">
                <div className="flex flex-col w-full justify-start border border-gray-100 p-4 rounded-md space-y-2 shadow-sm mt-2">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-semibold">Naam Klant</h2>
                    {/* <select
                      name="status"
                      id="status"
                      className="border border-gray-300 rounded-md p-2 h-10 w-40"
                    >
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                      <option value="canceled">Canceled</option>
                    </select> */}
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
                          { day: "2-digit", month: "short", year: "numeric" }
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
          })
        ) : (
          <p>No bookings available.</p>
        )}
      </div>
    </div>
  );
}
