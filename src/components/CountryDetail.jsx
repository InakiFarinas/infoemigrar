import { BarcodeLegend } from "./Barcode";
import Flag from "./Flag";
import { DATA_SOURCES, PART_LABELS, PRIORITY, REVISION_VISAS } from "../data/countries";

function weightLabel(k, weights) {
  return k in weights ? PRIORITY[weights[k]] : "fijo";
}

export default function CountryDetail({ country, origin, originName, family, weights, headingRef, onBack }) {
  const keys = Object.keys(PART_LABELS).filter((k) => k !== "familia" || family !== "solo");
  return (
    <article className="pass pass-open">
      <div className="pass-band">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="route" aria-hidden="true">
            {origin.toUpperCase()}
            <svg width="22" height="14" viewBox="0 0 22 14" className="mx-2 inline-block align-middle">
              <path d="M1 7h17M13 2l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {country.id.toUpperCase()}
          </p>
          <button type="button" onClick={onBack} className="btn btn-light">
            <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
              <path d="M21 7H4M9 2 4 7l5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al ranking
          </button>
        </div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 ref={headingRef} tabIndex={-1} className="flex items-center gap-3 font-brand text-display font-bold">
            <span className="sr-only">Desde {originName} hacia </span>
            <Flag id={country.id} name={country.name} decorative />
            {country.name}
          </h2>
          <p className="score" aria-label={`Puntaje ${country.score} de 100`}>
            {country.score}<span>/100</span>
          </p>
        </div>
      </div>

      <div className="grid gap-x-10 gap-y-8 p-6 md:grid-cols-2 md:p-8">
        <section>
          <p className="max-w-prose text-body text-ink-2">{country.resumen}</p>

          <h3 className="mb-3 mt-8 font-brand text-subhead font-bold">Cómo se compone tu puntaje</h3>
          <ul className="space-y-3">
            {keys.map((k) => (
              <li key={k}>
                <div className="flex justify-between gap-3 text-small">
                  <span>
                    {PART_LABELS[k]}
                    {country.estimated[k] && <em className="ml-2 text-label not-italic text-brand-blue">estimación</em>}
                  </span>
                  <span className="tnum whitespace-nowrap">{country.parts[k]}/10 · peso {weightLabel(k, weights)}</span>
                </div>
                <div className="meter" aria-hidden="true">
                  <span className={country.estimated[k] ? "bar-est" : "bar-src"} style={{ width: `${country.parts[k] * 10}%` }} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4"><BarcodeLegend /></div>
        </section>

        <section>
          <h3 className="font-brand text-subhead font-bold">Vías de entrada</h3>
          <p className="mb-2 text-label text-ink-3">Revisadas en {REVISION_VISAS}.</p>
          <ul className="list-disc space-y-1.5 pl-5 text-small text-ink-2">
            {country.vias.map((v) => <li key={v}>{v}</li>)}
          </ul>
          <a href={country.fuente} target="_blank" rel="noreferrer" className="btn mt-4">
            Ir a la fuente oficial
            <span className="sr-only"> de {country.name}</span>
          </a>

          <div className="perforation my-8" aria-hidden="true" />

          <h3 className="mb-2 font-brand text-subhead font-bold">Datos de referencia</h3>
          <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1.5 text-small text-ink-2">
            <dt>Global Peace Index 2026 (menor es más pacífico)</dt>
            <dd className="tnum font-mono">{country.indicadores.gpi}</dd>
            <dt>Costo de vida, Numbeo</dt>
            <dd className="tnum font-mono">{country.indicadores.costoVida}</dd>
            <dt>Poder adquisitivo local, Numbeo</dt>
            <dd className="tnum font-mono">{country.indicadores.poderCompra}</dd>
          </dl>
          <p className="mt-3 text-label text-ink-3">
            {country.demandaVerificada
              ? "Demanda por profesión: basada en listas de ocupaciones y sorteos de 2026."
              : "Demanda por profesión: estimación sin verificar."}
            {family !== "solo" && " Puntaje de familia: estimación editorial."}
          </p>
          <p className="mt-2 max-w-prose text-label text-ink-3">
            Fuentes: {DATA_SOURCES.map((d, i) => (
              <span key={d.url}>{i > 0 && "; "}<a href={d.url} target="_blank" rel="noreferrer" className="underline">{d.label}</a></span>
            ))}.
          </p>
        </section>
      </div>
    </article>
  );
}
