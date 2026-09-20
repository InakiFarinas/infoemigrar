# Infoemigrar — Brand Reference

> Este archivo define el sistema de diseño de Infoemigrar.
> Úsalo como fuente de verdad al generar o revisar código Tailwind para este proyecto.

---

## Identidad visual

**Concepto:** Valija (migración) + ícono de información (i) = marca dual legible.
**Tono:** Confiable, cálido, claro. Para personas en proceso migratorio.
**Versión del sistema:** 1.0 — Mayo 2025

### Variaciones del logotipo

| Pieza                | Uso principal                                                            |
| -------------------- | ------------------------------------------------------------------------ |
| Isotipo              | App icon, favicon, sello — solo cuando el contexto ya establece la marca |
| Logotipo             | Texto puro, cuando el isotipo ya está presente                           |
| Imagotipo vertical   | Encabezados, presentaciones, impresión                                   |
| Imagotipo horizontal | Navbar, header mobile, redes sociales — **versión preferida en digital** |

---

## Tokens de color

### Paleta oficial

| Token             | HEX       | Uso                                                                                      |
| ----------------- | --------- | ---------------------------------------------------------------------------------------- |
| `brand-navy`      | `#0A1F44` | Texto del logotipo. Títulos. Color tipográfico principal. WCAG AAA sobre blanco (13.4:1) |
| `brand-blue`      | `#0F5B85` | Círculo del ícono. Botones primarios. Links. Elementos interactivos. WCAG AA (5.1:1)     |
| `brand-gold`      | `#D4AF37` | **Solo decorativo.** Asa/refuerzos de la valija. Bordes ornamentales. NUNCA en texto     |
| `brand-gold-text` | `#8B6914` | Única versión del dorado apta para texto. WCAG AA (5.4:1)                                |
| `brand-warm`      | `#F5F0E8` | Cuerpo de la valija. Fondos cálidos. Alternativa al blanco puro                          |
| `brand-neutral`   | `#F2F2F2` | Fondos de sección neutros                                                                |

### Colores de texto

| Uso                      | Color             | HEX       |
| ------------------------ | ----------------- | --------- |
| Texto principal          | `brand-navy`      | `#0A1F44` |
| Texto secundario         | Gris oscuro       | `#333333` |
| Texto terciario / labels | Gris medio        | `#555555` |
| Texto sobre fondo azul   | Blanco            | `#FFFFFF` |
| Texto en tono dorado     | `brand-gold-text` | `#8B6914` |

### Regla crítica de contraste (WCAG 2.1)

```
brand-navy  sobre blanco  → 13.4:1  ✓ AAA
brand-blue  sobre blanco  →  5.1:1  ✓ AA
brand-blue  con texto blanco →  5.1:1  ✓ AA
brand-gold  sobre blanco  →  2.3:1  ✗ FALLA — nunca usar como texto
brand-gold-text sobre blanco → 5.4:1  ✓ AA
```

---

## Tailwind CSS — Configuración

Agrega esto en `tailwind.config.js` (o `tailwind.config.ts`):

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					navy: "#0A1F44",
					blue: "#0F5B85",
					gold: "#D4AF37",
					"gold-text": "#8B6914",
					warm: "#F5F0E8",
					neutral: "#F2F2F2",
				},
			},
			fontFamily: {
				brand: ["Georgia", "Times New Roman", "serif"], // logotipo, títulos
				body: ["Arial", "Helvetica", "sans-serif"], // cuerpo, UI
				mono: ["Courier New", "monospace"], // código, valores HEX
			},
			fontSize: {
				display: ["2.25rem", { lineHeight: "1.15", fontWeight: "700" }], // 36px — títulos de sección
				heading: ["1.5rem", { lineHeight: "1.3", fontWeight: "700" }], // 24px — subtítulos
				subhead: ["1.125rem", { lineHeight: "1.4", fontWeight: "600" }], // 18px — sub-subtítulos
				body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px — cuerpo
				small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // 14px — texto secundario
				label: ["0.75rem", { lineHeight: "1.4", fontWeight: "500" }], // 12px — labels/badges
			},
			borderRadius: {
				brand: "6px", // border-radius estándar para botones y cards
			},
			boxShadow: {
				"brand-sm": "0 1px 4px 0 rgba(10,31,68,0.08)",
				brand: "0 4px 16px 0 rgba(10,31,68,0.12)",
				"brand-lg": "0 8px 32px 0 rgba(10,31,68,0.16)",
			},
			spacing: {
				section: "4rem", // separación entre secciones
				block: "2rem", // separación entre bloques
				inset: "1.5rem", // padding interior de cards/panels
			},
		},
	},
	plugins: [],
};
```

---

## Clases de uso frecuente

### Botones

```jsx
// Primario — acción principal
<button className="bg-brand-blue text-white font-body font-semibold px-5 py-2.5 rounded-brand hover:bg-brand-navy transition-colors">
  Buscar información
</button>

// Secundario — acción alternativa
<button className="border border-brand-blue text-brand-blue font-body font-semibold px-5 py-2.5 rounded-brand hover:bg-brand-blue hover:text-white transition-colors">
  Ver más
</button>

// Ghost / terciario
<button className="text-brand-blue font-body font-medium underline-offset-2 hover:underline">
  Leer más
</button>
```

### Tipografía

```jsx
// Título principal de sección
<h1 className="font-brand text-display text-brand-navy">Infoemigrar</h1>

// Subtítulo
<h2 className="font-brand text-heading text-brand-blue">Información para migrantes</h2>

// Cuerpo de texto
<p className="font-body text-body text-[#333333]">Texto descriptivo de la plataforma.</p>

// Label / badge
<span className="font-body text-label text-[#555555] uppercase tracking-widest">Categoría</span>

// Texto en dorado (solo informativo, nunca decorativo puro)
<span className="font-body text-brand-gold-text font-semibold">Destacado</span>
```

### Navbar / Header

```jsx
// Imagotipo horizontal — versión preferida en digital
<header className="bg-white border-b border-brand-neutral h-14 flex items-center px-6">
  <img src="/infoemigrar-imagotipo-horizontal.png" alt="Infoemigrar" className="h-8" />
</header>

// Variante sobre fondo navy
<header className="bg-brand-navy h-14 flex items-center px-6">
  {/* usar versión del logotipo en blanco */}
</header>
```

### Cards

```jsx
// Card estándar
<div className="bg-white rounded-brand shadow-brand p-inset border border-brand-neutral">
  <h3 className="font-brand text-subhead text-brand-navy mb-2">Título</h3>
  <p className="font-body text-body text-[#333333]">Descripción.</p>
</div>

// Card con fondo cálido
<div className="bg-brand-warm rounded-brand p-inset">
  <h3 className="font-brand text-subhead text-brand-navy mb-2">Título</h3>
  <p className="font-body text-small text-[#555555]">Descripción secundaria.</p>
</div>

// Card destacada (borde azul)
<div className="bg-white rounded-brand shadow-brand-sm border-l-4 border-brand-blue p-inset">
  <p className="font-body text-body text-brand-navy font-semibold">Información importante</p>
</div>
```

### Badges / Tags

```jsx
// Informativo
<span className="bg-brand-blue/10 text-brand-blue font-body text-label font-medium px-3 py-1 rounded-full">
  Trámite
</span>

// Destacado
<span className="bg-brand-navy text-white font-body text-label font-medium px-3 py-1 rounded-full">
  Nuevo
</span>

// Advertencia (dorado accesible)
<span className="bg-brand-gold/20 text-brand-gold-text font-body text-label font-semibold px-3 py-1 rounded-full">
  Atención
</span>
```

### Fondos de sección

```jsx
// Sección principal — blanco
<section className="bg-white py-section px-6">...</section>

// Sección alternada — cálido
<section className="bg-brand-warm py-section px-6">...</section>

// Sección hero — navy
<section className="bg-brand-navy py-section px-6 text-white">...</section>

// Sección highlight — azul
<section className="bg-brand-blue py-section px-6 text-white">...</section>
```

### Links

```jsx
// Link estándar en texto
<a className="text-brand-blue underline-offset-2 hover:underline">Ver detalle</a>

// Link de navegación
<a className="text-brand-navy font-body font-medium hover:text-brand-blue transition-colors">Inicio</a>
```

### Divisores decorativos

```jsx
// Divisor azul (separador de sección)
<hr className="border-brand-blue border-t-2 my-block" />

// Divisor dorado (acento decorativo)
<hr className="border-brand-gold border-t my-4" />

// Divisor neutro
<hr className="border-brand-neutral my-block" />
```

---

## Lo que NUNCA se hace en este proyecto

```
❌  text-yellow-* / text-amber-* como sustituto del dorado de marca
❌  bg-brand-gold con texto encima (contraste 2.3:1, falla WCAG)
❌  Colores Tailwind genéricos (blue-500, gray-800) mezclados con la paleta de marca
❌  font-sans en títulos — los títulos usan font-brand (Georgia)
❌  border-radius mayor a rounded-brand (6px) en componentes de marca
❌  Sombras distintas a las definidas en boxShadow.brand-*
❌  El isotipo rotado, deformado o con efectos (drop-shadow, grayscale, etc.)
❌  Cualquier referencia al isologo — fue eliminado del sistema
```

---

_Versión 1.0 — Mayo 2025 | Sistema de identidad visual Infoemigrar_
