document.addEventListener('DOMContentLoaded', function() {
  injectHeader();
  injectFooter();
  setupMobileMenu();
  setupScrollEffects();
  initScrollAnimations();
  initCounterAnimations();
});

function injectHeader() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (!headerPlaceholder) return;

  const currentPage = window.location.pathname;
  const isServicePage = currentPage.includes('/services/') || currentPage.includes('services\\') || currentPage.includes('/pages/') || currentPage.includes('pages\\');
  const basePath = isServicePage ? '../' : '';
  
  const activeClass = 'active';

  headerPlaceholder.innerHTML = `
    <header class="header">
      <div class="header-inner">
        <a href="${basePath}index.html" class="logo">
          <div class="logo-icon">A</div>
          <span class="logo-text">Anyvertise</span>
        </a>
        
        <nav class="nav-desktop">
          <a href="${basePath}index.html" class="nav-link ${currentPage === '/' || currentPage.endsWith('index.html') ? activeClass : ''}">Home</a>
          <div class="dropdown">
            <a href="#" class="nav-link">Services</a>
            <div class="dropdown-menu">
              <a href="${basePath}services/tiktok.html">TikTok Shop Management</a>
              <a href="${basePath}services/shopify.html">Shopify Development</a>
              <a href="${basePath}services/amazon.html">Amazon Brand Management</a>
            </div>
          </div>
          <a href="${basePath}pages/process.html" class="nav-link">Process</a>
          <a href="${basePath}pages/case-studies.html" class="nav-link">Case Studies</a>
        </nav>
        
        <a href="${basePath}pages/contact.html" class="cta-button">Get Started</a>
        
        <button class="mobile-menu-btn" aria-label="Toggle menu">☰</button>
      </div>
    </header>
    
    <div class="mobile-nav-overlay"></div>
    <nav class="mobile-nav">
      <div class="mobile-nav-header">
        <div class="logo">
          <div class="logo-icon">A</div>
          <span class="logo-text">Anyvertise</span>
        </div>
        <button class="mobile-nav-close" aria-label="Close menu">✕</button>
      </div>
      <a href="${basePath}index.html">Home</a>
      <div class="mobile-dropdown">
        <button class="mobile-dropdown-btn">Services <span class="dropdown-icon">▼</span></button>
        <div class="mobile-dropdown-content">
          <a href="${basePath}services/tiktok.html">TikTok Shop Management</a>
          <a href="${basePath}services/shopify.html">Shopify Development</a>
          <a href="${basePath}services/amazon.html">Amazon Brand Management</a>
        </div>
      </div>
      <a href="${basePath}pages/process.html">Process</a>
      <a href="${basePath}pages/case-studies.html">Case Studies</a>
      <a href="${basePath}pages/about.html">About Us</a>
      <a href="${basePath}pages/contact.html" class="mobile-nav-cta">Get Started</a>
    </nav>
  `;
}

function injectFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (!footerPlaceholder) return;

  const currentPage = window.location.pathname;
  const isServicePage = currentPage.includes('/services/') || currentPage.includes('services\\') || currentPage.includes('/pages/') || currentPage.includes('pages\\');
  const basePath = isServicePage ? '../' : '';

  footerPlaceholder.innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="logo-icon">A</div>
              <span class="logo-text">Anyvertise</span>
            </div>
            <p class="footer-description">
              Premium e-commerce growth agency helping brands scale to 8-figures through data-driven strategies and cutting-edge technology.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-title footer-collapse">Services</h4>
            <div class="footer-links">
              <a href="${basePath}services/tiktok.html">TikTok Shop Management</a>
              <a href="${basePath}services/shopify.html">Shopify Development</a>
              <a href="${basePath}services/amazon.html">Amazon Brand Management</a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4 class="footer-title footer-collapse">Company</h4>
            <div class="footer-links">
              <a href="${basePath}pages/about.html">About Us</a>
              <a href="${basePath}pages/case-studies.html">Case Studies</a>
              <a href="${basePath}pages/careers.html">Careers</a>
              <a href="${basePath}pages/contact.html">Contact</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2026 Anyvertise. All rights reserved.</p>
          <div class="footer-legal">
            <a href="${basePath}pages/privacy.html">Privacy Policy</a>
            <a href="${basePath}pages/terms.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function setupMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');
  
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      mobileNav.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    const closeMenu = () => {
      mobileNav.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
    
    const mobileLinks = mobileNav.querySelectorAll('a:not(.mobile-dropdown-content a)');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    const mobileSubLinks = mobileNav.querySelectorAll('.mobile-dropdown-content a');
    mobileSubLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    const mobileDropdownBtn = mobileNav.querySelector('.mobile-dropdown-btn');
    if (mobileDropdownBtn) {
      mobileDropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        content.classList.toggle('show');
      });
    }
  }
  
  const footerTitles = document.querySelectorAll('.footer-title.footer-collapse');
  footerTitles.forEach(title => {
    title.addEventListener('click', function() {
      this.classList.toggle('active');
      const links = this.nextElementSibling;
      links.classList.toggle('show');
    });
  });
}

function setupScrollEffects() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

document.addEventListener('submit', function(e) {
  const form = e.target;
  if (form.id === 'contactForm') {
    e.preventDefault();
    const formContainer = form.closest('.contact-container');
    const successMessage = formContainer.querySelector('.form-success');
    form.style.display = 'none';
    successMessage.classList.add('show');
  }
});

function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function initCounterAnimations() {
  const counterObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.getAttribute('data-target');
        if (finalValue) {
          animateCounter(target, finalValue);
        }
        counterObserver.unobserve(target);
      }
    });
  }, counterObserverOptions);

  document.querySelectorAll('[data-target]').forEach(el => {
    counterObserver.observe(el);
  });
}

function animateCounter(element, finalValue) {
  const duration = 2000;
  const startTime = performance.now();
  const hasNumericPart = /[0-9]/.test(finalValue);
  
  if (!hasNumericPart) {
    element.textContent = finalValue;
    return;
  }
  
  const isPercentage = finalValue.includes('%') || finalValue.includes('x') || finalValue.includes('M') || finalValue.includes('K') || finalValue.includes('#');
  const hasPrefix = finalValue.startsWith('$') || finalValue.startsWith('#');
  
  let prefix = '';
  let suffix = '';
  let numericValue = finalValue;
  
  if (hasPrefix) {
    prefix = finalValue.charAt(0);
    numericValue = finalValue.substring(1);
    suffix = numericValue.replace(/[0-9.+]/g, '');
    numericValue = numericValue.replace(/[^0-9.]/g, '');
  } else if (isPercentage) {
    suffix = finalValue.replace(/[0-9.+]/g, '').replace(/^\+/, '');
    numericValue = finalValue.replace(/[^0-9.]/g, '');
  } else {
    suffix = finalValue.replace(/[0-9.+]/g, '');
    numericValue = finalValue.replace(/[^0-9.]/g, '');
  }

  const endValue = parseFloat(numericValue) || 0;
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = endValue * easeOutQuart;
    
    let displayValue;
    if (endValue >= 1000) {
      displayValue = Math.floor(currentValue);
    } else if (endValue >= 10) {
      displayValue = Math.floor(currentValue);
    } else if (endValue >= 1) {
      displayValue = currentValue.toFixed(1);
    } else {
      displayValue = currentValue.toFixed(2);
    }
    
    if (hasPrefix) {
      element.textContent = prefix + displayValue + suffix;
    } else {
      element.textContent = displayValue + suffix;
    }
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = finalValue;
    }
  }
  
  requestAnimationFrame(updateCounter);
}