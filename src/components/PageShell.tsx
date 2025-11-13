import { ReactNode } from "react";

export default function PageShell({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <main className="bg-neutral-50">
      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <h1 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h1>
        {intro && (
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-neutral-800">
            {intro}
          </p>
        )}
        <div className="space-y-5 text-sm leading-relaxed text-neutral-800">
          {children}
        </div>
      </section>
    </main>
  );
}
