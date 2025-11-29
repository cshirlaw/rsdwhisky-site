import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  return (
    <PageShell
      title="RSD Whisky"
      intro="A Scottish-owned, independent whisky business based in Edinburgh, working with Scotland’s independent network to supply honest Scotch and Irish whiskey for modern retail."
    >
      {/* Home hero */}
      <div className="mb-6 overflow-hidden rounded-2xl">
        <Image
          src="/images/home-hero.jpg"
          alt="Edinburgh, the home of Scotch whisky."
          width={1600}
          height={600}
          className="h-48 w-full object-cover sm:h-64 md:h-72"
        />
      </div>

      {/* Primary calls to action */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/our-whisky"
            className="rounded-full border border-neutral-800 px-4 py-2 text-sm font-medium"
          >
            Our whisky
          </Link>
          <Link
            href="/brands"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
          >
            Brands
          </Link>
          <Link
            href="/rtd"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
          >
            RTD drinks
          </Link>
          <Link
            href="/whisky-knowledge"
            className="rounded-full border border-neutral-300 px-4 py-2 text-sm"
          >
            Whisky knowledge
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">What we do</h2>
        <p>
          We work in the independent Scotch whisky trade, alongside the brokers,
          bottlers, blenders and whisky experts who keep the industry moving. Our
          work is to bring good whisky to retailers, importers and private
          clients under clear, well presented brands.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-neutral-800">
          <li>Scotch whisky in bottle and in bulk for export markets.</li>
          <li>Exclusive Scotch brands for retailers and distributors.</li>
          <li>Irish whiskey and canned ready-to-drink spirit mixes.</li>
          <li>Prestige bottlings and single cask projects for private clients.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">How we work</h2>
        <p>
          We are Scottish owned and independent. We work with experienced people
          across the industry and keep our company lean, so that money is spent
          where it should be spent: in the bottle, the label and the quality of
          the whisky itself, not on overheads and unnecessary waste.
        </p>
        <p className="mt-2">
          Most of our work is done quietly, through long-standing relationships
          with independent experts and bottlers who know how to keep whisky
          character and consistency steady over time.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="mb-1 text-lg font-semibold">Who we work with</h2>
        <p>
          Our customers are usually retailers, importers and private clients who
          want good whisky at fair prices, without unnecessary layers in the
          middle. We build brands for specific markets and keep supply and
          pricing as predictable as possible.
        </p>
        <p className="mt-2">
          If you would like to discuss a project or see what may be possible for
          your market, please get in touch.
        </p>
        <p className="mt-2 text-sm">
          <Link href="/contact" className="underline">
            Contact RSD Whisky
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
