const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const footerYear = document.querySelector('[data-year]');

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open');
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    });
  });
}

