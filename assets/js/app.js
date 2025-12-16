
// GSAP animations for entry and scroll
document.addEventListener('DOMContentLoaded', function() {
  // Load GSAP from CDN (included in each page via script tag). Use basic animations:
  if(typeof gsap === 'undefined') return;

  // Header appear
  gsap.from('header', {y:-30, opacity:0, duration:0.8, ease:'power2.out'});

  // Hero text
  gsap.from('.hero h1', {y:40, opacity:0, duration:0.9, delay:0.2, ease:'power3.out'});
  gsap.from('.hero p', {y:20, opacity:0, duration:0.8, delay:0.35});
  gsap.from('.hero .cta', {scale:0.9, opacity:0, duration:0.6, delay:0.6});

  // Feature cards
  gsap.utils.toArray('.service, .feature-card, .portfolio-item, .project-item, .catalog-card').forEach(function(el, i){
    gsap.from(el, {y:30, opacity:0, duration:0.7, delay: 0.2 + i*0.08, ease:'power2.out'});
  });

  // Gallery hover scale
  document.querySelectorAll('.grid-gallery img').forEach(img=>{
    img.addEventListener('mouseenter', ()=> gsap.to(img, {scale:1.05, duration:0.4}));
    img.addEventListener('mouseleave', ()=> gsap.to(img, {scale:1, duration:0.4}));
  });

  // Simple scroll-trigger like effect (no ScrollTrigger license required)
  const revealEls = document.querySelectorAll('.fade-on-scroll');
  function revealOnScroll() {
    const windowBottom = window.innerHeight;
    revealEls.forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < windowBottom - 80) {
        gsap.to(el, {opacity:1, y:0, duration:0.8, ease:'power2.out'});
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Smooth links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); window.scrollTo({ top: target.offsetTop-18, behavior:'smooth' }); }
    });
  });
  const menuBtn = document.getElementById("menuToggle");
const menu = document.getElementById("mainMenu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.classList.toggle("closed");
  });
  gsap.registerPlugin(ScrollTrigger);

gsap.from(".testimonio-card", {
    scrollTrigger: {
        trigger: ".testimonios",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.2
});
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('.fade-on-scroll').forEach(el=>{
gsap.to(el,{
opacity:1,
y:0,
duration:0.8,
ease:'power2.out',
scrollTrigger:{trigger:el,start:'top 85%'}
})
})


// Slider automático
const slides=document.querySelectorAll('.slider img');
let current=0;
if(slides.length>1){
setInterval(()=>{
const next=(current+1)%slides.length;
gsap.to(slides[current],{opacity:0,duration:0.8});
gsap.to(slides[next],{opacity:1,duration:0.8});
current=next;
},4000);
}


// Contador
document.querySelectorAll('.counter').forEach(counter=>{
gsap.fromTo(counter,{innerText:0},{
innerText:counter.dataset.target,
duration:1.6,
snap:{innerText:1},
scrollTrigger:{trigger:counter,start:'top 85%'}
})
})
});

// ===============================
// FILTRO INTERACTIVO DE BLOG (INDEX)
// ===============================
document.querySelectorAll('[data-filter]').forEach(btn=>{
btn.addEventListener('click',()=>{
const filter=btn.dataset.filter;
document.querySelectorAll('.blog-card').forEach(card=>{
card.style.display = filter==='all' || card.dataset.category===filter ? 'block':'none';
})
})
});


// ===============================
// TRACKING DE INTERACCIONES (CTA)
// ===============================
document.querySelectorAll('.btn').forEach(btn=>{
btn.addEventListener('click',()=>{
console.log('CTA Blog clickeado:', btn.textContent);
})
});