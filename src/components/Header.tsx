'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-whisky", label: "Our Whisky" },
  { href: "/brands", label: "Our Brands" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/whisky-knowledge", label: "Whisky Knowledge" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          <span className="mr-2 rounded-full border border-amber-600 px-2 py-0.5 text-xs">
            RSD
          </span>
          RSD Whisky
        </Link>
        <nav className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-3 py-1 transition",
                pathname === item.href
                  ? "border border-amber-700 text-amber-800"
                  : "text-neutral-700 hover:bg-neutral-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
