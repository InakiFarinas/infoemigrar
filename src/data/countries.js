// Puntajes 0-10 (más alto = mejor para el migrante).
// seguridad, costo y trabajo se derivan de indicadores con fuente (ver DATA_SOURCES).
// demanda por profesión y familia son estimaciones editoriales. Las vías y los grupos de acceso a visas se revisaron en septiembre de 2026; el puntaje de visa sigue siendo criterio editorial.
export const DIMENSIONS = [
  { key: "visa", label: "Facilidad de visa" },
  { key: "trabajo", label: "Salarios y empleo" },
  { key: "costo", label: "Costo de vida accesible" },
  { key: "seguridad", label: "Seguridad" },
];

export const PRIORITY = ["Nada", "Poca", "Media", "Alta"];

export const PART_LABELS = {
  visa: "Facilidad de visa",
  trabajo: "Salarios y empleo",
  costo: "Costo de vida accesible",
  seguridad: "Seguridad",
  idioma: "Idioma",
  familia: "Amigable con familias",
};
export const PART_SHORT = {
  visa: "visa",
  trabajo: "trabajo y salarios",
  costo: "costo de vida",
  seguridad: "seguridad",
  idioma: "idioma",
  familia: "familia",
};
export const PART_CODES = { visa: "VIS", trabajo: "TRA", costo: "COS", seguridad: "SEG", idioma: "IDI", familia: "FAM" };

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

export const REVISION_VISAS = "septiembre de 2026";

// Fuentes de los indicadores (consultadas en septiembre de 2026)
export const DATA_SOURCES = [
  { label: "Global Peace Index 2026 (menor = más pacífico)", url: "https://www.visionofhumanity.org/maps/" },
  { label: "Numbeo, Cost of Living Index y Local Purchasing Power Index (mitad de 2026)", url: "https://www.numbeo.com/cost-of-living/rankings_by_country.jsp" },
];

const clamp = (n) => Math.max(0, Math.min(10, Math.round(n)));
// Seguridad: GPI 1.4 -> 10, 2.65 -> 3. Costo: índice 35 -> 10 (más barato), 75 -> 3.
// Trabajo: poder adquisitivo local 45 -> 2, 135 -> 10.
const derive = ({ gpi, costoVida, poderCompra }) => ({
  seguridad: clamp(10 - (gpi - 1.4) * 5.6),
  costo: clamp(10 - (costoVida - 35) * 0.175),
  trabajo: clamp(2 + (poderCompra - 45) * (8 / 90)),
});

const RAW_COUNTRIES = [
  {
    id: "es", name: "España", lang: ["es"],
    indicadores: { gpi: 1.654, costoVida: 51.4, poderCompra: 96.8 },
    resumen: "Destino habitual para latinoamericanos por idioma y vínculos históricos; el mercado laboral es exigente pero hay vías de arraigo.",
    demanda: { tech: 6, salud: 7, ingenieria: 5, oficios: 7, remoto: 8, otros: 4 },
    demandaVerificada: true,
    familia: 8,
    visaByGroup: { ibero: 8 },
    scores: { visa: 7 },
    vias: ["Visa de trabajo por cuenta ajena (requiere oferta de empleo)", "Visa de nómada digital", "Arraigo: solo tras 2 años de permanencia en España, no sirve para entrar", "Nacionalidad por residencia en 2 años para iberoamericanos"],
    fuente: "https://www.inclusion.gob.es/web/migraciones",
  },
  {
    id: "pt", name: "Portugal", lang: ["pt"],
    indicadores: { gpi: 1.427, costoVida: 48.7, poderCompra: 65.3 },
    resumen: "Seguridad y calidad de vida altas, con salarios moderados; atractivo para brasileños y para quienes trabajan en remoto.",
    demanda: { tech: 6, salud: 6, ingenieria: 5, oficios: 5, remoto: 9, otros: 3 },
    demandaVerificada: false,
    familia: 9,
    visaByGroup: { cplp: 7 },
    scores: { visa: 5 },
    vias: ["Visado D7 (ingresos pasivos)", "Visado D8 (nómada digital)", "Visado de trabajo con contrato", "Visado de búsqueda de empleo cualificado: reformado en oct. 2025, aún sin reglamentar", "Ciudadanía tras 10 años (7 para CPLP)"],
    fuente: "https://aima.gov.pt",
  },
  {
    id: "cl", name: "Chile", lang: ["es"],
    indicadores: { gpi: 1.826, costoVida: 38.7, poderCompra: 50.4 },
    resumen: "Economía estable de la región y misma lengua; trámites que dependen bastante de tener oferta de trabajo.",
    demanda: { tech: 5, salud: 6, ingenieria: 6, oficios: 6, remoto: 6, otros: 4 },
    demandaVerificada: false,
    familia: 6,
    visaByGroup: { mercosur: 8 },
    scores: { visa: 6 },
    vias: ["Residencia temporal por oferta o contrato de trabajo (trámite de 6-8 meses)", "Residencia temporal Mercosur, sin contrato de trabajo previo", "Residencia por vínculo familiar"],
    fuente: "https://serviciomigraciones.cl",
  },
  {
    id: "uy", name: "Uruguay", lang: ["es"],
    indicadores: { gpi: 1.754, costoVida: 54, poderCompra: 56.8 },
    resumen: "Trámite de residencia muy accesible para ciudadanos Mercosur; mercado laboral pequeño.",
    demanda: { tech: 5, salud: 5, ingenieria: 4, oficios: 5, remoto: 7, otros: 4 },
    demandaVerificada: false,
    familia: 7,
    visaByGroup: { mercosur: 9 },
    scores: { visa: 4 },
    vias: ["Residencia Mercosur temporaria (2 años) y luego permanente, para nacionales de países miembros y asociados", "Residencia legal por trabajo o inversión para otras nacionalidades"],
    fuente: "https://www.gub.uy/ministerio-relaciones-exteriores/",
  },
  {
    id: "mx", name: "México", lang: ["es"],
    indicadores: { gpi: 2.65, costoVida: 44.4, poderCompra: 46.8 },
    resumen: "Costo de vida bajo, cercanía cultural y buen destino para trabajo remoto; la seguridad varía según la zona.",
    demanda: { tech: 5, salud: 5, ingenieria: 5, oficios: 6, remoto: 8, otros: 4 },
    demandaVerificada: false,
    familia: 6,
    scores: { visa: 7 },
    vias: ["Residente temporal por solvencia económica (ingresos mensuales de unos 300-400 días de UMA; las fuentes discrepan)", "Residente temporal por oferta de empleo (la empresa debe estar inscripta ante el INM)", "Residencia por vínculo familiar"],
    fuente: "https://www.gob.mx/sre",
  },
  {
    id: "ca", name: "Canadá", lang: ["en"],
    indicadores: { gpi: 1.525, costoVida: 61.3, poderCompra: 114.8 },
    resumen: "Sistema por puntos con altos salarios y seguridad; requiere inglés (o francés) y un proceso largo y competitivo.",
    demanda: { tech: 6, salud: 9, ingenieria: 6, oficios: 8, remoto: 5, otros: 5 },
    demandaVerificada: true,
    familia: 9,
    scores: { visa: 4 },
    vias: ["Express Entry: en 2026 los cortes generales rondan 520-540 puntos (CRS); hay sorteos por categoría con cortes menores", "Nominación provincial (PNP)", "Permiso de estudio y trabajo"],
    fuente: "https://www.canada.ca/es/inmigracion-refugiados-ciudadania.html",
  },
  {
    id: "de", name: "Alemania", lang: ["de"],
    indicadores: { gpi: 1.657, costoVida: 68, poderCompra: 130 },
    resumen: "Fuerte demanda de profesionales calificados y salarios altos; el idioma alemán es la principal barrera.",
    demanda: { tech: 9, salud: 9, ingenieria: 9, oficios: 8, remoto: 6, otros: 5 },
    demandaVerificada: true,
    familia: 8,
    scores: { visa: 5 },
    vias: ["Tarjeta Azul UE (salario mínimo de 50.700 € anuales en 2026; 45.934 € en profesiones con escasez)", "Chancenkarte / Opportunity Card (búsqueda de empleo por puntos; exige alemán A1 o inglés B2 y fondos de unos 1.091 € por mes)", "Visa de trabajo calificado con título reconocido"],
    fuente: "https://www.make-it-in-germany.com/es/",
  },
  {
    id: "au", name: "Australia", lang: ["en"],
    indicadores: { gpi: 1.602, costoVida: 71.4, poderCompra: 134.8 },
    resumen: "Mejores salarios entre los destinos listados, pero el costo de vida es alto y la visa muy selectiva.",
    demanda: { tech: 7, salud: 9, ingenieria: 7, oficios: 9, remoto: 4, otros: 6 },
    demandaVerificada: true,
    familia: 7,
    scores: { visa: 3 },
    vias: ["Skilled Independent (subclase 189): invitaciones por puntaje, con mayoría de salud entre las últimas", "Skilled Employer Sponsored", "Working Holiday (por ejemplo Uruguay, con 1.500 cupos anuales; otros países según acuerdo)"],
    fuente: "https://immi.homeaffairs.gov.au",
  },
];

export const COUNTRIES = RAW_COUNTRIES.map((c) => ({ ...c, scores: { ...c.scores, ...derive(c.indicadores) } }));

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
    const estimated = { visa: true, trabajo: !c.demandaVerificada, familia: true };
    return { ...c, parts, estimated, score: Math.round(total * 10) };
  }).sort((a, b) => b.score - a.score);
}
