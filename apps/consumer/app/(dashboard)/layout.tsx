"use client";

import BuildingStorefront from "@/components/icons/BuildingStorefront";
import Home from "@/components/icons/Home";
import Star from "@/components/icons/Star";
import UserCircle from "@/components/icons/UserCircle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  
  const links: LinkData[] = [
    { href: "/home", label: "Home", icon: <Home /> },
    { href: "/market", label: "Market", icon: <BuildingStorefront /> },
    { href: "/invest", label: "Invest", icon: <Star /> },
    { href: "/account", label: "Account", icon: <UserCircle /> },
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
            <Link href="/donate" className="btn btn-ghost" role="button">Donate</Link>
          </div>
        </nav>
        <main className="grow pb-16 lg:pb-0 z-0">{children}</main>
      </div>
      <div className="dock lg:hidden">
        {links.map(({ href, label, icon }) => (
          <Link key={href} href={href} role="button" className={pathname.endsWith(href) ? "dock-active" : undefined}>
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