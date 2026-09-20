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

Los puntajes, la demanda por profesión y los grupos de acceso preferencial a visas son **preliminares**: deben curarse con fuentes reales (World Bank, Numbeo, Global Peace Index, sitios oficiales de migración) antes de publicar. Los resultados son orientativos y no constituyen asesoría legal.

## Marca

Ver [branding.md](branding.md).
