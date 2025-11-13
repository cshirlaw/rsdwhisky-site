import PageShell from "@/components/PageShell";

export default function OurWhiskyPage() {
  return (
    <PageShell
      title="Our Whisky and RTD Drinks"
      intro="We work with Scotch whisky in cask, bottled brands for export, and canned ready-to-drink spirit mixes for modern retail."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Blended Scotch whisky</h2>
        <p>
          Our blended Scotch whiskies are built around character and
          consistency. We work with experienced blenders and nosers in the
          independent sector who understand how to select casks and build a
          flavour profile that can be repeated from batch to batch. Most of the
          cost goes into the liquid in the bottle, not into heavy packaging.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Single malt projects</h2>
        <p>
          We support single malt projects for selected markets, drawing on
          relationships with distilleries and cask owners. These can range from
          simple age-stated malts through to more specialised cask selections
          for private clients or local distributors.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Private label and exclusive brands</h2>
        <p>
          For many retailers the most effective route is an exclusive brand for
          their own shelves. We work with bottle shapes that run efficiently on
          fast bottling lines, but give close attention to label design and
          paper quality so that the product looks and feels premium in the hand.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Canned RTD drinks</h2>
        <p>
          Alongside bottled Scotch, we work on canned ready-to-drink spirit
          mixes. These are typically whisky-and-mixer or other spirit-based
          drinks in 250 ml or 330 ml cans, aimed at convenience, modern retail
          shelves and e-commerce. Recipe development, liquid sourcing, can
          design and production are handled with the same care as our whisky
          brands, with sensible pack formats and clear pricing for volume
          business.
        </p>
      </section>
    </PageShell>
  );
}
