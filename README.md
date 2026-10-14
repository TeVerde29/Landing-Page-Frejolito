# Pagina-web-Frejolito — landing vitrina del restaurante mexicano El Frejolito

> Página estática de una sola vista para ver la tienda, los platos y la carta de El Frejolito (Pucallpa), y pedir por WhatsApp.

[![Estado: activo](https://img.shields.io/badge/Estado-activo-green)](https://github.com/TeVerde29/Pagina-web-Frejolito)
![HTML5](https://img.shields.io/badge/HTML5-estático-orange)
![Tailwind Play CDN](https://img.shields.io/badge/Tailwind-Play_CDN-blue)
![Lenis 1.1.14](https://img.shields.io/badge/Lenis-1.1.14-purple)
![GSAP 3.12.5](https://img.shields.io/badge/GSAP-3.12.5-red)

## Capturas

| Hero nocturno con logo y CTAs | Carta con filtros por categoría |
|---|---|
| ![Hero de El Frejolito con foto del local de noche, logo circular y botones Explorar la carta y Pedir por WhatsApp](img/hero.png) | ![Carta completa con tarjetas de platos, precios en soles y botón Pedir por WhatsApp](img/carta.png) |

El cliente recorre la página, filtra la carta por categoría y pulsa Pedir: se abre WhatsApp con el mensaje ya armado. El dueño actualiza platos y precios editando el arreglo `ITEMS` en `app.js`.

## Tabla de contenidos

- [Descripción](#descripción)
- [Características principales](#características-principales)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Instalación y uso](#instalación-y-uso)
- [Requisitos del sistema](#requisitos-del-sistema)
- [Carta y formato del pedido](#carta-y-formato-del-pedido)
- [Verificación](#verificación)
- [Notas de deploy](#notas-de-deploy)
- [Autor](#autor)

## Descripción

El Frejolito atiende de noche en Yarinacocha (Pucallpa) y recibe pedidos por WhatsApp al +51 907 318 885. Necesitaba una vitrina que muestre el local, los platos con foto real y la carta con precios en soles, sin carrito ni backend que mantener.

La página resuelve eso con un solo `index.html` más `styles.css` y `app.js`: hero de pantalla completa con `local.jpg`, sección La tienda, 3 platos estrella con foto (`taco bel.jpg`, `chamoyada.jpg`, `varios platos en taper para pedidos.jpg`), carta filtrable por 6 categorías, ubicación con horario y enlace a Google Maps, CTA final y botón flotante de WhatsApp.

Decisiones clave: sitio 100% estático, sin `package.json` ni build — se publica tal cual. La carta vive en el arreglo `ITEMS` de `app.js`, no en un CMS: cada plato define categoría, nombre, precio, descripción, etiqueta y fragmento de mensaje. Cada botón Pedir construye una URL `https://wa.me/51907318885?text=...` con el plato precargado. El scroll suave usa Lenis 1.1.14 sincronizado al `ticker` de GSAP y los reveals usan ScrollTrigger; con `prefers-reduced-motion` todo el movimiento se desactiva.

## Características principales

- **Hero nocturno estilo Arko:** foto del local a pantalla completa con parallax al scroll (`yPercent: 14` con scrub), logo circular, titular en fuente western y doble CTA.
- **Carta filtrable sin recargar:** 15 platos en 6 tabs (todos, tacos, quesadillas-nachos, alitas, chamoyadas-bebidas, dulces); al filtrar se refresca ScrollTrigger para no romper el scroll.
- **Pedido por WhatsApp plato a plato:** cada tarjeta arma su mensaje (`quiero+Tacos+Birria+x3`); el botón flotante usa mensaje genérico de delivery.
- **Identidad del local:** logo real `logo.png` en nav, hero, footer y favicon; display en `Rye` (la del rótulo en `logo con letra.png`), precios en `Lilita One`, cuerpo en `Plus Jakarta Sans`.
- **Paleta de `design.md`:** crema `#FDF3DC`, noche `#0E0B0A`, rojo chamoy `#D91E2A`, mango `#FFB627`, guacamole `#5A9A3B`.
- **SEO local y datos estructurados:** meta description, JSON-LD `Restaurant` con dirección, teléfono, horario y mapa.

## Stack tecnológico

| Capa | Tecnología | Función |
|---|---|---|
| Estructura | HTML5 en `index.html` | Secciones, nav, hero, carta, footer |
| Estilos | `styles.css` + Tailwind Play CDN | Tokens, cards oscuras, marquee, animaciones |
| Interacción | `app.js` (JS vanilla, sin build) | Render de carta, tabs, anclas |
| Scroll suave | Lenis 1.1.14 (unpkg) | `lerp: .11`, integrado a `gsap.ticker` |
| Animación | GSAP 3.12.5 + ScrollTrigger 3.12.5 (cdnjs) | Parallax hero y reveals `[data-reveal]` |
| Tipografías | Google Fonts: Rye, Lilita One, Plus Jakarta Sans | Display, precios, cuerpo |
| Datos | `design.md`, `carta.jpeg`, `FREJOLITO_dulces.pdf` | Fuente de paleta, precios y dulces |

## Arquitectura

```text
Pagina-web-Frejolito/
├── index.html   # Estructura y contenido: nav, hero, tienda, platos, carta, ubicación, footer
├── styles.css   # CSS propio: variables, glass, card-dark, marquee, wa-float, reveals
├── app.js       # Carta (ITEMS + render + tabs) y motion (Lenis + GSAP + anclas + nav)
├── design.md    # Sistema de diseño: paleta, tipografías, carta transcrita, plan de secciones
├── img/         # Capturas del README: hero.png, carta.png
├── logo.png                 # Logo circular (nav, hero, footer, favicon)
├── logo con letra.png       # Referencia del lockup horizontal y la fuente western
├── local.jpg                # Foto del local de noche (hero y ubicación)
├── taco bel.jpg             # Foto tacos birria (plato estrella)
├── chamoyada.jpg            # Foto chamoyada de mango (plato estrella)
├── varios platos en taper para pedidos.jpg  # Foto combos (plato estrella)
├── carta.jpeg               # Foto de la carta física (transcrita en design.md)
└── FREJOLITO_dulces.pdf     # Carta de dulces mexicanos
```

- **Sin backend ni estado:** no hay API, formularios ni almacenamiento; el "pedido" es un deep link a WhatsApp.
- **Render en cliente:** la grilla `#grid` se pinta desde `ITEMS`; el HTML trae las 3 tarjetas estrella fijas y el resto lo genera `renderBase()`.
- **Motion aislado:** todo Lenis/GSAP vive al final de `app.js` con guardas `try/catch` y fallback a scroll nativo si el CDN falla.
- **Assets con espacios:** los `.jpg` con espacios en el nombre se referencian codificados (`taco%20bel.jpg`); funcionan, pero conviene renombrarlos sin espacios a futuro.

## Instalación y uso

1. Clona el repo: `git clone https://github.com/TeVerde29/Pagina-web-Frejolito.git`.
2. Entra a la carpeta: `cd Pagina-web-Frejolito`.
3. Levanta un servidor local (verificado con 200 en todos los assets): `python -m http.server 8000`.
4. Abre `http://localhost:8000/index.html`. Requiere internet para los CDN (Tailwind, Lenis, GSAP, Fonts).

Flujo básico de uso:

1. El visitante entra al hero y pulsa Explorar la carta o Pedir por WhatsApp.
2. Filtra la carta con los tabs (tacos, alitas, dulces...).
3. Pulsa Pedir en un plato: se abre `wa.me` con el mensaje del plato listo para enviar.
4. Para cambiar precios o platos, edita el arreglo `ITEMS` en `app.js:4` y recarga.

## Requisitos del sistema

| Componente | Requisito mínimo |
|---|---|
| Navegador | Chrome, Edge, Firefox o Safari actual (CSS moderno + `backdrop-filter`) |
| Conexión | Internet activo para CDN y Google Fonts |
| Servidor local | Python 3 (`http.server`) o cualquier estático (Live Server, `npx serve`) |
| Pantalla | Responsive desde 360px; capturas tomadas a 1280px |

## Carta y formato del pedido

Cada entrada de `ITEMS` (`app.js:4`) usa este formato:

```js
{c:'tacos', t:'Tacos Birria x3', p:'S/28',
 d:'Adobo birria, carne jugosa, queso fundido + consomé. x2 a S/14.',
 tag:'Más pedido', m:'quiero+Tacos+Birria+x3'}
```

`c` es la categoría del tab, `p` el precio en soles, `tag` la etiqueta de la tarjeta y `m` el fragmento del mensaje. El link final queda así:

```text
https://wa.me/51907318885?text=Hola%20Frejolito%2C%20quiero+Tacos+Birria+x3
```

Precios pendientes de validar con el local (ver `design.md`): Enchiladas Rojas (sticker corregido a S/18 en foto), Frappes S/10 vs S/12 y gaseosas en vidrio.

## Verificación

1. Estructura: `index.html` enlaza `./styles.css` y `./app.js`; no quedan bloques `<style>` ni `<script>` propios inline.
2. Assets: las 5 fotos y `logo.png` responden 200 en el servidor local (verificado en log del 2026-10-14).
3. Carta: 15 items en 6 categorías; cada tab muestra solo su grupo y el botón Pedir lleva el mensaje del plato.
4. Movimiento: scroll suave sin saltos, parallax del hero y reveals por sección; con `prefers-reduced-motion` la página queda estática y legible.
5. Capturas: `img/hero.png` e `img/carta.png` tomadas del sitio corriendo en local a 1280px.

## Notas de deploy

1. Es un sitio estático: basta servir la carpeta tal cual (GitHub Pages, Netlify, Cloudflare Pages).
2. GitHub Pages aún no está activo: `https://teverde29.github.io/Pagina-web-Frejolito/` devuelve 404 (verificado 2026-10-14). Para activarlo: Settings → Pages → Deploy from branch → `main` / root.
3. Los nombres de archivo con espacios funcionan codificados, pero renombrarlos (ej. `taco-bel.jpg`) evita errores al mover de hosting.

---

**Autor**

**TeVerde29** — GitHub: [TeVerde29](https://github.com/TeVerde29) · Repo: [Pagina-web-Frejolito](https://github.com/TeVerde29/Pagina-web-Frejolito) · Negocio: El Frejolito, restaurante mexicano en Pucallpa (WhatsApp +51 907 318 885)

---

Si este proyecto te resultó útil, considera darle una estrella en GitHub.
