import { PART_CODES, PART_LABELS, PART_SHORT } from "../data/countries";

const KEYS = ["visa", "trabajo", "costo", "seguridad", "idioma", "familia"];
// Anchos distintos, como un código de barras real
const WIDTHS = [16, 9, 18, 9, 14, 11];

export default function Barcode({ parts, estimated, showFamily, height = 56 }) {
  const items = KEYS.filter((k) => k !== "familia" || showFamily);
  const label = items
    .map((k) => `${PART_LABELS[k]} ${parts[k]} de 10${estimated[k] ? ", estimado" : ""}`)
    .join("; ");
  return (
    <div role="img" aria-label={`Desglose del puntaje: ${label}`}>
      <div className="flex gap-1" style={{ height }} aria-hidden="true">
        {items.map((k) => (
          <span key={k} className="flex h-full w-6 items-end justify-center">
            <span
              className={`bar ${estimated[k] ? "bar-est" : "bar-src"}`}
              style={{ height: `${Math.max(parts[k], 1) * 10}%`, width: WIDTHS[KEYS.indexOf(k)] }}
            />
          </span>
        ))}
      </div>
      <div className="mt-1 flex gap-1" aria-hidden="true">
        {items.map((k) => (
          <span key={k} className="w-6 text-center font-mono text-label text-ink-3">{PART_CODES[k]}</span>
        ))}
      </div>
    </div>
  );
}

export function BarcodeLegend() {
  return (
    <div className="space-y-1 text-label text-ink-3">
      <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="inline-flex items-center gap-1.5"><span className="bar bar-src inline-block h-4 w-4 flex-none" aria-hidden="true" />Con fuente</span>
        <span className="inline-flex items-center gap-1.5"><span className="bar bar-est inline-block h-4 w-4 flex-none" aria-hidden="true" />Estimación editorial</span>
      </p>
      <p className="hidden font-mono md:block">
        {KEYS.map((k, i) => (
          <span key={k}>{i > 0 && " · "}{PART_CODES[k]} {PART_SHORT[k]}</span>
        ))}
      </p>
    </div>
  );
}
