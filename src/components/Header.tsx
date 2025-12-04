"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-whisky", label: "Our Whisky" },
  { href: "/brands", label: "Our Brands" },
  { href: "/rtd", label: "RTD Drinks" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/whisky-knowledge", label: "Whisky Knowledge" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-40 border-b border-amber-800/40 bg-[#E5C98E]/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo / wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#B58230] bg-black/85">
            <Image
              src="/images/RSD_Monogram.jpg"
              alt="RSD Whisky logo"
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <span className="text-sm font-semibold text-neutral-900">
            RSD Whisky
          </span>
        </Link>
      </div>

      {/* Scrollable nav row */}
      <nav
        aria-label="Main"
        className="border-t border-amber-800/40 bg-[#E5C98E]/95"
      >
        <div className="mx-auto max-w-5xl px-2 sm:px-4">
          <ul className="flex gap-2 overflow-x-auto py-2 text-xs sm:gap-3 sm:text-sm">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href} className="flex-shrink-0">
                  <Link
                    href={item.href}
                    className={[
                      "whitespace-nowrap rounded-full border px-3 py-1 transition",
                      isActive
                        ? "border-black bg-black text-[#F7E8C4]"
                        : "border-neutral-900/40 bg-[#F7E8C4] text-neutral-900 hover:border-neutral-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}