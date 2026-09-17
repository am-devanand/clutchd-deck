import { getTranslations } from "next-intl/server";

interface Phone {
  code: string;
  meta: string;
  title: string;
  body: string;
}

// Homepage app gallery — mirrors the ResQNow VehicleTypes card grid with six
// CSS phone shells (text rows + meta, no screenshots) carrying the s6 screen
// titles/bodies. Display only.
export default async function HomeVehicles({ locale }: { locale: string }) {
  const t2 = await getTranslations({ locale, namespace: "screens.s2" });
  const t6 = await getTranslations({ locale, namespace: "screens.s6" });
  const phones = t6.raw("phones") as Phone[];
  const headline = t6.raw("headline") as string[];

  return (
    <section id="vehicles" aria-label="Vehicles" className="rn-section bg-paper">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-beacon/20 bg-beacon/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-beacon">
              {t2("livePill")}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-ink md:text-5xl">
            {headline[0]} <span className="text-beacon">{headline[1]}</span>
          </h2>
          <p className="text-lg font-medium text-muted md:text-xl">
            {t6("sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phones.map((p) => (
            <article
              key={p.code}
              className="rn-card group relative overflow-hidden p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* CSS phone shell with text rows (no screenshot) */}
              <div className="mx-auto mb-6 w-fit rounded-[1.75rem] border border-line bg-white p-1.5 shadow-sm transition-transform duration-500 group-hover:scale-105">
                <div className="flex w-[150px] flex-col items-center rounded-[1.3rem] bg-slate-50 px-3 py-4">
                  <div className="mb-3 h-1 w-10 rounded-full bg-line" aria-hidden="true" />
                  <span className="mb-2 rounded-full bg-beacon/10 px-2 py-0.5 font-mono text-[9px] font-bold text-beacon">
                    {p.meta}
                  </span>
                  <span
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-beacon text-sm font-black text-white shadow-sm"
                    aria-hidden="true"
                  >
                    {p.title.charAt(0)}
                  </span>
                  <div className="w-full space-y-1.5" aria-hidden="true">
                    <div className="h-1.5 w-full rounded-full bg-line" />
                    <div className="h-1.5 w-4/5 rounded-full bg-line" />
                    <div className="h-1.5 w-3/5 rounded-full bg-beacon/30" />
                  </div>
                </div>
              </div>
              <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">
                {p.code}
              </p>
              <h3 className="mb-2 text-xl font-black tracking-tight text-ink transition-colors group-hover:text-beacon">
                {p.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Price-comparison panel (marketplace second half) */}
        <div className="rn-card mx-auto mt-8 flex max-w-3xl flex-col gap-4 p-8 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-beacon/10">
            <span className="text-xl font-black text-beacon" aria-hidden="true">
              ◈
            </span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="mb-1 text-xl font-black text-ink">
              {t2("marketplace.compareTitle")}
            </h3>
            <p className="font-medium leading-relaxed text-muted">
              {t2("marketplace.compareBody")}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-beacon/25 bg-beacon/10 px-3 py-1.5 font-mono text-[10px] font-bold text-beacon">
            {t2("coords")}
          </span>
        </div>
      </div>
    </section>
  );
}
