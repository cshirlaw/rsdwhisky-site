import { SITE } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

export default function EdinburghHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white">
      <div className="absolute inset-0">
        <Image
          src="/images/edinburgh-skyline.svg"
          alt="Edinburgh skyline"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="relative z-10 px-6 py-24 md:px-10 md:py-28 text-white">
        <p className="text-xs tracking-wider uppercase/8 opacity-90">{SITE.brand.cityTag}</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold">We are Whisky Specialists</h1>
        <p className="mt-4 max-w-2xl text-sm md:text-base opacity-95">
          Advisory, sourcing of aged Scotch in cask, and prestige bottlings for discerning clients worldwide.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/our-story" className="rounded-md bg-white/90 text-slate-900 px-4 py-2 hover:bg-white">
            Our Story
          </Link>
          <Link href="/the-quality" className="rounded-md border border-white/70 px-4 py-2 hover:bg-white/10">
            The Quality
          </Link>
        </div>
      </div>
    </section>
  );
}
