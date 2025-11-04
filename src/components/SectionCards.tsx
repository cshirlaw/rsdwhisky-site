import Link from 'next/link';

export default function SectionCards() {
  const cards = [
    {
      title: 'Our Story',
      text: 'Founded by Scotch whisky professionals in Edinburgh, we source from our own stocks and industry leaders.',
      href: '/our-story',
    },
    {
      title: 'The Quality',
      text: 'Taste-tested against international peers, guided by senior advisors and acclaimed connoisseurs.',
      href: '/the-quality',
    },
    {
      title: 'Our Brands',
      text: 'From established labels to prestige single casks — including links to brand sites.',
      href: '/our-brands',
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {cards.map((c) => (
        <Link key={c.title} href={c.href} className="block rounded-xl border p-5 hover:shadow-sm transition">
          <h3 className="font-semibold">{c.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{c.text}</p>
          <span className="inline-block mt-3 text-sm underline">View</span>
        </Link>
      ))}
    </div>
  );
}
