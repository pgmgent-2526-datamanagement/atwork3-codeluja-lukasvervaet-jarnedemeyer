"use client";

import BookingsCalendar from "@/components/BookingsCalendar";
import { SkeletonCalendarContainer } from "@/components/Loader";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Booking } from "@/types/booking.type";
import { Filter } from "@/types/filter.type";
import { getDBBookings } from "@/utils/bookings.util";
import { filterBookings } from "@/utils/filter.util";

export default function Bookings() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // redirect to login if not authenticated
  if (status !== "loading" && !session) {
    router.push("/login");
    return null;
  }

  const [bookings, setBookings] = useState<Booking[]>([]); // eslint-disable-line
  const [loading, setLoading] = useState<boolean>(true); // eslint-disable-line
  const [filter, setFilter] = useState<Filter>({ type: "all" }); // eslint-disable-line

  const fetchBookings = async () => {
    setLoading(true);
    const dbData = await getDBBookings();
    setBookings(dbData || []);
    setLoading(false);
  };

  const filteredBookings = () => {
    return filterBookings({ filter, bookings });
  };

  // eslint-disable-next-line
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
          value={filter.type}
          onChange={(e) =>
            setFilter({ type: e.target.value as Filter["type"] })
          }
        >
          <option value="all">All Bookings</option>
          <option value="b2b">B2B Bookings</option>
          <option value="food">Require food</option>
          <option value="bronze">Bronze Package</option>
          <option value="silver">Silver Package</option>
          <option value="gold">Gold Package</option>
        </select>
      </header>
      {loading ? (
        <SkeletonCalendarContainer />
      ) : (
        <div className="h-160 overflow-y-scroll">
          <BookingsCalendar bookings={filteredBookings()} />
        </div>
      )}
    </div>
  );
}
