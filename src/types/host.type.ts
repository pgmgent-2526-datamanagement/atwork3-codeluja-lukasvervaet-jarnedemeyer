interface Host {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  label: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

enum Status {
  Medewerker = "MEDEWERKER",
  Student = "STUDENT",
}

export type { Host, Status };