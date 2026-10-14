# EL FREJOLITO — Design System & Plan Web v1
> Restaurante Mexicano en Pucallpa. Vitrina + Carta + WhatsApp. Sin carrito en v1.

## 1. Datos reales del negocio

- **Nombre:** EL FREJOLITO — RESTAURANTE MEXICANO
- **Dirección:** Última cuadra de La Unión con Alamedas, al costado de Borrachitas Restobar, Pucallpa (Yarinacocha)
- **Maps:** https://maps.app.goo.gl/ANJeAQ7se5evK2Cr7
- **Horario (de carta.jpeg):** De miércoles a lunes 6:00pm a 10:00pm
- **WhatsApp:** +51 907 318 885 → https://wa.me/51907318885?text=Hola%20Frejolito%2C%20quiero%20hacer%20un%20pedido
- **Instagram:** https://www.instagram.com/el.frejolito/
- **TikTok:** https://www.tiktok.com/@el.frejolito
- **Fuentes imgs locales:** `local.jpg` / `carta.jpeg` / `chamoyada.jpg` / `taco bel.jpg` / `varios platos en taper para pedidos.jpg` / `FREJOLITO_dulces.pdf`

## 2. Referencias aprobadas

1. Midudev Arko scroll-world: https://github.com/midudev/mcp-higgsfield-landing — Demo: https://arko-sushi.midudev.workers.dev — Stack Astro 7 + Tailwind 4 + GSAP ScrollTrigger + Lenis. Idea a copiar: hero inmersivo + scroll suave + secciones platos ovalados + FAQ + CTA final.
2. TMG Tacos My Guey (Awwwards Honorable Mention): https://tacosmyguey.com — Ficha: https://www.awwwards.com/sites/tmg-mexican-restaurant — Copiar: tono callejero alegre, rojo #da1729 + crema #fcf9f2, scroll horizontal.
3. Chipotle: https://www.chipotle.com — Copiar: builder por pasos, fotos hi-res por ingrediente, reorder arriba.
4. Sweetgreen / Nando's: https://www.sweetgreen.com / https://www.nandos.co.uk — Copiar: fondo crema cálido, ilustración de ingredientes, medidor de picante PERi-ometer.
5. Template Astro Bistro / html-restaurant: https://html-restaurant.pages.dev/ / https://astro.build/themes/details/bistro-shadcn-ui-restaurant-landing-page-template-free/ — Copiar: estructura menú + galería + testimonios.

## 3. Paleta oficial Frejolito (extraída de fotos reales)

| Token | HEX | Origen | Uso |
|---|---|---|---|
| `--crema-maiz` | `#FDF3DC` | Papel de `carta.jpeg`, tortilla, crema | Fondo principal claro 60% |
| `--negro-tatemado` | `#161110` | Noche en `local.jpg` | Fondo oscuro hero/footer, texto 30% |
| `--rojo-chamoy` | `#D91E2A` | Chamoyada, papel picado rojo, salsa, TMG #da1729 | Primario, CTA, precios 10% |
| `--rojo-birria` | `#8C1D18` | Birria en `taco bel.jpg`, salsa roja | Profundidad, degradados, hover |
| `--amarillo-mango` | `#FFB627` | Mango chamoyada, foquitos local | Acento, marquee, badges |
| `--verde-guac` | `#5A9A3B` | Guacamole, papel picado verde | Etiquetas fresco/veggie/nuevo |
| `--marron-lena` | `#6B4226` | Madera mesas/local | Bordes, cards secundarias |
| `--azul-papel` | `#1E9ED6` | Papel picado azul | Solo divider papel picado, máx 5% |
| `--whatsapp` | `#25D366` | Oficial WA | Solo botón flotante |

Regla: 60% crema / 30% negro-marrón / 10% rojo-amarillo-verde.
Contraste: texto sobre crema siempre `#161110`. Texto sobre negro/rojo siempre `#FDF3DC`.
No usar azul para botones ni texto.

```css
:root{
  --crema-maiz:#FDF3DC;
  --negro-tatemado:#161110;
  --rojo-chamoy:#D91E2A;
  --rojo-birria:#8C1D18;
  --amarillo-mango:#FFB627;
  --verde-guac:#5A9A3B;
  --marron-lena:#6B4226;
  --azul-papel:#1E9ED6;
}
```

## 4. Tipografías

- **Display:** `Rye` (Google Fonts) — la del logo (`logo con letra.png`, estilo western mexicano). Títulos, hero, secciones.
- **Precios / destacados:** `Lilita One` — números y precios, más legible que Rye.
- **Cuerpo:** `Plus Jakarta Sans` (Google Fonts) — párrafos, carta, botones.
- **Logo:** `logo.png` circular (calavera con sombrero) en nav (ring rojo), hero central, footer y favicon. `logo con letra.png` es la referencia del lockup horizontal sobre rojo.

## 5. Estructura de la página (v1 vitrina)

1. **Nav sticky blur:** logo EL FREJOLITO + links Tienda / Platos / Carta / Visítanos + botón WhatsApp.
2. **Hero noche:** bg `local.jpg` + overlay `linear-gradient(#161110CC, #16111066)` + titular “Sabor mexicano en Pucallpa” + subtítulo birria/chamoyadas + marquee TACOS - BIRRIA - QUESADILLAS - CHAMOYADAS + CTAs Ver carta / Pedir por WhatsApp.
3. **La tienda:** foto interior + papel picado SVG divider + historia corta + 3 bullets: Hecho al momento / Picante real / Mié-Lun 6-10pm.
4. **Platos estrella (3):** Tacos Birria 3x S/28 (`taco bel.jpg`), Tacos Bell 3x S/20 (`varios platos...jpg`), Chamoyada Mango (`chamoyada.jpg`). Card ovalada con hover zoom, etiqueta picor.
5. **Carta completa con tabs:** Tacos / Quesadillas-Nachos-Taquitos-Burritos / Alitas / Chamoyadas-Frappes / Bebidas-Gaseosas-Cerveza / Calientes / Dulces. Datos de `carta.jpeg` abajo.
6. **Dulces mexicanos strip horizontal:** de `FREJOLITO_dulces.pdf` + foto anaquel si hay. Con nivel picor 1-3.
7. **Opiniones Google Maps:** 3 cards reseñas + link “Ver en Maps”.
8. **Visítanos:** dirección + horario + mapa embed + foto fachada noche + mototaxis (contexto Pucallpa).
9. **Footer negro + botón flotante WA.**

Animaciones (GSAP + Lenis como midudev):
- Lenis smooth scroll, header compacto al scroll.
- Reveal fade-up por sección, parallax leve en hero.
- Marquee infinito CSS, tilt/zoom en cards.
- Tabs carta con filtrado JS sin recargar.
- `prefers-reduced-motion`: desactivar todo.

## 6. Carta transcrita (de carta.jpeg)

**TACOS:** Birria 3x S/28, 2x S/14 / Bell carne o pollo 3x S/20 / Bell (base crocante queso) 3x S/24
**ENCHILADAS ROJAS:** 2x S/18 aprox (etiqueta corregida en foto)
**QUESADILLAS:** S/16 — base tomate y tortillas, queso derretido, pollo chilli, guacamole, crema, salsa roja.
**NACHOS:** S/28 — nachos, carne, cheddar, guacamole, salsa blanca, mexicana, jalapeños.
**TAQUITOS:** 2x S/16 — crocante jugosa carne, queso horneado.
**BURRITOS:** S/38 — pollo chilli y quesito, en plancha (guacamole, crema, salsa roja).
**ALITAS + papas crocantes:** BBQ / Acevichada / Búfalo 6uni 6x S/21
**CHAMOYADAS (mango, chamoy, tajín, miguelito, gomita, tarri pop):** Fresa 16onz S/16 / Fresa 20onz S/21 / Mango 16onz S/16 / Mango 20onz S/21
**MANGO ENCHILADO:** S/14 — mango, tajín, chamoy, takis, limón.
**FRAPPE:** Moca/Café/Fresa/Oreo/Menta/Chocolate S/12 (variantes S/10-12 en foto)
**NECTAR:** Cocona/Chicha S/3
**BEBIDAS:** Refresco cocona/maracuyá S/10, Limonada frozen S/14, Frozen cocona/maracuyá S/14, Horchata S/15
**GASEOSAS:** Personal S/3-4.50, Vidrio grande S/9
**CERVEZA:** Heineken S/10
**CALIENTES:** Café S/3, Té mora/manzanilla/anís/canela-clavo S/2

**DULCES (de FREJOLITO_dulces.pdf):** Paleta Payaso, Lucas, Muecas Mini, Cubierto chocolate, Mazapán De La Rosa, Pulparindo Chamoy, Skwinkles Salsagheti, Vero Mango/Mix, Sandía Chilosita, Roka Leta, Rellerindo Tamarindo, Raqueta Enchilada/Mango/Mora Azul, Peloneta Chamoy/Tamarindo, Megatonas Mango, Gomitas Enchiladas 25g S/5 / 50g S/8 / 400g S/55. Precios unitarios S/2 - S/8 aprox según foto.

> Pendiente verificar: precio exacto Enchiladas Rojas (sticker 18), Frappes S/10 vs S/12, gaseosas vidrio.

## 7. Componentes clave

- `WhatsAppFloat`: fixed bottom-right, `#25D366`, icono WA, link wa.me con texto prellenado.
- `PriceTag`: pill negra `#161110` texto crema, ej: `3 x S/20`.
- `SpiceLevel`: 1-3 chiles con `--rojo-chamoy`.
- `PapelPicadoDivider`: SVG recortado con colores rojo/amarillo/verde/azul sobre crema/negro.
- `MenuTabs`: tabs sticky con scroll horizontal en móvil.
- `DishCard`: img 4:3 rounded-2xl, overlay degradado birria, título Lilita One.

## 8. Stack y performance

Astro + Tailwind + GSAP ScrollTrigger + Lenis, estático, deploy Cloudflare Pages. Imgs en `/public/img/` optimizadas WebP, hero `local.jpg` preload. HTML <120KB, sin video IA en v1. SEO: title “El Frejolito | Restaurante Mexicano en Pucallpa”, JSON-LD Restaurant con dirección, horario, teléfono, Maps.

## 9. Siguiente paso

1. Aprobar paleta de este archivo.
2. Andamiar Astro con estos tokens y secciones 1-9 usando fotos reales.
3. Validar precios pendientes con el local antes del build final.
