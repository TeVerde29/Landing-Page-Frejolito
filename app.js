document.getElementById('y').textContent = new Date().getFullYear();
// Carta desde design.md
const WA = 'https://wa.me/51907318885?text=';
const ITEMS = [
 {c:'tacos',t:'Tacos Birria x3',p:'S/28',d:'Adobo birria, carne jugosa, queso fundido + consomé.',tag:'Más pedido',m:'quiero+Tacos+Birria+x3',img:'./img/webp/taco-birria.webp'},
 {c:'tacos',t:'Tacos Tradicionales',p:'S/14–20',d:'Carne o pollo, lechuga, tomate, guacamole, crema, cebolla caramelizada. 2x S/14 / 3x S/20.',tag:'Clásico',m:'quiero+Tacos+Tradicionales',img:'./img/webp/taco-tradicional.webp'},
 {c:'tacos',t:'Tacos Bell x3',p:'S/24',d:'Tacos crocantes con bastante queso y sus cremas. Carne o pollo.',tag:'Crocante',m:'quiero+Tacos+Bell'},
 {c:'espe',t:'Enchiladas Rojas x2',p:'S/18',d:'Base de tomate y tortillas, queso derretido bañado con crema y salsa roja.',tag:'Salsa casera',m:'quiero+Enchiladas+Rojas',img:'./img/webp/enchiladas-rojas.webp'},
 {c:'espe',t:'Quesadillas',p:'S/16',d:'Pollito con chilli y quesito crocante en plancha (guacamole, crema, salsa roja).',tag:'Favorito',m:'quiero+Quesadillas',img:'./img/webp/quesadilla.webp'},
 {c:'espe',t:'Nachos',p:'S/28',d:'Nachos, carne, cheddar, guacamole, salsa blanca, salsa mexicana y jalapeños cortados.',tag:'Para compartir',m:'quiero+Nachos'},
 {c:'tacos',t:'Taquitos x2',p:'S/16',d:'Crocante y jugosa carne, queso horneado.',tag:'Crocantes',m:'quiero+Taquitos'},
 {c:'espe',t:'Burrito',p:'S/38',d:'Pollito con chilli y quesito crocante en plancha (guacamole, crema, salsa roja).',tag:'Gigante',m:'quiero+Burrito'},
 {c:'alitas',t:'Alita BBQ x6',p:'S/21',d:'Incluye papas crocantes.',tag:'Con papas',m:'quiero+Alitas+BBQ',img:'./img/webp/alitas.webp'},
 {c:'alitas',t:'Alita Acevichada x6',p:'S/21',d:'Incluye papas crocantes.',tag:'Con papas',m:'quiero+Alitas+Acevichada',img:'./img/webp/alitas.webp'},
 {c:'alitas',t:'Alita Búfalo x6',p:'S/21',d:'Incluye papas crocantes.',tag:'Picante',m:'quiero+Alitas+Bufalo',img:'./img/webp/alitas.webp'},
 {c:'chamoy',t:'Chamoyada de Fresa',p:'S/16–21',d:'Fresa natural con chamoy y tajín. 16oz S/16 / 20oz S/21.',tag:'Helada',m:'quiero+Chamoyada+Fresa',img:'./img/webp/chamoyada.webp'},
 {c:'chamoy',t:'Chamoyada de Mango',p:'S/16–21',d:'Mango natural con chamoy y tajín. 16oz S/16 / 20oz S/21.',tag:'Helada',m:'quiero+Chamoyada+Mango',img:'./img/webp/chamoyada.webp'},
 {c:'chamoy',t:'Mango Enchilado',p:'S/14',d:'Mango, tajín, chamoy, takis, limón.',tag:'Botana',m:'quiero+Mango+enchilado',img:'./img/webp/chamoyada.webp'},
 {c:'frias',t:'Frappés',p:'S/10–12',d:'Moca, café, fresa, Oreo, menta o chocolate.',tag:'6 sabores',m:'quiero+Frappe'},
 {c:'frias',t:'Néctar',p:'S/3',d:'Cocona o chicha.',tag:'Típico',m:'quiero+Nectar'},
 {c:'frias',t:'Gaseosas',p:'S/3–9',d:'Coca Cola e Inka Cola. Personal plástico S/4.50, personal vidrio S/3, grande vidrio S/9.',tag:'Heladas',m:'quiero+Gaseosa',img:'./img/webp/coca-cola.webp'},
 {c:'frias',t:'Refrescos y Frozen',p:'S/10–15',d:'Cocona y maracuyá S/10. Limonada frozen y frozen de cocona/maracuyá S/14. Horchata S/15.',tag:'Natural',m:'quiero+Refresco'},
 {c:'frias',t:'Heineken',p:'S/10',d:'Cerveza helada.',tag:'Helada',m:'quiero+Heineken',img:'./img/webp/heineken.webp'},
 {c:'calientes',t:'Café',p:'S/3',d:'Café pasado.',tag:'Caliente',m:'quiero+Cafe',img:'./img/webp/cafe.webp'},
 {c:'calientes',t:'Tés',p:'S/2',d:'Mora, manzanilla, anís o canela y clavo.',tag:'Caliente',m:'quiero+Te',img:'./img/webp/te-manzanilla.webp'},
];
const grid = document.getElementById('grid');
function renderBase(cat){
 const list = ITEMS.filter(i=>i.c===cat);
 grid.innerHTML = list.length ? list.map((i,n)=>`
 <article class="menu-row group relative flex items-baseline gap-4 sm:gap-6 py-6 sm:py-7 min-h-[128px]">
 <span class="menu-num shrink-0 w-7">${String(n+1).padStart(2,'0')}</span>
 ${i.img?`<img src="${i.img}" alt="" aria-hidden="true" loading="lazy" decoding="async" class="menu-bg"${i.bw?` style="width:${i.bw}"`:''}/>`:''}
 <div class="relative flex-1 min-w-0">
 <h3 class="font-menu text-2xl sm:text-[32px] leading-tight group-hover:translate-x-1 transition-transform">${i.t}</h3>
 <p class="text-[13px] sm:text-sm text-crema/75 mt-1">${i.d}</p>
 </div>
 <div class="relative shrink-0 text-right pr-4 sm:pr-6">
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
   gsap.fromTo(el,{opacity:0,y:34},{opacity:1,y:0,ease:'none',scrollTrigger:{trigger:el,start:'top 94%',end:'top 55%',scrub:.6}});
  });
 } else { document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'}) }
}catch(e){document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'})}
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.style.transform='translateY(0)';nav.firstElementChild.style.background = scrollY>40?'color-mix(in srgb,var(--noche) 92%,transparent)':'color-mix(in srgb,var(--carbon) 82%,transparent)'},{passive:true});
const menuBtn=document.getElementById('menuBtn'),mobileMenu=document.getElementById('mobileMenu');
function setMenu(open){
 if(!menuBtn||!mobileMenu) return;
 menuBtn.classList.toggle('open',open);
 menuBtn.setAttribute('aria-expanded',open);
 menuBtn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
 if(open){mobileMenu.removeAttribute('hidden');requestAnimationFrame(()=>requestAnimationFrame(()=>mobileMenu.classList.add('open')))}
 else{mobileMenu.classList.remove('open');setTimeout(()=>{if(!mobileMenu.classList.contains('open'))mobileMenu.setAttribute('hidden','')},380)}
}
if(menuBtn&&mobileMenu){
 menuBtn.addEventListener('click',()=>setMenu(menuBtn.getAttribute('aria-expanded')!=='true'));
 mobileMenu.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
 addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
 matchMedia('(min-width:768px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
}
addEventListener('scroll',()=>{const h=document.querySelector('.scroll-hint');if(h){h.style.transition='opacity .4s';h.style.opacity='0';setTimeout(()=>h.remove(),500)}},{passive:true,once:true});
try{
 const pausables=[...document.querySelectorAll('.marquee-track,.wa-float')];
 if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{e.target.style.animationPlayState=e.isIntersecting?'':'paused'}),{threshold:0});
  pausables.forEach(el=>io.observe(el));
 }
 document.addEventListener('visibilitychange',()=>{pausables.forEach(el=>{el.style.animationPlayState=document.hidden?'paused':''})});
}catch(e){}
