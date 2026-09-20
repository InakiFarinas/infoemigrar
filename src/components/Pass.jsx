import Barcode from "./Barcode";
import Flag from "./Flag";
import { PART_SHORT } from "../data/countries";

function Delta({ delta }) {
  if (!delta) return null;
  const up = delta > 0;
  const n = Math.abs(delta);
  return (
    <span className="delta" role="img" aria-label={`${up ? "Subió" : "Bajó"} ${n} ${n === 1 ? "puesto" : "puestos"}`}>
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <path d={up ? "M5 1 9 8H1z" : "M5 9 1 2h8z"} fill="currentColor" />
      </svg>
      {n}
    </span>
  );
}

function motives(country, weights, family) {
  const keys = ["visa", "trabajo", "costo", "seguridad"].filter((k) => weights[k] > 0);
  if (family !== "solo") keys.push("familia");
  const sorted = [...keys].sort((a, b) => country.parts[b] - country.parts[a]);
  return { best: sorted[0], worst: sorted[sorted.length - 1] };
}

export default function Pass({ country, rank, origin, originName, family, weights, delta, intro, onOpen }) {
  const first = rank === 1;
  const { best, worst } = motives(country, weights, family);
  return (
    <article className={`pass${first ? " pass-first" : ""}${intro ? " pass-print" : ""}`} style={{ "--i": rank - 1 }}>
      <div className="pass-band">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
          <h3 className={`flex items-center gap-3 font-brand font-bold ${first ? "text-display" : "text-heading"}`}>
            <span className="sr-only">Puesto {rank}, desde {originName} hacia </span>
            <Flag id={country.id} name={country.name} decorative />
            {country.name}
          </h3>
          <div className="flex items-center gap-3 md:justify-end">
            <Delta delta={delta} />
            <p className="route" aria-hidden="true">
            N.º {rank}
            <span className="mx-2 opacity-60">·</span>
            {origin.toUpperCase()}
            <svg width="22" height="14" viewBox="0 0 22 14" className="mx-2 inline-block align-middle">
              <path d="M1 7h17M13 2l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {country.id.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      <div className="pass-main">
        <p className="max-w-prose text-small text-ink-2">{country.resumen}</p>
        <dl className="cells mt-3">
          <div><dt>Suma</dt><dd>{PART_SHORT[best]} · {country.parts[best]}</dd></div>
          <div><dt>Resta</dt><dd>{PART_SHORT[worst]} · {country.parts[worst]}</dd></div>
        </dl>
        <button type="button" onClick={onOpen} className="btn mt-4">
          Ver pasaje completo
          <span className="sr-only"> de {country.name}</span>
        </button>
      </div>

      <div className="pass-stub">
        <p className="score" aria-label={`Puntaje ${country.score} de 100`}>
          {country.score}<span>/100</span>
        </p>
        <Barcode parts={country.parts} estimated={country.estimated} showFamily={family !== "solo"} height={first ? 72 : 56} />
      </div>
    </article>
  );
}
