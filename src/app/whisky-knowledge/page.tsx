import PageShell from "@/components/PageShell";
import Link from "next/link";

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="mt-4 mb-2 h-40 rounded-2xl bg-neutral-200/70 text-xs text-neutral-600 flex items-center justify-center text-center px-4">
      {label}
    </div>
  );
}

export default function WhiskyKnowledgePage() {
  return (
    <PageShell
      title="Whisky knowledge"
      intro="A plain guide to Scotch whisky — how it is made, what it means, and why it matters."
    >
      {/* On this page */}
      <nav
        aria-label="On this page"
        className="mb-6 rounded-2xl bg-white/70 p-4 text-sm shadow-sm"
      >
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
          On this page
        </h2>
        <ul className="space-y-1">
          <li>
            <a href="#what-scotch-is" className="underline-offset-2 hover:underline">
              What Scotch is
            </a>
          </li>
          <li>
            <a href="#how-scotch-is-made" className="underline-offset-2 hover:underline">
              How Scotch is made
            </a>
          </li>
          <li>
            <a href="#regions" className="underline-offset-2 hover:underline">
              The five Scotch regions
            </a>
          </li>
          <li>
            <a href="#categories" className="underline-offset-2 hover:underline">
              Scotch whisky categories
            </a>
          </li>
          <li>
            <a href="#tasting" className="underline-offset-2 hover:underline">
              Tasting Scotch
            </a>
          </li>
          <li>
            <a href="#glassware" className="underline-offset-2 hover:underline">
              Glassware
            </a>
          </li>
          <li>
            <a href="#references" className="underline-offset-2 hover:underline">
              Useful references
            </a>
          </li>
        </ul>
      </nav>

      {/* What Scotch is */}
      <section id="what-scotch-is">
        <h2 className="mb-2 text-lg font-semibold">What Scotch is</h2>
        <p>
          Scotch whisky holds a protected place in law. It must be made in Scotland,
          from water, cereals and yeast, and matured here in oak casks for at least
          three years. Nothing else is allowed but water and a small amount of
          caramel for colour.
        </p>
        <p className="mt-2">
          Scotch is often spoken of as malt or single malt, but in truth:
          <br />
          <span className="font-semibold">Scotch means blended Scotch.</span>
        </p>
        <p className="mt-2">
          It is the whisky most people drink around the world — a marriage of single
          malt and single grain, designed to be consistent in character and steady in
          quality.
        </p>
        <p className="mt-2">
          Single malts sit alongside this as distinct expressions from individual
          distilleries. They are important in their own right, but blended Scotch
          remains the heart of the industry.
        </p>
        <ImagePlaceholder label="Image placeholder – simple visual explaining that 'Scotch' usually means blended Scotch, with single malt as one part of the wider picture." />
      </section>

      {/* How Scotch is made */}
      <section id="how-scotch-is-made">
        <h2 className="mb-2 mt-8 text-lg font-semibold">How Scotch is made</h2>
        <p>
          The making of Scotch is simple in principle and deep in craft. It begins
          with three things:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>Water – soft, hard, peaty or clear.</li>
          <li>Cereals – malted barley for malt whisky; barley, wheat or maize for grain.</li>
          <li>Yeast – to spark fermentation.</li>
        </ul>

        <h3 className="mt-4 font-semibold">1. Malting</h3>
        <p>
          Barley is steeped, germinated and kilned. Peat may be used for smoke,
          which can carry through into the finished whisky.
        </p>

        <h3 className="mt-3 font-semibold">2. Mashing</h3>
        <p>
          The malt is ground and mixed with hot water to draw out the sugars and make
          a sweet liquid known as wort.
        </p>

        <h3 className="mt-3 font-semibold">3. Fermentation</h3>
        <p>
          Yeast is added to the wort and turns the sugars into alcohol, creating a
          kind of strong beer called the wash.
        </p>

        <h3 className="mt-3 font-semibold">4. Distillation</h3>
        <p>
          Malt whisky is distilled in copper pot stills, in batches. Grain whisky is
          distilled in a continuous still, producing a lighter, more fragrant spirit.
        </p>

        <h3 className="mt-3 font-semibold">5. Maturation</h3>
        <p>
          The new spirit rests in oak casks: often ex-bourbon barrels, sherry casks
          or other seasoned wood. Time, wood and air shape the character and smooth
          the spirit.
        </p>

        <h3 className="mt-3 font-semibold">6. Bottling or blending</h3>
        <p>
          Most Scotch becomes part of a blend, kept consistent by skill and
          experience, so that each brand tastes as it should, year after year.
        </p>

        <ImagePlaceholder label="Image placeholder – simple process diagram: water, barley and yeast through malting, mashing, fermentation, distillation, maturation and bottling." />
      </section>

      {/* Regions */}
      <section id="regions">
        <h2 className="mb-2 mt-8 text-lg font-semibold">The five Scotch regions</h2>
        <p>
          The Scotch Whisky Regulations recognise five regions. Each offers its own
          character, shaped by landscape, climate and long habit.
        </p>

        <h3 className="mt-4 font-semibold">Highlands</h3>
        <p>
          The largest region. Styles range from soft and honeyed to robust, coastal
          and dry. A place of breadth and variety.
        </p>
        <ImagePlaceholder label="Image placeholder – Highland landscape or distillery scene." />

        <h3 className="mt-4 font-semibold">Speyside</h3>
        <p>
          A sub-region of the Highlands but with its own identity. Noted for
          elegance, fruit and delicacy, often with sherry-cask influence.
        </p>
        <ImagePlaceholder label="Image placeholder – Speyside river or distillery image." />

        <h3 className="mt-4 font-semibold">Lowlands</h3>
        <p>
          Light, gentle whiskies. Grass, cereal, soft fruits. An area of growing
          interest as new distilleries open.
        </p>
        <ImagePlaceholder label="Image placeholder – Lowland fields or distillery." />

        <h3 className="mt-4 font-semibold">Islay</h3>
        <p>
          The island of peat and Atlantic weather. Whiskies range from smoky and
          maritime to softer coastal styles. Characterful and unmistakable.
        </p>
        <ImagePlaceholder label="Image placeholder – Islay coastline or distillery by the sea." />

        <h3 className="mt-4 font-semibold">Campbeltown</h3>
        <p>
          Once home to many distilleries, now only a few remain, but the style is
          rich, slightly salty and full of character.
        </p>
        <ImagePlaceholder label="Image placeholder – Campbeltown harbour or local distillery." />
      </section>

      {/* Categories */}
      <section id="categories">
        <h2 className="mb-2 mt-8 text-lg font-semibold">Scotch whisky categories</h2>
        <p>
          Scotch falls into five legal types. The definitions are set in law and
          help protect the character and reputation of Scotch around the world.
        </p>

        <h3 className="mt-4 font-semibold">Single malt Scotch whisky</h3>
        <p>
          Made from malted barley, distilled in pot stills at a single distillery.
        </p>

        <h3 className="mt-3 font-semibold">Single grain Scotch whisky</h3>
        <p>
          Made from malted barley and other cereals, distilled in a continuous still
          at a single site. Most is used for blending, but some is bottled in its
          own right.
        </p>

        <h3 className="mt-3 font-semibold">Blended Scotch whisky</h3>
        <p>
          The foundation of the industry. A marriage of single malt and single grain,
          brought together for character and consistency. This is the Scotch most
          people drink worldwide.
        </p>

        <h3 className="mt-3 font-semibold">Blended malt Scotch whisky</h3>
        <p>
          A blend of two or more single malts, with no grain whisky in the mix.
        </p>

        <h3 className="mt-3 font-semibold">Blended grain Scotch whisky</h3>
        <p>
          A blend of two or more single grain whiskies.
        </p>

        <ImagePlaceholder label="Image placeholder – simple graphic showing the five Scotch categories and how they relate to each other." />
      </section>

      {/* Tasting */}
      <section id="tasting">
        <h2 className="mb-2 mt-8 text-lg font-semibold">Tasting Scotch</h2>
        <p>
          Tasting whisky is best done without fuss, but a few simple steps can help
          you understand it more clearly.
        </p>

        <h3 className="mt-4 font-semibold">Look</h3>
        <p>
          Hold the glass to the light. Colour hints mainly at the cask type, not the
          age. Swirl it gently and note the “legs” on the glass — they often run
          slower with higher strength or longer maturation.
        </p>

        <h3 className="mt-3 font-semibold">Nose</h3>
        <p>
          Bring the glass to your nose and breathe gently. Aromas open in layers.
          There is no correct answer, only what you find yourself.
        </p>

        <h3 className="mt-3 font-semibold">Taste</h3>
        <p>
          Let the whisky coat the tongue. Sweetness sits at the tip, spice and
          dryness further back. A drop of still water can open the spirit and bring
          hidden notes to the surface.
        </p>

        <h3 className="mt-3 font-semibold">Finish</h3>
        <p>
          Consider how long the flavour lingers. Length often speaks of maturity and
          balance, though younger whiskies can still be lively and interesting.
        </p>
      </section>

      {/* Glassware */}
      <section id="glassware">
        <h2 className="mb-2 mt-8 text-lg font-semibold">Glassware</h2>
        <p>
          The right glass need not be complicated. The main point is to hold the
          aromas and allow you to taste comfortably.
        </p>

        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>
            A{" "}
            <Link
              href="https://glencairn.com/"
              target="_blank"
              className="underline"
            >
              Glencairn glass
            </Link>{" "}
            is widely used for tastings; its shape gathers aroma and is easy to hold.
          </li>
          <li>A tumbler suits whisky with ice or simple mixed serves.</li>
          <li>A highball glass is used for lighter, longer drinks.</li>
        </ul>

        <ImagePlaceholder label="Image placeholder – selection of whisky glasses: Glencairn, tumbler and highball." />
      </section>

      {/* References */}
      <section id="references">
        <h2 className="mb-2 mt-8 text-lg font-semibold">Useful references</h2>
        <p>
          For those who wish to read further, the Scotch Whisky Association provides
          accessible material on Scotch, its regions and styles:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm">
          <li>
            Distillery map (PDF):{" "}
            <Link
              href="https://www.scotch-whisky.org.uk/media/2492/big-map-of-scotch-whisky-scotch-whisky-association-2025.pdf"
              target="_blank"
              className="underline"
            >
              Scotch Whisky distillery map
            </Link>
          </li>
          <li>
            Regions guide:{" "}
            <Link
              href="https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-regions/"
              target="_blank"
              className="underline"
            >
              Scotch whisky regions
            </Link>
          </li>
          <li>
            Categories:{" "}
            <Link
              href="https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-categories/"
              target="_blank"
              className="underline"
            >
              Scotch whisky categories
            </Link>
          </li>
          <li>
            Tasting toolkit:{" "}
            <Link
              href="https://www.scotch-whisky.org.uk/discover-scotch/enjoying-scotch/scotch-whisky-tasting-toolkit/"
              target="_blank"
              className="underline"
            >
              Scotch whisky tasting toolkit
            </Link>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
