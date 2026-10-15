# EL FREJOLITO — Sistema de diseño v2 (estado real del landing)

> Vitrina estática de una sola página: tienda + platos + carta filtrable + WhatsApp. Sin backend, sin carrito. Mobile-first (el grueso del tráfico entra por celular).

## 1. Datos del negocio

- **Nombre:** EL FREJOLITO — RESTAURANTE MEXICANO
- **Dirección:** Última cuadra de La Unión con Alamedas, al costado de Borrachitas Restobar, Yarinacocha, Pucallpa
- **Maps:** https://maps.app.goo.gl/ANJeAQ7se5evK2Cr7
- **Horario:** Mié a Lun 6:00pm – 10:00pm (martes cerrado)
- **WhatsApp:** +51 907 318 885 → `https://wa.me/51907318885?text=...` (cada plato arma su mensaje)
- **Instagram:** https://www.instagram.com/el.frejolito/ · **TikTok:** https://www.tiktok.com/@el.frejolito

## 2. Stack real

| Capa | Qué hay |
|---|---|
| Estructura | `index.html` único (nav, hero, tienda, platos, carta, opiniones, visítanos, cierre, footer) |
| Estilos | `styles.css` (tokens, componentes) + Tailwind Play CDN (utilidades) |
| Lógica | `app.js` vanilla con `defer` (carta `ITEMS` + tabs + anclas + motion) |
| Scroll | Lenis 1.1.14 (`defer`, solo rueda; el touch usa scroll nativo) |
| Animación | GSAP 3.12.5 + ScrollTrigger (`defer`, con guardas y fallback estático) |
| SEO local | meta description + JSON-LD `Restaurant` (dirección, teléfono, horario, mapa) |

## 3. Paleta (tokens en `:root` + config Tailwind, sin hex sueltos)

| Token | HEX | Uso |
|---|---|---|
| `--crema-maiz` / `crema` | `#FDF3DC` | Texto base sobre oscuro |
| `--negro-tatemado` / `noche` | `#0E0B0A` | Fondo página, texto sobre botones claros |
| `carbon` | `#161110` | Fondos de sección alternos, glass |
| `card` | `#1B1412` | Cards oscuras |
| `--rojo-chamoy` / `chamoy` | `#D91E2A` | Primario: carta, badges, hovers |
| `chamoyl` | `#FF7A7A` | Texto pequeño sobre oscuro (≥4.5:1), hovers |
| `birria` | `#8C1D18` | Profundidad, degradado fallback dulces (retirado, queda el token) |
| `--amarillo-mango` / `mango` | `#FFB627` | Precios, marquee, focos, GPS |
| `--verde-guac` / `guac` | `#5A9A3B` | Badges fresco/compartir |
| `--whatsapp` / `wa` | `#25D366` | Botones de pedido + flotante (ver §6: el verde se usa en CTAs de WhatsApp) |
| `lena` | `#6B4226` | Reservado, casi sin uso |

Regla: fondo noche 100% (sitio oscuro), acentos rojo/mango/verde. Transparencias con `color-mix()` sobre tokens, nunca `rgba()` crudo. Texto normal ≥ `crema/70`; nada bajo 12px.

## 4. Tipografías (Google Fonts, `display=swap`)

| Rol | Fuente | Dónde |
|---|---|---|
| Display | `Rye` (western del logo) | Hero, títulos de sección, logo nav/footer |
| Precios / destacados | `Lilita One` + `tabular-nums` | Precios, stats del hero |
| Filas de carta | `font-menu` → Georgia local (se retiró Cormorant web para ahorrar peso) | Nombres de platos, titular de cierre |
| Cuerpo | `Plus Jakarta Sans` 400–800, `line-height:1.6` | Párrafos, descripciones, botones |

## 5. Secciones (orden real)

1. **Nav fija** (`#nav`, `z-50`): logo + links (Tienda/Platos/Carta/Opiniones/Visítanos, `aria-label="Principal"`) + pill `btn-wa`. Fondo `glass` que se oscurece al scrollear.
2. **Hero** (`#inicio`, `min-h-[100svh]`): foto `local.webp` con `srcset` 800/1600 + parallax (`yPercent:14`), overlay noche + viñeta + velo chamoy; logo, titular Rye "Sabor mexicano en Pucallpa", doble CTA (`btn-carta` / `btn-wa`), stats 2×2 en móvil, marquee mango (pausa en hover/focus, duplicado `aria-hidden`), hint que se elimina al primer scroll.
3. **La tienda** (`#la-tienda`): foto + tarjeta glass superpuesta + badge guac + 3 bullets (`card-dark`).
4. **Favoritos** (`#platos`): 3 cards con foto real (Birria / Chamoyada / Bell), badge, precio mango, link Pedir 44px.
5. **Carta** (`#carta`): 5 tabs (`role=tablist`, flechas/Home/End, `aria-selected`) + 15 filas editoriales numeradas (nombre serif, descripción, precio mango, Pedir→WhatsApp) + enlace a foto de carta original. Estado vacío con salida a WhatsApp.
6. **Opiniones** (`#opiniones`): 3 reseñas Google Maps con estrellas SVG (`sr-only` + `aria-hidden`) + link a Maps.
7. **Visítanos** (`#visitanos`): dirección + horario en cards + `btn-gps` / `btn-ghost` + tarjeta foto con pill "Hoy 6–10pm".
8. **Cierre**: titular serif centrado, pill `btn-wa`, motivo de círculos concéntricos, footer en 4 columnas (marca, visítanos, horario, contacto con iconos SVG teléfono/IG/TikTok).

## 6. Botones (clases en `styles.css`, todos con `:active scale(.97)`)

| Clase | Reposo → hover (invertido) | Dónde |
|---|---|---|
| `.btn-wa` | verde/noche → transparente, texto y borde verdes + glow | Nav, hero, cierre (pedidos WhatsApp) |
| `.btn-carta` | chamoy/blanco → transparente, texto `chamoyl`, borde chamoy + glow | Hero "Explorar la carta" |
| `.btn-gps` | mango/noche → transparente, texto y borde mango + glow | "Abrir ruta en GPS" |
| `.btn-ghost` | crema sólido/noche → transparente, texto y borde crema | "Consultar delivery" |
| `.wa-float` | círculo verde 56px, glyph oficial WhatsApp (Simple Icons, CC0) en oscuro; hover invierte a oscuro/verde. Pulso solo `scale` (compositor). `z-40`, `safe-area-inset` | Flotante global |

## 7. Imágenes y carpetas

- Originales en `img/originales/` (JPG/PNG fuente, p. ej. `alitas.jpeg`, `carta.jpg` de 3MB sin uso referenciado).
- El sitio solo sirve `img/webp/` (generados q75–85, anchos tope 256–1600): la página pesa ~450KB en imgs en vez de ~3.2MB.
- Flujo: original nueva → `img/originales/` (sin espacios) → generar WebP en `img/webp/` → referenciar.
- Hero con `srcset`/`sizes` + `preload imagesrcset`; resto `loading="lazy"`, todo con `width/height` (sin CLS). Capturas del README en `img/*.png` (no tocar).

## 8. Motion

Lenis (`lerp:.11`) + `gsap.ticker`; reveals `y:34→0, .6s`; stagger carta 45ms; parallax hero con scrub. `prefers-reduced-motion` deja todo estático (CSS + JS). Marquee 26s lineal. Sin `box-shadow` animados (solo `transform/opacity`).

## 9. Accesibilidad aplicada

Skip-link, `:focus-visible` mango 3px, tabs teclado completos, anclas con `offset` + foco programático (`tabindex=-1`, `scroll-margin-top:80px`), targets ≥44px (incluido footer), contraste normal ≥4.5:1, `tap-highlight` transparente, `noscript` legible.

## 10. Pendientes

1. Foto real de dulces (la categoría usa texto; hay `FREJOLITO_dulces.pdf` como fuente).
2. Compilar Tailwind y soltar el Play CDN (1–2s menos en 4G) cuando el diseño cierre.
3. Recomprimir `logo.png`/`combos-taper` originales o archivar `carta.jpg` (3MB sin uso).
4. Validar precios con el local: Enchiladas S/18, Frappes S/10 vs S/12, gaseosas en vidrio.
