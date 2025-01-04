"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="py-4 flex">
      <div className="mx-auto flex">
        <div className="space-x-4 text-white block font-bold">
          <a
            href="/"
            className={
              "hover:text-red transition-colors duration-300" +
              (pathname === "/" ? " text-red" : "")
            }
          >
            Home
          </a>
          <a
            href="/pricing"
            className={
              "hover:text-red transition-colors duration-300" +
              (pathname === "/pricing" ? " text-red" : "")
            }
          >
            Pricing
          </a>
          <a
            href="/blog"
            className={
              "hover:text-red transition-colors duration-300" +
              (pathname === "/blog" ? " text-red" : "")
            }
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}
