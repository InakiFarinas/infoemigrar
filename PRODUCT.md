# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Latinoamericanos que aún no decidieron a qué país emigrar y comparan destinos según su perfil: nacionalidad de origen, profesión, si viajan solos o en familia, idiomas y prioridades (visa, trabajo, costo, seguridad). Llegan con incertidumbre y poca información confiable; el trabajo a hacer es pasar de "no sé por dónde empezar" a una lista corta de países con motivos claros.

## Product Purpose

Ayudar a elegir un país de destino con un ranking personalizado y explicado, y a entender las vías migratorias de cada uno. El éxito es que la persona salga con 2-3 destinos plausibles y sepa dónde verificar los requisitos oficiales.

## Positioning

Puntaje personalizado y transparente: cada ficha muestra cómo se compone el puntaje, de qué indicador sale cada dato y cuándo se revisó. Está pensado para hispanohablantes: considera acuerdos y ventajas que dependen de la nacionalidad (residencia Mercosur, nacionalidad en 2 años para iberoamericanos, CPLP) y el idioma del usuario.

## Operating Context

Sin backend: los datos son estáticos en `src/data/countries.js`. Indicadores con fuente: Global Peace Index 2026 y Numbeo mitad de 2026. Las vías migratorias se revisaron en septiembre de 2026 contra fuentes secundarias (estudios jurídicos y blogs, no sitios oficiales). El puntaje de visa, la demanda por profesión de Portugal, Chile, Uruguay y México, y el puntaje de familia son estimaciones editoriales marcadas como tales en la ficha.

## Capabilities and Constraints

- Cuestionario: nacionalidad (11 países latinoamericanos), profesión (6 categorías), familia (solo, pareja, hijos), prioridades (sliders 0-3) e idiomas.
- Ranking de 8 países: España, Portugal, Chile, Uruguay, México, Canadá, Alemania, Australia. El país de origen se excluye.
- Ficha por país: resumen, desglose del puntaje, datos de referencia, vías migratorias, fuente oficial y aviso legal.
- Stack existente: React 18, Vite, Tailwind CSS 4.
- Decisión abierta: modelo de monetización (sin definir).
- Los resultados son orientativos y no constituyen asesoría legal; los requisitos cambian y deben verificarse en la fuente oficial.

## Brand Commitments

- Nombre: InfoEmigrar como marca (branding.md, meta tags, favicon y og-image) y MigraScore como nombre de la herramienta de ranking. Asignación recomendada por el asistente y delegada por el usuario; puede revisarse.
- Sistema de marca existente en `branding.md`: concepto valija + ícono de información, tono confiable, cálido y claro para personas en proceso migratorio.
- Voz: español rioplatense (voseo) en la interfaz actual.

## Evidence on Hand

- Datos con fuente: Global Peace Index 2026, Numbeo (mitad de 2026), listas de escasez de Alemania, Australia, Canadá y España consultadas en 2026.
- Assets: `public/favicon.png`, `public/og-image.jpg`, `branding.md`.
- No hay testimonios, casos de éxito, métricas de uso ni precios. No inventarlos.

## Product Principles

1. Transparencia antes que precisión aparente: mostrar de dónde sale cada puntaje y marcar lo que es estimación.
2. Los datos migratorios envejecen: toda cifra lleva fuente y fecha de revisión.
3. Orientar, no asesorar: dirigir siempre a la fuente oficial y no prometer resultados legales.
4. Pocos países bien hechos valen más que muchos mal hechos.
5. Hablarle a la persona en proceso migratorio con claridad y calidez, sin jerga legal.
