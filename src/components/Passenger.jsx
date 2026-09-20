import { useEffect, useState } from "react";
import { DIMENSIONS, FAMILY, LANGUAGES, ORIGINS, PRIORITY, PROFESSIONS } from "../data/countries";

const WIDE = "(min-width: 1024px)";

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="field-select">
        {options.map((o) => <option key={o.code} value={o.code}>{o.label}</option>)}
      </select>
    </label>
  );
}

function useWide() {
  const [wide, setWide] = useState(() => typeof window !== "undefined" && window.matchMedia(WIDE).matches);
  useEffect(() => {
    const m = window.matchMedia(WIDE);
    const on = () => setWide(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return wide;
}

export default function Passenger({ state, set }) {
  const { origin, profession, family, weights, langs } = state;
  const wide = useWide();
  const toggleLang = (code) =>
    set({ langs: langs.includes(code) ? langs.filter((x) => x !== code) : [...langs, code] });

  return (
    <form className="ticket" onSubmit={(e) => e.preventDefault()} aria-label="Datos del pasajero">
      <div className="ticket-head">
        <h2 className="font-brand text-subhead font-bold">Datos del pasajero</h2>
        <p className="hidden text-small text-white/80 lg:block">MigraScore recalcula el ranking mientras completás.</p>
      </div>

      <div className="space-y-4 px-5 pb-5 pt-4 lg:space-y-5 lg:pb-6 lg:pt-5">
        <Select label="Nacionalidad" value={origin} onChange={(v) => set({ origin: v })} options={ORIGINS} />
        <Select label="Profesión" value={profession} onChange={(v) => set({ profession: v })} options={PROFESSIONS} />
        <Select label="Viajás" value={family} onChange={(v) => set({ family: v })} options={FAMILY} />

        <details className="fold" open={wide || undefined}>
          <summary className="fold-sum">
            Ajustar prioridades e idiomas
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="fold-chevron">
              <path d="M3 5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

          <div className="mt-5 space-y-5">
            <div className="perforation" aria-hidden="true" />

            <fieldset className="space-y-4">
              <legend className="field-label">Qué te importa más</legend>
              {DIMENSIONS.map((d) => (
                <div key={d.key}>
                  <p className="mb-1.5 text-small text-brand-navy" id={`w-${d.key}`}>{d.label}</p>
                  <div role="radiogroup" aria-labelledby={`w-${d.key}`} className="seg">
                    {PRIORITY.map((p, i) => (
                      <label key={p} className="seg-item">
                        <input
                          type="radio" name={`w-${d.key}`} checked={weights[d.key] === i}
                          onChange={() => set({ weights: { ...weights, [d.key]: i } })}
                        />
                        <span>{p}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </fieldset>

            <div className="perforation" aria-hidden="true" />

            <fieldset>
              <legend className="field-label">Idiomas que hablás</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.code} type="button" onClick={() => toggleLang(l.code)}
                    aria-pressed={langs.includes(l.code)} className="chip"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </details>
      </div>
    </form>
  );
}
