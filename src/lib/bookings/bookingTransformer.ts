import { ParsedBooking } from "./bookingParser";

export interface TransformedBooking {
  venue: string | null;
  dayOfWeek: string | null;
  startTime: Date;
  endTime: Date;
  playersCount: number;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  status: string | null;
  eposFamily: string | null;
  bookingDescription: string | null;
  notes: string | null;
}

export interface Package {
  name: string;
  durationMinutes: number;
}

const PACKAGES: Record<string, Package> = {
  bronze: { name: "Bronze", durationMinutes: 45 },
  silver: { name: "Silver", durationMinutes: 90 },
  gold: { name: "Gold", durationMinutes: 120 },
  kids_party: { name: "Kids Party", durationMinutes: 90 },
  battle_bronze: { name: "Battle Bronze", durationMinutes: 45 },
  battle_silver: { name: "Battle Silver", durationMinutes: 90 },
  battle_gold: { name: "Battle Gold", durationMinutes: 120 },
  meeting: { name: "Meeting", durationMinutes: 90 },
  vr_experiences: { name: "VR Experiences", durationMinutes: 90 },
  vr_battle: { name: "VR Battle", durationMinutes: 90 },
};

function parseDateTime(dateString: string, timeString: string): Date {
  try {
    const [day, month, year] = dateString.split("/");
    const dateOnly = `${year}-${month}-${day}`;

    // Handle empty time strings
    if (!timeString || timeString.trim() === "") {
      return new Date(`${dateOnly}T10:00:00`);
    }
    const [hours, minutes] = timeString.split(":");
    return new Date(`${dateOnly}T${hours}:${minutes}:00`);
  } catch {
    return new Date(0); // Fallback to epoch if parsing fails
  }
}

function getPackageDuration(eposFamily: string): number {
  const packageKey = eposFamily.toLowerCase().replace(/\s+/g, "_");
  const pkg = PACKAGES[packageKey];
  return pkg ? pkg.durationMinutes : 90; // Default to 90 minutes if not found
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
  hasOvenFood: boolean
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
  parsed: ParsedBooking
): TransformedBooking | null {
  // Filter out only invalid quantities (negative or zero)
  if (parsed.quantity <= 0) {
    return null;
  }

  const startTime = parseDateTime(parsed.date, parsed.time);
  const packageDuration = getPackageDuration(parsed.eposFamily);
  const endTime = calculateEndTime(startTime, packageDuration);

  const hasOvenFood = detectOvenFood(parsed.bookingDescription);
  const isB2B = detectB2B(parsed.eposFamily, parsed.bookingDescription);

  return {
    venue: parsed.venue || null,
    dayOfWeek: parsed.dayOfWeek || null,
    startTime,
    endTime,
    playersCount: parsed.quantity,
    hostsRequired: calculateHostsRequired(parsed.quantity, hasOvenFood),
    food_required: hasOvenFood,
    is_b2b: isB2B,
    status: parsed.status || null,
    eposFamily: parsed.eposFamily || null,
    bookingDescription: parsed.bookingDescription || null,
    notes: `[${parsed.eposFamily}] ${parsed.bookingDescription}`,
  };
}

export function transformBookings(
  parsedBookings: ParsedBooking[]
): TransformedBooking[] {
  return parsedBookings
    .map((booking) => transformBooking(booking))
    .filter((booking): booking is TransformedBooking => booking !== null);
}
