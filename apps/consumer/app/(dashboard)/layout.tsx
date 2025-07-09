import Link from "next/link";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const links: LinkData[] = [
    { href: "/home", label: "Home" },
    { href: "/market", label: "Market" },
    { href: "/invest", label: "Invest" },
    { href: "/account", label: "Account" },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
        <div className="navbar-end"></div>
      </nav>
      <main className="grow z-0">{children}</main>
    </div>
  );
}

type LinkData = {
  href: string;
  label: string;
};