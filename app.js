document.getElementById('y').textContent = new Date().getFullYear();
// Carta desde design.md
const WA = 'https://wa.me/51907318885?text=';
const ITEMS = [
 {c:'tacos',t:'Tacos Birria x3',p:'S/28',d:'Adobo birria, carne jugosa, queso fundido + consomé. x2 a S/14.',tag:'Más pedido',m:'quiero+Tacos+Birria+x3'},
 {c:'tacos',t:'Tacos Bell x3',p:'S/20',d:'Res o pollo, lechuga, queso y salsa casera.',tag:'Res o Pollo',m:'quiero+Tacos+Bell'},
 {c:'tacos',t:'Tacos Bell crocante queso',p:'S/24',d:'Costra de queso a la plancha, guacamole y pico de gallo.',tag:'Costra especial',m:'quiero+Tacos+Bell+crocante'},
 {c:'tacos',t:'Enchiladas rojas x2',p:'S/18',d:'Salsa de chiles secos, crema, queso y cebolla.',tag:'Salsa casera',m:'quiero+Enchiladas+Rojas'},
 {c:'tacos',t:'Taquitos crocantes x2',p:'S/16',d:'Flautas doradas + guacamole y crema.',tag:'Crocantes',m:'quiero+Taquitos'},
 {c:'quesa',t:'Quesadillas de la casa',p:'S/16',d:'Queso fundido, pollo chilli, guacamole, crema y salsa roja.',tag:'Favorito',m:'quiero+Quesadillas'},
 {c:'quesa',t:'Nachos supremos',p:'S/28',d:'Totopos, carne, cheddar, guacamole, crema y jalapeños. 2-3 pers.',tag:'Para compartir',m:'quiero+Nachos'},
 {c:'quesa',t:'Burrito al grill',p:'S/38',d:'Trigo sellado, pollo chilli, frijoles, guacamole y salsa.',tag:'Gigante',m:'quiero+Burrito'},
 {c:'alitas',t:'Alitas x6 + papas',p:'S/21',d:'BBQ / Acevichada / Búfalo picante.',tag:'3 salsas',m:'quiero+Alitas+x6'},
 {c:'bebidas',t:'Chamoyada fresa o mango',p:'S/16–21',d:'Fruta natural, tajín, chamoy, gomita y tarri pop. 16oz/20oz.',tag:'Helada',m:'quiero+Chamoyada'},
 {c:'bebidas',t:'Mango enchilado + Takis',p:'S/14',d:'Mango, chamoy, tajín, limón y Takis.',tag:'Botana',m:'quiero+Mango+enchilado'},
 {c:'bebidas',t:'Frappés',p:'S/12',d:'Moca, café, fresa, Oreo, menta o chocolate.',tag:'6 sabores',m:'quiero+Frappe'},
 {c:'bebidas',t:'Horchata / Cocona / Maracuyá',p:'S/10–15',d:'Horchata S/15. Jarras S/10. Heineken S/10.',tag:'Típico',m:'quiero+bebida'},
 {c:'dulces',t:'Gomitas enchiladas',p:'S/5–8',d:'Chamoy y miguelito. 25g S/5 / 50g S/8 / 400g S/55.',tag:'Importado',m:'quiero+Gomitas+enchiladas'},
 {c:'dulces',t:'Golosinas mexicanas',p:'S/3–8',d:'Payaso, Skwinkles, Lucas, Pulparindo, Mazapán, Peloneta.',tag:'100% México',m:'qué+dulces+tienen'},
];
const grid = document.getElementById('grid');
function renderBase(cat){
 const list = ITEMS.filter(i=>i.c===cat);
 grid.innerHTML = list.length ? list.map((i,n)=>`
 <article class="menu-row group flex items-baseline gap-4 sm:gap-6 py-6 sm:py-7">
 <span class="menu-num shrink-0 w-7">${String(n+1).padStart(2,'0')}</span>
 <div class="flex-1 min-w-0">
 <h3 class="font-menu text-2xl sm:text-[32px] leading-tight group-hover:translate-x-1 transition-transform">${i.t}</h3>
 <p class="text-[13px] sm:text-sm text-crema/75 mt-1">${i.d}</p>
 </div>
 <div class="shrink-0 text-right">
 <p class="font-price text-lg text-mango whitespace-nowrap">${i.p}</p>
 <a class="menu-link text-[13px] font-bold text-crema/80 hover:text-chamoyl inline-flex items-center min-h-[44px] min-w-[44px] px-3 -mr-3" target="_blank" rel="noopener" href="${WA}Hola%20Frejolito%2C%20${i.m}">Pedir &#8599;</a>
 </div></article>`).join('') : `<p class="py-10 text-center text-sm text-crema/75">Sin platos en esta categoría por ahora — escríbenos por WhatsApp y te contamos qué hay hoy.</p>`;
 if(window.gsap) gsap.fromTo('#grid article',{y:18,opacity:0},{y:0,opacity:1,duration:.45,stagger:.045,ease:'power2.out',overwrite:true});
}
function render(cat){
 renderBase(cat);
 if(window.ScrollTrigger) requestAnimationFrame(()=>ScrollTrigger.refresh());
}
render('tacos');
const tabs=[...document.querySelectorAll('#tabs button')];
function selectTab(b){tabs.forEach(x=>{x.classList.remove('tab-active');x.setAttribute('aria-selected','false');x.tabIndex=-1});b.classList.add('tab-active');b.setAttribute('aria-selected','true');b.tabIndex=0;render(b.dataset.cat)}
tabs.forEach((b,i)=>{b.addEventListener('click',()=>selectTab(b));b.addEventListener('keydown',e=>{let j=null;if(e.key==='ArrowRight')j=(i+1)%tabs.length;if(e.key==='ArrowLeft')j=(i-1+tabs.length)%tabs.length;if(e.key==='Home')j=0;if(e.key==='End')j=tabs.length-1;if(j!==null){e.preventDefault();tabs[j].focus();selectTab(tabs[j])}})});
// Motion tipo Arko: Lenis + GSAP sincronizados
let lenis=null;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
try{
 if(window.Lenis && !reduced){
  lenis = new Lenis({lerp:.11,smoothWheel:true});
  lenis.on('scroll',()=>{ if(window.ScrollTrigger) ScrollTrigger.update(); });
  if(window.gsap){
   gsap.ticker.add((time)=>{ lenis.raf(time*1000); });
   gsap.ticker.lagSmoothing(0);
  } else {
   const raf=(t)=>{ lenis.raf(t); requestAnimationFrame(raf); };
   requestAnimationFrame(raf);
  }
 }
}catch(e){lenis=null}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href'); if(id.length>1){e.preventDefault(); const el=document.querySelector(id); if(!el) return;
 const focusIt=()=>el.focus({preventScroll:true});
 if(lenis){lenis.scrollTo(el,{offset:-80,duration:1.2});setTimeout(focusIt,1250)}else{el.scrollIntoView({behavior:reduced?'auto':'smooth'});setTimeout(focusIt,400)}}
}));
// si la URL trae hash (#carta), saltar tras el layout
if(location.hash){
 const target=document.querySelector(location.hash);
 if(target){
  const go=()=>{ if(lenis) lenis.scrollTo(target,{offset:-64,immediate:true}); else target.scrollIntoView(); };
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>setTimeout(go,200));
  else setTimeout(go,500);
 }
}
// refrescar triggers cuando cargan imgs y al filtrar carta
addEventListener('load',()=>{ if(window.ScrollTrigger) ScrollTrigger.refresh(); });
try{
 if(window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  gsap.registerPlugin(ScrollTrigger);
  if(lenis) lenis.on('scroll',ScrollTrigger.update);
  gsap.to('.hero-img',{yPercent:14,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray('[data-reveal]').forEach(el=>{
   gsap.to(el,{opacity:1,y:0,duration:.6,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
  });
 } else { document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'}) }
}catch(e){document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'})}
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.style.transform='translateY(0)';nav.firstElementChild.style.background = scrollY>40?'color-mix(in srgb,var(--noche) 92%,transparent)':'color-mix(in srgb,var(--carbon) 82%,transparent)'},{passive:true});
addEventListener('scroll',()=>{const h=document.querySelector('.scroll-hint');if(h){h.style.transition='opacity .4s';h.style.opacity='0';setTimeout(()=>h.remove(),500)}},{passive:true,once:true});
