interface BookingHost {
  booking: {
    id: number;
    venue: string | null;
    bookingDate: string;
    startTime: string;
    endTime: string;
    playersCount: number;
    packageName: string | null;
    bookingDescription: string | null;
    hostsRequired: number;
    food_required: boolean;
    is_b2b: boolean;
    notes: string | null;
    status: string | null;
  };
}

export type { BookingHost };
