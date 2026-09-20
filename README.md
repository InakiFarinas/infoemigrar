# MigraScore

Herramienta para comparar países de destino migratorio y obtener un ranking personalizado, pensada para hispanohablantes de Latinoamérica.

## Qué hace

- Cuestionario: nacionalidad de origen, profesión, con quién migrás, prioridades (visa, trabajo, costo, seguridad) e idiomas.
- Ranking de 8 países (España, Portugal, Chile, Uruguay, México, Canadá, Alemania, Australia) con puntaje de 0 a 100.
- Ficha por país: resumen, desglose del puntaje, vías migratorias y enlace a la fuente oficial.

## Stack

React 18, Vite, Tailwind CSS 4. Sin backend: los datos son estáticos en `src/data/countries.js`.

## Desarrollo

```bash
npm install
npm run dev
```

## Estado de los datos

- **Con fuente:** seguridad (Global Peace Index 2026), costo de vida y poder adquisitivo (Numbeo, mitad de 2026). Se guardan como `indicadores` en `src/data/countries.js` y los puntajes se derivan con fórmulas allí documentadas.
- **Estimaciones editoriales (pendientes de validar):** facilidad de visa por país y grupo de origen, demanda por profesión y puntaje de familia.

Los resultados son orientativos y no constituyen asesoría legal.

## Marca

Ver [branding.md](branding.md).
