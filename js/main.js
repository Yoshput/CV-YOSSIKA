/**
 * Yossika Portfolio — Main Interactive Controller
 * Ultra-slick, interactive, GSAP-powered architecture with Fullscreen Case Studies.
 */

const PROJECT_ORDER = ['pos_iris', 'mubes_hipmi', 'photobooth_hipmi', 'imi_iseeyou', 'optik_iseeyou', 'gesture', 'food', 'macabae', 'ngertiindia', 'gymplanner', 'thrift'];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n
  if (window.I18N) {
    window.I18N.init();
  }

  // 2. Theme Toggle (Dark / Light)
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
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }

  // 3. Language Toggle Button in Header
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const cur = window.I18N ? window.I18N.current : 'en';
      const next = cur === 'en' ? 'id' : 'en';
      if (window.I18N) window.I18N.setLanguage(next);
    });
  }

  // 4. Mobile Navigation Menu
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // 5. Active Nav on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;
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

  // 6. Interactive ID Card Lanyard (Event-driven Physics — 0% Idle CPU)
  initOptimizedLanyard();

  // 7. Journey Accordion Toggles
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
    });
  });

  // 8. Feedback Form Submission & Profanity Filter
  initFeedbackForm();

  // 9. Chatbot Lazy Initialization
  initChatbotLauncher();

  // 10. Background Music Player (Lazy instantiated)
  initMusicPlayer();

  // 11. Autoplay Looping Media Observers
  initCardVideos();

  // 12. Preloader & GSAP Animations
  if (window.gsap) {
    initPreloaderAndAnimations();
  } else {
    window.addEventListener('load', () => {
      initPreloaderAndAnimations();
    });
  }

  // 12. Global Escape Listener to close any open modal/case study
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudy();
      closeDocModal();
      closeCVModal();
      closeAllWorksModal();
      closeLightbox();
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

  let isDone = false;
  function finishPreloader() {
    if (isDone) return;
    isDone = true;

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

  heroTL
    .fromTo('.site-header', { y: -35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo('.hero-tag', { scale: 0.8, y: 20, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.8)' }, '-=0.3')
    .fromTo('.hero-name span', { y: 55, opacity: 0, rotationX: 20 }, { y: 0, opacity: 1, rotationX: 0, duration: 0.75, stagger: 0.12, ease: 'power4.out' }, '-=0.3')
    .fromTo('.hero-role', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
    .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
    .fromTo('.hero-socials .pill', { scale: 0.85, opacity: 0, y: 15 }, { scale: 1, opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'back.out(1.6)' }, '-=0.3')
    .fromTo('.hero-actions .btn', { y: 25, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.08, ease: 'back.out(1.4)' }, '-=0.3')
    .fromTo('.hero-stats > div', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.4')
    .fromTo('.id-card-body', { scale: 0.85, opacity: 0, rotationY: 25, rotationX: 15, y: 40 }, { scale: 1, opacity: 1, rotationY: 0, rotationX: 0, y: 0, duration: 0.9, ease: 'power4.out' }, '-=0.7');

  animateHeroStats();

  // Continuous ambient float on ID card
  gsap.to('#idCardBody', {
    y: -8,
    rotationZ: 1.2,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
}

function initScrollTriggerSections() {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // B. ScrollTrigger Animations for Page Sections
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
   OPTIMIZED EVENT-DRIVEN LANYARD PHYSICS
   ========================================================================== */
function initOptimizedLanyard() {
  const card = document.getElementById('idCardBody');
  const zone = document.querySelector('.id-card-wrap');
  if (!card || !zone) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let posX = 0, posY = 0;

  function onPointerDown(e) {
    isDragging = true;
    startX = e.clientX - posX;
    startY = e.clientY - posY;
    card.style.transition = 'none';
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const rawX = e.clientX - startX;
    const rawY = e.clientY - startY;
    const dist = Math.hypot(rawX, rawY);
    const maxStretch = 180;

    if (dist > maxStretch) {
      const angle = Math.atan2(rawY, rawX);
      posX = Math.cos(angle) * maxStretch;
      posY = Math.sin(angle) * maxStretch;
    } else {
      posX = rawX;
      posY = rawY;
    }

    const rotZ = posX * 0.12;
    const rotY = Math.max(-20, Math.min(20, posX * 0.1));
    const rotX = Math.max(-18, Math.min(18, -posY * 0.1));

    card.style.transform = `translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, 0) rotateZ(${rotZ.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) rotateX(${rotX.toFixed(1)}deg)`;
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    card.style.transition = 'transform 0.55s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    posX = 0;
    posY = 0;
    card.style.transform = 'translate3d(0, 0, 0) rotateZ(0deg) rotateY(0deg) rotateX(0deg)';
  }

  card.addEventListener('pointerdown', onPointerDown);
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
      <h1 class="cs-hero-title" id="csHeroTitle">PROJECT</h1>
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
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;

  if (!isImmersive) {
    const titleEl = document.getElementById('csHeroTitle');
    const mockupEl = document.getElementById('csHeroMockupWindow');
    if (titleEl) { titleEl.style.transform = 'none'; titleEl.style.opacity = '1'; }
    if (mockupEl) { mockupEl.style.transform = 'none'; }

    if (window.gsap) {
      gsap.fromTo(overlay, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
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
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
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
      y: 20,
      duration: 0.28,
      ease: 'power3.in',
      onComplete: () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  } else {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
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
  document.body.style.overflow = 'hidden';
};

window.closeDocModal = function() {
  const modal = document.getElementById('docModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
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
  document.body.style.overflow = 'hidden';
};

window.closeCVModal = function() {
  const modal = document.getElementById('cvModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
};

/* ==========================================================================
   ALL WORKS FILTER & MODAL
   ========================================================================== */
let activeWorksFilter = 'all';

window.openAllWorksModal = function() {
  const modal = document.getElementById('allWorksModal');
  buildWorksGrid('all');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeAllWorksModal = function() {
  const modal = document.getElementById('allWorksModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
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
    'gesture': 'assets/img/project-web/Gesture-Isyarat/gesture-isyarat-preview.webp',
    'food': 'assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-landing.webp'
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
        <img src="${cardThumb}" alt="${item.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">
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
      const resp = await fetch('https://formspree.io/f/xaqgewoy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: msg, _subject: 'Message from Portfolio' })
      });

      if (!resp.ok) throw new Error();

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
- Yossika Putra Erlangga: S1 Informatics Engineering at Telkom University Purwokerto (Semester 4, GPA 3.65).
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
    document.body.style.overflow = 'hidden';
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
  // Only restore overflow if case study is not open
  const cs = document.getElementById('caseStudyView');
  if (!cs || !cs.classList.contains('active')) {
    document.body.style.overflow = '';
  }
};
