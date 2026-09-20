// Puntajes 0-10 (más alto = mejor para el migrante). VALORES PRELIMINARES:
// curar con fuentes (World Bank, Numbeo, Global Peace Index, sitios oficiales) antes de publicar.
export const DIMENSIONS = [
  { key: "visa", label: "Facilidad de visa" },
  { key: "trabajo", label: "Salarios y empleo" },
  { key: "costo", label: "Costo de vida accesible" },
  { key: "seguridad", label: "Seguridad" },
];

export const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "Inglés" },
  { code: "pt", label: "Portugués" },
  { code: "de", label: "Alemán" },
];

export const PROFESSIONS = [
  { code: "tech", label: "Tecnología / IT" },
  { code: "salud", label: "Salud" },
  { code: "ingenieria", label: "Ingeniería / construcción" },
  { code: "oficios", label: "Oficios / gastronomía / servicios" },
  { code: "remoto", label: "Trabajo remoto para el exterior" },
  { code: "otros", label: "Otra profesión" },
];

export const FAMILY = [
  { code: "solo", label: "Voy solo/a" },
  { code: "pareja", label: "Con pareja" },
  { code: "hijos", label: "Con hijos" },
];

// Grupos que dan acceso preferencial a visas (preliminar, verificar con fuentes oficiales)
export const ORIGINS = [
  { code: "ar", label: "Argentina", groups: ["mercosur", "ibero"] },
  { code: "bo", label: "Bolivia", groups: ["mercosur", "ibero"] },
  { code: "br", label: "Brasil", groups: ["mercosur", "cplp"] },
  { code: "cl", label: "Chile", groups: ["mercosur", "ibero"] },
  { code: "co", label: "Colombia", groups: ["mercosur", "ibero"] },
  { code: "ec", label: "Ecuador", groups: ["mercosur", "ibero"] },
  { code: "mx", label: "México", groups: ["ibero"] },
  { code: "py", label: "Paraguay", groups: ["mercosur", "ibero"] },
  { code: "pe", label: "Perú", groups: ["mercosur", "ibero"] },
  { code: "uy", label: "Uruguay", groups: ["mercosur", "ibero"] },
  { code: "ve", label: "Venezuela", groups: ["ibero"] },
];

export const COUNTRIES = [
  {
    id: "es", name: "España", lang: ["es"],
    resumen: "Destino habitual para latinoamericanos por idioma y vínculos históricos; el mercado laboral es exigente pero hay vías de arraigo.",
    demanda: { tech: 6, salud: 7, ingenieria: 5, oficios: 6, remoto: 8, otros: 4 },
    familia: 8,
    visaByGroup: { ibero: 8 },
    scores: { visa: 7, trabajo: 5, costo: 6, seguridad: 8 },
    vias: ["Arraigo (social, laboral, familiar)", "Nómada digital", "Nacionalidad por residencia (2 años para latinoamericanos)"],
    fuente: "https://www.inclusion.gob.es/web/migraciones",
  },
  {
    id: "pt", name: "Portugal", lang: ["pt"],
    resumen: "Seguridad y calidad de vida altas, con salarios moderados; atractivo para brasileños y para quienes trabajan en remoto.",
    demanda: { tech: 6, salud: 6, ingenieria: 5, oficios: 5, remoto: 9, otros: 3 },
    familia: 8,
    visaByGroup: { cplp: 9 },
    scores: { visa: 6, trabajo: 4, costo: 6, seguridad: 9 },
    vias: ["Visado de búsqueda de empleo", "Visado D7 (ingresos pasivos)", "Nómada digital"],
    fuente: "https://aima.gov.pt",
  },
  {
    id: "cl", name: "Chile", lang: ["es"],
    resumen: "Economía estable de la región y misma lengua; trámites que dependen bastante de tener oferta de trabajo.",
    demanda: { tech: 5, salud: 6, ingenieria: 6, oficios: 6, remoto: 6, otros: 4 },
    familia: 6,
    visaByGroup: { mercosur: 8 },
    scores: { visa: 7, trabajo: 5, costo: 6, seguridad: 6 },
    vias: ["Visa de residencia temporal por oferta de trabajo", "Visa por vínculo familiar"],
    fuente: "https://serviciomigraciones.cl",
  },
  {
    id: "uy", name: "Uruguay", lang: ["es"],
    resumen: "Trámite de residencia muy accesible para ciudadanos Mercosur; mercado laboral pequeño.",
    demanda: { tech: 5, salud: 5, ingenieria: 4, oficios: 5, remoto: 7, otros: 4 },
    familia: 7,
    visaByGroup: { mercosur: 9 },
    scores: { visa: 4, trabajo: 4, costo: 5, seguridad: 7 },
    vias: ["Residencia Mercosur (ciudadanos de países miembros y asociados)", "Residencia por trabajo"],
    fuente: "https://www.gub.uy/ministerio-relaciones-exteriores/",
  },
  {
    id: "mx", name: "México", lang: ["es"],
    resumen: "Costo de vida bajo, cercanía cultural y buen destino para trabajo remoto; la seguridad varía según la zona.",
    demanda: { tech: 5, salud: 5, ingenieria: 5, oficios: 6, remoto: 8, otros: 4 },
    familia: 6,
    scores: { visa: 7, trabajo: 4, costo: 8, seguridad: 4 },
    vias: ["Residencia temporal por ingresos o vínculo", "Residencia por oferta de empleo"],
    fuente: "https://www.gob.mx/sre",
  },
  {
    id: "ca", name: "Canadá", lang: ["en"],
    resumen: "Sistema por puntos con altos salarios y seguridad; requiere inglés (o francés) y un proceso largo y competitivo.",
    demanda: { tech: 9, salud: 9, ingenieria: 8, oficios: 8, remoto: 5, otros: 5 },
    familia: 8,
    scores: { visa: 4, trabajo: 8, costo: 4, seguridad: 9 },
    vias: ["Express Entry (puntaje)", "Nominación provincial (PNP)", "Permiso de estudio y trabajo"],
    fuente: "https://www.canada.ca/es/inmigracion-refugiados-ciudadania.html",
  },
  {
    id: "de", name: "Alemania", lang: ["de"],
    resumen: "Fuerte demanda de profesionales calificados y salarios altos; el idioma alemán es la principal barrera.",
    demanda: { tech: 9, salud: 9, ingenieria: 9, oficios: 8, remoto: 6, otros: 5 },
    familia: 8,
    scores: { visa: 5, trabajo: 8, costo: 5, seguridad: 8 },
    vias: ["Tarjeta Azul UE (profesionales)", "Oportunidad Card (búsqueda de empleo por puntos)", "Visa de trabajo calificado"],
    fuente: "https://www.make-it-in-germany.com/es/",
  },
  {
    id: "au", name: "Australia", lang: ["en"],
    resumen: "Mejores salarios entre los destinos listados, pero el costo de vida es alto y la visa muy selectiva.",
    demanda: { tech: 9, salud: 9, ingenieria: 9, oficios: 9, remoto: 4, otros: 6 },
    familia: 7,
    scores: { visa: 3, trabajo: 9, costo: 3, seguridad: 9 },
    vias: ["Skilled Independent (subclase 189)", "Working Holiday (según nacionalidad)", "Skilled Employer Sponsored"],
    fuente: "https://immi.homeaffairs.gov.au",
  },
];

// weights: { visa, trabajo, costo, seguridad } con valores 0-3; userLangs: códigos de idioma
export function scoreCountries(weights, userLangs, origin, { profession = "otros", family = "solo" } = {}) {
  const groups = ORIGINS.find((o) => o.code === origin)?.groups ?? [];
  const totalW = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
  return COUNTRIES.filter((c) => c.id !== origin).map((c) => {
    const visa = Math.max(c.scores.visa, ...groups.map((g) => c.visaByGroup?.[g] ?? 0));
    const trabajo = Math.round((c.scores.trabajo + c.demanda[profession]) / 2);
    const idioma = c.lang.some((l) => userLangs.includes(l)) ? 10 : 3;
    const parts = { ...c.scores, visa, trabajo, idioma, familia: c.familia };
    const w = { ...weights, idioma: 2, ...(family !== "solo" && { familia: 2 }) };
    const sumW = totalW + (family !== "solo" ? 4 : 2);
    const total = Object.keys(w).reduce((acc, k) => acc + parts[k] * w[k], 0) / sumW;
    return { ...c, parts, score: Math.round(total * 10) };
  }).sort((a, b) => b.score - a.score);
}
