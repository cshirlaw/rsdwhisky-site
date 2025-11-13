import PageShell from "@/components/PageShell";

export default function WhiskyKnowledgePage() {
  return (
    <PageShell
      title="Whisky Knowledge"
      intro="Over time this section will grow into a simple, practical reference point for people who buy, drink or sell Scotch whisky."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">What Scotch whisky is</h2>
        <p>
          Scotch whisky is made in Scotland from malted barley and other grains,
          distilled and matured in oak casks for a minimum of three years. The
          main styles are single malt, single grain and blended Scotch whisky.
          Regulations control how Scotch is made, matured and described, to
          protect its reputation worldwide.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">How to enjoy it</h2>
        <p>
          There is no single correct way to drink Scotch. Many people prefer it
          neat, others with a little water to open up the aroma, and some with
          ice or a mixer. Our advice is simple: start with small quantities,
          take time to smell as well as taste, and find the way that suits you
          best.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Tasting notes and comparisons</h2>
        <p>
          We plan to publish tasting notes and comparisons from respected whisky
          writers and industry experts, including people such as Charlie
          MacLean, Dave Broom and Blair Bowman. These will focus on plain,
          practical descriptions rather than marketing language.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Scotland and its distilleries</h2>
        <p>
          Scotland has one of the highest densities of distilleries in the
          world, with more per square mile than any other major whisky-producing
          country. From island distilleries on Islay and Skye to Speyside, the
          Highlands and the Lowlands, this concentration of craft and knowledge
          is a central part of what makes Scotch unique.
        </p>
      </section>
    </PageShell>
  );
}
