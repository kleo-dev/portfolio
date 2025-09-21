"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-4 flex">
      <div className="mx-auto flex">
        <div className="space-x-4 text-white block font-bold">
          <Link
            href="/"
            className={
              "hover:text-red transition-colors duration-300" +
              (pathname === "/" ? " text-red" : "")
            }
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={
              "hover:text-red transition-colors duration-300" +
              (pathname === "/pricing" ? " text-red" : "")
            }
          >
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
}
