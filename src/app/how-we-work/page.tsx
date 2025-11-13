import PageShell from "@/components/PageShell";

export default function HowWeWorkPage() {
  return (
    <PageShell
      title="How We Work"
      intro="Our approach is simple. We keep overheads low, work with experienced people in the independent Scotch sector, and put most of the cost into the liquid in the bottle or can."
    >
      <section>
        <h2 className="mb-1 text-lg font-semibold">Independent expertise</h2>
        <p>
          We work with highly experienced people in the independent Scotch
          sector who select casks for blending and understand how to build
          whisky with the right character and consistency. Consistency is what
          supports a brand, and brands are what sustain the Scotch whisky
          business.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">
          Bottling, canning and production
        </h2>
        <p>
          We work with small, medium and large Scottish bottlers and canning
          specialists. This gives us flexibility, competitive pricing and
          reliable production. It allows us to make different brands and handle
          a wide range of volumes, from prestige one-off bottlings through to
          full container-load RTD runs.
        </p>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold">Markets we serve</h2>
        <p>
          Our main focus is on emerging markets, though we can supply mature
          ones too. In many growing markets, a rising middle class values the
          appearance of discernment and wants to show that they can afford an
          imported spirit while still buying local products. Scotch offers trust,
          heritage and authenticity. We generally work directly with retailers
          or major importers and create exclusive brands for each geographical
          market.
        </p>
      </section>
    </PageShell>
  );
}
