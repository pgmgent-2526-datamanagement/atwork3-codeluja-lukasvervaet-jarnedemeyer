import { LucideIcon } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
  function?: () => void;
}

export type { NavLink };