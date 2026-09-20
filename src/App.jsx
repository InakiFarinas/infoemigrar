import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import CountryDetail from "./components/CountryDetail";
import Logo from "./components/Logo";
import Pass from "./components/Pass";
import Passenger from "./components/Passenger";
import { BarcodeLegend } from "./components/Barcode";
import { DATA_SOURCES, ORIGINS, scoreCountries } from "./data/countries";

const INITIAL = {
  origin: "ar",
  profession: "tech",
  family: "solo",
  weights: { visa: 2, trabajo: 2, costo: 2, seguridad: 2 },
  langs: ["es"],
};

export default function App() {
  const [state, set] = useReducer((s, patch) => ({ ...s, ...patch }), INITIAL);
  const [selectedId, setSelectedId] = useState(null);
  const [intro, setIntro] = useState(true);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lastSelected = useRef(null);
  const { origin, profession, family, weights, langs } = state;

  const results = useMemo(
    () => scoreCountries(weights, langs, origin, { profession, family }),
    [weights, langs, origin, profession, family],
  );
  const selected = results.find((c) => c.id === selectedId);
  const originName = ORIGINS.find((o) => o.code === origin)?.label ?? "";

  // Cambio de puesto respecto del ranking anterior; se apaga solo a los pocos segundos
  const order = results.map((c) => c.id).join();
  const [rank, setRank] = useState({ order, ranks: {}, deltas: {} });
  if (rank.order !== order) {
    const ranks = Object.fromEntries(results.map((c, i) => [c.id, i + 1]));
    const first = Object.keys(rank.ranks).length === 0;
    const deltas = first ? {} : Object.fromEntries(results.map((c) => [c.id, rank.ranks[c.id] ? rank.ranks[c.id] - ranks[c.id] : 0]));
    setRank({ order, ranks, deltas });
  } else if (Object.keys(rank.ranks).length === 0) {
    setRank({ order, ranks: Object.fromEntries(results.map((c, i) => [c.id, i + 1])), deltas: {} });
  }
  useEffect(() => {
    const t = setTimeout(() => setRank((r) => ({ ...r, deltas: {} })), 6000);
    return () => clearTimeout(t);
  }, [order]);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (lastSelected.current === selectedId) return;
    lastSelected.current = selectedId;
    sectionRef.current?.scrollIntoView({ block: "start" });
    headingRef.current?.focus({ preventScroll: true });
  }, [selectedId]);

  const status = selected
    ? `Mostrando el pasaje de ${selected.name}, ${selected.score} de 100.`
    : `Ranking actualizado. Primero: ${results[0].name}, ${results[0].score} de 100.`;

  return (
    <div className="min-h-screen bg-brand-warm font-body text-brand-navy">
      <header className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-8 md:py-5">
        <Logo />
        <span className="h-6 w-px bg-brand-navy/25" aria-hidden="true" />
        <p className="text-small font-semibold text-brand-blue">MigraScore</p>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <h1 className="mb-4 max-w-2xl font-brand text-heading font-bold text-balance md:mb-8 md:text-display">
          ¿A qué país te conviene emigrar?
        </h1>

        <div className="grid items-start gap-8 lg:grid-cols-[360px_1fr]">
          <Passenger state={state} set={set} />

          <section ref={sectionRef} className="min-w-0 scroll-mt-4">
            <p role="status" className="sr-only">{status}</p>
            {selected ? (
              <CountryDetail
                country={selected} origin={origin} originName={originName} family={family} weights={weights}
                headingRef={headingRef} onBack={() => setSelectedId(null)}
              />
            ) : (
              <>
                <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
                  <h2 ref={headingRef} tabIndex={-1} className="font-brand text-heading font-bold">Tu ranking de destinos</h2>
                  <BarcodeLegend />
                </div>
                <p className="mb-1 max-w-prose text-small text-ink-2">
                  <strong className="text-brand-navy">Ahora primero: {results[0].name}, {results[0].score} de 100.</strong>{" "}
                  Orientativo: verificá siempre en la fuente oficial.
                </p>
                <details className="how mb-4">
                  <summary>¿Cómo se calcula?</summary>
                  <p className="mt-2 max-w-prose text-small text-ink-2">
                    El puntaje va de 0 a 100 y pondera visa, trabajo, costo de vida y seguridad según tus prioridades. El idioma
                    pesa siempre lo mismo y, si no viajás solo, también la familia. La visa depende de tu nacionalidad y el
                    trabajo mezcla el poder adquisitivo local con la demanda de tu profesión. Las barras sólidas salen de datos
                    con fuente; las rayadas son estimaciones editoriales. Códigos de las barras: VIS visa, TRA trabajo y
                    salarios, COS costo de vida, SEG seguridad, IDI idioma, FAM familia.
                  </p>
                </details>
                <div className="space-y-5">
                  {results.map((c, i) => (
                    <Pass
                      key={c.id} country={c} rank={i + 1} origin={origin} originName={originName} family={family}
                      weights={weights} delta={rank.deltas[c.id] ?? 0} intro={intro} onOpen={() => setSelectedId(c.id)}
                    />
                  ))}
                </div>
              </>
            )}
          </section>
        </div>

        <footer className="mt-12 max-w-prose space-y-2 text-label text-ink-3">
          <p>
            Puntajes orientativos, no constituyen asesoría legal. Los requisitos cambian: verificá siempre en la fuente oficial de cada país.
          </p>
          <p>
            Seguridad, costo de vida y salarios se calculan con: {DATA_SOURCES.map((d, i) => (
              <span key={d.url}>{i > 0 && "; "}<a href={d.url} target="_blank" rel="noreferrer" className="underline">{d.label}</a></span>
            ))}. Visa, demanda por profesión y familia son estimaciones editoriales.
          </p>
        </footer>
      </main>
    </div>
  );
}
