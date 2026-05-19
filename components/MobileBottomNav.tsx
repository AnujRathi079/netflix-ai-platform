"use client";

import Link from "next/link";

import {
  Home,
  Search,
  Bot,
  User,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function MobileBottomNav() {

  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      icon: Home,
      href: "/",
    },
    {
      name: "Search",
      icon: Search,
      href: "/search",
    },
    {
      name: "AI",
      icon: Bot,
      href: "/ai",
    },
    {
      name: "Profile",
      icon: User,
      href: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/95 border-t border-zinc-800 z-50">

      <div className="flex justify-around py-3">

        {navItems.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center text-xs transition ${
                active
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >

              <Icon
                size={22}
                className={
                  active
                    ? "scale-110"
                    : ""
                }
              />

              <span className="mt-1">
                {item.name}
              </span>

            </Link>
          );
        })}

      </div>

    </div>
  );
}