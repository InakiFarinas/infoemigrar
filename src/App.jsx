import { useMemo, useState } from "react";
import Flag from "./components/Flag";
import CountryDetail from "./components/CountryDetail";
import { DIMENSIONS, LANGUAGES, ORIGINS, PROFESSIONS, FAMILY, scoreCountries } from "./data/countries";

const PRIORITY = ["Sin importancia", "Poca", "Media", "Alta"];

export default function App() {
  const [weights, setWeights] = useState({ visa: 2, trabajo: 2, costo: 2, seguridad: 2 });
  const [langs, setLangs] = useState(["es"]);
  const [origin, setOrigin] = useState("ar");
  const [profession, setProfession] = useState("tech");
  const [family, setFamily] = useState("solo");
  const [submitted, setSubmitted] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const results = useMemo(() => scoreCountries(weights, langs, origin, { profession, family }), [weights, langs, origin, profession, family]);
  const selected = results.find((c) => c.id === selectedId);

  const toggleLang = (code) =>
    setLangs((l) => (l.includes(code) ? l.filter((x) => x !== code) : [...l, code]));

  return (
    <div className="min-h-screen bg-brand-warm font-body text-brand-navy">
      <header className="bg-white shadow-brand-sm">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <h1 className="text-heading font-brand">MigraScore</h1>
          <p className="text-small text-[#555]">Descubrí qué país se ajusta mejor a tu perfil migratorio.</p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-8 px-4 py-8">
        <section className="rounded-brand bg-white p-inset shadow-brand-sm">
          <label className="mb-6 block">
            <span className="mb-2 block text-subhead font-brand">Tu nacionalidad</span>
            <select
              value={origin} onChange={(e) => setOrigin(e.target.value)}
              className="w-full rounded-brand border border-brand-blue bg-white px-3 py-2 text-body"
            >
              {ORIGINS.map((o) => <option key={o.code} value={o.code}>{o.label}</option>)}
            </select>
          </label>

          <label className="mb-6 block">
            <span className="mb-2 block text-subhead font-brand">Tu profesión</span>
            <select
              value={profession} onChange={(e) => setProfession(e.target.value)}
              className="w-full rounded-brand border border-brand-blue bg-white px-3 py-2 text-body"
            >
              {PROFESSIONS.map((o) => <option key={o.code} value={o.code}>{o.label}</option>)}
            </select>
          </label>

          <label className="mb-6 block">
            <span className="mb-2 block text-subhead font-brand">¿Con quién migrás?</span>
            <select
              value={family} onChange={(e) => setFamily(e.target.value)}
              className="w-full rounded-brand border border-brand-blue bg-white px-3 py-2 text-body"
            >
              {FAMILY.map((o) => <option key={o.code} value={o.code}>{o.label}</option>)}
            </select>
          </label>

          <h2 className="mb-4 text-subhead font-brand">¿Qué es importante para vos?</h2>
          <div className="space-y-4">
            {DIMENSIONS.map((d) => (
              <label key={d.key} className="block">
                <span className="flex justify-between text-small">
                  <span>{d.label}</span>
                  <span className="text-brand-blue">{PRIORITY[weights[d.key]]}</span>
                </span>
                <input
                  type="range" min="0" max="3" value={weights[d.key]}
                  onChange={(e) => setWeights({ ...weights, [d.key]: +e.target.value })}
                  className="w-full accent-brand-blue"
                />
              </label>
            ))}
          </div>

          <h2 className="mb-2 mt-6 text-subhead font-brand">Idiomas que hablás</h2>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.code} type="button" onClick={() => toggleLang(l.code)}
                aria-pressed={langs.includes(l.code)}
                className={`rounded-brand border px-4 py-2 text-small ${
                  langs.includes(l.code) ? "border-brand-blue bg-brand-blue text-white" : "border-brand-blue text-brand-blue"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            type="button" onClick={() => setSubmitted(true)}
            className="mt-6 rounded-brand bg-brand-blue px-5 py-2 text-white hover:opacity-90"
          >
            Ver mi ranking
          </button>
        </section>

        {submitted && selected && (
          <CountryDetail country={selected} family={family} onBack={() => setSelectedId(null)} />
        )}

        {submitted && !selected && (
          <section className="space-y-4">
            <h2 className="text-heading font-brand">Tu ranking</h2>
            {results.map((c, i) => (
              <article key={c.id} className="rounded-brand bg-white p-inset shadow-brand-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-subhead font-brand">{i + 1}. <Flag id={c.id} name={c.name} /> {c.name}</h3>
                  <span className="text-heading font-brand text-brand-blue">{c.score}</span>
                </div>
                <div className="mt-2 h-2 rounded bg-brand-neutral">
                  <div className="h-2 rounded bg-brand-blue" style={{ width: `${c.score}%` }} />
                </div>
                <ul className="mt-3 list-disc pl-5 text-small text-[#333]">
                  {c.vias.map((v) => <li key={v}>{v}</li>)}
                </ul>
                <button type="button" onClick={() => setSelectedId(c.id)} className="mt-1 py-2 text-small text-brand-blue underline">
                  Ver ficha completa
                </button>
              </article>
            ))}
            <p className="text-label text-[#555]">
              Puntajes orientativos, no constituyen asesoría legal. Verificá siempre los requisitos en la fuente oficial.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
