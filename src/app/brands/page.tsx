import PageShell from "@/components/PageShell";
import Link from "next/link";

const brands = [
  {
    name: "Errol Wings",
    type: "Scotch whisky brand",
    note: "Single malt and blended Scotch linked to the historic airfield at Errol.",
    href: "https://errol-wings-site.vercel.app",
  },
  {
    name: "Stuart Douglas",
    type: "Scotch whisky brand",
    note: "Heritage Scotch whisky label with a focus on honest, well-made blends.",
    href: "https://stuart-douglas-site.vercel.app",
  },
  {
    name: "Castlecraig",
    type: "Scotch whisky project",
    note: "Planned Scotch whisky range for export markets. Details available on request.",
    href: "#",
  },
  {
    name: "Ravendale",
    type: "Scotch whisky project",
    note: "Developing brand concept for selected markets, with flexible liquid options.",
    href: "#",
  },
  {
    name: "RTD ranges",
    type: "Canned RTD drinks",
    note: "Own-label and exclusive branded ready-to-drink spirit mixes in cans.",
    href: "/our-whisky",
  },
];

export default function BrandsPage() {
  return (
    <PageShell
      title="Our Brands and Projects"
      intro="RSD Whisky develops, manages and supports a number of Scotch whisky brands and canned RTD projects for different markets."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 text-sm shadow-sm"
          >
            <div>
              <h2 className="text-base font-semibold">{brand.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                {brand.type}
              </p>
              <p className="mt-2 text-neutral-800">{brand.note}</p>
            </div>
            <div className="mt-3 text-xs font-medium text-amber-800">
              {brand.href === "#" ? (
                <span>Details on request →</span>
              ) : (
                <Link href={brand.href}>Visit site →</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
