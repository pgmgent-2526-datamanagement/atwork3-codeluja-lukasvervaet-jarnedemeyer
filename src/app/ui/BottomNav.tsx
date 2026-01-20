"use client";

import Link from "next/link";
import { Home, Calendar, Users, Smartphone } from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function BottomNav() {
  const pathname = usePathname();
  const { data: session } = useSession();

  // Hide on auth pages
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/login/");
  if (!session || isAuthPage) return null;

  // You may want to fetch user role here if needed for hosts link
  // For now, always show all links
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Bookings", href: "/bookings", icon: Calendar },
    { name: "Hosts", href: "/hosts", icon: Users },
    { name: "Logout", href: "/logout", icon: Smartphone, logout: true },
  ];

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-lg lg:hidden">
      {navLinks.map(({ name, href, icon: Icon, logout }) => {
        const active = pathname === href;
        return logout ? (
          <button
            key={name}
            onClick={handleLogout}
            className={`flex flex-col items-center justify-center flex-1 h-full focus:outline-none ${
              active ? "text-[#05d8c8]" : "text-gray-500"
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{name}</span>
          </button>
        ) : (
          <Link
            key={name}
            href={href}
            className={`flex flex-col items-center justify-center flex-1 h-full ${
              active ? "text-[#05d8c8]" : "text-gray-500"
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
