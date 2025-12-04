import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-160px)] overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/calton-hill-1.jpg"
          alt="Calton Hill and Edinburgh skyline at dusk"
          fill
          priority
          className="object-cover"
        />
        {/* Gentle darkening so text and card read well */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      {/* Page content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        {/* Top heading */}
        <header className="space-y-2">
          <p className="text-sm font-medium text-neutral-100/90">Home</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            RSD Whisky
          </h1>
          <p className="max-w-2xl text-base text-neutral-100">
            A Scottish-owned, independent whisky business based in Edinburgh,
            working with Scotland&apos;s independent network to supply honest
            Scotch and Irish whiskey for modern retail.
          </p>
        </header>

        {/* Section buttons */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/our-whisky"
            className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-300 px-4 py-2 text-sm font-medium text-black shadow-sm"
          >
            Our whisky
          </Link>
          <Link
            href="/brands"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-black/40 px-4 py-2 text-sm font-medium text-white hover:bg-black/60"
          >
            Brands
          </Link>
          <Link
            href="/rtd"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-black/40 px-4 py-2 text-sm font-medium text-white hover:bg-black/60"
          >
            RTD drinks
          </Link>
          <Link
            href="/whisky-knowledge"
            className="inline-flex items-center justify-center rounded-full border border-white/60 bg-black/40 px-4 py-2 text-sm font-medium text-white hover:bg-black/60"
          >
            Whisky knowledge
          </Link>
        </div>

        {/* What we do card – now lighter / more transparent */}
        <section className="relative mt-2 rounded-3xl bg-white/70 p-6 text-neutral-900 shadow-xl ring-1 ring-black/10 backdrop-blur-md sm:p-8">
          <h2 className="text-xl font-semibold text-neutral-900">What we do</h2>
          <p className="mt-3 max-w-3xl text-base text-neutral-800">
            We work in the independent Scotch whisky trade, alongside the
            brokers, bottlers, blenders and whisky experts who keep the industry
            moving. Our work is to bring good whisky to retailers, importers and
            private clients under clear, well presented brands.
          </p>
          <ul className="mt-4 ml-5 list-disc space-y-1 text-base text-neutral-900">
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