import Image from 'next/image';
import { SITE } from '@/config/site';

export const metadata = { title: 'Our Story — RSD Whisky' };

export default function OurStory() {
  return (
    <section className="prose prose-slate max-w-none">
      <h1>Our Story</h1>

      <figure className="not-prose rounded-2xl border overflow-hidden">
        <Image
          src="/images/dean-village1.jpg"
          alt="Dean Village, Edinburgh — home of Scotch whisky heritage"
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          priority
        />
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          Dean Village, Edinburgh — {SITE.brand.cityTag}
        </figcaption>
      </figure>

      <p className="mt-6">
        RSD is based in Edinburgh — the capital of Scotland and the home of Scotch Whisky — founded by Scotch whisky
        professionals to provide a personalised service to discerning customers worldwide.
      </p>
      <p>
        We source aged Scotch from our own stocks and from trusted industry leaders, and we manage prestige bottlings
        for clients seeking the highest standards.
      </p>
    </section>
  );
}
