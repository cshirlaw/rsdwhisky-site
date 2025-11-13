import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-neutral-50">
      <section className="mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-10">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-black/80">
          <div className="relative h-72 w-full md:h-96">
            <Image
              src="/images/edinburgh-skyline.jpg"
              alt="Edinburgh skyline"
              fill
              priority
              className="object-cover opacity-70"
            />
            <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-8 text-white md:px-10 md:pb-10">
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-neutral-200">
                Edinburgh · Home of Scotch
              </p>
              <h1 className="mb-3 max-w-xl text-3xl font-semibold md:text-4xl">
                Independent Scotch from Edinburgh.
              </h1>
              <p className="mb-2 max-w-xl text-sm md:text-base">
                RSD Whisky is an independent Scottish whisky business based in
                Edinburgh, the home of Scotch.
              </p>
              <p className="mb-5 max-w-xl text-sm md:text-base">
                We work within Scotland&apos;s network of brokers, blenders,
                bottlers and whisky experts to supply dependable Scotch whisky
                and canned ready-to-drink spirit mixes to retailers and importers.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-neutral-900"
                >
                  Our Story
                </Link>
                <Link
                  href="/our-whisky"
                  className="rounded-full border border-neutral-200 bg-black/40 px-4 py-1.5 text-sm font-medium text-neutral-100"
                >
                  Our Whisky and RTD Drinks
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <HomeCard
            title="Independent and Scottish"
            body="We are based in Edinburgh and work inside Scotland's long-developed independent network of brokers, blenders, bottlers and whisky experts rather than as part of a multinational group."
            href="/about"
          />
          <HomeCard
            title="Whisky, brands and RTD"
            body="We build and supply Scotch whisky brands, bulk Scotch for bottling, and canned ready-to-drink spirit mixes for modern retail shelves and e-commerce."
            href="/our-whisky"
          />
          <HomeCard
            title="How we keep value"
            body="Most of the cost goes into the liquid in the bottle or can. We use reliable Scottish bottlers and sensible packaging so the product looks and feels premium but stays fairly priced."
            href="/how-we-work"
          />
        </div>
      </section>
    </main>
  );
}

function HomeCard(props: { title: string; body: string; href: string }) {
  return (
    <Link
      href={props.href}
      className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <h2 className="mb-2 text-base font-semibold">{props.title}</h2>
        <p className="text-neutral-800">{props.body}</p>
      </div>
      <span className="mt-3 text-xs font-medium text-amber-800">
        Read more →
      </span>
    </Link>
  );
}
