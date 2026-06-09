const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.dataset.open = String(!isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.dataset.open = 'false';
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.dataset.open = 'false';
    }
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});