import { getTranslations } from "next-intl/server";

interface Step {
  n: string;
  title: string;
  icon: string;
  body: string;
  foot: string;
  footExtra?: string;
  active?: boolean;
}

// Homepage how-it-works — mirrors the ResQNow HowItWorks numbered flow with
// the s3 lifecycle steps (numbered blue, no red anywhere).
export default async function HomeSteps({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "screens.s3" });
  const headline = t.raw("headline") as string[];
  const steps = t.raw("steps") as Step[];

  return (
    <section
      id="how"
      aria-label="How it works"
      className="rn-section bg-gradient-to-b from-paper to-slate-50"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl text-center md:mb-16 md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-beacon/20 bg-beacon/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-beacon" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-widest text-beacon">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight text-ink md:text-5xl">
            {headline[0]} <span className="text-beacon">{headline[1]}</span>
          </h2>
          <p className="text-lg font-medium text-muted md:text-xl">{t("sub")}</p>
        </div>

        <div className="relative">
          {/* Progress track (desktop) */}
          <div
            className="absolute bottom-0 left-0 right-0 top-24 hidden h-0.5 bg-line md:block"
            aria-hidden="true"
          >
            <div className="h-full w-full bg-beacon/20" />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="group relative flex flex-col items-center pt-0 text-center md:items-start md:pt-16 md:text-left"
              >
                {/* Step node */}
                <div className="relative mb-6 flex items-center justify-center md:absolute md:top-6 md:-translate-y-1/2">
                  <div
                    className="absolute inset-0 rounded-2xl bg-beacon opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-line bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-beacon">
                    <span className="text-2xl font-black text-muted transition-colors duration-300 group-hover:text-beacon" aria-hidden="true">
                      {step.icon}
                    </span>
                  </div>
                  <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-beacon text-xs font-bold text-white shadow-sm">
                    {step.n}
                  </div>
                </div>

                {/* Content card */}
                <div className="rn-card w-full p-5 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-beacon/20 sm:p-8">
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-beacon">
                    {step.n}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-ink transition-colors group-hover:text-beacon">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base font-medium leading-relaxed text-muted">
                    {step.body}
                  </p>
                  <p className="inline-block rounded-full bg-beacon/10 px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-beacon">
                    {step.foot}
                    {step.footExtra ? ` · ${step.footExtra}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
