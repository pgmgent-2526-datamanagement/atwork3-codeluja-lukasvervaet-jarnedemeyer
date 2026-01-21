"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNavItems } from "@/components/NavItems";

export default function BottomNav() {
  const pathname = usePathname();

  const navLinks = getNavItems(null).flatMap((section) => section.links);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center h-16 shadow-lg lg:hidden">
      {navLinks.map(({ name, href, icon: Icon, function: onClick }) => {
        const active = pathname === href;
        return onClick ? (
          <button
            key={name}
            onClick={onClick}
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
