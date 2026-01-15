import { Booking } from "@/types/booking.type";
import { Filter } from "@/types/filter.type";

export const filterBookings = ({
  filter,
  bookings,
}: {
  filter: Filter;
  bookings: Booking[];
}) => {
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
