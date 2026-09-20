const LABELS = {
  visa: "Facilidad de visa",
  trabajo: "Salarios y empleo",
  costo: "Costo de vida accesible",
  seguridad: "Seguridad",
  idioma: "Idioma",
  familia: "Amigable con familias",
};

import Flag from "./Flag";
import { REVISION_VISAS } from "../data/countries";

export default function CountryDetail({ country, family, onBack }) {
  const keys = Object.keys(LABELS).filter((k) => k !== "familia" || family !== "solo");
  return (
    <article className="rounded-brand bg-white p-inset shadow-brand-sm">
      <button type="button" onClick={onBack} className="mb-2 py-2 text-small text-brand-blue underline">
        ← Volver al ranking
      </button>
      <div className="flex items-center justify-between">
        <h2 className="text-heading font-brand"><Flag id={country.id} name={country.name} /> {country.name}</h2>
        <span className="text-heading font-brand text-brand-blue">{country.score}</span>
      </div>
      <p className="mt-2 text-body text-[#333]">{country.resumen}</p>

      <h3 className="mb-3 mt-6 text-subhead font-brand">Cómo se compone tu puntaje</h3>
      <div className="space-y-3">
        {keys.map((k) => (
          <div key={k}>
            <div className="flex justify-between text-small">
              <span>{LABELS[k]}</span>
              <span>{country.parts[k]}/10</span>
            </div>
            <div className="mt-1 h-2 rounded bg-brand-neutral">
              <div className="h-2 rounded bg-brand-blue" style={{ width: `${country.parts[k] * 10}%` }} />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-label text-[#555]">
        {country.demandaVerificada
          ? "Demanda por profesión: basada en listas de ocupaciones y sorteos de 2026."
          : "Demanda por profesión: estimación sin verificar."}
        {family !== "solo" && " Puntaje de familia: estimación editorial."}
      </p>

      <h3 className="mb-2 mt-6 text-subhead font-brand">Datos de referencia</h3>
      <ul className="list-disc pl-5 text-small text-[#333]">
        <li>Global Peace Index 2026: {country.indicadores.gpi} (menor = más pacífico)</li>
        <li>Índice de costo de vida (Numbeo): {country.indicadores.costoVida}</li>
        <li>Poder adquisitivo local (Numbeo): {country.indicadores.poderCompra}</li>
      </ul>

      <h3 className="mb-2 mt-6 text-subhead font-brand">Vías migratorias principales</h3>
      <p className="mb-2 text-label text-[#555]">Revisadas en {REVISION_VISAS}.</p>
      <ul className="list-disc pl-5 text-small text-[#333]">
        {country.vias.map((v) => <li key={v}>{v}</li>)}
      </ul>

      <a href={country.fuente} target="_blank" rel="noreferrer" className="mt-4 inline-block text-small text-brand-blue underline">
        Fuente oficial
      </a>
      <p className="mt-4 text-label text-[#555]">
        Puntajes orientativos, no constituyen asesoría legal. Verificá siempre los requisitos vigentes en la fuente oficial.
      </p>
    </article>
  );
}
