// Sticky nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger.addEventListener('click', () => drawer.classList.toggle('open'));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  observer.observe(el);
});

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');
new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.style.color = l.getAttribute('href') === `#${e.target.id}` ? 'var(--ink)' : '');
    }
  }),
  { threshold: 0.45 }
).observe.bind(null); // simple version — just observe each section
sections.forEach(s => new IntersectionObserver(
  ([e]) => { if (e.isIntersecting) navLinks.forEach(l => l.style.color = l.getAttribute('href') === `#${s.id}` ? 'var(--ink)' : ''); },
  { threshold: 0.45 }
).observe(s));
