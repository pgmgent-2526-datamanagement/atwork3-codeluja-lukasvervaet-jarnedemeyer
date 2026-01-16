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

export type { Host };