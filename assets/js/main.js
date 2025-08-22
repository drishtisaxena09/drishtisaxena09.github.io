
AOS.init({ duration: 800, once: true });

// Active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if(link.getAttribute('href') === path){ link.classList.add('active'); }
});

// Footer year
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
