---
name: MigraScore
description: Ranking de destinos migratorios presentado como una pila de pasajes de embarque con talon y codigo de barras.
colors:
  navy: "#0A1F44"
  blue: "#0F5B85"
  gold: "#D4AF37"
  gold-text: "#8B6914"
  warm-ground: "#F5F0E8"
  neutral-fill: "#F2F2F2"
  ink-2: "#333333"
  ink-3: "#555555"
  paper: "#FFFFFF"
  thermal-main: "#FDF8EC"
  stub-paper: "#F3EFE4"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
  score-hero:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  brand: "6px"
  seg-item: "3px"
  meter: "2px"
  pill: "999px"
spacing:
  section: "4rem"
  block: "2rem"
  inset: "1.5rem"
  pass-pad: "1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.brand}"
    padding: "0.5rem 1.1rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.navy}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.brand}"
  button-light-hover:
    backgroundColor: "{colors.neutral-fill}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.blue}"
    rounded: "{rounded.brand}"
    padding: "0.5rem 1rem"
    height: "44px"
  chip-pressed:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
  pass-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    padding: "1rem 1.25rem"
  pass-main:
    backgroundColor: "{colors.thermal-main}"
    textColor: "{colors.ink-2}"
    padding: "1.25rem"
  pass-stub:
    backgroundColor: "{colors.stub-paper}"
    padding: "1.25rem"
    width: "230px"
  field-select:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.brand}"
    height: "44px"
  seg-item-checked:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.seg-item}"
    height: "40px"
  delta:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
---

# Design System: MigraScore

## Overview

**Creative North Star: "El pasaje de embarque"**

Cada pais es un pasaje: papel termico blanco sobre un fondo calido, banda navy con el destino, perforado con muescas, y un talon desprendible cuyo codigo de barras es el desglose real del puntaje. El perfil del usuario es el talon "Datos del pasajero" (ticket) en la columna izquierda. La voz es de herramienta operativa: densa pero legible, en voseo, sin decoracion que no cargue informacion.

El sistema muestra de donde sale cada numero. Barras solidas son datos con fuente; barras con trama diagonal son estimaciones editoriales. Georgia lleva destinos y puntajes, Arial la lectura, Courier New solo los codigos de ruta y campos de datos. Azul de marca para la accion, dorado solo como filete decorativo.

Honestidad sobre lo construido: la textura de papel termico es muy tenue (lineas horizontales de 1px al 7% de opacidad sobre #FDF8EC) y apenas se percibe; el pasaje abierto (vista de detalle) elimina el talon y su codigo de barras, y el perforado pierde sus muescas.

**Key Characteristics:**
- Pasaje en tres zonas: banda navy con filete dorado, cuerpo termico, talon con barras.
- Campos de datos en Courier New, mayusculas pequenas, tracking 0.08em.
- Trama diagonal = estimado; sin trama = con fuente.
- Objetivos tactiles de 44px minimo.
- Sombras suaves teñidas de navy; sin bordes duros ni sombras desplazadas.

## Colors

Paleta anclada por la marca: navy y azul profundos sobre un fondo calido, con dorado solo de filete.

### Primary
- **Navy de destino** (navy): banda del pasaje, texto principal, seleccion, encabezado del ticket.
- **Azul de accion** (blue): botones, chips activos, segmentos marcados, foco, barras de datos con fuente.

### Secondary
- **Filete dorado** (gold): unicamente el filete inferior de 3px de las bandas navy (inset shadow).
- **Dorado de tinta** (gold-text): base de las lineas de la textura termica (al 7%); no se usa como texto.

### Neutral
- **Fondo calido** (warm-ground): fondo de pagina y color de las muescas del perforado.
- **Papel** (paper): superficie del ticket, campos, chips.
- **Papel termico** (thermal-main) y **Papel de talon** (stub-paper): cuerpo y talon del pasaje; valores fijos en el CSS del pasaje, no tokens @theme.
- **Relleno neutro** (neutral-fill): hover de chips y segmentos, pista del meter.
- **Tinta 2** (ink-2) para parrafos secundarios; **Tinta 3** (ink-3) para etiquetas, codigos y notas al pie.

### Named Rules
**The Gold Filete Rule.** El dorado aparece solo como filete de 3px bajo una banda navy. Nunca como texto, relleno ni boton.
**The Hatch Means Estimate Rule.** La trama diagonal a 135 grados significa estimacion editorial y nada mas.

## Typography

**Display Font:** Georgia (con Times New Roman, serif)
**Body Font:** Arial (con Helvetica, sans-serif)
**Label/Mono Font:** Courier New (monospace)

**Character:** Serif de periodico para nombres y puntajes, sans neutra para leer, monoespaciada de formulario para campos y codigos.

### Hierarchy
- **Display** (700, 2.25rem, 1.15): h1 en escritorio y nombre del primer pais.
- **Score hero** (700, 3.75rem, 1): puntaje del primer pasaje; 2.75rem en el resto.
- **Headline** (700, 1.5rem, 1.3): h2, nombres de pais, h1 en movil.
- **Title** (600, 1.125rem, 1.4): subtitulos.
- **Body** (400, 1rem, 1.6): lectura.
- **Small** (400, 0.875rem, 1.5): resumenes, botones, chips; limite max-w-prose.
- **Label** (Courier New 600, 0.75rem, 0.08em, mayusculas): campos, dt de celdas, codigos de barra. Ruta en Courier 700, 0.14em.

### Named Rules
**The Mono Is Data Rule.** Courier New solo para codigos de ruta, codigos de dimension y campos de datos; nunca para prosa.
**The Tabular Score Rule.** Puntajes y deltas usan cifras tabulares.

## Layout

Contenedor max-w-6xl, padding 16px (movil) y 32px (md). En lg: grilla de 360px (talon del pasajero, sticky a 1rem del tope, con scroll interno) y 1fr (pila de pasajes, separacion de 20px vertical). En movil el talon va primero, plegable con details, y los pasajes a ancho completo. Pasaje en md+: cuerpo y talon de 230px lado a lado; en movil se apilan banda, cuerpo, talon. Padding interno 1.25rem (1.5rem en md). Ritmo declarado: section 4rem, block 2rem, inset 1.5rem.

## Elevation & Depth

Hibrido: superficies de papel elevadas con sombras difusas teñidas de navy, mas profundidad estructural por perforado y muescas.

### Shadow Vocabulary
- **brand-sm** (`0 1px 4px 0 rgba(10,31,68,0.08)`): pasajes en la pila.
- **brand** (`0 4px 16px 0 rgba(10,31,68,0.12)`): ticket del pasajero.
- **brand-lg** (`0 8px 32px 0 rgba(10,31,68,0.16)`): definida en @theme; no se observo uso en el CSS revisado.
- **Filete** (`inset 0 -3px 0 #D4AF37`): borde inferior de bandas navy.

### Named Rules
**The Soft Paper Rule.** Sombras solo difusas y teñidas de navy; ninguna sombra dura desplazada.

## Shapes

Radio unico de 6px (brand) para pasajes, ticket, campos, chips, botones; 3px para items de segmento, 2px para el meter, 1px para barras, pildora para delta, circulos de 24px para muescas. Perforado: linea discontinua de 2px navy al 35-40% con dos muescas circulares del color de fondo calido, en horizontal (movil) o vertical (md+, a 230px del borde derecho).

## Components

### Buttons
- **Shape:** radio 6px, minimo 44px de alto.
- **Primary (btn):** fondo azul, texto blanco, 600 0.875rem; hover navy.
- **Light (btn-light):** fondo blanco, texto navy; hover relleno neutro.

### Chips
- **Style:** fondo blanco, borde y texto azul; presionado (aria-pressed) azul solido, texto blanco, 600. Hover relleno neutro.

### Inputs / Fields
- **Field select:** blanco, borde navy al 35%, 44px; hover borde navy. Etiqueta en Courier mayusculas (field-label).
- **Seg:** control de 4 opciones con marco de 6px y padding de 3px; item marcado azul solido con texto blanco.
- **Focus global:** contorno de 3px azul con offset 2px (blanco dentro de la banda navy).

### Pass (signature)
Ticket = talon del pasajero: cabecera navy con filete, cuerpo blanco. Pass = pasaje: pass-band (destino, bandera, ruta en Courier, delta), pass-main (resumen, celdas Suma/Resta en Courier), pass-stub (puntaje Georgia y codigo de barras). Animacion de impresion (clip-path, 0.7s, escalonada 80ms por puesto; desactivada con prefers-reduced-motion). Pass-open (detalle) es bloque sin talon ni muescas.

### Barcode, bar-src / bar-est, meter, delta
Seis barras de anchos distintos (16, 9, 18, 9, 14, 11px), altura proporcional al subpuntaje, con codigo de tres letras debajo. bar-src azul solido; bar-est trama diagonal azul con borde de 1.5px. Meter: pista de 10px con relleno. Delta: pildora blanca con triangulo SVG y cambio de puestos.

## Do's and Don'ts

### Do:
- **Do** usar azul (#0F5B85) para toda accion y navy (#0A1F44) para banda y hover.
- **Do** marcar toda estimacion editorial con bar-est y todo dato con fuente con bar-src.
- **Do** mantener objetivos de 44px y foco visible de 3px.
- **Do** dar a cada dimension un codigo de tres letras en Courier bajo su barra.

### Don't:
- **Don't** usar dorado fuera del filete decorativo de 3px.
- **Don't** usar Courier New para prosa.
- **Don't** usar sombras duras desplazadas ni radios distintos de la escala existente.
- **Don't** usar tinta mas clara que ink-3 (#555555) para texto legible.
