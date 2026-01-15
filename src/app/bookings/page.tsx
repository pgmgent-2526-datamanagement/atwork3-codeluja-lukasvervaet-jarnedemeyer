"use client";
// import AddBookingButton from "@/components/AddBookingButton";
import BookingsCalendar from "@/components/BookingsCalendar";
import {
  SkeletonBookingItem,
  SkeletonCalendarContainer,
} from "@/components/Loader";
// import { randomUUID } from "crypto";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

interface Filter {
  type: "all" | "b2b" | "food" | "bronze" | "silver" | "gold";
}

export default function Bookings() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // redirect to login if not authenticated
  if (status !== "loading" && !session) {
    router.push("/login");
    return null;
  }

  const [bookings, setBookings] = useState<Booking[]>([]); // eslint-disable-line
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list"); // eslint-disable-line
  const [loading, setLoading] = useState<boolean>(true); // eslint-disable-line
  const [filter, setFilter] = useState<Filter>({ type: "all" }); // eslint-disable-line

  const fetchBookings = async () => {
    setLoading(true);
    const res = await fetch("/api/bookings/db", { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch bookings", res.status);
      setBookings([]);
      setLoading(false);
      return [];
    }
    const data = await res.json();
    if (Array.isArray(data)) {
      setBookings(data as Booking[]);
      setLoading(false);
      return data as Booking[];
    }
    setBookings([]);
    setLoading(false);
    return [];
  };

  const TodayBookings = (allBookings: Booking[]) => {
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

  const bookingsToday = TodayBookings(bookings);

  const filteredBookings = () => {
    switch (filter.type) {
      case "all":
        return bookings;
        break;
      case "b2b":
        return bookings.filter((b) => b.is_b2b);
        break;
      case "food":
        return bookings.filter((b) => b.food_required);
        break;
      case "bronze":
        return bookings.filter((b) => b.packageName === "Bronze");
        break;
      case "silver":
        return bookings.filter((b) => b.packageName === "Silver");
        break;
      case "gold":
        return bookings.filter((b) => b.packageName === "Gold");
        break;
      default:
        return bookings;
        break;
    }
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
