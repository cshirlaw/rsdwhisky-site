import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Top heading */}
        <header className="space-y-2">
          <p className="text-sm font-medium text-neutral-600">Home</p>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            RSD Whisky
          </h1>
          <p className="max-w-2xl text-base text-neutral-700">
            A Scottish-owned, independent whisky business based in Edinburgh,
            working with Scotland&apos;s independent network to supply honest
            Scotch and Irish whiskey for modern retail.
          </p>
        </header>

        {/* Hero card with placeholder block and section buttons */}
        <section className="rounded-3xl bg-neutral-50 p-4 shadow-sm ring-1 ring-neutral-200 sm:p-6">
          <div
            className="h-56 w-full rounded-2xl bg-neutral-200/70 sm:h-72"
            aria-hidden="true"
          />

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/our-whisky"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
            >
              Our whisky
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              Brands
            </Link>
            <Link
              href="/rtd"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              RTD drinks
            </Link>
            <Link
              href="/whisky-knowledge"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
            >
              Whisky knowledge
            </Link>
          </div>
        </section>

        {/* What we do */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-neutral-900">What we do</h2>
          <p className="max-w-3xl text-base text-neutral-700">
            We work in the independent Scotch whisky trade, alongside the
            brokers, bottlers, blenders and whisky experts who keep the industry
            moving. Our work is to bring good whisky to retailers, importers and
            private clients under clear, well presented brands.
          </p>
          <ul className="ml-5 list-disc space-y-1 text-base text-neutral-800">
            <li>Scotch whisky in bottle and in bulk for export markets.</li>
            <li>Irish whiskey in bottle and in bulk for export markets.</li>
            <li>Exclusive brands for retailers and private clients.</li>
            <li>Ready-to-drink spirit mixes in cans for modern retail.</li>
            <li>Prestige bottlings and special single-cask projects.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
