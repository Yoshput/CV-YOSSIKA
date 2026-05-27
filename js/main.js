document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const topBtn = document.getElementById("topBtn");
  const navLinks = document.querySelectorAll(".nav-menu__link");
  const sections = document.querySelectorAll("main section[id]");
  const skillBars = document.querySelectorAll(".skill-bar__fill");
  const revealElements = document.querySelectorAll(".reveal");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("siteTheme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function initializeTheme() {
    const storedTheme = localStorage.getItem("siteTheme");
    if (storedTheme) {
      applyTheme(storedTheme);
      return;
    }
    applyTheme(prefersDark.matches ? "dark" : "light");
  }

  themeToggle.addEventListener("click", function () {
    const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });

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

  function revealOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }

  function animateSkillBars(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      skillBars.forEach((bar) => {
        const percentage = bar.getAttribute("data-skill");
        bar.style.width = `${percentage}%`;
      });
      observer.unobserve(entry.target);
    });
  }

  const sectionObserver = new IntersectionObserver(updateNavActive, {
    root: null,
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0.2,
  });

  const revealObserver = new IntersectionObserver(revealOnScroll, {
    root: null,
    threshold: 0.18,
  });

  const skillObserver = new IntersectionObserver(animateSkillBars, {
    root: null,
    threshold: 0.3,
  });

  sections.forEach((section) => sectionObserver.observe(section));
  revealElements.forEach((element) => revealObserver.observe(element));
  if (skillBars.length) {
    skillObserver.observe(document.querySelector(".skills__grid") || document.body);
  }

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

  initializeTheme();
});
