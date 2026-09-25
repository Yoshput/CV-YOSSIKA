/**
 * Yossika Portfolio — Main Interactive Controller
 * Ultra-slick, interactive, GSAP-powered architecture with Fullscreen Case Studies.
 */

const PROJECT_ORDER = ['pos_iris', 'mubes_hipmi', 'photobooth_hipmi', 'imi_iseeyou', 'optik_iseeyou', 'gesture', 'food', 'macabae', 'ngertiindia', 'gymplanner', 'thrift'];

/* ==========================================================================
   GLOBAL PROJECT MEDIA ERROR FALLBACK SYSTEM
   Guarantees zero blank / gray boxes across all project cards & sections
   ========================================================================== */
window.handleMediaError = function(mediaEl) {
  if (!mediaEl || mediaEl.dataset.fallbackApplied) return;
  mediaEl.dataset.fallbackApplied = 'true';

  const container = mediaEl.closest('.project-media, .jasa-trust-media, .doc-media, .cert-media, .design-media') || mediaEl.parentElement;
  if (!container) return;

  // Find nearest title for initials and label
  const card = mediaEl.closest('.project-card, .jasa-trust-card, .doc-card, .cert-card, .design-card');
  let title = 'Project Showcase';
  if (card) {
    const titleEl = card.querySelector('.project-title, .jasa-trust-title, .doc-title, .cert-title, .design-title');
    if (titleEl) title = titleEl.textContent.trim();
  } else if (mediaEl.alt) {
    title = mediaEl.alt;
  }

  // Extract initials (e.g. GestureFlow v3.0 -> GF)
  const cleanTitle = title.replace(/[^a-zA-Z0-9\s]/g, '').trim();
  const words = cleanTitle.split(/\s+/).filter(Boolean);
  let initials = 'YP';
  if (words.length >= 2) {
    initials = (words[0][0] + words[1][0]).toUpperCase();
  } else if (words.length === 1 && words[0].length >= 2) {
    initials = words[0].substring(0, 2).toUpperCase();
  }

  // Hide failing media element
  mediaEl.style.display = 'none';

  // Check if fallback already exists in container
  if (!container.querySelector('.project-media-fallback')) {
    const fallback = document.createElement('div');
    fallback.className = 'project-media-fallback';
    fallback.innerHTML = `
      <div class="fallback-initials-badge">${initials}</div>
      <div class="fallback-title">${title.split('—')[0].trim()}</div>
      <span class="fallback-badge">✦ Interactive Project</span>
    `;
    container.appendChild(fallback);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Global Media Fallback Listener (Capture phase catches img & video error events)
  window.addEventListener('error', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'IMG' || target.tagName === 'VIDEO')) {
      if (target.closest('.project-media, .jasa-trust-media, .doc-media, .cert-media, .design-media')) {
        window.handleMediaError(target);
      }
    }
  }, true);

  // Auto-open case study if ?project=... is present in URL
  const urlParams = new URLSearchParams(window.location.search);
  const projParam = urlParams.get('project');
  if (projParam) {
    setTimeout(() => {
      openProjectModal(projParam);
    }, 350);
  }

  // Language Switcher Logic
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langText = document.getElementById('langText');
  function updateLangUI(lang) {
    if (langText) langText.textContent = lang.toUpperCase();
  }
  if (window.I18N) {
    updateLangUI(window.I18N.current || 'id');
  }
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const cur = window.I18N ? window.I18N.current : 'id';
      const next = cur === 'id' ? 'en' : 'id';
      if (window.I18N) window.I18N.setLanguage(next);
      updateLangUI(next);
      if (typeof playClickSound === 'function') playClickSound();
    });
  }

  // 1. Initialize i18n
  if (window.I18N) {
    window.I18N.init();
  }

  // 2. Initialize Lenis Smooth Inertia Scroll
  initLenisSmoothScroll();

  // 3. Theme Toggle (Dark / Light) with SVG Icons
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
      playClickSound();
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark'
      ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
      : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }

  // 5. Mobile Navigation Menu
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
      playClickSound();
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // 6. Active Nav & Dynamic Compact Navbar on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const siteHeader = document.getElementById('siteHeader');
  const navBackToTop = document.getElementById('navBackToTopBtn');

  if (navBackToTop) {
    navBackToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playClickSound();
    });
  }

  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Morph navbar to compact pill on scroll & control nav CTA visibility
    if (siteHeader) {
      if (scrollY > 120) {
        siteHeader.classList.add('scrolled-compact');
      } else if (scrollY < 70) {
        siteHeader.classList.remove('scrolled-compact');
      }
    }

    const navCtaBtn = document.querySelector('.nav-cta-btn');
    if (navCtaBtn) {
      if (scrollY > 320) {
        navCtaBtn.classList.add('scrolled-show');
      } else {
        navCtaBtn.classList.remove('scrolled-show');
      }
    }

    const mobileTopBtn = document.getElementById('mobileFloatingTopBtn');
    if (mobileTopBtn) {
      if (scrollY > 300) {
        mobileTopBtn.classList.add('visible');
      } else {
        mobileTopBtn.classList.remove('visible');
      }
    }

    let currentId = '';
    const scrollPos = scrollY + 140;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) {
        currentId = sec.id;
      }
    });
    navAnchors.forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === '#' + currentId);
    });
  }, { passive: true });

  // 7. Ambient Cursor Spotlight
  initCursorSpotlight();

  // 7b. Marcus Vane Cinematic Hero & Parallax Controller
  initMarcusHero();

  // 8. Three.js Hero 3D Particle Canvas
  initHeroThreeCanvas();

  // 9. 3D Holographic ID Card (360° Drag & Cursor Track)
  init3DHolographicCard();

  // 10. Web Audio API Synthesizer & Sound FX Toggle
  initSoundFx();

  // 11. Command Palette (Cmd+K)
  initCommandPalette();

  // 12. Interactive Live Price Calculator
  initPriceCalculator();

  // 13. Journey Accordion Toggles
  document.querySelectorAll('.timeline-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.timeline-item');
      const details = item.querySelector('.timeline-details');
      const isExpanded = details.classList.toggle('active');
      const isEn = window.I18N ? window.I18N.current === 'en' : true;
      btn.textContent = isExpanded 
        ? (isEn ? 'Hide Responsibilities' : 'Tutup Tanggung Jawab')
        : (isEn ? 'Show Responsibilities' : 'Lihat Tanggung Jawab');
      playClickSound();
    });
  });

  // 14. Feedback Form Submission & Profanity Filter
  initFeedbackForm();

  // 15. Chatbot Lazy Initialization
  initChatbotLauncher();

  // 16. Background Music Player (Lazy instantiated)
  initMusicPlayer();

  // 17. Autoplay Looping Media Observers
  initCardVideos();

  // 17b. Event Documentation Auto-Slideshow (smooth 2.8s crossfade)
  initDocCardSlideshow();

  // 18. Preloader & GSAP Animations
  if (window.gsap) {
    initPreloaderAndAnimations();
  } else {
    window.addEventListener('load', () => {
      initPreloaderAndAnimations();
    });
  }

  // 19. Global Escape Listener to close any open modal/case study
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudy();
      closeDocModal();
      closeCVModal();
      closeAllWorksModal();
      closeLightbox();
      closeCmdPalette();
      const langModal = document.getElementById('langModal');
      if (langModal) langModal.classList.remove('active');
    }
  });
});

/* ==========================================================================
   GSAP & SCROLLTRIGGER SMOOTH ANIMATIONS & PRELOADER
   ========================================================================== */
function initPreloaderAndAnimations() {
  const preloader = document.getElementById('appPreloader');
  const counterEl = document.getElementById('preloaderCounter');
  const barEl = document.getElementById('preloaderBar');

  // If user has already visited in this session, skip preloader immediately!
  try {
    if (sessionStorage.getItem('yp_visited')) {
      if (preloader) {
        preloader.style.display = 'none';
        preloader.setAttribute('aria-hidden', 'true');
      }
      initHeroEntrance();
      return;
    }
  } catch (e) {}

  let isDone = false;
  function finishPreloader() {
    if (isDone) return;
    isDone = true;
    try { sessionStorage.setItem('yp_visited', '1'); } catch (e) {}

    if (window.gsap) {
      gsap.to('.preloader-content', {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.35,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to('#appPreloader', {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: () => {
              if (preloader) {
                preloader.style.display = 'none';
                preloader.setAttribute('aria-hidden', 'true');
              }
            }
          });
          initHeroEntrance();
        }
      });
    } else {
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
          initHeroEntrance();
        }, 400);
      }
    }
  }

  if (preloader) {
    if (window.gsap) {
      const progressObj = { value: 0 };
      gsap.to(progressObj, {
        value: 100,
        duration: 1.15,
        ease: 'power2.out',
        onUpdate: () => {
          const val = Math.floor(progressObj.value);
          if (counterEl) counterEl.textContent = String(val).padStart(2, '0') + '%';
          if (barEl) barEl.style.width = val + '%';
        },
        onComplete: finishPreloader
      });
    } else {
      let count = 0;
      const interval = setInterval(() => {
        count += 5;
        if (counterEl) counterEl.textContent = String(Math.min(count, 100)).padStart(2, '0') + '%';
        if (barEl) barEl.style.width = Math.min(count, 100) + '%';
        if (count >= 100) {
          clearInterval(interval);
          finishPreloader();
        }
      }, 45);
    }
    setTimeout(finishPreloader, 1500); // Failsafe safety
  } else {
    initHeroEntrance();
  }

  initScrollTriggerSections();
}

function animateHeroStats() {
  const stats = [
    { selector: '.hero-stats > div:nth-child(1) .stat-val', end: 6, suffix: '+' },
    { selector: '.hero-stats > div:nth-child(2) .stat-val', end: 12, suffix: '+' },
    { selector: '.hero-stats > div:nth-child(3) .stat-val', end: 8, suffix: '+' },
    { selector: '.hero-stats > div:nth-child(4) .stat-val', end: 100, suffix: '%' }
  ];

  stats.forEach(item => {
    const el = document.querySelector(item.selector);
    if (!el) return;
    const obj = { val: 0 };
    if (window.gsap) {
      gsap.to(obj, {
        val: item.end,
        duration: 1.4,
        delay: 0.2,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + item.suffix;
        }
      });
    }
  });
}

function initHeroEntrance() {
  if (!window.gsap) return;

  const heroTL = gsap.timeline({ defaults: { ease: 'power4.out' } });
  const isMobile = window.innerWidth <= 992;

  if (isMobile) {
    // ════ MOBILE HERO: 3D Holographic ID Card Enters FIRST with High-Impact Pop ════
    heroTL
      .fromTo('.site-header', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo('.id-card-3d-wrap', 
        { scale: 0.72, opacity: 0, rotationY: -35, rotationX: 25, y: 35 }, 
        { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, y: 0, duration: 1.05, ease: 'elastic.out(1, 0.75)' }
      )
      .fromTo('.hero-tag', { scale: 0.85, y: 15, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.45, ease: 'back.out(1.8)' }, '-=0.4')
      .fromTo('.hero-name span', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power4.out' }, '-=0.3')
      .fromTo('.hero-role', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, '-=0.3')
      .fromTo('.hero-desc', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, '-=0.3')
      .fromTo('.hero-socials .pill', { scale: 0.85, opacity: 0, y: 12 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'back.out(1.5)' }, '-=0.25')
      .fromTo('.hero-actions .btn, .hero-actions a.btn', { y: 20, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'back.out(1.4)' }, '-=0.25')
      .fromTo('.hero-stats > div', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06 }, '-=0.3');
  } else {
    // ════ DESKTOP HERO: Balanced Split 3D Grid Entrance ════
    heroTL
      .fromTo('.site-header', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.hero-tag', { scale: 0.8, y: 20, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.8)' }, '-=0.3')
      .fromTo('.hero-name span', { y: 55, opacity: 0, rotationX: 20 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.75, stagger: 0.12, ease: 'power4.out' }, '-=0.3')
      .fromTo('.hero-role', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
      .fromTo('.hero-socials .pill', { scale: 0.85, opacity: 0, y: 15 }, { scale: 1, opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'back.out(1.6)' }, '-=0.3')
      .fromTo('.hero-actions .btn, .hero-actions a.btn', { y: 25, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: 'back.out(1.4)' }, '-=0.3')
      .fromTo('.hero-stats > div', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.4')
      .fromTo('.id-card-3d-wrap', { scale: 0.82, opacity: 0, rotationY: 30, rotationX: 15, y: 40 }, { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, y: 0, duration: 0.95, ease: 'power4.out' }, '-=0.7');
  }

  animateHeroStats();

  // Continuous ambient floating tilt on 3D card
  gsap.to('#idCard3D', {
    y: -10,
    rotationZ: 0.8,
    duration: 3.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

function initScrollTriggerSections() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // ScrollTrigger Animations for Page Sections
  if (window.ScrollTrigger) {
    // Section Headers
    document.querySelectorAll('.section-head').forEach(head => {
      gsap.from(head.children, {
        scrollTrigger: {
          trigger: head,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out'
      });
    });

    // Bento Grid Cards
    gsap.from('.bento-grid .bento-card', {
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 82%',
        toggleActions: 'play none none none'
      },
      y: 45,
      opacity: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: 'power3.out'
    });

    // Dedicated Jasa Section & Showcase Box Entrance
    gsap.fromTo('.jasa-showcase-box',
      { opacity: 0, y: 55, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#jasa-preview',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.from('.calc-container', {
      scrollTrigger: {
        trigger: '.calc-container',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      scale: 0.96,
      y: 30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    });

    // Projects Grid
    gsap.from('.projects-grid .project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 82%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.85,
      stagger: 0.16,
      ease: 'power3.out'
    });

    // Jasa Teaser Banner Scroll Reveal (Smooth pop-up with breathing room)
    gsap.from('.jasa-teaser-banner', {
      scrollTrigger: {
        trigger: '.jasa-teaser-banner',
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      scale: 0.98,
      duration: 0.85,
      ease: 'power3.out'
    });

    // About Section
    gsap.from('.about-photo-card', {
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -45,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 45,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    // Graphic Design Cards
    gsap.from('.designs-grid .design-card', {
      scrollTrigger: {
        trigger: '.designs-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Business Card
    gsap.from('.business-card', {
      scrollTrigger: {
        trigger: '.business-card',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 45,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    });

    // Timeline Items
    document.querySelectorAll('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 35,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.05,
        ease: 'power3.out'
      });
    });

    // Documentation Cards
    gsap.from('.docs-grid .doc-card', {
      scrollTrigger: {
        trigger: '.docs-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Skills Running Marquee
    gsap.from('.skills-marquee-wrapper', {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Certifications
    gsap.from('.certs-grid .cert-card', {
      scrollTrigger: {
        trigger: '.certs-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Contact Form & Info
    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: -40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      x: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }
}

/* ==========================================================================
   CARD AUTOPLAY VIDEO CONTROLLER (INTERSECTION OBSERVER)
   ========================================================================== */
function initCardVideos() {
  const cardVideos = document.querySelectorAll('.card-video-loop');
  if (!cardVideos.length) return;

  cardVideos.forEach(vid => {
    vid.addEventListener('error', () => {
      if (typeof window.handleMediaError === 'function') {
        window.handleMediaError(vid);
      }
    });
  });

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
    cardVideos.forEach(v => observer.observe(v));
  } else {
    cardVideos.forEach(v => v.play().catch(() => {}));
  }
}

/* ==========================================================================
   DOCUMENTATION CARDS AUTO-SLIDESHOW
   Smoothly cross-fades photos every 2.8s on event cards
   ========================================================================== */
function initDocCardSlideshow() {
  const docMediaContainers = document.querySelectorAll('.doc-media[data-images]');
  if (!docMediaContainers.length) return;

  docMediaContainers.forEach((container, cardIdx) => {
    let images = [];
    try {
      images = JSON.parse(container.getAttribute('data-images') || '[]');
    } catch (e) {
      return;
    }
    if (!Array.isArray(images) || images.length <= 1) return;

    const initialImg = container.querySelector('img');
    const altBase = initialImg ? initialImg.getAttribute('alt') : 'Dokumentasi Acara';
    container.innerHTML = '';

    const slideImgs = [];
    images.forEach((src, idx) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `${altBase} (${idx + 1})`;
      img.width = 400;
      img.height = 250;
      img.loading = idx === 0 ? 'eager' : 'lazy';
      img.className = idx === 0 ? 'slide-active' : 'slide-inactive';
      container.appendChild(img);
      slideImgs.push(img);
    });

    const dotsWrap = document.createElement('div');
    dotsWrap.className = 'doc-slideshow-dots';
    dotsWrap.setAttribute('aria-hidden', 'true');
    const dots = [];
    images.forEach((_, idx) => {
      const dot = document.createElement('span');
      dot.className = idx === 0 ? 'doc-dot active' : 'doc-dot';
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
    container.appendChild(dotsWrap);

    let currentIndex = 0;
    let isPaused = false;

    function nextSlide() {
      if (isPaused) return;
      const prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % images.length;

      slideImgs[prevIndex].classList.remove('slide-active');
      slideImgs[prevIndex].classList.add('slide-inactive');

      slideImgs[currentIndex].classList.remove('slide-inactive');
      slideImgs[currentIndex].classList.add('slide-active');

      dots[prevIndex].classList.remove('active');
      dots[currentIndex].classList.add('active');
    }

    // Stagger start time so cards cycle rhythmically and independently
    const delayOffset = cardIdx * 450;
    setTimeout(() => {
      setInterval(nextSlide, 2800);
    }, delayOffset);

    // Pause on hover
    const parentCard = container.closest('.doc-card');
    if (parentCard) {
      parentCard.addEventListener('mouseenter', () => { isPaused = true; });
      parentCard.addEventListener('mouseleave', () => { isPaused = false; });
    }
  });
}

/* ==========================================================================
   1. LENIS SMOOTH INERTIA SCROLL ENGINE
   ========================================================================== */
let lenisInstance = null;

function initLenisSmoothScroll() {
  if (typeof Lenis === 'undefined') return;

  try {
    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5
    });
    window.lenisInstance = lenisInstance;

    const scrollProgressBar = document.getElementById('scrollProgress');

    lenisInstance.on('scroll', (e) => {
      if (window.ScrollTrigger) ScrollTrigger.update();
      if (scrollProgressBar) {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalScroll > 0 ? (e.animatedScroll / totalScroll) * 100 : 0;
        scrollProgressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
      }
    });

    if (window.gsap) {
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch (err) {
    console.warn('Lenis initialization notice:', err);
  }
}

/* ==========================================================================
   2. THREE.JS INTERACTIVE 3D HERO CANVAS
   ========================================================================== */
function initHeroThreeCanvas() {
  const canvas = document.getElementById('heroCanvas3D');
  const heroSection = document.getElementById('hero');
  if (!canvas || !heroSection || typeof THREE === 'undefined') return;

  try {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, heroSection.clientWidth / heroSection.clientHeight, 0.1, 1000);
    camera.position.z = 25;

    const isMobile = window.innerWidth <= 768;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !isMobile, powerPreference: 'high-performance' });
    renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));

    // Particle constellation
    const particleCount = isMobile ? 320 : 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x38bdf8); // Cyan
    const color2 = new THREE.Color(0x6366f1); // Indigo
    const color3 = new THREE.Color(0x34d399); // Emerald

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 45;
      positions[i3 + 1] = (Math.random() - 0.5) * 35;
      positions[i3 + 2] = (Math.random() - 0.5) * 30;

      const mixed = Math.random() < 0.5 ? color1.clone().lerp(color2, Math.random()) : color2.clone().lerp(color3, Math.random());
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.35 : 0.48,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    function onPointerMove(e) {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      targetX = x * 0.0007;
      targetY = y * 0.0007;
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let isHeroVisible = true;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        isHeroVisible = entry.isIntersecting;
      }, { threshold: 0.05 });
      observer.observe(heroSection);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isHeroVisible) return;

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      particles.rotation.y += 0.0012 + mouseX * 0.02;
      particles.rotation.x += 0.0006 + mouseY * 0.02;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      if (!heroSection) return;
      camera.aspect = heroSection.clientWidth / heroSection.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
    }, { passive: true });
  } catch (err) {
    console.warn('Three.js hero canvas notice:', err);
  }
}

/* ==========================================================================
   3. 3D HOLOGRAPHIC INTERACTIVE PROFILE CARD (360° Drag & Parallax)
   ========================================================================== */
function flipIdCard(e) {
  if (e) e.stopPropagation();
  const card = document.getElementById('idCard3D');
  if (!card) return;
  card.classList.toggle('flipped');
  playFlipSound();
}
window.flipIdCard = flipIdCard;

function init3DHolographicCard() {
  const wrap = document.getElementById('idCard3DWrap');
  const card = document.getElementById('idCard3D');
  if (!wrap || !card) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let rotX = 0, rotY = 0;
  let curRotX = 0, curRotY = 0;

  // Desktop hover parallax
  wrap.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rY = (x / (rect.width / 2)) * 18;
    const rX = -(y / (rect.height / 2)) * 18;

    card.style.transform = `rotateY(${rY.toFixed(2)}deg) rotateX(${rX.toFixed(2)}deg)`;

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--glare-x', glareX + '%');
    card.style.setProperty('--glare-y', glareY + '%');
  });

  wrap.addEventListener('mouseleave', () => {
    if (isDragging) return;
    card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    setTimeout(() => { card.style.transition = 'transform 0.1s ease-out'; }, 600);
  });

  // Touch drag / Pointer drag for 360 rotation
  function onPointerDown(e) {
    if (e.target.closest('.id-card-flip-btn')) return;
    isDragging = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX);
    startY = e.clientY || (e.touches && e.touches[0].clientY);
    card.style.transition = 'none';
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    curRotY = rotY + deltaX * 0.45;
    curRotX = Math.max(-40, Math.min(40, rotX - deltaY * 0.35));

    card.style.transform = `rotateY(${curRotY.toFixed(1)}deg) rotateX(${curRotX.toFixed(1)}deg)`;
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    rotY = curRotY % 360;
    rotX = curRotX;

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    card.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    rotX = 0;
    rotY = 0;
    setTimeout(() => { card.style.transition = 'transform 0.1s ease-out'; }, 700);
  }

  wrap.addEventListener('pointerdown', onPointerDown);
}

/* ==========================================================================
   4. WEB AUDIO API SYNTHESIZER & HAPTIC SOUND FX
   ========================================================================== */
let audioCtx = null;
let soundFxEnabled = localStorage.getItem('soundFxEnabled') !== 'false'; // default true

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioCtx = new AudioContext();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playHoverBlip() {
  if (!soundFxEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (err) {}
}

function playClickSound() {
  if (!soundFxEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch (err) {}
}

function playFlipSound() {
  if (!soundFxEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  } catch (err) {}
}

function toggleSoundFx() {
  soundFxEnabled = !soundFxEnabled;
  localStorage.setItem('soundFxEnabled', soundFxEnabled);
  updateSoundFxUI();
  if (soundFxEnabled) playClickSound();
}
window.toggleSoundFx = toggleSoundFx;

function updateSoundFxUI() {
  const btn = document.getElementById('soundFxBtn');
  const status = document.getElementById('soundFxStatus');
  if (btn) btn.classList.toggle('active', soundFxEnabled);
  if (status) status.textContent = soundFxEnabled ? 'SFX ON' : 'SFX OFF';
}

function initSoundFx() {
  updateSoundFxUI();
  const triggers = document.querySelectorAll(
    '.btn, .nav-cta-btn, .nav-links a, .icon-btn, .calc-plan-btn, .calc-addon-item, .proj-filter-btn, .jasa-tab-btn, .sound-toggle-btn, .id-card-flip-btn, .timeline-toggle-btn, .project-card, .design-card, .doc-card, .cert-card'
  );
  triggers.forEach(el => {
    el.addEventListener('mouseenter', () => playHoverBlip(), { passive: true });
    el.addEventListener('click', () => playClickSound(), { passive: true });
  });
}

/* ==========================================================================
   5. COMMAND PALETTE (CMD+K / SPOTLIGHT SEARCH)
   ========================================================================== */
const CMD_ITEMS = [
  { id: 'jasa_wa', title: 'Order Jasa Web via WhatsApp', category: 'Layanan', action: () => window.open('https://wa.me/6287778683766?text=Halo%20Mas%20Yossika,%20saya%20tertarik%20order%20pembuatan%20website.', '_blank'), badge: 'WhatsApp' },
  { id: 'calc', title: 'Kalkulator Biaya & Fitur Web', category: 'Layanan', action: () => { const el = document.getElementById('priceCalculator'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, badge: 'Estimator' },
  { id: 'jasa_page', title: 'Buka Halaman Jasa & Pricelist Lengkap', category: 'Halaman', action: () => { window.location.href = '/jasa'; }, badge: 'Pricelist' },
  { id: 'proj_pos', title: 'Proyek: Sistem POS Operasional IRIS (Optik I See You)', category: 'Proyek', action: () => openProjectModal('pos_iris'), badge: 'Case Study' },
  { id: 'proj_mubes', title: 'Proyek: Sistem Konstitusi & RAB MUBES HIPMI', category: 'Proyek', action: () => openProjectModal('mubes_hipmi'), badge: 'Case Study' },
  { id: 'proj_photo', title: 'Proyek: Photobooth AI Web App HIPMI', category: 'Proyek', action: () => openProjectModal('photobooth_hipmi'), badge: 'Vision AI' },
  { id: 'proj_imi', title: 'Proyek: IMI Marketing Intelligence', category: 'Proyek', action: () => openProjectModal('imi_iseeyou'), badge: 'Predictive AI' },
  { id: 'projects_all', title: 'Jelajahi Semua Proyek & Portfolio', category: 'Navigasi', action: () => openAllWorksModal(), badge: 'Gallery' },
  { id: 'cv_modal', title: 'Lihat Curriculum Vitae (PDF)', category: 'Resume', action: () => openCVModal(), badge: 'CV' },
  { id: 'capabilities', title: 'Lihat Keahlian & Tech Arsenal', category: 'Navigasi', action: () => { const el = document.getElementById('capabilities'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, badge: 'Skills' },
  { id: 'contact', title: 'Kirim Pesan Langsung (Contact Form)', category: 'Kontak', action: () => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, badge: 'Contact' },
  { id: 'github', title: 'Buka Profil GitHub (@yoshput)', category: 'Social', action: () => window.open('https://github.com/yoshput', '_blank'), badge: 'GitHub' },
  { id: 'linkedin', title: 'Buka Profil LinkedIn (Yossika Putra)', category: 'Social', action: () => window.open('https://www.linkedin.com/in/yossikaputraerlangga/', '_blank'), badge: 'LinkedIn' },
  { id: 'yosbot', title: 'Tanya YosBot AI Assistant', category: 'AI', action: () => { const launcher = document.getElementById('chatbotLauncher'); if (launcher) launcher.click(); }, badge: 'Chatbot' }
];

/* ==========================================================================
   MODAL SCROLL LOCK & OVERSCROLL HELPERS
   ========================================================================== */
function lockBodyScroll() {
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
  if (window.lenisInstance) {
    try { window.lenisInstance.stop(); } catch (e) {}
  }
  if (window.ScrollTrigger) {
    ScrollTrigger.getAll().forEach(st => st.disable(false));
  }
}
window.lockBodyScroll = lockBodyScroll;

function unlockBodyScroll() {
  const anyOpen = document.querySelector('.case-study-overlay.active, .modal-overlay.active, .cmd-palette-overlay.active, .lightbox-overlay.active');
  if (!anyOpen) {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
    if (window.lenisInstance) {
      try { window.lenisInstance.start(); } catch (e) {}
    }
    if (window.ScrollTrigger) {
      ScrollTrigger.getAll().forEach(st => st.enable(false));
    }
  }
}
window.unlockBodyScroll = unlockBodyScroll;

let selectedCmdIndex = 0;
let filteredCmdItems = [...CMD_ITEMS];

function openCmdPalette() {
  const overlay = document.getElementById('cmdPaletteOverlay');
  const input = document.getElementById('cmdPaletteInput');
  if (!overlay || !input) return;
  overlay.classList.add('active');
  lockBodyScroll();
  input.value = '';
  filteredCmdItems = [...CMD_ITEMS];
  selectedCmdIndex = 0;
  renderCmdList();
  setTimeout(() => input.focus(), 60);
  playClickSound();
}
window.openCmdPalette = openCmdPalette;

function closeCmdPalette(e) {
  if (e && e.target && e.target.closest && e.target.closest('.cmd-palette-modal') && e.type !== 'keydown') return;
  const overlay = document.getElementById('cmdPaletteOverlay');
  if (overlay) overlay.classList.remove('active');
  unlockBodyScroll();
}
window.closeCmdPalette = closeCmdPalette;

function renderCmdList() {
  const list = document.getElementById('cmdPaletteList');
  if (!list) return;
  if (filteredCmdItems.length === 0) {
    list.innerHTML = '<div style="padding:1.5rem;text-align:center;color:var(--txt-dim);font-size:0.9rem;">Tidak ada perintah yang sesuai kata kunci.</div>';
    return;
  }
  list.innerHTML = filteredCmdItems.map((item, i) => `
    <div class="cmd-palette-item ${i === selectedCmdIndex ? 'selected' : ''}" onclick="executeCmdItem(${i})">
      <div class="cmd-palette-item-left">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent);"><polyline points="9 18 15 12 9 6"></polyline></svg>
        <span>${item.title}</span>
      </div>
      <span class="cmd-badge">${item.badge}</span>
    </div>
  `).join('');
}

function executeCmdItem(index) {
  const item = filteredCmdItems[index];
  if (item) {
    closeCmdPalette();
    item.action();
  }
}
window.executeCmdItem = executeCmdItem;

function initCommandPalette() {
  const input = document.getElementById('cmdPaletteInput');
  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      filteredCmdItems = CMD_ITEMS.filter(it => it.title.toLowerCase().includes(q) || it.category.toLowerCase().includes(q) || it.badge.toLowerCase().includes(q));
      selectedCmdIndex = 0;
      renderCmdList();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedCmdIndex = (selectedCmdIndex + 1) % filteredCmdItems.length;
        renderCmdList();
        playHoverBlip();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedCmdIndex = (selectedCmdIndex - 1 + filteredCmdItems.length) % filteredCmdItems.length;
        renderCmdList();
        playHoverBlip();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCmdItem(selectedCmdIndex);
      } else if (e.key === 'Escape') {
        closeCmdPalette();
      }
    });
  }

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const overlay = document.getElementById('cmdPaletteOverlay');
      if (overlay && overlay.classList.contains('active')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
    } else if (e.key === 'Escape') {
      closeCmdPalette();
    }
  });
}

/* ==========================================================================
   6. DYNAMIC JASA PRICING CARDS & CATEGORY CONTROLLER
   ========================================================================== */
const JASA_DATA = {
  landing_page: {
    title: 'Landing Page High-Converting',
    plans: [
      {
        name: 'Basic Landing',
        price: 'Rp 300.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Cocok untuk promosi satu produk, presale event, atau UMKM yang butuh web online kilat.',
        features: [
          '1 Halaman Penuh Responsif Modern',
          'Tombol CTA WhatsApp Langsung',
          'Integrasi Google Maps & Sosmed',
          'Kecepatan Load Kilat Sub-Detik',
          'Pengerjaan Cepat 1 - 2 Hari'
        ],
        badge: 'STARTER',
        featured: false,
        btnText: 'Pilih Paket Basic'
      },
      {
        name: 'Profesional',
        price: 'Rp 500.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Paket paling dicari. Standar Apple HIG dengan copywriting persuasif yang bikin pengunjung terkesima.',
        features: [
          'Desain Premium High-Converting',
          'Formulir Leads & Checkout WA Instan',
          'Animasi Smooth GSAP & Glassmorphism',
          'SEO Dasar Terindeks Google',
          'Garansi Uptime & Bebas Bug 30 Hari',
          'Pengerjaan 2 - 3 Hari'
        ],
        badge: 'POPULAR',
        featured: true,
        btnText: 'Order Paket Populer'
      },
      {
        name: 'Business Pro',
        price: 'Rp 1.500.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Solusi lengkap skala bisnis untuk kampanye iklan berbayar (Meta Ads / TikTok Ads / Google Ads).',
        features: [
          'Custom UI/UX Standar Brand Unik',
          'Tracking Pixel Meta & Google Analytics',
          'Integrasi AI Chatbot (Gemini / OpenAI)',
          'Domain Resmi .com/.id + Cloud Server 1 Thn',
          'Prioritas Pengerjaan 48 Jam'
        ],
        badge: 'ENTERPRISE',
        featured: false,
        btnText: 'Pilih Paket Business'
      }
    ]
  },
  company_profile: {
    title: 'Company Profile Perusahaan & Lembaga',
    plans: [
      {
        name: 'Lite Profile',
        price: 'Rp 700.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Membangun kredibilitas instan untuk CV, startup baru, kantor konsultan, atau UMKM berkembang.',
        features: [
          'Hingga 4 Halaman Profil Lengkap',
          'Desain Elegan, Rapi, & Mobile-First',
          'Galeri Karya / Portofolio Klien',
          'Tombol Inquiry & Direct Contact',
          'Pengerjaan 3 - 5 Hari Kerja'
        ],
        badge: 'BASIC',
        featured: false,
        btnText: 'Pilih Lite Profile'
      },
      {
        name: 'Business Suite',
        price: 'Rp 1.500.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Standar korporasi modern dengan struktur informasi komprehensif dan performa Google Lighthouse 95+.',
        features: [
          'Hingga 8 Halaman Eksklusif & Dinamis',
          'Desain Apple HIG Glassmorphism Modern',
          'Katalog Layanan & Form Penawaran Resmi',
          'Optimasi Kecepatan & SEO On-Page Lengkap',
          'Garansi Teknis & Pemeliharaan 30 Hari',
          'Pengerjaan 5 - 7 Hari Kerja'
        ],
        badge: 'POPULAR',
        featured: true,
        btnText: 'Order Business Suite'
      },
      {
        name: 'Corporate Enterprise',
        price: 'Rp 2.000.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Solusi prestisius untuk PT, yayasan besar, atau instansi yang menginginkan portal mandiri.',
        features: [
          'Unlimited Halaman / Section Standar',
          'Dukungan Multi-Bahasa (ID / EN)',
          'Email Bisnis Resmi (@perusahaan.com)',
          'CMS / Panel Kelola Konten Mandiri',
          'Dukungan Pemeliharaan Prioritas 3 Bulan'
        ],
        badge: 'FLAGSHIP',
        featured: false,
        btnText: 'Pilih Corporate'
      }
    ]
  },
  ecommerce: {
    title: 'Toko Online & E-Commerce',
    plans: [
      {
        name: 'Starter Store',
        price: 'Rp 1.500.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Katalog belanja digital dengan alur pemesanan langsung masuk ke WhatsApp admin penjualan.',
        features: [
          'Katalog Produk hingga 50 SKU',
          'Integrasi Keranjang & Checkout WhatsApp Otomatis',
          'Kategori Produk & Pencarian Instan',
          'Banner Slider Promosi & Diskon',
          'Pengerjaan 5 - 7 Hari Kerja'
        ],
        badge: 'STARTER',
        featured: false,
        btnText: 'Pilih Starter Store'
      },
      {
        name: 'Growth Store',
        price: 'Rp 2.700.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Otomatisasi jualan online dengan payment gateway dan hitung ongkir otomatis se-Indonesia.',
        features: [
          'Katalog Produk hingga 250 SKU',
          'Payment Gateway (QRIS, VA, E-Wallet otomatis)',
          'Hitung Ongkos Kirim Otomatis (RajaOngkir)',
          'Dashboard Laporan Penjualan & Order',
          'Kupon Promo & Kode Diskon',
          'Pengerjaan 7 - 10 Hari Kerja'
        ],
        badge: 'POPULAR',
        featured: true,
        btnText: 'Order Growth Store'
      },
      {
        name: 'Custom Enterprise',
        price: 'Rp 4.000.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Sistem marketplace atau e-commerce skala penuh dengan integrasi pergudangan dan multi-admin.',
        features: [
          'Unlimited SKU Produk & Variasi',
          'Akun Member Pelanggan & Poin Reward',
          'Manajemen Stok Multi-Gudang',
          'Integrasi Notifikasi WhatsApp Gateway',
          'Server Setup High-Traffic & Anti-Down'
        ],
        badge: 'ADVANCED',
        featured: false,
        btnText: 'Pilih Enterprise'
      }
    ]
  },
  sistem_digital: {
    title: 'Sistem POS Kasir & Web App Operasional',
    plans: [
      {
        name: 'Lite POS / Web App',
        price: 'Rp 1.000.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Digitalisasi catatan manual bisnis Anda menjadi database cloud realtime yang rapi dan aman.',
        features: [
          'Modul Form Transaksi & Database Cloud',
          'Dashboard Ringkasan Penjualan Harian',
          'Export Laporan Transaksi ke Excel / PDF',
          'Dapat Diakses dari HP, Tablet, & Laptop',
          'Pengerjaan 5 - 7 Hari Kerja'
        ],
        badge: 'LITE',
        featured: false,
        btnText: 'Pilih Lite POS'
      },
      {
        name: 'Standart POS Kasir',
        price: 'Rp 1.800.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Sistem kasir profesional setara sistem IRIS Optik I See You yang telah teruji di lapangan nyata.',
        features: [
          'Sistem Kasir Kasir Cepat & Manajemen Stok',
          'Multi-User Role (Kasir, Supervisor, Owner)',
          'Cetak Struk Bluetooth & Scanner Barcode',
          'Laporan Laba Rugi & Rekap Kas Otomatis',
          'Garansi Maintenance & Pendampingan 60 Hari',
          'Pengerjaan 10 - 14 Hari Kerja'
        ],
        badge: 'POPULAR',
        featured: true,
        btnText: 'Order Standart POS'
      },
      {
        name: 'Custom Digital Ecosystem',
        price: 'Rp 3.500.000+',
        period: '/ proyek (estimasi sesuai fitur)',
        desc: 'Rekayasa sistem enterprise kustom (ERP, CRM, AI Vision Scanner, atau sistem organisasi kampus).',
        features: [
          'Arsitektur Database Cloud Skalabilitas Tinggi',
          'Integrasi AI Intelligence / Predictive Modeling',
          'RESTful API Backend & Integrasi Hardware',
          'Audit Log Keamanan & Enkripsi Data',
          'Full Dokumentasi Sistem & Source Code'
        ],
        badge: 'CUSTOM ARCH',
        featured: false,
        btnText: 'Konsultasi Kustom'
      }
    ]
  },
  portfolio_web: {
    title: 'Web Portofolio Pribadi & Resume Interaktif',
    plans: [
      {
        name: 'Starter Portfolio',
        price: 'Rp 150.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Profil digital modern pengganti linktree biasa untuk mahasiswa, freelancer, atau kreator konten.',
        features: [
          'Single Page Personal Branding',
          'Tampilan Elegan & Responsif di Semua HP',
          'Tautan Sosial Media & Kontak Langsung',
          'Penyimpanan di Hosting Cloud Gratis Cepat',
          'Pengerjaan Kilat 24 Jam'
        ],
        badge: 'STARTER',
        featured: false,
        btnText: 'Pilih Starter'
      },
      {
        name: 'Pro Bento Portfolio',
        price: 'Rp 300.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Portofolio kelas dunia dengan tata letak Bento Grid modern, mode gelap/terang, dan galeri karya interaktif.',
        features: [
          'Bento Grid Modern Layout',
          'Dark / Light Mode Interaktif',
          'Filter Kategori Karya & Proyek',
          'Viewer CV / Resume Digital Interaktif',
          'Pengerjaan 1 - 2 Hari'
        ],
        badge: 'POPULAR',
        featured: true,
        btnText: 'Order Pro Bento'
      },
      {
        name: 'Executive Cinematic',
        price: 'Rp 700.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Portofolio interaktif tingkat tinggi dengan elemen 2.5D visual, sound effects elegan, dan domain pribadi terverifikasi.',
        features: [
          'Interactive 2.5D Cinematic Hero & Custom Stage',
          'Audio Synthesizer Sound FX & Command Palette (⌘K)',
          'Case Study Viewer Imersif Layar Penuh',
          'Termasuk Domain .my.id / .com 1 Tahun',
          'Optimasi Skor SEO & Lighthouse 95+'
        ],
        badge: 'EXECUTIVE',
        featured: false,
        btnText: 'Order Executive'
      }
    ]
  }
};

let currentJasaCategory = 'landing_page';

function renderJasaCards(catId) {
  const container = document.getElementById('pricingTierCards');
  if (!container) return;

  const data = JASA_DATA[catId] || JASA_DATA['landing_page'];
  currentJasaCategory = catId;

  const checkSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  container.innerHTML = data.plans.map(p => {
    const waText = encodeURIComponent(`Halo Mas Yossika, saya tertarik dengan paket *${p.name}* untuk *${data.title}* (${p.price}). Bisa konsultasi sekarang?`);
    const waUrl = `https://wa.me/6287778683766?text=${waText}`;

    return `
      <div class="pricing-card ${p.featured ? 'featured' : ''}">
        ${p.badge ? `<div class="pricing-popular-badge">${p.badge}</div>` : ''}
        <h3 class="pricing-tier-name">${p.name}</h3>
        <p class="pricing-tier-desc">${p.desc}</p>
        <div class="pricing-price-wrap">
          <div class="pricing-price">${p.price}</div>
          <div class="pricing-period">${p.period}</div>
        </div>
        <ul class="pricing-features">
          ${p.features.map(f => `
            <li class="pricing-feature-item">
              ${checkSvg}
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <a href="${waUrl}" target="_blank" rel="noopener" class="btn ${p.featured ? 'btn-primary' : 'btn-secondary'}" style="width:100%;text-align:center;justify-content:center;gap:0.5rem;font-weight:700;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          <span>${p.btnText}</span>
        </a>
      </div>
    `;
  }).join('');

  if (window.gsap) {
    gsap.fromTo(container.querySelectorAll('.pricing-card'),
      { opacity: 0, y: 25, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.08, ease: 'power2.out' }
    );
  }
}
window.renderJasaCards = renderJasaCards;

function selectJasaCategory(catId) {
  document.querySelectorAll('.jasa-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === catId);
  });
  renderJasaCards(catId);
  playClickSound();
}
window.selectJasaCategory = selectJasaCategory;

/* ==========================================================================
   7. INTERACTIVE LIVE PRICE & FEATURE ESTIMATOR
   ========================================================================== */
let currentPlan = { name: 'Landing Page', price: 800000, days: '3 - 5 Hari Kerja' };

function selectCalcPlan(btn) {
  document.querySelectorAll('.calc-plan-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentPlan = {
    name: btn.getAttribute('data-plan'),
    price: parseInt(btn.getAttribute('data-base'), 10),
    days: btn.getAttribute('data-days')
  };
  playClickSound();
  updateCalcTotal();
}
window.selectCalcPlan = selectCalcPlan;

function toggleCalcAddon(label) {
  const checkbox = label.querySelector('input[type="checkbox"]');
  if (!checkbox) return;
  setTimeout(() => {
    label.classList.toggle('checked', checkbox.checked);
    updateCalcTotal();
  }, 10);
  playClickSound();
}
window.toggleCalcAddon = toggleCalcAddon;

function updateCalcTotal() {
  let total = currentPlan.price;
  const addonsText = [];

  document.querySelectorAll('.calc-addons-list input[type="checkbox"]:checked').forEach(cb => {
    total += parseInt(cb.value, 10);
    addonsText.push(cb.getAttribute('data-addon'));
  });

  const totalEl = document.getElementById('calcTotalDisplay');
  const timeEl = document.getElementById('calcTimeDisplay');
  const waBtn = document.getElementById('calcWhatsAppBtn');

  if (totalEl) totalEl.textContent = 'Rp ' + total.toLocaleString('id-ID');
  if (timeEl) timeEl.textContent = currentPlan.days;

  if (waBtn) {
    let msg = `Halo Mas Yossika, saya tertarik order website tipe *${currentPlan.name}*`;
    if (addonsText.length > 0) {
      msg += ` dengan tambahan:\n- ${addonsText.join('\n- ')}`;
    }
    msg += `.\nEstimasi Total: *Rp ${total.toLocaleString('id-ID')}* (${currentPlan.days}). Mohon info ketersediaan slot pengerjaannya.`;
    waBtn.href = 'https://wa.me/6287778683766?text=' + encodeURIComponent(msg);
  }
}

function initPriceCalculator() {
  renderJasaCards('landing_page');
  updateCalcTotal();
}

/* ==========================================================================
   7. PROJECTS FILTER CONTROLLER
   ========================================================================== */
function filterProjects(cat) {
  document.querySelectorAll('.proj-filter-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === cat));
  const cards = document.querySelectorAll('.projects-grid .project-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    let match = true;
    if (cat === 'pos') {
      match = text.includes('pos') || text.includes('kasir') || text.includes('operasional') || text.includes('enterprise');
    } else if (cat === 'ai') {
      match = text.includes('ai') || text.includes('vision') || text.includes('photobooth') || text.includes('intelligence');
    } else if (cat === 'webapp') {
      match = text.includes('mubes') || text.includes('web app') || text.includes('system') || text.includes('optik') || text.includes('pos');
    }
    if (match) {
      card.style.display = 'flex';
      if (window.gsap) gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.35 });
    } else {
      card.style.display = 'none';
    }
  });
  playClickSound();
}
window.filterProjects = filterProjects;

/* ==========================================================================
   8. AMBIENT CURSOR SPOTLIGHT
   ========================================================================== */
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursorSpotlight');
  if (!spotlight || window.innerWidth <= 768) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let curX = mouseX;
  let curY = mouseY;

  window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function render() {
    curX += (mouseX - curX) * 0.15;
    curY += (mouseY - curY) * 0.15;
    spotlight.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* ==========================================================================
   FULLSCREEN PROJECT CASE STUDY (ATM FAIZ AZZAHRA DESIGN SYSTEM)
   ========================================================================== */
/* ──────────────────────────────────────────────────────────────────────────────
   IMMERSIVE HERO: Faiz Azzahra-style hero for UI/UX project (Thrift Space)
   – Full-width dark bg with blurred phone screenshots layered behind giant title
   – Bottom metadata band: ROLE / YEAR / DESCRIPTION / LIVE SITE
   ──────────────────────────────────────────────────────────────────────────── */
function buildImmersiveHero(data, lang) {
  const heroSection = document.querySelector('.cs-hero');
  if (!heroSection) return;

  const cleanTitle = data.title.split('—')[0].trim().toUpperCase();
  const taglineText = typeof data.tagline === 'object' ? data.tagline[lang] : (data.tagline || '');
  const descText = typeof data.desc === 'object' ? data.desc[lang] : (data.desc || '');
  const actionLink = (data.actions && data.actions[0]) ? data.actions[0].link : '#';
  const actionLabel = (data.actions && data.actions[0]) ? data.actions[0].text : 'View Project ↗';

  heroSection.classList.add('cs-immersive-hero');
  heroSection.innerHTML = `
    <div class="ih-showcase-bg" aria-hidden="true">
      <img src="assets/img/project-web/thrift-space/thrift-space-hero-showcase.webp" alt="Thrift Space 3D Showcase" class="ih-showcase-img" loading="eager" decoding="async">
    </div>
    <div class="ih-overlay" aria-hidden="true"></div>

    <div class="ih-content">
      <div class="ih-eyebrow">FASHION / ${cleanTitle}.</div>
      <h1 class="ih-title" id="csHeroTitle">${cleanTitle}</h1>
    </div>

    <div class="ih-meta-bar">
      <div class="ih-meta-col">
        <span class="ih-meta-lbl">ROLE</span>
        <span class="ih-meta-val">${data.role || 'UI/UX Designer'}</span>
      </div>
      <div class="ih-meta-col">
        <span class="ih-meta-lbl">YEAR</span>
        <span class="ih-meta-val">${data.year || '2024'}</span>
      </div>
      <div class="ih-meta-col ih-meta-wide">
        <span class="ih-meta-lbl">DESCRIPTION</span>
        <span class="ih-meta-val ih-meta-desc">${descText}</span>
      </div>
      <div class="ih-meta-col">
        <span class="ih-meta-lbl">LIVE SITE</span>
        <a href="${actionLink}" target="_blank" rel="noopener" class="ih-meta-link">${actionLabel}</a>
      </div>
    </div>
  `;

  // Animate with GSAP
  if (window.gsap) {
    gsap.fromTo('.ih-showcase-img', { opacity: 0, scale: 1.05 }, { opacity: 0.9, scale: 1, duration: 1.2, ease: 'power2.out' });
    gsap.fromTo('.ih-title',        { opacity: 0, scale: 0.92, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.75, delay: 0.1, ease: 'expo.out' });
    gsap.fromTo('.ih-eyebrow',      { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.05, ease: 'power3.out' });
    gsap.fromTo('.ih-meta-bar',     { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: 'power3.out' });
  }
}

function resetNormalHero(heroSection) {
  if (!heroSection) return;
  heroSection.classList.remove('cs-immersive-hero');
  heroSection.innerHTML = `
    <div class="container cs-hero-inner">
      <div class="cs-hero-badge-wrap">
        <span id="csHeroBadge" class="pill pill-purple">Featured Project</span>
      </div>
      <p class="cs-hero-tagline" id="csHeroTagline"></p>
      <h2 class="cs-hero-title" id="csHeroTitle">PROJECT</h2>
      <div class="cs-hero-mockup-wrap">
        <div class="cs-browser-window" id="csHeroMockupWindow">
          <div class="cs-browser-header">
            <span class="cs-browser-dot dot-red"></span>
            <span class="cs-browser-dot dot-yellow"></span>
            <span class="cs-browser-dot dot-green"></span>
            <span class="cs-browser-address" id="csBrowserAddress">https://yossikaputra.my.id</span>
          </div>
          <div class="cs-browser-body" id="csHeroMediaBody"></div>
        </div>
      </div>
      <div class="cs-meta-bar">
        <div class="cs-meta-col">
          <span class="cs-meta-lbl">ROLE</span>
          <span class="cs-meta-val" id="csRole">Developer</span>
        </div>
        <div class="cs-meta-col">
          <span class="cs-meta-lbl">YEAR</span>
          <span class="cs-meta-val" id="csYear">2024</span>
        </div>
        <div class="cs-meta-col cs-meta-desc-col">
          <span class="cs-meta-lbl">DESCRIPTION</span>
          <p class="cs-meta-desc" id="csDesc"></p>
        </div>
        <div class="cs-meta-col cs-meta-actions-col">
          <span class="cs-meta-lbl">LINKS</span>
          <div class="cs-actions-wrap" id="csActions"></div>
        </div>
      </div>
      <div class="cs-tech-wrap" id="csTechWrap"></div>
    </div>
  `;
}

window.openCaseStudy = window.openProjectModal = function(id) {
  const data = window.PROJECTS_DATA && window.PROJECTS_DATA[id];
  if (!data) return;

  const isEn = window.I18N ? window.I18N.current === 'en' : true;
  const lang = isEn ? 'en' : 'id';

  // 1. Top Bar Pill Title
  const topPill = document.getElementById('csTopPillTitle');
  if (topPill) topPill.textContent = data.title.split('—')[0].trim().toUpperCase();

  // 0. Detect immersive mode (UI/UX case study projects with phone screens)
  const heroSection = document.querySelector('.cs-hero');
  const overlayEl = document.getElementById('caseStudyView');
  const isImmersive = (id === 'thrift');

  if (isImmersive) {
    if (overlayEl) overlayEl.classList.add('cs-mobile-project');
    // ── Immersive "Faiz Azzahra" hero for Thrift Space ──────────────────────
    buildImmersiveHero(data, lang);

    // Tech stack pills rendered inside cs-tech-wrap AFTER hero
    const techCont = document.getElementById('csTechWrap');
    if (techCont) {
      techCont.innerHTML = '';
      data.tech.forEach((t, i) => {
        const sp = document.createElement('span');
        sp.className = `pill ${data.techClasses[i] || 'pill-blue'}`;
        sp.textContent = t;
        techCont.appendChild(sp);
      });
    }
  } else {
    if (overlayEl) overlayEl.classList.remove('cs-mobile-project');
    // ── Normal hero for code / web projects ─────────────────────────────────
    resetNormalHero(heroSection);

    // 2. Hero Badge
    const badgeEl = document.getElementById('csHeroBadge');
    if (badgeEl) {
      if (data.status === 'in_progress') {
        badgeEl.style.display = 'inline-flex';
        badgeEl.className = 'badge-in-progress';
        badgeEl.textContent = data.statusBadge ? data.statusBadge[lang].replace(/[^\w\s/–-]/g, '').trim() : 'In Progress';
      } else if (data.status === 'featured') {
        badgeEl.style.display = 'inline-flex';
        badgeEl.className = 'pill pill-purple';
        badgeEl.textContent = data.statusBadge ? data.statusBadge[lang].replace(/[^\w\s/–-]/g, '').trim() : 'Featured Project';
      } else {
        badgeEl.style.display = 'inline-flex';
        badgeEl.className = 'pill pill-blue';
        badgeEl.textContent = isEn ? 'Completed Project' : 'Project Selesai';
      }
    }

    // 3. Tagline & Giant Title
    const taglineText = typeof data.tagline === 'object' ? data.tagline[lang] : data.tagline;
    const taglineEl = document.getElementById('csHeroTagline');
    if (taglineEl) taglineEl.textContent = taglineText || '';

    const cleanTitle = data.title.split('—')[0].trim();
    const titleEl2 = document.getElementById('csHeroTitle');
    if (titleEl2) titleEl2.textContent = cleanTitle;

    // 4. Hero Browser / iPhone 17 Frame & Body Media
    const addressEl = document.getElementById('csBrowserAddress');
    if (addressEl) {
      let cleanDomain = 'https://yossikaputra.my.id/' + id;
      if (data.actions && data.actions[0] && data.actions[0].link) {
        cleanDomain = data.actions[0].link;
      }
      addressEl.textContent = cleanDomain;
    }

    const mockupWrap = document.querySelector('.cs-hero-mockup-wrap');
    const isIphoneMockup = (data.deviceMockup === 'iphone');

    if (isIphoneMockup && mockupWrap) {
      const accent = data.phoneAccent || 'var(--accent)';
      const accentGlow = data.phoneAccentGlow || 'rgba(198, 255, 0, 0.35)';
      const badges = data.phoneBadges || {};

      const BADGE_SVGS = {
        left1: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
        left2: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
        right1: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
        right2: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`
      };

      let badgesHtml = '';
      if (badges.left1) {
        badgesHtml += `
          <div class="cs-phone-badge cs-phone-badge-left1">
            <span class="badge-icon">${BADGE_SVGS.left1}</span>
            <div class="badge-text">
              <span class="badge-title">${badges.left1.title}</span>
              <span class="badge-sub">${badges.left1.sub}</span>
            </div>
          </div>`;
      }
      if (badges.left2) {
        badgesHtml += `
          <div class="cs-phone-badge cs-phone-badge-left2">
            <span class="badge-icon">${BADGE_SVGS.left2}</span>
            <div class="badge-text">
              <span class="badge-title">${badges.left2.title}</span>
              <span class="badge-sub">${badges.left2.sub}</span>
            </div>
          </div>`;
      }
      if (badges.right1) {
        badgesHtml += `
          <div class="cs-phone-badge cs-phone-badge-right1">
            <span class="badge-icon">${BADGE_SVGS.right1}</span>
            <div class="badge-text">
              <span class="badge-title">${badges.right1.title}</span>
              <span class="badge-sub">${badges.right1.sub}</span>
            </div>
          </div>`;
      }
      if (badges.right2) {
        badgesHtml += `
          <div class="cs-phone-badge cs-phone-badge-right2">
            <span class="badge-icon">${BADGE_SVGS.right2}</span>
            <div class="badge-text">
              <span class="badge-title">${badges.right2.title}</span>
              <span class="badge-sub">${badges.right2.sub}</span>
            </div>
          </div>`;
      }

      mockupWrap.innerHTML = `
        <div class="cs-phone-hero-wrapper" id="csPhoneHeroWrapper" style="--phone-accent:${accent}; --phone-accent-glow:${accentGlow};">
          <div class="cs-phone-glow" style="background: radial-gradient(circle, ${accent} 0%, transparent 70%);"></div>
          ${badgesHtml}
          <div class="cs-iphone-frame" id="csIphoneFrame">
            <div class="iphone-button iphone-action-btn"></div>
            <div class="iphone-button iphone-vol-up"></div>
            <div class="iphone-button iphone-vol-down"></div>
            <div class="iphone-button iphone-power-btn"></div>
            <div class="iphone-screen">
              <div class="iphone-dynamic-island">
                <div class="island-camera"></div>
                <div class="island-sensor"></div>
              </div>
              <div class="iphone-speaker"></div>
              <div class="iphone-screen-content" id="csHeroMediaBody"></div>
              <div class="iphone-glass-glare"></div>
              <div class="iphone-home-bar"></div>
            </div>
          </div>
        </div>
      `;

      // 3D Tilt interactive listener on mouse move
      const pWrapper = document.getElementById('csPhoneHeroWrapper');
      const pPhone = document.getElementById('csIphoneFrame');
      if (pWrapper && pPhone) {
        pWrapper.addEventListener('mousemove', (e) => {
          const rect = pWrapper.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotX = -(y / (rect.height / 2)) * 9;
          const rotY = (x / (rect.width / 2)) * 9;
          pPhone.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        pWrapper.addEventListener('mouseleave', () => {
          pPhone.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      }
    }

    const heroMedia = document.getElementById('csHeroMediaBody');
    if (heroMedia) {
      heroMedia.innerHTML = '';
      if (data.video) {
        const vid = document.createElement('video');
        vid.src = data.video;
        vid.autoplay = true;
        vid.muted = true;
        vid.defaultMuted = true;
        vid.loop = true;
        vid.playsInline = true;
        vid.setAttribute('playsinline', '');
        vid.setAttribute('webkit-playsinline', '');
        vid.setAttribute('muted', '');
        vid.setAttribute('autoplay', '');
        vid.setAttribute('loop', '');
        vid.setAttribute('disablepictureinpicture', '');
        vid.setAttribute('disableremoteplayback', '');
        vid.setAttribute('preload', 'auto');
        // Set poster: laptopShowcase → previewWebp → first image
        const posterSrc = data.laptopShowcase || data.previewWebp || (data.images && data.images[0]);
        if (posterSrc) vid.setAttribute('poster', posterSrc);
        vid.onerror = function() {
          if (data.laptopShowcase || (data.images && data.images[0])) {
            const fallbackImg = document.createElement('img');
            fallbackImg.src = data.laptopShowcase || data.images[0];
            fallbackImg.alt = data.title;
            fallbackImg.loading = 'eager';
            heroMedia.innerHTML = '';
            heroMedia.appendChild(fallbackImg);
          }
        };
        heroMedia.appendChild(vid);
        vid.play().catch(() => {});
      } else if (data.images && data.images[0]) {
        const img = document.createElement('img');
        img.src = isIphoneMockup ? data.images[0] : (data.laptopShowcase || data.images[0]);
        img.alt = data.title;
        img.loading = 'eager';
        heroMedia.appendChild(img);
      }
    }

    // 5. Metadata Bar
    const roleEl = document.getElementById('csRole');
    const yearEl = document.getElementById('csYear');
    const descEl = document.getElementById('csDesc');
    if (roleEl) roleEl.textContent = data.role;
    if (yearEl) yearEl.textContent = data.year;
    if (descEl) descEl.textContent = typeof data.desc === 'object' ? data.desc[lang] : data.desc;

    // Actions
    const actionsCont = document.getElementById('csActions');
    if (actionsCont) {
      actionsCont.innerHTML = '';
      (data.actions || []).forEach(act => {
        const a = document.createElement('a');
        a.href = act.link;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = act.primary ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm';
        a.textContent = act.text;
        actionsCont.appendChild(a);
      });
    }

    // Tech Stack Pills
    const techCont = document.getElementById('csTechWrap');
    if (techCont) {
      techCont.innerHTML = '';
      data.tech.forEach((t, i) => {
        const sp = document.createElement('span');
        sp.className = `pill ${data.techClasses[i] || 'pill-blue'}`;
        sp.textContent = t;
        techCont.appendChild(sp);
      });
    }
  }

  const cleanTitle = data.title.split('—')[0].trim();

  // 6. Features Grid
  const featCont = document.getElementById('csFeaturesGrid');
  featCont.innerHTML = '';
  const features = typeof data.features === 'object' && data.features[lang] ? data.features[lang] : (Array.isArray(data.features) ? data.features : []);
  const FEAT_SVGS = [
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line></svg>`
  ];
  features.forEach((f, idx) => {
    const card = document.createElement('div');
    card.className = 'cs-feature-card';
    card.innerHTML = `
      <span class="cs-feature-icon" style="color:var(--accent);display:inline-flex;align-items:center;">${FEAT_SVGS[idx % FEAT_SVGS.length]}</span>
      <span class="cs-feature-text">${f}</span>
    `;
    featCont.appendChild(card);
  });

  // 7. Video Section (Supports both single video demo and multi-story customer testimonials with audio)
  const videoSec = document.getElementById('csVideoSection');
  const videoWrap = document.getElementById('csVideoWrap');
  const hasHeroVideo = (!isImmersive && Boolean(data.video));

  if (data.videoStories && data.videoStories.length > 0) {
    videoSec.style.display = 'block';
    const stories = data.videoStories;

    // Header updates
    const vSecHead = videoSec.querySelector('.cs-section-head');
    if (vSecHead) {
      vSecHead.innerHTML = `
        <span class="eyebrow">${isEn ? 'Authentic Social Proof' : 'Testimoni & Dokumentasi Lapangan'}</span>
        <h2 class="cs-section-title">${isEn ? 'Live Customer Stories & Marketing Vlog' : 'Video Stories & Review Pelanggan Asli'}</h2>
      `;
    }

    let tabsHtml = '<div class="cs-stories-tabs">';
    stories.forEach((st, sIdx) => {
      tabsHtml += `
        <button class="cs-story-tab-btn ${sIdx === 0 ? 'active' : ''}" data-idx="${sIdx}">
          <span>${st.tag}</span> · ${st.title}
        </button>
      `;
    });
    tabsHtml += '</div>';

    const firstStory = stories[0];
    videoWrap.innerHTML = `
      ${tabsHtml}
      <div class="cs-video-container" style="position:relative;overflow:hidden;border-radius:36px;background:#07090e;max-width:340px;margin:0 auto;box-shadow:0 30px 70px rgba(0,0,0,0.7), 0 0 40px rgba(245,158,11,0.25);border:1px solid rgba(255,255,255,0.18);">
        <button class="cs-video-sound-toggle" id="csSoundToggle" aria-label="Toggle Sound">
          <span id="csSoundIcon">🔇</span> <span id="csSoundText">Tap to Unmute</span>
        </button>
        <video id="csStoryVideo" src="${firstStory.src}" poster="${firstStory.poster}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="auto" style="width:100%;height:auto;display:block;border-radius:inherit;cursor:pointer;"></video>
      </div>
    `;

    const sVid = document.getElementById('csStoryVideo');
    const sBtn = document.getElementById('csSoundToggle');
    const sIcon = document.getElementById('csSoundIcon');
    const sText = document.getElementById('csSoundText');
    let isUserUnmuted = false;

    function updateSoundUI() {
      if (sVid.muted) {
        sIcon.textContent = '🔇';
        sText.textContent = isEn ? 'Tap to Unmute' : 'Nyalakan Suara';
      } else {
        sIcon.textContent = '🔊';
        sText.textContent = isEn ? 'Sound ON' : 'Suara Nyala';
      }
    }

    if (sBtn && sVid) {
      sBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sVid.muted = !sVid.muted;
        isUserUnmuted = !sVid.muted;
        updateSoundUI();
        if (sVid.paused) sVid.play().catch(() => {});
      });

      sVid.addEventListener('click', () => {
        if (sVid.muted) {
          sVid.muted = false;
          isUserUnmuted = true;
          updateSoundUI();
        } else {
          if (sVid.paused) sVid.play().catch(() => {});
          else sVid.pause();
        }
      });
    }

    // Story Tabs switcher
    const tabBtns = videoWrap.querySelectorAll('.cs-story-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.dataset.idx, 10);
        const st = stories[idx];
        if (sVid && st) {
          sVid.src = st.src;
          sVid.poster = st.poster;
          sVid.muted = !isUserUnmuted;
          updateSoundUI();
          sVid.play().catch(() => {});
        }
      });
    });

    if (sVid) {
      sVid.play().catch(() => {});
    }
  } else if (data.video && !hasHeroVideo) {
    videoSec.style.display = 'block';
    const isMobile = (data.deviceMockup === 'iphone' || data.isMobileGallery || id === 'thrift');
    const wrapStyle = isMobile
      ? 'position:relative;overflow:hidden;border-radius:36px;background:#07090e;max-width:320px;margin:0 auto;box-shadow:0 25px 60px rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.15);'
      : 'position:relative;overflow:hidden;border-radius:var(--radius-lg);background:#07090e;box-shadow:0 20px 50px rgba(0,0,0,0.5);max-width:960px;margin:0 auto;';

    videoWrap.innerHTML = `
      <div class="cs-video-container" style="${wrapStyle}">
        <video src="${data.video}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="auto" style="width:100%;height:auto;display:block;border-radius:inherit;"></video>
      </div>
    `;
    const secVid = videoWrap.querySelector('video');
    if (secVid) {
      secVid.muted = true;
      secVid.defaultMuted = true;
      secVid.play().catch(() => {});
    }
  } else {
    videoSec.style.display = 'none';
    videoWrap.innerHTML = '';
  }

  // 8. Visual Interface Walkthrough (ALL SCREENSHOTS)
  const screensGrid = document.getElementById('csScreensGrid');
  screensGrid.innerHTML = '';
  const images = data.images || [];
  const captions = (data.imageCaptions && data.imageCaptions[lang]) || [];

  images.forEach((src, idx) => {
    const screenItem = document.createElement('article');
    screenItem.className = 'cs-screen-item';

    // Auto-detect landscape screens (landing page, hero showcase, banner) to span nicely
    const lowerSrc = src.toLowerCase();
    if (lowerSrc.includes('landing') || lowerSrc.includes('showcase') || lowerSrc.includes('banner')) {
      screenItem.classList.add('is-landscape');
    }

    const capText = captions[idx] || `${cleanTitle} Screen ${idx + 1}`;
    const screenNum = `SCREEN ${String(idx + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;

    screenItem.innerHTML = `
      <div class="cs-screen-header">
        <div>
          <div class="cs-screen-badge">${screenNum}</div>
          <div class="cs-screen-caption">${capText}</div>
        </div>
        <div class="cs-screen-zoom-hint" onclick="openLightbox('${src}')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          ${isEn ? 'Click to Zoom' : 'Perbesar'}
        </div>
      </div>
      <div class="cs-screen-img-wrap" onclick="openLightbox('${src}')">
        <img src="${src}" alt="${capText}" loading="lazy" decoding="async">
      </div>
    `;
    screensGrid.appendChild(screenItem);
  });

  // 9. Next Portfolio Navigation (ATM Faiz Azzahra)
  const curIdx = PROJECT_ORDER.indexOf(id);
  const nextIdx = curIdx >= 0 ? (curIdx + 1) % PROJECT_ORDER.length : 0;
  const nextId = PROJECT_ORDER[nextIdx];
  const nextData = window.PROJECTS_DATA[nextId];

  const nextTitleEl = document.getElementById('csNextTitle');
  if (nextTitleEl && nextData) {
    nextTitleEl.textContent = `${nextData.title.split('—')[0].trim().toUpperCase()} ↗`;
    nextTitleEl.onclick = (e) => {
      e.preventDefault();
      openCaseStudy(nextId);
    };
  }

  // 10. Activate Overlay & Animate with GSAP
  const overlay = document.getElementById('caseStudyView');
  overlay.classList.add('active');
  lockBodyScroll();
  overlay.scrollTop = 0;

  if (!isImmersive) {
    const titleEl = document.getElementById('csHeroTitle');
    const mockupEl = document.getElementById('csHeroMockupWindow');
    if (titleEl) { titleEl.style.transform = 'none'; titleEl.style.opacity = '1'; }
    if (mockupEl) { mockupEl.style.transform = 'none'; }

    if (window.gsap) {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power2.out', clearProps: 'transform' });
      gsap.fromTo('#csHeroTitle', { opacity: 0, scale: 0.96, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.55, delay: 0.1, ease: 'power3.out' });

      if (isIphoneMockup) {
        gsap.fromTo('#csIphoneFrame', { opacity: 0, y: 40, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.15, ease: 'power3.out' });
        gsap.fromTo('.cs-phone-badge', { opacity: 0, scale: 0.85, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: 'back.out(1.5)' });
      } else {
        gsap.fromTo('#csHeroMockupWindow', { opacity: 0, y: 30, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.18, ease: 'power3.out' });
      }

      gsap.fromTo('.cs-meta-bar', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: 'power3.out' });
      gsap.fromTo('.cs-screen-item', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.035, delay: 0.3, ease: 'power2.out' });
    }
  } else {
    if (window.gsap) {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'transform' });
      gsap.fromTo('.cs-screen-item', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.035, delay: 0.25, ease: 'power2.out' });
    }
  }

  // Smooth scroll handler — fade title on scroll
  overlay.onscroll = () => {
    const st = overlay.scrollTop;
    const title = document.getElementById('csHeroTitle');
    if (title && st < 400) {
      title.style.opacity = Math.max(0.15, (1 - st / 380)).toFixed(2);
    }
  };
};

window.closeCaseStudy = function() {
  const overlay = document.getElementById('caseStudyView');
  if (!overlay || !overlay.classList.contains('active')) return;
  overlay.querySelectorAll('video').forEach(v => v.pause());

  if (window.gsap) {
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        overlay.classList.remove('active');
        unlockBodyScroll();
      }
    });
  } else {
    overlay.classList.remove('active');
    unlockBodyScroll();
  }
};

/* ==========================================================================
   DOCUMENTATION MODAL
   ========================================================================== */
window.openDocModal = function(id) {
  const data = window.DOCUMENTATION_DATA && window.DOCUMENTATION_DATA[id];
  if (!data) return;

  const isEn = window.I18N ? window.I18N.current === 'en' : true;
  const lang = isEn ? 'en' : 'id';

  document.getElementById('dmTitle').textContent = typeof data.title === 'object' ? data.title[lang] : data.title;
  document.getElementById('dmRoleDate').textContent = `${data.role[lang]} · ${data.date[lang]}`;
  document.getElementById('dmDesc').textContent = typeof data.desc === 'object' ? data.desc[lang] : data.desc;

  const bulletsCont = document.getElementById('dmBullets');
  bulletsCont.innerHTML = '';
  (typeof data.bullets === 'object' ? data.bullets[lang] : []).forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    bulletsCont.appendChild(li);
  });

  const photosCont = document.getElementById('dmPhotos');
  photosCont.innerHTML = '';
  (data.images || []).forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Documentation Photo';
    img.loading = 'lazy';
    img.style.borderRadius = 'var(--radius-sm)';
    img.onclick = () => openLightbox(src);
    photosCont.appendChild(img);
  });

  const mubesBtn = document.getElementById('dmMubesAction');
  if (mubesBtn) {
    mubesBtn.style.display = data.mubesLink ? 'block' : 'none';
  }

  const certWrap = document.getElementById('dmCertWrap');
  if (data.cert) {
    certWrap.style.display = 'block';
    const certImg = document.getElementById('dmCertImg');
    certImg.src = data.cert;
    certImg.onclick = () => openLightbox(data.cert);
  } else {
    certWrap.style.display = 'none';
  }

  document.getElementById('docModal').classList.add('active');
  lockBodyScroll();
};

window.closeDocModal = function() {
  const modal = document.getElementById('docModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

/* ==========================================================================
   CV VIEWER MODAL
   ========================================================================== */
const CV_URL = 'assets/CV%20YOSSIKA%20PUTRA%20ERLANGGA.pdf';
let cvLoaded = false;

window.openCVModal = function() {
  const modal = document.getElementById('cvModal');
  const iframe = document.getElementById('cvIframe');
  if (!cvLoaded && iframe) {
    iframe.src = CV_URL + '#toolbar=1&navpanes=0&view=FitH';
    cvLoaded = true;
  }
  modal.classList.add('active');
  lockBodyScroll();
};

window.closeCVModal = function() {
  const modal = document.getElementById('cvModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

/* ==========================================================================
   ALL WORKS FILTER & MODAL
   ========================================================================== */
let activeWorksFilter = 'all';

window.openAllWorksModal = function() {
  const modal = document.getElementById('allWorksModal');
  buildWorksGrid('all');
  modal.classList.add('active');
  lockBodyScroll();
};

window.closeAllWorksModal = function() {
  const modal = document.getElementById('allWorksModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

window.filterWorks = function(cat) {
  activeWorksFilter = cat;
  document.querySelectorAll('.works-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  buildWorksGrid(cat);
};

function buildWorksGrid(cat) {
  const grid = document.getElementById('allWorksGrid');
  if (!grid || !window.PROJECTS_DATA) return;
  grid.innerHTML = '';

  const isEn = window.I18N ? window.I18N.current === 'en' : true;
  const lang = isEn ? 'en' : 'id';

  const showcaseMap = {
    'pos_iris': 'assets/img/project-web/pos-iris/pos-iris-laptop-showcase.webp',
    'mubes_hipmi': 'assets/img/project-web/mubes-hipmi/mubes-laptop-showcase.webp',
    'photobooth_hipmi': 'assets/img/project-web/photobooth-hipmi/photobooth-hipmi-laptop-showcase.webp',
    'imi_iseeyou': 'assets/img/project-web/imi-iseeyou/imi-laptop-showcase.webp',
    'gymplanner': 'assets/img/project-web/gym-planner/gym-planner-showcase.webp',
    'ngertiindia': 'assets/img/project-web/ngertiin-dia/ngertiin-dia-showcase.webp',
    'macabae': 'assets/img/project-web/maca-bae/macabae-laptop-showcase.webp',
    'thrift': 'assets/img/project-web/thrift-space/thrift-space-hero-showcase.webp',
    'mango_nyeni': 'assets/img/project-bisnis/mango-nyeni/mango-nyeni-showcase.webp',
    'optik_iseeyou': 'assets/img/project-web/optik-iseeyou/optik-iseeyou-landing.webp',
    'gesture': 'assets/img/project-web/gesture-isyarat/gesture-isyarat-poster.webp',
    'food': 'assets/img/project-web/food-tyu/food-tyu-web-pemesanan-makanan-landing.webp'
  };

  Object.values(window.PROJECTS_DATA).forEach(item => {
    if (cat !== 'all' && item.category !== cat) return;

    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => {
      closeAllWorksModal();
      setTimeout(() => openCaseStudy(item.id), 200);
    };

    const cardThumb = item.cardShowcase || item.laptopShowcase || showcaseMap[item.id] || (item.images && item.images[0]) || '';
    const tagline = typeof item.tagline === 'object' ? item.tagline[lang] : item.tagline;

    card.innerHTML = `
      <div class="project-media">
        <img src="${cardThumb}" alt="${item.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="handleMediaError(this)">
      </div>
      <div class="project-body">
        <div class="project-title">${item.title.split('—')[0].trim()}</div>
        <div class="project-tagline">${tagline || ''}</div>
        <div class="project-action-row">
          <span>${isEn ? 'View Detail →' : 'Lihat Detail →'}</span>
          <span class="pill">${item.category.toUpperCase()}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ==========================================================================
   FEEDBACK FORM SUBMISSION & PROFANITY FILTER
   ========================================================================== */
function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  function containsProfanity(text) {
    if (!text) return false;
    const normalized = text.toLowerCase()
      .replace(/0/g, 'o').replace(/1/g, 'i').replace(/3/g, 'e')
      .replace(/4/g, 'a').replace(/5/g, 's').replace(/7/g, 't').replace(/8/g, 'b')
      .replace(/[^a-z\s]/g, ' ')
      .split(/\s+/);

    const blacklist = [
      'anj', 'ajg', 'kntl', 'asu', 'tll', 'gblk', 'kontol', 'memek', 
      'ngentot', 'anjing', 'bangsat', 'goblok', 'tolol', 'jancok', 'pantek'
    ];
    return normalized.some(w => blacklist.includes(w));
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById('feedbackStatus');
    const gotcha = document.getElementById('_gotcha');

    if (gotcha && gotcha.value.trim() !== '') {
      form.reset();
      statusEl.style.color = 'var(--green)';
      statusEl.textContent = 'Message sent! Thank you.';
      return;
    }

    const name = document.getElementById('fbName').value.trim();
    const email = document.getElementById('fbEmail').value.trim();
    const msg = document.getElementById('fbMsg').value.trim();

    if (!name || !email || !msg) {
      statusEl.style.color = 'var(--rose)';
      statusEl.textContent = 'All fields are required.';
      return;
    }

    if (containsProfanity(name) || containsProfanity(msg)) {
      statusEl.style.color = 'var(--rose)';
      statusEl.textContent = 'Please use respectful language.';
      return;
    }

    statusEl.style.color = 'var(--txt-muted)';
    statusEl.textContent = 'Sending message...';

    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'adefe984-2299-4900-98b4-c513fab4e02c',
          name: name,
          email: email,
          message: msg,
          subject: `Pesan Baru Portofolio dari ${name}`,
          from_name: 'Portofolio Yossika Putra'
        })
      });

      const result = await resp.json();
      if (!resp.ok || !result.success) throw new Error(result.message || 'Failed');

      statusEl.style.color = 'var(--green)';
      statusEl.textContent = 'Message delivered successfully!';
      form.reset();
      setTimeout(() => { statusEl.textContent = ''; }, 6000);
    } catch {
      statusEl.style.color = 'var(--rose)';
      statusEl.textContent = 'Failed to deliver message. Please try again.';
    }
  });
}

/* ==========================================================================
   CHATBOT LAUNCHER & GEMINI API INTEGRATION
   ========================================================================== */
function initChatbotLauncher() {
  const launcher = document.getElementById('chatbotLauncher');
  const win = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotCloseBtn');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const messages = document.getElementById('chatbotMessages');

  if (!launcher || !win) return;

  let hasGreeted = false;

  launcher.addEventListener('click', () => {
    const isOpen = win.classList.toggle('active');
    if (isOpen && !hasGreeted) {
      hasGreeted = true;
      const isEn = !window.I18N || window.I18N.current === 'en';
      addBotBubble(isEn 
        ? "Hi there! I am YosBot, Yossika's AI assistant. Ask me anything about his projects, skills, or experience!"
        : "Halo! Saya YosBot, asisten virtual Yossika. Tanyakan apa saja tentang project, keahlian, atau pengalamannya!");
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => win.classList.remove('active'));
  }

  function addBotBubble(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble bot';
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
    return bubble;
  }

  function addUserBubble(text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble user';
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  if (form && input) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const query = input.value.trim();
      if (!query) return;

      addUserBubble(query);
      input.value = '';

      const loadingBubble = addBotBubble('Thinking...');

      const promptContext = `
You are YosBot, the smart, friendly AI assistant for Yossika Putra Erlangga's portfolio.
Answer questions directly and concisely matching the portfolio tone. Match the language of the user (English or Indonesian).
Key Facts:
- Yossika Putra Erlangga: S1 Informatics Engineering at Telkom University Purwokerto (Semester 4, GPA 3.85).
- Background: TKJ at SMK Telkom Purwokerto.
- Projects:
  1. Sistem POS Operasional IRIS — Optik I See You: Enterprise retail POS and operational system across 4 branches with Smart TV queue calling (Alice AI), tablet customer registration, optometrist eye exam refractions, cashier dispatch, central lens lab workflow, and automated WhatsApp notifications.
  2. Optik I See You (optikiseeyou.com): Web app for optical chain with real-time AR glasses try-on, AI photobooth, Next.js 15, Three.js, MediaPipe Vision, and branch booking.
  3. GestureFlow v3.0: Real-time SIBI Sign Language AI with MediaPipe Hands.
  4. Food-TYU: Campus e-canteen with Midtrans digital payment and TyU-Pay.
  5. MacaBae: Digital library with AI assistant (MacaBot) on Laravel & Gemini API.
  6. Ngertiin Dia: Self-care & couple sync app with Gemini 2.5 Flash & PWA.
  7. Gym Planner: 7-day custom splits & TDEE calculation PWA.
- Business: Mango Nyeni (artisan sago dessert beverage co-founder).
- Events & Leadership: Head of Security at Market Day 4.0, Security at INFENTRA 2025, TULC Season II, WPI 2025, Staff at UKM HIPMI PT Telkom University Purwokerto.
- Work Experience: Service Technician Intern (PKL) at PT Telkom Akses (fiber optic splicing, GPON ONT setup).
- Contact: Email yossikaputraerlangga@gmail.com, WhatsApp +62 877-7868-3766, LinkedIn yossikaputraerlangga, GitHub yoshput.
User asks: ${query}
`;

      try {
        const _apiKey = (document.querySelector('meta[name="yb-token"]') || {}).content || '';
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${_apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: promptContext }] }] })
        });

        const data = await res.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        loadingBubble.textContent = reply || "Sorry, I couldn't process that right now.";
      } catch {
        loadingBubble.textContent = 'An error occurred connecting to AI services.';
      }
      messages.scrollTop = messages.scrollHeight;
    });
  }
}

/* ==========================================================================
   CHILL BACKGROUND MUSIC CONTROLLER
   ========================================================================== */
function initMusicPlayer() {
  const btn = document.getElementById('musicToggleBtn');
  if (!btn) return;

  const tracks = [
    'assets/audio/ncs-chill-dreams.mp3',
    'assets/audio/ncs-rain-echoes.mp3',
    'assets/audio/ncs-late-night.mp3',
    'assets/audio/ncs-cozy-journey.mp3',
    'assets/audio/ncs-neon-serenade.mp3'
  ];

  let currentIdx = Math.floor(Math.random() * tracks.length);
  let audio = null;
  let isPlaying = false;

  const drawerBtn = document.getElementById('drawerMusicBtn');

  btn.addEventListener('click', () => {
    if (!audio) {
      audio = new Audio(tracks[currentIdx]);
      audio.volume = 0.35;
      audio.addEventListener('ended', () => {
        currentIdx = (currentIdx + 1) % tracks.length;
        audio.src = tracks[currentIdx];
        audio.play();
      });
    }

    if (isPlaying) {
      audio.pause();
      btn.innerHTML = '🎵';
      if (drawerBtn) drawerBtn.textContent = '🎵 Putar Musik';
      btn.setAttribute('aria-label', 'Play Background Music');
      isPlaying = false;
    } else {
      audio.play().then(() => {
        btn.innerHTML = '⏸️';
        if (drawerBtn) drawerBtn.textContent = '⏸️ Jeda Musik';
        btn.setAttribute('aria-label', 'Pause Background Music');
        isPlaying = true;
      }).catch(() => {});
    }
  });

  if (drawerBtn) {
    drawerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.click();
    });
  }
}

/* ==========================================================================
   LIGHTBOX ZOOM
   ========================================================================== */
window.openLightbox = function(src) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  if (modal && img) {
    img.src = src;
    modal.classList.add('active');
    lockBodyScroll();
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
  unlockBodyScroll();
};

/* ==========================================================================
   MARCUS VANE CINEMATIC HERO CONTROLLER
   ========================================================================== */
function initMarcusHero() {
  const wrapper = document.getElementById('heroLiquidWrapper');
  const giantLine1 = document.getElementById('heroGiantLine1');
  const giantLine2 = document.getElementById('heroGiantLine2');
  const displaceMap = document.getElementById('heroLiquidDisplace');
  const hero = document.getElementById('hero');
  if (!hero || !wrapper) return;

  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let targetTiltX = 0, targetTiltY = 0;
  let currentTiltX = 0, currentTiltY = 0;
  let targetTransX = 0, targetTransY = 0;
  let currentTransX = 0, currentTransY = 0;
  let currentDisplace = 0, targetDisplace = 0;
  let isHeroInView = true;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      isHeroInView = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(hero);
  }

  if (isFinePointer && !prefersReducedMotion) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      targetTiltX = normY * -10;
      targetTiltY = normX * 12;
      targetTransX = normX * 22;
      targetTransY = normY * 14;

      if (giantLine1 && giantLine2) {
        giantLine1.style.transform = `translate3d(${normX * -25}px, ${normY * -15}px, 0)`;
        giantLine2.style.transform = `translate3d(${normX * 25}px, ${normY * 15}px, 0)`;
      }
    }, { passive: true });

    hero.addEventListener('mouseenter', () => {
      targetDisplace = 14;
    });

    hero.addEventListener('mouseleave', () => {
      targetTiltX = 0;
      targetTiltY = 0;
      targetTransX = 0;
      targetTransY = 0;
      targetDisplace = 0;
      if (giantLine1 && giantLine2) {
        giantLine1.style.transform = 'translate3d(0, 0, 0)';
        giantLine2.style.transform = 'translate3d(0, 0, 0)';
      }
    });
  }

  let scrollParallaxY = 0;
  window.addEventListener('scroll', () => {
    if (!isHeroInView || prefersReducedMotion) return;
    const scrollY = window.scrollY;
    if (scrollY < 1200) {
      scrollParallaxY = scrollY * 0.12;
    }
  }, { passive: true });

  function updateMarcusLoop() {
    requestAnimationFrame(updateMarcusLoop);
    if (!isHeroInView || prefersReducedMotion) return;

    currentTiltX += (targetTiltX - currentTiltX) * 0.08;
    currentTiltY += (targetTiltY - currentTiltY) * 0.08;
    currentTransX += (targetTransX - currentTransX) * 0.08;
    currentTransY += (targetTransY - currentTransY) * 0.08;
    currentDisplace += (targetDisplace - currentDisplace) * 0.06;

    const posY = currentTransY + scrollParallaxY;
    wrapper.style.transform = `perspective(1000px) translate3d(${currentTransX.toFixed(2)}px, ${posY.toFixed(2)}px, 0) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

    if (displaceMap) {
      displaceMap.setAttribute('scale', currentDisplace.toFixed(1));
    }
  }
  updateMarcusLoop();

  // ════ NADIV SPACE-STYLE CINEMATIC SCROLL SINK & ZOOM OUT ════
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(['.hero-portrait-stage', '.hero-giant-line', '.hero-roles-stack', '.hero-brief-box'], {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
      scale: 0.78,
      y: 90,
      opacity: 0,
      ease: 'power1.out',
      stagger: 0.04
    });

    gsap.fromTo('.operating-marquee', {
      y: 30,
      opacity: 0.8
    }, {
      scrollTrigger: {
        trigger: '#hero',
        start: '60% top',
        end: 'bottom top',
        scrub: 1
      },
      y: 0,
      opacity: 1,
      ease: 'power2.out'
    });
  }
}
