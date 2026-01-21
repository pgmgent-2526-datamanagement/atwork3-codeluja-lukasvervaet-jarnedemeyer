import { signOutUser } from "@/utils/auth.util";
import { Home, Calendar, Users, Smartphone, Sheet } from "lucide-react";
import { NavLink } from "@/types/nav.type";

export const getNavItems = (userRole: number | null) => [
  {
    title: "Navigatie",
    links: [
      { name: "Home", href: "/", icon: Home },
      { name: "Boekingen", href: "/bookings", icon: Calendar },
      ...(userRole === 1
        ? [
            { name: "Hosts", href: "/hosts", icon: Users },
            { name: "Code", href: "/code", icon: Sheet },
          ]
        : []),
    ] as NavLink[],
  },
  {
    title: "Authenticatie",
    links: [
      {
        name: "Uitloggen",
        href: "#",
        icon: Smartphone,
        function: signOutUser,
      },
    ] as (NavLink & { function?: () => Promise<void> })[],
  },
];
