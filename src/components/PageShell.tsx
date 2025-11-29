import type { ReactNode } from "react";
import Link from "next/link";

type PageShellProps = {
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function PageShell({ title, intro, children }: PageShellProps) {
  const isHome = title === "RSD Whisky";

  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        {/* Simple breadcrumb / page label */}
        {!isHome && (
          <p className="mb-1 text-xs text-neutral-500">
            <Link
              href="/"
              className="underline-offset-2 hover:underline"
            >
              Home
            </Link>{" "}
            / {title}
          </p>
        )}

        {/* Page heading */}
        <h1 className="text-2xl font-semibold">{title}</h1>

        {/* Intro text, if provided */}
        {intro && (
          <p className="mt-2 text-sm text-neutral-700">
            {intro}
          </p>
        )}

        {/* Page content */}
        <div className="mt-6 space-y-6">
          {children}
        </div>
      </div>
    </main>
  );
}
