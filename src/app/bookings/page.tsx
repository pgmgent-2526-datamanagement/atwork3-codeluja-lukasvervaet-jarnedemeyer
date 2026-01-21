"use client";
import BookingsCalendar from "@/components/BookingsCalendar";
import FilterDropdown from "@/components/FilterDropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Booking } from "@/types/bookings/booking.type";
import { Filter } from "@/types/ui/filter.type";
import { fetchBookings } from "@/utils/bookings/bookings.util";
import { filterBookings } from "@/utils/ui/filter.util";

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

  const loadBookings = async () => {
    setLoading(true);
    const dbData = await fetchBookings();
    setBookings(dbData);
    setLoading(false);
  };

  const filteredBookings = () => {
    return filterBookings({ filter, bookings });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center mx-auto my-auto w-[80%] lg:ml-70 mt-4 h-23s0 border rounded-lg shadow-lg bg-gray-200/50 pb-6">
      <header className="flex p-2 justify-between space-x-3 items-center text-center w-full h-min">
        <FilterDropdown filter={filter} setFilter={setFilter} />
        <BookingsCalendar bookings={filteredBookings()} />
      </header>
    </div>
  );
}
