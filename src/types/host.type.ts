interface Host {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  label: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  bookingHosts?: Array<{
    booking: {
      id: number;
      startTime: string;
      endTime: string;
      bookingDate: string;
    };
  }>;
}

enum Status {
  Medewerker = "MEDEWERKER",
  Student = "STUDENT",
}

export type { Host, Status };