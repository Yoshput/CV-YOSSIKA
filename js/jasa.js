/**
 * YOSSIKA PUTRA — Script Halaman Jasa & Pricelist
 * Features:
 * 1. GSAP + ScrollTrigger reveal animations
 * 2. 3D card tilt on mousemove (desktop only, 60fps)
 * 3. Interactive category tab filtering with smooth GSAP animations
 * 4. Smooth FAQ Accordion
 * 5. Theme sync (Dark/Light mode)
 * 6. Responsive mobile navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initCategoryFilter();
  initCardTilt();
  initFaqAccordion();
  initGsapAnimations();
  initCardVideos();
});

/* ── Theme Toggle ── */
function initThemeToggle() {
  const themeBtn = document.getElementById('jasaThemeToggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap');
    }
  }

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  }
}

/* ── Mobile Navigation ── */
function initMobileNav() {
  const hamburger = document.getElementById('jasaHamburger');
  const menu = document.getElementById('jasaNavMenu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('open');
      const isOpen = menu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
}

/* ── Category Filter Tabs ── */
function initCategoryFilter() {
  const tabs = document.querySelectorAll('.jasa-tab-btn');
  const cards = document.querySelectorAll('.jasa-price-card');
  const addonsSection = document.getElementById('jasaAddonsWrap');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const shouldShow = (cat === 'all' || cat === cardCat);

        if (shouldShow) {
          card.style.display = 'flex';
          if (window.gsap) {
            gsap.fromTo(card,
              { opacity: 0, y: 20, scale: 0.98 },
              { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
            );
          } else {
            card.style.opacity = '1';
          }
        } else {
          card.style.display = 'none';
        }
      });

      if (addonsSection) {
        if (cat === 'all' || cat === 'addon') {
          addonsSection.style.display = 'block';
          if (window.gsap) {
            gsap.fromTo(addonsSection,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
            );
          }
        } else {
          addonsSection.style.display = 'none';
        }
      }
    });
  });
}

/* ── 3D Micro-Tilt on Pricing Cards (Desktop Only) ── */
function initCardTilt() {
  // Hanya jalankan jika mendukung hover / bukan touch device murni
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cards = document.querySelectorAll('.jasa-price-card, .jasa-addon-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
        const rotateY = ((x - centerX) / centerX) * 6;  // max 6 deg

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }
}

/* ── FAQ Accordion ── */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.jasa-faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.jasa-faq-question');
    const answer = item.querySelector('.jasa-faq-answer');

    if (btn && answer) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Tutup yang lain untuk Apple minimalist single open feel
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAns = other.querySelector('.jasa-faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isActive) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        }
      });
    }
  });
}

/* ── GSAP Reveal Animations with Fail-Safe Visibility ── */
function initGsapAnimations() {
  // Safety fallback: if GSAP or ScrollTrigger fails to load, ensure all content is 100% visible
  const forceVisibility = () => {
    document.querySelectorAll('.jasa-price-card, .jasa-trust-card, .jasa-step-card, .jasa-faq-item, .jasa-cta-card, .jasa-section-header').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  };

  if (!window.gsap) {
    forceVisibility();
    return;
  }

  // Hero Reveal
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('.jasa-header', { y: -25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, clearProps: 'opacity,transform' })
    .fromTo('.jasa-hero-badge-wrap', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, clearProps: 'opacity,transform' }, '-=0.3')
    .fromTo('.jasa-hero-title', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, clearProps: 'opacity,transform' }, '-=0.3')
    .fromTo('.jasa-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, clearProps: 'opacity,transform' }, '-=0.4')
    .fromTo('.jasa-hero-highlights .jasa-highlight-pill', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, stagger: 0.08, clearProps: 'opacity,transform' }, '-=0.3')
    .fromTo('.jasa-hero-actions .jasa-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, clearProps: 'opacity,transform' }, '-=0.3');

  // ScrollTrigger Register
  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Section Titles
    document.querySelectorAll('.jasa-section-header').forEach(header => {
      gsap.fromTo(header.children,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: header,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });

    // Pricing Cards Stagger
    gsap.fromTo('.jasa-price-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.jasa-pricing-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    // Trust Cards Stagger
    gsap.fromTo('.jasa-trust-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.jasa-trust-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    // Steps Cards Stagger
    gsap.fromTo('.jasa-step-card',
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.jasa-steps-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    // FAQ Items Stagger
    gsap.fromTo('.jasa-faq-item',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.jasa-faq-list',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );

    // CTA Banner Reveal
    gsap.fromTo('.jasa-cta-card',
      { y: 35, scale: 0.98, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: {
          trigger: '.jasa-cta-section',
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      }
    );
  }

  // Handle direct hash navigation (e.g. #trust, #cara-order)
  function handleHashJump() {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.querySelectorAll('.jasa-trust-card, .jasa-step-card, .jasa-price-card, .jasa-faq-item, .jasa-section-header').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }
  }

  handleHashJump();
  window.addEventListener('hashchange', handleHashJump);

  // Smooth scroll links & instant visibility assurance
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
      const targetId = anchor.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.querySelectorAll('.jasa-trust-card, .jasa-step-card, .jasa-price-card').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        setTimeout(() => {
          if (window.ScrollTrigger) ScrollTrigger.refresh();
        }, 300);
      }
    });
  });

  // Fail-safe Watchdogs: ensure no card remains invisible if viewport calculations misfire
  setTimeout(() => {
    document.querySelectorAll('.jasa-trust-card, .jasa-step-card, .jasa-price-card, .jasa-faq-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 400);

  setTimeout(() => {
    document.querySelectorAll('.jasa-trust-card, .jasa-step-card').forEach(el => {
      if (getComputedStyle(el).opacity === '0') {
        el.style.opacity = '1';
        el.style.transform = 'none';
      }
    });
  }, 1000);
}

/* ── Card Video Loop Autoplay ── */
function initCardVideos() {
  const vids = document.querySelectorAll('.card-video-loop');
  if (!vids.length) return;
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.1 });
    vids.forEach(v => observer.observe(v));
  } else {
    vids.forEach(v => v.play().catch(() => {}));
  }
}

