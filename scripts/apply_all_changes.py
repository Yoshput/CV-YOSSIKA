import re
import os

BASE_DIR = r"d:\PROJECT WEB\PORTOFOLIO SAYA\CV-YOSSIKA"
HTML_PATH = os.path.join(BASE_DIR, "index.html")
JS_PATH = os.path.join(BASE_DIR, "js", "main.js")
MIN_JS_PATH = os.path.join(BASE_DIR, "js", "main.min.js")

print("--- Reading index.html ---")
with open(HTML_PATH, "r", encoding="utf-8") as f:
    html_content = f.read()

# 1. Replace Hero Section
hero_pattern = r'<!-- ════ HERO SECTION.*?-->\s*<section class="hero" id="hero".*?</section>'
marcus_hero = '''<!-- ════ HERO SECTION (MARCUS VANE CINEMATIC ARCHITECTURE) ════ -->
    <section class="hero hero-cinematic" id="hero">
      <!-- Ambient Three.js Background Canvas -->
      <canvas id="heroCanvas3D" class="hero-canvas-3d"></canvas>

      <!-- SVG Liquid Displacement Filter Definition -->
      <svg class="sr-only" aria-hidden="true" width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden;">
        <defs>
          <filter id="heroLiquidFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence id="heroLiquidTurbulence" type="fractalNoise" baseFrequency="0.015 0.015" numOctaves="2" result="noise" seed="1"/>
            <feDisplacementMap id="heroLiquidDisplace" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      <div class="container">
        <!-- Top Row: Stack of 4 Roles on Left, Bio + CTA on Right -->
        <div class="hero-top-row">
          <div class="hero-roles-stack">
            <div class="hero-role-item">
              <span class="hero-role-dot"></span>
              <span>SOFTWARE ENGINEER</span>
            </div>
            <div class="hero-role-item">
              <span class="hero-role-dot"></span>
              <span>FULLSTACK SPECIALIST</span>
            </div>
            <div class="hero-role-item">
              <span class="hero-role-dot"></span>
              <span>NETWORK INFRASTRUCTURE</span>
            </div>
            <div class="hero-role-item">
              <span class="hero-role-dot"></span>
              <span>TELKOM UNIVERSITY · IPK 3.85</span>
            </div>
          </div>

          <div class="hero-brief-box">
            <p class="hero-brief-text">
              Rekayasa aplikasi web berkinerja tinggi, sistem POS enterprise, dan kecerdasan buatan terapan dengan standar presisi industri.
            </p>
            <div class="hero-cta-group">
              <a href="#jasa-preview" class="btn btn-primary" style="gap:0.5rem;box-shadow:0 8px 25px rgba(56,189,248,0.35);">
                <span>Order Website</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
              <a href="#projects" class="btn btn-secondary">
                <span>View Selected Works</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Centerpiece Stage: Giant Typography Behind Cutout Portrait -->
        <div class="hero-center-stage">
          <div class="hero-giant-typography" id="heroGiantType" aria-hidden="true">
            <div class="hero-giant-line" id="heroGiantLine1">YOSSIKA</div>
            <div class="hero-giant-line" id="heroGiantLine2">PUTRA</div>
          </div>

          <div class="hero-portrait-stage">
            <div class="hero-liquid-wrapper" id="heroLiquidWrapper">
              <img src="assets/img/yossika_hero_portrait.webp" alt="Yossika Putra Erlangga - Software Engineer" class="hero-portrait-cutout" width="520" height="720" fetchpriority="high" decoding="async">
            </div>
            <div class="hero-bottom-melt"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ════ OPERATING PRINCIPLES MARQUEE (BELOW HERO) ════ -->
    <div class="operating-marquee" aria-hidden="true">
      <div class="marquee-infinite-track">
        <span class="marquee-item">BUILD BOLD <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">SCALE RELENTLESSLY <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">THINK IN SYSTEMS <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">CODE WITH CONVICTION <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">SHIP THE FUTURE <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">ZERO COMPROMISE ARCHITECTURE <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">BUILD BOLD <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">SCALE RELENTLESSLY <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">THINK IN SYSTEMS <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">CODE WITH CONVICTION <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">SHIP THE FUTURE <span class="marquee-bullet">✦</span></span>
        <span class="marquee-item">ZERO COMPROMISE ARCHITECTURE <span class="marquee-bullet">✦</span></span>
      </div>
    </div>'''

new_html, count = re.subn(hero_pattern, marcus_hero, html_content, flags=re.DOTALL)
print(f"Hero section replacement count: {count}")
assert count == 1, "Failed to match hero section!"

# 2. Replace About photo card with clean credentials card
about_photo_pattern = r'<div class="about-photo-card">\s*<img src="assets/img/foto-jas-fresh\.webp".*?</div>'
clean_credentials_card = '''<!-- Simplified Executive Verified Credentials Card -->
        <div class="credentials-clean-card">
          <div class="credentials-card-header">
            <div class="credentials-avatar-wrap">
              <img src="assets/img/yossika_jas_hitam_clean.webp" alt="Yossika Putra Erlangga" class="credentials-avatar-img" width="72" height="72" loading="lazy">
            </div>
            <div class="credentials-header-info">
              <div class="credentials-name">
                <span>Yossika Putra</span>
                <span class="credentials-verify-badge" title="Verified Professional Engineer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </span>
              </div>
              <div class="credentials-title">Software Engineer &amp; Digital Architect</div>
            </div>
          </div>

          <div class="credentials-divider"></div>

          <div class="credentials-meta-grid">
            <div class="credentials-meta-item">
              <span class="credentials-meta-label">Institusi Pendidikan</span>
              <span class="credentials-meta-val">Telkom University</span>
            </div>
            <div class="credentials-meta-item">
              <span class="credentials-meta-label">Program Studi</span>
              <span class="credentials-meta-val">S1 Informatika</span>
            </div>
            <div class="credentials-meta-item">
              <span class="credentials-meta-label">Indeks Prestasi Kumulatif</span>
              <span class="credentials-meta-val highlight">IPK 3.85 / 4.00</span>
            </div>
            <div class="credentials-meta-item">
              <span class="credentials-meta-label">Status Akademik</span>
              <span class="credentials-meta-val">Semester 4 Active</span>
            </div>
          </div>

          <div class="credentials-tags">
            <span class="credentials-tag">Fullstack Engineering</span>
            <span class="credentials-tag">AI Workflows</span>
            <span class="credentials-tag">SMK Telkom TKJ</span>
            <span class="credentials-tag">Ex-Telkom Akses</span>
          </div>

          <div class="credentials-card-footer">
            <div class="credentials-status">
              <span class="credentials-status-dot"></span>
              <span>Available for Client Projects</span>
            </div>
            <span class="credentials-id-num">VERIFIED #YP-2024</span>
          </div>
        </div>'''

new_html, count2 = re.subn(about_photo_pattern, clean_credentials_card, new_html, flags=re.DOTALL)
print(f"About card replacement count: {count2}")
assert count2 == 1, "Failed to match about photo card!"

# 3. Update Copywriting
old_bento = "dan alur UX konversi tinggi yang langsung memikat klien."
new_bento = "dan alur UX konversi tinggi yang terbukti meningkatkan konversi dan kepuasan pengguna."
assert old_bento in new_html, "old_bento text not found"
new_html = new_html.replace(old_bento, new_bento)

old_jasa_title = "Website Spektakuler yang Bikin Klien Shock &amp; Langsung Order"
new_jasa_title = "Solusi Rekayasa Website &amp; Sistem Digital Berstandar Industri"
assert old_jasa_title in new_html, "old_jasa_title not found"
new_html = new_html.replace(old_jasa_title, new_jasa_title)

old_jasa_sub = "Tinggalkan template pasaran yang lambat. Dapatkan website dengan standar Apple HIG &amp; glassmorphism modern, load speed sub-detik, dan jaminan pengerjaan langsung tanpa perantara. Pilih kategori di bawah ini:"
new_jasa_sub = "Tinggalkan template pasaran yang lambat. Hadirkan website berstandar Apple HIG &amp; glassmorphism modern, load speed sub-detik (&lt; 0.8s), dan arsitektur scalable siap scale-up. Pilih kategori di bawah ini:"
assert old_jasa_sub in new_html, "old_jasa_sub not found"
new_html = new_html.replace(old_jasa_sub, new_jasa_sub)

with open(HTML_PATH, "w", encoding="utf-8") as f:
    f.write(new_html)
print("--- index.html updated successfully ---")

# 4. Update js/main.js
print("--- Reading js/main.js ---")
with open(JS_PATH, "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace JASA_DATA plan
old_plan = """      {
        name: 'Spektakuler 3D HIG',
        price: 'Rp 700.000',
        period: '/ proyek (sekali bayar)',
        desc: 'Portofolio spektakuler yang bikin HRD & klien shock dengan kartu 3D, synthesizer audio, dan domain pribadi.',
        features: [
          'Holographic 3D ID Card Interactive Canvas',
          'Audio Synthesizer Sound FX & Command Palette (⌘K)',
          'Case Study Viewer Imersif Layar Penuh',
          'Termasuk Domain .my.id / .com 1 Tahun',
          'Optimasi Skor SEO & Lighthouse 95+'
        ],
        badge: 'SPEKTAKULER',
        featured: false,
        btnText: 'Order Spektakuler'
      }"""

new_plan = """      {
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
      }"""

assert old_plan in js_content, "old_plan not found in js/main.js"
js_content = js_content.replace(old_plan, new_plan)

# Add initMarcusHero call in DOMContentLoaded
dom_needle = "  // 8. Three.js Hero 3D Particle Canvas\n  initHeroThreeCanvas();"
dom_replacement = """  // 7b. Marcus Vane Cinematic Hero & Parallax Controller
  initMarcusHero();

  // 8. Three.js Hero 3D Particle Canvas
  initHeroThreeCanvas();"""
assert dom_needle in js_content, "dom_needle not found in js/main.js"
js_content = js_content.replace(dom_needle, dom_replacement)

# Add initMarcusHero implementation at the end before export/closing
marcus_fn = """
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

  let targetTiltX = 0, targetTiltY = 0;
  let currentTiltX = 0, currentTiltY = 0;
  let currentDisplace = 0, targetDisplace = 0;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    targetTiltX = normY * -12;
    targetTiltY = normX * 14;

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
    targetDisplace = 0;
    if (giantLine1 && giantLine2) {
      giantLine1.style.transform = 'translate3d(0, 0, 0)';
      giantLine2.style.transform = 'translate3d(0, 0, 0)';
    }
  });

  function updateMarcusLoop() {
    currentTiltX += (targetTiltX - currentTiltX) * 0.08;
    currentTiltY += (targetTiltY - currentTiltY) * 0.08;
    currentDisplace += (targetDisplace - currentDisplace) * 0.06;

    wrapper.style.transform = `perspective(1000px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;

    if (displaceMap) {
      displaceMap.setAttribute('scale', currentDisplace.toFixed(1));
    }

    requestAnimationFrame(updateMarcusLoop);
  }
  updateMarcusLoop();
}
"""

js_content += marcus_fn

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write(js_content)
print("--- js/main.js updated successfully ---")

# Copy to js/main.min.js
with open(MIN_JS_PATH, "w", encoding="utf-8") as f:
    f.write(js_content)
print("--- js/main.min.js synchronized ---")
print("ALL UPDATES APPLIED CLEANLY AND VERIFIED!")
