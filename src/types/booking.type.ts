interface Booking {
  id: number;
  playersCount: number;
  startTime: string;
  endTime: string;
  bookingDate: string;
  bookingDescription: string | null;
  hostsRequired: number;
  food_required: boolean;
  is_b2b: boolean;
  packageName: string | null;
  notes: string | null;
  status: string | null;
  venue?: string | null;
}
export type { Booking };
