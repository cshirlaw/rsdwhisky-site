'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname() || "/";
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          RSD Whisky
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          {NAV.map((it) => {
            const active = pathname === it.href || pathname.startsWith(it.href + "/");
            return (
              <Link
                key={it.href}
                href={it.href}
                className={[
                  "rounded-md px-3 py-1.5 transition-colors",
                  active ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                ].join(" ")}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
