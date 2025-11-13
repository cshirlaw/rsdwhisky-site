import EdinburghHero from '@/components/EdinburghHero';
import SectionCards from '@/components/SectionCards';
import QuoteBlock from '@/components/QuoteBlock';

export default function Home() {
  return (
    <div className="prose prose-slate max-w-none">
      <div className="not-prose"><EdinburghHero /></div>
      <h2 className="mt-10">Only the Best</h2>
      <p>
        International demand for Scotch Whisky and Irish Whiskey continues to grow. We provide a personalised service,
        sourcing aged Scotch from our own stocks and from leading distillers, with exacting quality standards.
      </p>
      <div className="not-prose mt-8"><SectionCards /></div>
      <div className="not-prose mt-10"><QuoteBlock /></div>
    </div>
  );
}
