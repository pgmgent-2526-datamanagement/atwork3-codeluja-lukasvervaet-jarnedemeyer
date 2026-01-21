"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { getNavItems } from "@/components/navigation/NavItems";
import NavSkeletonLoader from "@/components/loaders/NavSkeletonLoader";
import { getUser } from "@/utils/user.util";

export default function Nav() {
  const [userRole, setUserRole] = useState<number | null>(null);
  const logo = "/logo-thepark.svg";
  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchAndSetUserRole = async () => {
      if (!session) {
        setUserRole(null);
        return;
      }

      const user = await getUser();
      setUserRole(user?.role_id ?? null);
    };

    fetchAndSetUserRole();
  }, [session]);

  // Check if we're on an auth page (login, logout, etc.)
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/login/");

  // while loading session, show loading skeleton (but not on auth pages)
  if (status === "loading" && !isAuthPage) {
    return <NavSkeletonLoader />;
  }

  // hide nav if not authenticated
  if (!session) return null;

  const navItems = getNavItems(userRole);

  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-64 h-screen border-r border-gray-100 bg-white shadow-md z-50">
      <Image
        width={100}
        height={100}
        src={logo}
        alt="Het Park Logo"
        className="flex justify-center items-center m-auto mt-2"
      />
      <div className="sticky top-6 px-5 py-6 space-y-8 flex flex-col justify-between max-h-[90%] h-full">
        {navItems.map((section) => (
          <div key={section.title}>
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {section.title}
            </h2>

            <nav className="space-y-1">
              {section.links.map(
                ({ name, href, icon: Icon, function: onClick }) => {
                  const active = pathname === href;

                  return (
                    <Link
                      onClick={onClick}
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
                },
              )}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
