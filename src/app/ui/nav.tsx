"use client";

import Link from "next/link";
import { Home, Calendar, Users, Smartphone, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
  function?: () => void;
}

export default function Nav() {
  const [userRole, setUserRole] = useState<number | null>(null);
  const logo = "/logo-thepark.svg";
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const fetchUser = async () => {
    try {
      const res = await fetch("/api/auth/user");
      if (!res.ok) {
        console.error("Failed to fetch user, status:", res.status);
        return null;
      }
      const data = await res.json();
      const user = data?.user ?? null;
      return user;
    } catch (err) {
      console.error("Error fetching user:", err);
      return null;
    }
  };

  useEffect(() => {
    if (!session) {
      // schedule state update asynchronously to avoid synchronous setState in effect
      Promise.resolve().then(() => setUserRole(null));
      return;
    }

    let mounted = true;
    (async () => {
      const user = await fetchUser();
      if (!mounted) return;
      setUserRole(user?.role_id ?? null);
    })();

    return () => {
      mounted = false;
    };
  }, [session]);

  // Check if we're on an auth page (login, logout, etc.)
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/logout" ||
    pathname.startsWith("/login/");

  // while loading session, show loading skeleton (but not on auth pages)
  if (status === "loading" && !isAuthPage) {
    return (
      <aside className="w-64 max-h-screen h-screen lg:block border-r border-gray-100 bg-white mr-3 shadow-md z-50 relative">
        <div className="flex justify-center items-center m-auto mt-2 h-25">
          <div className="w-25 h-25 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
        <div className="sticky top-6 px-5 py-6 space-y-8 flex flex-col justify-between max-h-[90%] h-full">
          <div>
            <div className="h-3 bg-gray-200 rounded w-20 mb-3 animate-pulse"></div>
            <nav className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-3 py-2">
                  <div className="w-4.5 h-4.5 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </div>
              ))}
            </nav>
          </div>
          <div>
            <div className="h-3 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
            <nav className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-4.5 h-4.5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>
            </nav>
          </div>
        </div>
      </aside>
    );
  }

  // hide nav if not authenticated
  if (!session) return null;

  const handleLogOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const navItems = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/", icon: Home },
        { name: "Bookings", href: "/bookings", icon: Calendar },
        ...(userRole === 1
          ? [{ name: "Hosts", href: "/hosts", icon: Users }]
          : []),
      ] as NavLink[],
    },
    {
      title: "Authentication",
      links: [
        {
          name: "Logout",
          href: "/logout",
          icon: Smartphone,
          function: handleLogOut,
        },
      ] as NavLink[],
    },
  ];

  return (
    <aside className="w-64 max-h-screen  h-screen lg:block border-r border-gray-100 bg-white mr-3 shadow-md z-50 relative">
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
                }
              )}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
}
