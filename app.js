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
 grid.innerHTML = ITEMS.filter(i=>cat==='todos'||i.c===cat).map(i=>`
 <article class="card-dark rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 transition">
 <div><div class="flex justify-between gap-3"><h3 class="font-price text-lg">${i.t}</h3><span class="font-price text-lg text-chamoy whitespace-nowrap">${i.p}</span></div>
 <p class="text-[13px] text-crema/60 mt-2">${i.d}</p></div>
 <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
 <span class="text-[11px] px-2.5 py-1 rounded bg-chamoy/15 text-chamoy font-bold">${i.tag}</span>
 <a class="text-sm font-bold text-crema hover:text-chamoy" target="_blank" rel="noopener" href="${WA}Hola%20Frejolito%2C%20${i.m}">Pedir →</a>
 </div></article>`).join('');
 if(window.gsap) gsap.fromTo('#grid article',{y:22,opacity:0},{y:0,opacity:1,duration:.5,stagger:.05,ease:'power2.out',overwrite:true});
}
function render(cat){
 renderBase(cat);
 if(window.ScrollTrigger) requestAnimationFrame(()=>ScrollTrigger.refresh());
}
render('todos');
document.querySelectorAll('#tabs button').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('#tabs button').forEach(x=>x.classList.remove('tab-active'));
 b.classList.add('tab-active'); render(b.dataset.cat);
}));
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
 if(lenis) lenis.scrollTo(el,{offset:-64,duration:1.2}); else el.scrollIntoView({behavior:'smooth'});}
}));
// refrescar triggers cuando cargan imgs y al filtrar carta
addEventListener('load',()=>{ if(window.ScrollTrigger) ScrollTrigger.refresh(); });
try{
 if(window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  gsap.registerPlugin(ScrollTrigger);
  if(lenis) lenis.on('scroll',ScrollTrigger.update);
  gsap.to('.hero-img',{yPercent:14,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom top',scrub:true}});
  gsap.utils.toArray('[data-reveal]').forEach(el=>{
   gsap.to(el,{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}});
  });
 } else { document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'}) }
}catch(e){document.querySelectorAll('[data-reveal]').forEach(el=>{el.style.opacity=1;el.style.transform='none'})}
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.style.transform='translateY(0)';nav.firstElementChild.style.background = scrollY>40?'rgba(14,11,10,.92)':'rgba(22,17,16,.62)'},{passive:true});
