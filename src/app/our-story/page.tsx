import Image from 'next/image';
import { SITE } from '@/config/site';

export const metadata = { title: 'Our Story — RSD Whisky' };

export default function OurStory() {
  return (
    <section className="prose prose-slate max-w-none">
      <h1>Our Story</h1>

      {/* Hero image with text overlay */}
      <div className="not-prose relative rounded-2xl border overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[480px]">
        <Image
          src="/images/dean-village1.jpg"
          alt="Dean Village, Edinburgh — home of Scotch whisky heritage"
          fill
          className="object-cover"
          priority
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
        {/* Overlay text */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
          <p className="max-w-3xl text-white text-base sm:text-lg md:text-xl leading-relaxed drop-shadow">
            RSD is based in Edinburgh — the capital of Scotland and the home of Scotch Whisky — founded by Scotch whisky
            professionals to provide a personalised service to discerning customers worldwide.
          </p>
        </div>
      </div>

      {/* Body copy (kept concise now that the headline sentence is on the image) */}
      <p className="mt-6">
        We source aged Scotch from our own stocks and from trusted industry leaders, and we manage prestige bottlings
        for clients seeking the highest standards.
      </p>
    </section>
  );
}
