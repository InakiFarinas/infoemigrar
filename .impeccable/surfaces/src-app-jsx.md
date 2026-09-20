---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: []
---

# Surface brief: página principal (herramienta MigraScore)

Scope: página única con cuestionario, ranking y ficha por país. Modo: Operate.

Audiencia y tarea: latinoamericano que compara destinos; carga su perfil y obtiene un ranking explicado, entra a la ficha de un país y sale sabiendo dónde verificar. Estados clave: perfil por defecto, resultados en vivo, ficha abierta, dato estimado vs con fuente. Restricciones: paleta y tipografía de branding.md (navy, azul, dorado solo decorativo, cálido, Georgia y Arial), voseo, sin backend.

Momento memorable: el código de barras de cada pasaje es el desglose real del puntaje; la trama marca lo estimado.

Unresolved: monetización.

## Direction contract

THESIS: cada país es un pasaje de embarque con talón desprendible; el ranking es una pila de pasajes ordenada por puntaje y tu perfil es el talón de datos del pasajero. Rechaza el arreglo por defecto de formulario arriba y tarjetas iguales debajo.

OWN-WORLD: papel térmico blanco sobre fondo cálido, banda navy con el destino, perforado con muescas laterales, campos de datos en mayúsculas pequeñas, código de barras hecho de barras que miden cada dimensión del puntaje, trama diagonal para lo estimado. Georgia para destinos y puntaje, Arial para lectura, Courier New solo para códigos de ruta y campos de datos. Azul de marca para acción, dorado solo en filetes decorativos.

STORY: la persona entiende en segundos que es un buscador de destino, completa su perfil en el talón, ve pasajes reordenarse en vivo, abre uno y comprueba de dónde sale cada número; cree en el puntaje porque muestra qué es estimación; actúa yendo a la fuente oficial.

FIRST VIEWPORT: en escritorio, columna izquierda de 360px con el talón "Datos del pasajero" (nacionalidad, profesión, familia, prioridades, idiomas) y a la derecha la pila de pasajes: el primero al tope con ruta ES codificada, nombre grande, puntaje grande y talón con código de barras. Título h1 sobre la pila, marca InfoEmigrar como logotipo horizontal arriba a la izquierda. En móvil el talón va primero y los pasajes debajo a ancho completo.

FORM: pasaje de embarque, primera de mi lista ordenada por resonancia (elección de Impeccable), seed key 256bbbde.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
