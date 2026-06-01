# 4x4 Truck Store

Solución del desafío de Media Queries / Electric Car Store adaptado a camionetas 4x4.

## Cómo abrirlo en VS Code con Live Server

1. Abre la carpeta `pickup_4x4_store_v2` en VS Code.
2. Instala la extensión **Live Server**, si no la tienes.
3. Haz clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.
5. Prueba los anchos:
   - Mobile: menos de 576px.
   - Tablet: desde 576px.
   - Desktop: desde 992px.

## Funcionalidades añadidas

- El selector **Ordenar por** reordena las tarjetas con JavaScript.
- Cada botón **Ver más** abre una página HTML individual del vehículo.
- Cada página de vehículo incluye una foto real centrada arriba y una tarjeta tipo datasheet debajo.
- Las fotos reales usan Wikimedia Commons; si no hay internet, cada detalle usa una imagen SVG local como respaldo.

## Requisitos cubiertos

- Layout Mobile y layout Escritorio.
- Versión Tablet opcional incluida.
- CSS Grid con `grid-template-areas`.
- Flexbox dentro del menú, filtros, cards, paginación, footer y tarjetas de datasheet.
- 4 secciones: menú, filtros, sección principal y pie de página.
- Iconos MDI mediante CDN.
- Colores organizados como roles Material Design 3 (`--md-sys-color-*`).

## Estructura

```txt
pickup_4x4_store_v2/
├── index.html
├── README.md
├── vehiculos/
│   ├── toyota-hilux.html
│   ├── ford-ranger.html
│   ├── mitsubishi-l200.html
│   ├── nissan-navara.html
│   ├── chevrolet-dmax.html
│   ├── volkswagen-amarok.html
│   ├── mazda-bt50.html
│   └── ram-1000.html
└── assets/
    ├── css/styles.css
    ├── js/sort.js
    └── img/*.svg
```
