import { SITE } from '@/config/site';

export default function QuoteBlock() {
  const q = SITE.quotes[0];
  if (!q) return null;
  return (
    <figure className="rounded-xl border bg-white p-6">
      <blockquote className="text-lg leading-relaxed">“{q.text}”</blockquote>
      <figcaption className="mt-3 text-sm text-gray-600">
        <span className="font-medium">{q.author}</span> — {q.role}, on {q.on}.
      </figcaption>
    </figure>
  );
}
