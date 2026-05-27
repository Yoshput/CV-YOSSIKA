document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("mainNav");
  const topBtn = document.getElementById("topBtn");
  const navLinks = document.querySelectorAll(".nav-menu__link");
  const sections = document.querySelectorAll("main section[id]");
  const revealElements = document.querySelectorAll(".reveal");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox__image");
  const lightboxClose = document.querySelector(".lightbox__close");
  const certImages = document.querySelectorAll(".cert-image--clickable");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // ====== DARK MODE TOGGLE ======
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("siteTheme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function initializeTheme() {
    const storedTheme = localStorage.getItem("siteTheme");
    applyTheme(storedTheme || "light");
  }

  themeToggle.addEventListener("click", function () {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

  // ====== HAMBURGER MENU ======
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // ====== ACTIVE NAV ON SCROLL ======
  function updateNavActive(entries) {
    entries.forEach((entry) => {
      const link = document.querySelector(`.nav-menu__link[href='#${entry.target.id}']`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach((item) => item.classList.remove("nav-menu__link--active"));
        link.classList.add("nav-menu__link--active");
      }
    });
  }

  // ====== REVEAL ON SCROLL WITH FADE-IN-UP ======
  function revealOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  // ====== COUNTER ANIMATION ======
  function animateCounters(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      
      const counters = entry.target.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        let current = 0;
        const increment = Math.ceil(target / 50); // Animate over ~50 steps
        const duration = 1200; // 1.2 seconds
        const stepTime = duration / (target / increment);
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = current;
          }
        }, stepTime);
      });
      
      observer.unobserve(entry.target);
    });
  }

  // ====== LIGHTBOX FUNCTIONALITY ======
  function openLightbox(imageSrc) {
    lightboxImage.src = imageSrc;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  certImages.forEach((img) => {
    img.addEventListener("click", function () {
      const imageSrc = this.getAttribute("src");
      openLightbox(imageSrc);
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close lightbox with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  // ====== OBSERVERS SETUP ======
  const sectionObserver = new IntersectionObserver(updateNavActive, {
    root: null,
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.2,
  });

  const revealObserver = new IntersectionObserver(revealOnScroll, {
    root: null,
    threshold: 0.18,
  });

  const counterObserver = new IntersectionObserver(animateCounters, {
    root: null,
    threshold: 0.3,
  });

  sections.forEach((section) => sectionObserver.observe(section));
  revealElements.forEach((element) => revealObserver.observe(element));
  
  // Observe hero stats for counter animation
  const heroStats = document.querySelector(".hero__stats");
  if (heroStats) {
    counterObserver.observe(heroStats);
  }

  // ====== SCROLL TO TOP BUTTON ======
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ====== INIT ======
  initializeTheme();

  // ====== SMOOTH SCROLL FALLBACK ======
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

