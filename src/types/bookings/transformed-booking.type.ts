interface TransformedBooking {
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

export type { TransformedBooking };
