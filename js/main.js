// js/main.js  —  Navigation, animations, form handling

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
function navigateTo(target) {
  // Hide all pages & deactivate nav
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach((n) => n.classList.remove('active'));

  const page    = document.getElementById(target);
  const navItem = document.querySelector(`.nav-item[data-target="${target}"]`);

  if (page)    page.classList.add('active');
  if (navItem) navItem.classList.add('active');

  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Run skill bars when skills page opens
  if (target === 'skills') setTimeout(animateBars, 250);

  // Trigger reveal animations
  setTimeout(triggerReveal, 120);
}

// Bind sidebar nav links
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => navigateTo(item.dataset.target));
});

// Bind footer quick-links
document.querySelectorAll('.footer-links a[data-nav]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(a.dataset.nav);
  });
});

/* ═══════════════════════════════════════
   HAMBURGER / MOBILE SIDEBAR
═══════════════════════════════════════ */
const sidebar   = document.getElementById('sidebar');
const overlay   = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});
overlay.addEventListener('click', closeSidebar);

/* ═══════════════════════════════════════
   SKILL BAR ANIMATION
═══════════════════════════════════════ */
function animateBars() {
  document.querySelectorAll('.skill-bar-fill').forEach((bar) => {
    bar.classList.add('animated');
  });
}

/* ═══════════════════════════════════════
   SCROLL / INTERSECTION REVEAL
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function triggerReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
    revealObserver.observe(el);
  });
}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

function handleSubmit() {
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  if (!name || !email || !message) {
    showFormError('Please fill in all fields.');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormError('Please enter a valid email address.');
    return;
  }

  // Show success (wire to a real backend / EmailJS / Formspree in production)
  const successEl = document.getElementById('formSuccess');
  successEl.classList.add('show');

  document.getElementById('fname').value    = '';
  document.getElementById('femail').value   = '';
  document.getElementById('fmessage').value = '';

  setTimeout(() => successEl.classList.remove('show'), 6000);
}

function showFormError(msg) {
  alert(msg); // Replace with an inline error UI if preferred
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
(function init() {
  // Trigger reveal on the default home page
  setTimeout(triggerReveal, 300);
})();
