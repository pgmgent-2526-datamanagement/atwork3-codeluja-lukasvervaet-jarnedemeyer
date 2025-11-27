"use client";

import Link from "next/link";
import { Home, Calendar, Users, Smartphone, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const logo = "/logo-thepark.svg";
  const pathname = usePathname();

  const navItems = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/", icon: Home },
        { name: "Bookings", href: "/bookings", icon: Calendar },
        { name: "Staff", href: "/staff", icon: Users },
      ],
    },
    {
      title: "Authentication",
      links: [
        { name: "Profile", href: "/profile", icon: User },
        { name: "Logout", href: "/logout", icon: Smartphone },
      ],
    },
  ];

  return (
    <aside className="w-64 max-h-screen  h-screen lg:block border-r border-gray-100 bg-white mr-3 shadow-md">
      <Image
        width={100}
        height={100}
        src={logo}
        alt="The Park Logo"
        className="flex justify-center items-center m-auto mt-2"
      />
      <div className="sticky top-6 px-5 py-6 space-y-8 flex flex-col justify-between max-h-[90%] h-full">
        {navItems.map((section) => (
          <div key={section.title}>
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {section.title}
            </h2>

            <nav className="space-y-1">
              {section.links.map(({ name, href, icon: Icon }) => {
                const active = pathname === href;

                return (
                  <Link
                    key={name}
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all
                      ${
                        active
                          ? "bg-[#05d8c8] text-white shadow-sm"
                          : "hover:bg-gray-100 text-gray-700"
                      }
                    `}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
