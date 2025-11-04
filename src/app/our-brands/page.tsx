import { SITE } from '@/config/site';

export const metadata = { title: 'Our Brands — RSD Whisky' };

export default function OurBrands() {
  return (
    <section className="prose prose-slate max-w-none">
      <h1>Our Brands</h1>
      <p>A selection of our brand work. We also support prestige single cask bottlings.</p>
      <div className="not-prose grid sm:grid-cols-2 gap-4 mt-6">
        <a href={SITE.links.errolWings} target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:shadow-sm">
          <h3 className="font-semibold">Errol Wings</h3>
          <p className="text-sm text-gray-600 mt-1">Single malt bottlings and brand home.</p>
          <span className="inline-block mt-3 text-sm underline">Visit site</span>
        </a>
        <a href={SITE.links.stuartDouglas} target="_blank" rel="noopener noreferrer" className="rounded-xl border p-5 hover:shadow-sm">
          <h3 className="font-semibold">Stuart Douglas</h3>
          <p className="text-sm text-gray-600 mt-1">Heritage Scotch whisky label.</p>
          <span className="inline-block mt-3 text-sm underline">Visit site</span>
        </a>
      </div>
    </section>
  );
}
