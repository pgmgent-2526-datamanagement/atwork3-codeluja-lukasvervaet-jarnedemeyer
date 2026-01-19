import { ParsedBooking } from "./bookingParser";

export interface TransformedBooking {
  externalId: string;
  venue: string | null;
  dayOfWeek: string | null;
  startTime: Date;
  endTime: Date;
  bookingDate: Date;
  playersCount: number;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  status: string | null;
  packageName: string;
  eposFamily: string | null;
  bookingDescription: string | null;
  notes: string | null;
}

function parseDateTime(dateString: string, timeString: string): Date {
  try {
    const [day, month, year] = dateString.split("/");
    const dateOnly = `${year}-${month}-${day}`;

    // Handle empty time strings
    if (!timeString || timeString.trim() === "") {
      return new Date(`${dateOnly}T10:00:00Z`);
    }
    const [hours, minutes] = timeString.split(":");
    return new Date(`${dateOnly}T${hours}:${minutes}:00Z`);
  } catch {
    return new Date(0); // Fallback to epoch if parsing fails
  }
}

function extractPackageFromDescription(description: string): {
  name: string;
  duration: number;
} {
  const desc = description.toLowerCase();

  // Check for VR packages
  if (desc.includes("vr gold") || desc.includes("gold package")) {
    return { name: "Gold", duration: 120 };
  }
  if (desc.includes("vr bronze") || desc.includes("bronze package")) {
    return { name: "Bronze", duration: 45 };
  }
  if (desc.includes("vr silver") || desc.includes("silver package")) {
    return { name: "Silver", duration: 90 };
  }

  // Check for Battle packages
  if (desc.includes("battle gold")) {
    return { name: "Battle Gold", duration: 120 };
  }
  if (desc.includes("battle bronze")) {
    return { name: "Battle Bronze", duration: 45 };
  }
  if (desc.includes("battle silver")) {
    return { name: "Battle Silver", duration: 90 };
  }

  // Check for Team Building
  if (desc.includes("team building - gold")) {
    return { name: "Gold", duration: 120 };
  }
  if (desc.includes("team building - bronze")) {
    return { name: "Bronze", duration: 45 };
  }
  if (desc.includes("team building - silver")) {
    return { name: "Silver", duration: 90 };
  }

  // Check for other package types
  if (desc.includes("kids party")) {
    return { name: "Kids Party", duration: 90 };
  }
  if (desc.includes("meeting")) {
    return { name: "Meeting", duration: 90 };
  }
  if (desc.includes("walk-in")) {
    return { name: "Bronze", duration: 45 };
  }

  // Default to Silver (90 minutes) if no match
  return { name: "Silver", duration: 90 };
}

function calculateEndTime(startTime: Date, durationMinutes: number): Date {
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + durationMinutes);
  return endTime;
}

function detectOvenFood(bookingDescription: string): boolean {
  const ovenFoodKeywords = [
    "pizza",
    "koffiekoeken",
    "bitterballen",
    "croques",
    "wafels",
    "poffertjes",
    "oven",
    "nacho",
  ];

  const description = bookingDescription.toLowerCase();
  return ovenFoodKeywords.some((keyword) => description.includes(keyword));
}

function detectB2B(eposFamily: string, bookingDescription: string): boolean {
  const b2bKeywords = ["b2b", "corporate", "team building", "groep", "meeting"];
  const combined = `${eposFamily} ${bookingDescription}`.toLowerCase();
  return b2bKeywords.some((keyword) => combined.includes(keyword));
}

function calculateHostsRequired(
  quantity: number,
  hasOvenFood: boolean,
): number {
  // Base: 10-12 players = 1 host
  let hosts = Math.ceil(quantity / 12);

  // +1 host for oven-food
  if (hasOvenFood) {
    hosts += 1;
  }

  // +1 host from 15 players
  if (quantity >= 15) {
    hosts += 1;
  }

  // +1 host from 40 players (bar host)
  if (quantity >= 40) {
    hosts += 1;
  }

  // +1 host from 50 players (supervisor)
  if (quantity >= 50) {
    hosts += 1;
  }

  return Math.max(1, hosts); // Minimum 1 host
}

export function transformBooking(
  parsed: ParsedBooking,
): TransformedBooking | null {
  // Filter out non-VR bookings (no time = food/drink orders only)
  if (!parsed.time || parsed.time.trim() === "") {
    return null;
  }

  // Filter out cancelled bookings
  if (parsed.status && parsed.status.toLowerCase() === "cancelled") {
    return null;
  }

  // Filter out only invalid quantities (negative or zero)
  if (parsed.quantity <= 0) {
    return null;
  }

  const startTime = parseDateTime(parsed.date, parsed.time);

  // Extract just the date for bookingDate (set time to midnight)
  const bookingDate = parseDateTime(parsed.date, "00:00");

  // Extract package info from booking description
  const packageInfo = extractPackageFromDescription(parsed.bookingDescription);
  const endTime = calculateEndTime(startTime, packageInfo.duration);

  const hasOvenFood = detectOvenFood(parsed.bookingDescription);
  const isB2B = detectB2B(parsed.eposFamily, parsed.bookingDescription);

  // Generate external ID from Date, Quantity, Epos Family, and Time
  const externalId = `${parsed.date}_${parsed.quantity}_${parsed.eposFamily}_${parsed.time}`;

  console.log("Generated externalId:", externalId);

  return {
    externalId,
    venue: parsed.venue || null,
    dayOfWeek: parsed.dayOfWeek || null,
    startTime,
    endTime,
    bookingDate,
    playersCount: parsed.quantity,
    hostsRequired: calculateHostsRequired(parsed.quantity, hasOvenFood),
    food_required: hasOvenFood,
    is_b2b: isB2B,
    status: parsed.status || null,
    packageName: packageInfo.name,
    eposFamily: parsed.eposFamily || null,
    bookingDescription: parsed.bookingDescription || null,
    notes: `[${parsed.eposFamily}] ${parsed.bookingDescription}`,
  };
}

export function transformBookings(
  parsedBookings: ParsedBooking[],
): TransformedBooking[] {
  return parsedBookings
    .map((booking) => transformBooking(booking))
    .filter((booking): booking is TransformedBooking => booking !== null);
}
