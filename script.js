const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const footerYear = document.querySelector('[data-year]');
const versionToggle = document.getElementById('versionToggle');
const versionToggleLabel = versionToggle?.querySelector('.version-toggle__label');

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

// Version toggle functionality
if (versionToggle) {
  // Check localStorage for saved preference
  const savedVersion = localStorage.getItem('portfolioVersion');
  const isShortVersion = savedVersion === 'short' || (!savedVersion && false); // Default to long version
  
  if (isShortVersion) {
    document.body.classList.add('short-version');
    if (versionToggleLabel) {
      versionToggleLabel.textContent = 'Long';
    }
  } else {
    if (versionToggleLabel) {
      versionToggleLabel.textContent = 'Short';
    }
  }

  versionToggle.addEventListener('click', () => {
    const isShort = document.body.classList.contains('short-version');
    
    if (isShort) {
      document.body.classList.remove('short-version');
      if (versionToggleLabel) {
        versionToggleLabel.textContent = 'Short';
      }
      localStorage.setItem('portfolioVersion', 'long');
    } else {
      document.body.classList.add('short-version');
      if (versionToggleLabel) {
        versionToggleLabel.textContent = 'Long';
      }
      localStorage.setItem('portfolioVersion', 'short');
    }
  });
}



