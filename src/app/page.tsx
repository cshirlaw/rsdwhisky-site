import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-[70vh] overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      {/* Full-page background for the home section */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url(/images/calton-hill-1.jpeg)", // IMPORTANT: .jpeg
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gentle dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        {/* Top heading and intro */}
        <header className="mt-8 space-y-3 text-white sm:mt-10">
          <p className="text-sm font-medium text-amber-100">Home</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            RSD Whisky
          </h1>
          <p className="max-w-2xl text-base text-amber-50/90">
            A Scottish-owned, independent whisky business based in Edinburgh,
            working with Scotland&apos;s independent network to supply honest
            Scotch and Irish whiskey for modern retail.
          </p>

          {/* Section buttons */}
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/our-whisky"
              className="inline-flex items-center justify-center rounded-full border border-amber-500 bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow-sm"
            >
              Our whisky
            </Link>
            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/70 bg-black/40 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur"
            >
              Brands
            </Link>
            <Link
              href="/rtd"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/70 bg-black/40 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur"
            >
              RTD drinks
            </Link>
            <Link
              href="/whisky-knowledge"
              className="inline-flex items-center justify-center rounded-full border border-amber-200/70 bg-black/40 px-4 py-2 text-sm font-medium text-amber-50 backdrop-blur"
            >
              Whisky knowledge
            </Link>
          </div>
        </header>

        {/* What we do – lighter, more transparent panel */}
        <section className="mb-12 rounded-3xl bg-neutral-50/80 p-5 text-neutral-900 shadow-lg ring-1 ring-neutral-200/70 backdrop-blur-md sm:p-6">
          <h2 className="text-xl font-semibold text-neutral-900">What we do</h2>
          <p className="mt-2 max-w-3xl text-base text-neutral-800">
            We work in the independent Scotch whisky trade, alongside the
            brokers, bottlers, blenders and whisky experts who keep the industry
            moving. Our work is to bring good whisky to retailers, importers and
            private clients under clear, well presented brands.
          </p>
          <ul className="mt-3 ml-5 list-disc space-y-1 text-base text-neutral-900">
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