/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Optional: unobserve after reveal for one-time animation
      // revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ============================================
   NAV MOBILE TOGGLE
   ============================================ */
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

/* ============================================
   SMOOTH SCROLL FOR NAV LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Close mobile nav if open
      nav.classList.remove('nav-open');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================
   PARALLAX ON SCROLL (subtle)
   ============================================ */
const heroImageFrame = document.querySelector('.hero-image-frame');
const bgShapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;

  // Hero image parallax
  if (heroImageFrame) {
    heroImageFrame.style.transform = `translateY(${scrolled * 0.04}px)`;
  }

  // Shapes parallax at different speeds
  bgShapes.forEach((shape, i) => {
    const speed = 0.02 + (i * 0.01);
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/* ============================================
   MAGNETIC EFFECT ON BUTTONS/LINKS (subtle)
   ============================================ */
const magneticElements = document.querySelectorAll('.nav-link, .social-link');

magneticElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0, 0)';
  });
});

/* ============================================
   TILT EFFECT ON WORK CARDS
   ============================================ */
const workCards = document.querySelectorAll('.work-card');

workCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

/* ============================================
   PRELOADER (optional fade in)
   ============================================ */
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});