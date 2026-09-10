/**
 * Yossika Portfolio — Main Interactive Controller
 * Ultra-slick, interactive, GSAP-powered architecture with Fullscreen Case Studies.
 */

const PROJECT_ORDER = ['optik_iseeyou', 'gesture', 'food', 'macabae', 'ngertiindia', 'gymplanner', 'thrift'];

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
    { selector: '.hero-stats > div:nth-child(3) .stat-val', end: 7, suffix: '+' },
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
window.openCaseStudy = window.openProjectModal = function(id) {
  const data = window.PROJECTS_DATA && window.PROJECTS_DATA[id];
  if (!data) return;

  const isEn = window.I18N ? window.I18N.current === 'en' : true;
  const lang = isEn ? 'en' : 'id';

  // 1. Top Bar Pill Title
  const topPill = document.getElementById('csTopPillTitle');
  if (topPill) topPill.textContent = data.title.split('—')[0].trim().toUpperCase();

  // 2. Hero Badge
  const badgeEl = document.getElementById('csHeroBadge');
  if (data.status === 'in_progress') {
    badgeEl.style.display = 'inline-flex';
    badgeEl.className = 'badge-in-progress';
    badgeEl.textContent = data.statusBadge ? data.statusBadge[lang] : '🚧 In Progress';
  } else if (data.status === 'featured') {
    badgeEl.style.display = 'inline-flex';
    badgeEl.className = 'pill pill-purple';
    badgeEl.textContent = data.statusBadge ? data.statusBadge[lang] : '⭐ Featured';
  } else {
    badgeEl.style.display = 'inline-flex';
    badgeEl.className = 'pill pill-blue';
    badgeEl.textContent = isEn ? 'Completed Project' : 'Project Selesai';
  }

  // 3. Tagline & Giant Title
  const taglineText = typeof data.tagline === 'object' ? data.tagline[lang] : data.tagline;
  document.getElementById('csHeroTagline').textContent = taglineText || '';

  const cleanTitle = data.title.split('—')[0].trim();
  document.getElementById('csHeroTitle').textContent = cleanTitle;

  // 4. Hero Browser Address & Body Media
  const addressEl = document.getElementById('csBrowserAddress');
  let cleanDomain = 'https://yossikaputra.my.id/' + id;
  if (data.actions && data.actions[0] && data.actions[0].link) {
    cleanDomain = data.actions[0].link;
  }
  addressEl.textContent = cleanDomain;

  const heroMedia = document.getElementById('csHeroMediaBody');
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
    heroMedia.appendChild(vid);
    vid.play().catch(() => {});
  } else if (data.images && data.images[0]) {
    const img = document.createElement('img');
    img.src = data.images[0];
    img.alt = data.title;
    img.loading = 'eager';
    heroMedia.appendChild(img);
  }

  // 5. Metadata Bar
  document.getElementById('csRole').textContent = data.role;
  document.getElementById('csYear').textContent = data.year;
  document.getElementById('csDesc').textContent = typeof data.desc === 'object' ? data.desc[lang] : data.desc;

  // Actions
  const actionsCont = document.getElementById('csActions');
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

  // Tech Stack Pills
  const techCont = document.getElementById('csTechWrap');
  techCont.innerHTML = '';
  data.tech.forEach((t, i) => {
    const sp = document.createElement('span');
    sp.className = `pill ${data.techClasses[i] || 'pill-blue'}`;
    sp.textContent = t;
    techCont.appendChild(sp);
  });

  // 6. Features Grid
  const featCont = document.getElementById('csFeaturesGrid');
  featCont.innerHTML = '';
  const features = typeof data.features === 'object' && data.features[lang] ? data.features[lang] : (Array.isArray(data.features) ? data.features : []);
  const featIcons = ['⚡', '🎯', '🛡️', '📊', '🌐', '💡', '🔥'];
  features.forEach((f, idx) => {
    const card = document.createElement('div');
    card.className = 'cs-feature-card';
    card.innerHTML = `
      <span class="cs-feature-icon">${featIcons[idx % featIcons.length]}</span>
      <span class="cs-feature-text">${f}</span>
    `;
    featCont.appendChild(card);
  });

  // 7. Video Section (if separate demo video exists)
  const videoSec = document.getElementById('csVideoSection');
  const videoWrap = document.getElementById('csVideoWrap');
  if (data.video) {
    videoSec.style.display = 'block';
    videoWrap.innerHTML = `
      <div class="cs-video-container" style="position:relative;overflow:hidden;border-radius:var(--radius-lg);background:#07090e;box-shadow:0 20px 50px rgba(0,0,0,0.5);">
        <video src="${data.video}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="auto" style="width:100%;height:auto;display:block;border-radius:var(--radius-lg);"></video>
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

    const capText = captions[idx] || `${cleanTitle} Screen ${idx + 1}`;
    const screenNum = `SCREEN ${String(idx + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;

    screenItem.innerHTML = `
      <div class="cs-screen-header">
        <div>
          <div class="cs-screen-badge">${screenNum}</div>
          <div class="cs-screen-caption">${capText}</div>
        </div>
        <div class="cs-screen-zoom-hint" onclick="openLightbox('${src}')">
          <span>🔍</span> ${isEn ? 'Click to Zoom' : 'Perbesar'}
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

  const titleEl = document.getElementById('csHeroTitle');
  const mockupEl = document.getElementById('csHeroMockupWindow');
  if (titleEl) {
    titleEl.style.transform = 'none';
    titleEl.style.opacity = '1';
  }
  if (mockupEl) {
    mockupEl.style.transform = 'none';
  }

  if (window.gsap) {
    gsap.fromTo(overlay, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
    gsap.fromTo('#csHeroTitle', { opacity: 0, scale: 0.96, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.55, delay: 0.1, ease: 'power3.out' });
    gsap.fromTo('#csHeroMockupWindow', { opacity: 0, y: 30, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.18, ease: 'power3.out' });
    gsap.fromTo('.cs-meta-bar', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.25, ease: 'power3.out' });
  }

  // Smooth scroll handler without awkward title collision
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

  Object.values(window.PROJECTS_DATA).forEach(item => {
    if (cat !== 'all' && item.category !== cat) return;

    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => {
      closeAllWorksModal();
      setTimeout(() => openCaseStudy(item.id), 200);
    };

    const previewImg = item.images && item.images[0] ? item.images[0] : '';
    const tagline = typeof item.tagline === 'object' ? item.tagline[lang] : item.tagline;
    const mediaHtml = item.video
      ? `<video class="card-video-loop" src="${item.video}" poster="${previewImg}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="none" style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
      : `<img src="${previewImg}" alt="${item.title}" loading="lazy">`;

    card.innerHTML = `
      <div class="project-media">
        ${mediaHtml}
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
  initCardVideos();
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
  1. Optik I See You (optikiseeyou.com): Web app for optical chain with real-time AR glasses try-on, AI photobooth, Next.js 15, Three.js, MediaPipe Vision, and branch booking. (Status: Ongoing Development).
  2. GestureFlow v3.0: Real-time SIBI Sign Language AI with MediaPipe Hands.
  3. Food-TYU: Campus e-canteen with Midtrans digital payment and TyU-Pay.
  4. MacaBae: Digital library with AI assistant (MacaBot) on Laravel & Gemini API.
  5. Ngertiin Dia: Self-care & couple sync app with Gemini 2.5 Flash & PWA.
  6. Gym Planner: 7-day custom splits & TDEE calculation PWA.
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
      btn.setAttribute('aria-label', 'Play Background Music');
      isPlaying = false;
    } else {
      audio.play().then(() => {
        btn.innerHTML = '⏸️';
        btn.setAttribute('aria-label', 'Pause Background Music');
        isPlaying = true;
      }).catch(() => {});
    }
  });
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
