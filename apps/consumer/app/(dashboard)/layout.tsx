"use client";

import { BuildingStorefrontIcon, HomeIcon, StarIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  
  const links: LinkData[] = [
    { href: "/home", label: "Home", icon: <HomeIcon className="size-6" /> },
    { href: "/market", label: "Market", icon: <BuildingStorefrontIcon className="size-6" /> },
    { href: "/invest", label: "Invest", icon: <StarIcon className="size-6" /> },
    { href: "/account", label: "Account", icon: <UserCircleIcon className="size-6" /> },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-100">
        <nav className="navbar shadow-md sticky z-40">
          <div className="navbar-start">
            <button className="btn btn-ghost">Harmony</button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end hidden lg:flex">
            <Link href="/fund" className="btn btn-ghost" role="button">Add Funds</Link>
          </div>
        </nav>
        <main className="grow pb-16 lg:pb-0 z-0">{children}</main>
      </div>
      <div className="dock lg:hidden">
        {links.map(({ href, label, icon }) => (
          <Link key={href} href={href} role="button" className={pathname.includes(href) ? "dock-active" : undefined}>
            {icon}
            <span className="dock-label">{label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

type LinkData = {
  href: string;
  label: string;
  icon: ReactNode;
};