// ─── Page navigation ───────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });
  document.getElementById('page-' + name).classList.add('active');
  var navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ─── Interest chips (contact form) ─────────────────────────────────────────
function toggleChip(el) {
  el.classList.toggle('selected');
}

// ─── Contact form submit ────────────────────────────────────────────────────
function submitForm() {
  document.getElementById('contact-form-wrap').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

// ─── Mobile menu ────────────────────────────────────────────────────────────
function openMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}
