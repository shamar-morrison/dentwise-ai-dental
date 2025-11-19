"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { CalendarIcon, CrownIcon, HomeIcon, MicIcon, UserStar } from "lucide-react";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


import { useAdmin } from "./providers/AdminProvider";

function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  const { isAdmin } = useAdmin();

  const links: Array<{ href: string; label: string, icon: React.ReactNode, show?: boolean }> = [
  { href: "/dashboard", label: "Dashboard", icon: <HomeIcon className="w-4 h-4"/> },
  { href: "/appointments", label: "Appointments", icon: <CalendarIcon className="w-4 h-4"/> },
  { href: "/voice", label: "Voice", icon: <MicIcon className="w-4 h-4"/> },
  { href: "/pro", label: "Pro", icon: <CrownIcon className="w-4 h-4"/> },
  { href: "/admin", label: "Admin", icon: <UserStar className="w-4 h-4"/>, show: isAdmin },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* LOGO */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/logo.png" alt="DentWise Logo" width={32} height={32} className="w-11" />
          </Link>

          <div className="flex items-center gap-6">
            {links.map((link) => {
              if (link.show ?? true) {
                return (
                <Link
                key={link.href}
                href={link.href as Route}
                className={`flex items-center gap-2 transition-colors ${
                  pathname === link.href ? "text-foreground hover:text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.icon}
                <span className="hidden md:inline">{link.label}</span>
              </Link>
              )}
            })}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-medium text-foreground">
                {user?.firstName} {user?.lastName}
              </span>
              <span className="text-xs text-muted-foreground">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            </div>

            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
