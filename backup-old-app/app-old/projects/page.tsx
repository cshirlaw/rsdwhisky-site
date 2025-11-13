export const metadata = {
  title: "Projects | RSD Whisky",
};

const projects = [
  {
    title: "Errol Wings — 12 Year Old",
    summary:
      "Premium blended Scotch for export markets. Oversaw packaging, bottling and QA with partners in Glasgow.",
    facts: ["12YO blend", "0.7L Newton bottle", "Cases: 6x0.7L"],
  },
  {
    title: "Stuart Douglas — Single Malt",
    summary:
      "Prestige single cask bottlings with bespoke label design and premium closures; private client programme.",
    facts: ["Single cask selections", "Custom branding", "Gift-ready presentation"],
  },
  {
    title: "Irish Cask Advisory",
    summary:
      "Independent cask evaluation and sherry-finishing strategy with cooperage guidance and sampling regime.",
    facts: ["Finish windows: 6–12 months", "Cooperage provenance checks", "Periodic sensory QA"],
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-2 text-slate-600">
        Selected work across advisory, bottling and export brand building.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-slate-700">{p.summary}</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              {p.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
