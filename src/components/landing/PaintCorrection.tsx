import beforeAfterImg from "@/assets/IMG_8434.jpg.asset.json";

export function PaintCorrection() {
  return (
    <section className="bg-navy py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
            Paint Correction
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Restore Your Paint Before We Coat It
          </h2>
          <div className="mt-6 space-y-4 text-white/80">
            <p>
              Paint correction is the critical step before coating. We remove swirl
              marks, oxidation, light scratches, and water spots — returning your paint
              to its truest state before sealing it with ceramic.
            </p>
            <p className="border-l-2 border-gold pl-4 text-white">
              Applying coating without correction locks in imperfections forever.
            </p>
            <p>
              Every job starts with a thorough inspection under proper lighting so we
              can recommend the exact level of correction your paint needs — nothing
              more, nothing less.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={beforeAfterImg.url}
            alt="Real paint correction result on a black vehicle — top half shows swirl marks and oxidation, bottom half shows a deep, mirror-like finish after correction"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl shadow-black/40 ring-1 ring-white/10"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 rounded-md bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur">
            Before
          </div>
          <div className="absolute bottom-4 right-4 rounded-md bg-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground-deep">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
