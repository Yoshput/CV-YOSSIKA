import os

BASE_DIR = r"d:\PROJECT WEB\PORTOFOLIO SAYA\CV-YOSSIKA"
TARGET_PATH = os.path.join(BASE_DIR, "projects.html")

projects_html = """<!DOCTYPE html>
<html lang="id" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Seluruh Portofolio Proyek &amp; Rekayasa Digital | Yossika Putra</title>
  <meta name="description" content="Koleksi lengkap 11+ proyek rekayasa perangkat lunak, sistem POS ritel multi-cabang, integrasi AI cerdas, dan desain visual oleh Yossika Putra Erlangga.">
  <meta name="author" content="Yossika Putra Erlangga">
  
  <!-- Favicons -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,300..900;1,300..900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/style.css">

  <style>
    .projects-page-hero {
      padding: calc(var(--nav-height) + 3.5rem) 0 3rem;
      text-align: center;
      background: radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 60%);
    }
    .projects-page-title {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 900;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin-bottom: 1rem;
    }
    [data-theme="light"] .projects-page-title {
      color: #0f172a;
    }
    .projects-page-sub {
      font-size: 1.1rem;
      color: var(--txt-muted);
      max-width: 680px;
      margin: 0 auto 2.5rem;
      line-height: 1.65;
    }
    .projects-filter-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-bottom: 3.5rem;
    }
    .all-proj-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 2rem;
      margin-bottom: 5rem;
    }
    @media (max-width: 768px) {
      .all-proj-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <!-- Top Scroll Progress Bar -->
  <div id="scrollProgress" class="scroll-progress-bar" aria-hidden="true"></div>

  <!-- Ambient Cursor Spotlight -->
  <div id="cursorSpotlight" class="cursor-spotlight" aria-hidden="true"></div>

  <!-- ════ HEADER NAVBAR ════ -->
  <header class="site-header" id="siteHeader">
    <div class="nav-container">
      <a href="index.html" class="nav-brand" aria-label="Yossika Putra Home">
        <span class="brand-sparkle">✦</span>
        <span class="brand-name">Yossika</span>
      </a>

      <nav class="nav-center-menu">
        <ul class="nav-links">
          <li><a href="index.html">← Beranda</a></li>
          <li><a href="index.html#about">Tentang</a></li>
          <li><a href="jasa.html">Jasa Web</a></li>
          <li><a href="dokumentasi/index.html">Dokumentasi</a></li>
          <li><a href="index.html#contact">Kontak</a></li>
        </ul>
      </nav>

      <div class="nav-controls">
        <!-- Language Switcher -->
        <button id="langToggleBtn" class="lang-pill-btn" aria-label="Ganti Bahasa (Switch Language)" title="Ganti Bahasa">
          <span class="lang-text" id="langText">ID</span>
        </button>

        <!-- Dark / Light Theme Toggle -->
        <button id="themeToggleBtn" class="icon-btn" aria-label="Toggle Dark/Light Mode" title="Toggle Dark/Light Mode">
          <svg class="theme-sun-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        </button>

        <!-- WhatsApp CTA -->
        <a href="https://wa.me/6287778683766?text=Halo%20Mas%20Yossika,%20saya%20tertarik%20order%20website." target="_blank" rel="noopener" class="nav-cta-btn">
          <span>Order Web</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  </header>

  <main>
    <!-- ════ HERO ════ -->
    <section class="projects-page-hero">
      <div class="container">
        <span class="eyebrow" style="color:#38bdf8;">KATALOG LENGKAP REKAYASA DIGITAL</span>
        <h1 class="projects-page-title">Seluruh Karya &amp; Proyek</h1>
        <p class="projects-page-sub">
          Aplikasi web produksi, sistem Point of Sale ritel multi-cabang, kecerdasan buatan computer vision, dan desain antarmuka interaktif yang dibangun secara dedikatif.
        </p>

        <!-- Filter Tabs -->
        <div class="projects-filter-container">
          <button type="button" class="proj-filter-btn active" data-filter="all" onclick="filterProjectsPage('all')">Semua Karya (15)</button>
          <button type="button" class="proj-filter-btn" data-filter="pos" onclick="filterProjectsPage('pos')">Enterprise &amp; POS</button>
          <button type="button" class="proj-filter-btn" data-filter="ai" onclick="filterProjectsPage('ai')">AI &amp; Vision</button>
          <button type="button" class="proj-filter-btn" data-filter="webapp" onclick="filterProjectsPage('webapp')">Web Applications</button>
          <button type="button" class="proj-filter-btn" data-filter="design" onclick="filterProjectsPage('design')">Visual Design</button>
        </div>
      </div>
    </section>

    <!-- ════ ALL PROJECTS GRID ════ -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="all-proj-grid" id="allProjectsGrid">
          
          <!-- 1. Sistem POS IRIS -->
          <article class="project-card" data-category="pos webapp" onclick="openProjectModal('pos_iris')">
            <div class="project-media">
              <div class="project-badge-pos"><span class="pill pill-blue">Enterprise POS</span></div>
              <video class="card-video-loop" src="assets/img/project-web/pos-iris/pos-iris-preview.mp4" poster="assets/img/project-web/pos-iris/pos-iris-poster.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">Sistem POS Operasional IRIS — Optik I See You</h3>
              <p class="project-tagline">Sistem kasir ritel dan portal operasional 4 cabang terintegrasi antrian Smart TV bersuara Alice AI, modul refraksi, dan notifikasi WhatsApp.</p>
              <div class="project-tech">
                <span class="pill pill-green">POS Engine</span>
                <span class="pill pill-blue">Multi-Branch Sync</span>
                <span class="pill pill-purple">Alice AI Voice</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Enterprise ↗</span></div>
            </div>
          </article>

          <!-- 2. Mubes HIPMI -->
          <article class="project-card" data-category="webapp" onclick="openProjectModal('mubes_hipmi')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/mubes-hipmi/mubes-hipmi-preview.mp4" poster="assets/img/project-web/mubes-hipmi/mubes-hipmi-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">Sistem Informasi Konstitusi &amp; RAB MUBES HIPMI</h3>
              <p class="project-tagline">Portal digital musyawarah akbar BPC HIPMI Banyumas dengan pembaca konstitusi AD/ART dan kalkulator anggaran dinamis.</p>
              <div class="project-tech">
                <span class="pill pill-blue">React.js</span>
                <span class="pill pill-cyan">Tailwind CSS</span>
                <span class="pill pill-green">Live Finance</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Organisasi ↗</span></div>
            </div>
          </article>

          <!-- 3. Photobooth HIPMI -->
          <article class="project-card" data-category="ai webapp" onclick="openProjectModal('photobooth_hipmi')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/photobooth-hipmi/photobooth-hipmi-preview.mp4" poster="assets/img/project-web/photobooth-hipmi/photobooth-hipmi-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">AI Photobooth MUBES BPC HIPMI Banyumas</h3>
              <p class="project-tagline">Photobooth interaktif berbasis kamera WebRTC dengan frame branding resmi HIPMI, filter AI, countdown, dan QR Code download instan.</p>
              <div class="project-tech">
                <span class="pill pill-pink">WebRTC Camera</span>
                <span class="pill pill-cyan">Canvas Composite</span>
                <span class="pill pill-amber">QR Code</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Event App ↗</span></div>
            </div>
          </article>

          <!-- 4. IMI I See You -->
          <article class="project-card" data-category="webapp" onclick="openProjectModal('imi_iseeyou')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/imi-iseeyou/imi-iseeyou-preview.mp4" poster="assets/img/project-web/imi-iseeyou/imi-iseeyou-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">IMI I See You — Mobile Event Management</h3>
              <p class="project-tagline">Aplikasi mobile registrasi peserta dan ticketing kompetisi balap Ikatan Motor Indonesia (IMI) Jawa Tengah.</p>
              <div class="project-tech">
                <span class="pill pill-blue">Mobile Web</span>
                <span class="pill pill-purple">Ticket Scanner</span>
                <span class="pill pill-green">Database</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Mobile App ↗</span></div>
            </div>
          </article>

          <!-- 5. Optik I See You AR -->
          <article class="project-card" data-category="ai webapp" onclick="openProjectModal('optik_iseeyou')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/optik-iseeyou/optik-iseeyou-demo.mp4" poster="assets/img/project-web/optik-iseeyou/optik-iseeyou-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">Optik I See You — Web Platform &amp; AR Try-On</h3>
              <p class="project-tagline">Web ritel optik 4 cabang dengan Virtual Try-On kacamata 3D Google MediaPipe + Three.js, katalog kacamata, dan konsultasi cabang.</p>
              <div class="project-tech">
                <span class="pill pill-purple">Next.js 15</span>
                <span class="pill pill-blue">Three.js 3D</span>
                <span class="pill pill-pink">MediaPipe AI</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Live Production ↗</span></div>
            </div>
          </article>

          <!-- 6. GestureFlow -->
          <article class="project-card" data-category="ai" onclick="openProjectModal('gesture')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/GestureFlow/gestureflow-demo.mp4" poster="assets/img/project-web/GestureFlow/gestureflow-web-klasifikasi-sibi-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">GestureFlow v3.0 — AI SIBI Sign Language</h3>
              <p class="project-tagline">Penerjemah bahasa isyarat SIBI real-time berbasis Computer Vision 21 titik tangan dan synthesizer suara terjemahan.</p>
              <div class="project-tech">
                <span class="pill pill-pink">MediaPipe Hands</span>
                <span class="pill pill-purple">PyTorch</span>
                <span class="pill pill-green">Speech Synth</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">AI Research ↗</span></div>
            </div>
          </article>

          <!-- 7. Food-TYU -->
          <article class="project-card" data-category="pos webapp" onclick="openProjectModal('food')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/Food-TYU/food-tyu-demo.mp4" poster="assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">Food-TYU — Smart Campus E-Canteen</h3>
              <p class="project-tagline">Kantin pintar kampus Telkom University Purwokerto terintegrasi pembayaran QRIS Midtrans dan rekapitulasi vendor.</p>
              <div class="project-tech">
                <span class="pill pill-green">Midtrans QRIS</span>
                <span class="pill pill-blue">PHP &amp; MySQL</span>
                <span class="pill pill-amber">Vendor Portal</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Fintech ↗</span></div>
            </div>
          </article>

          <!-- 8. MacaBae -->
          <article class="project-card" data-category="ai webapp" onclick="openProjectModal('macabae')">
            <div class="project-media">
              <video class="card-video-loop" src="assets/img/project-web/MacaBae/macabae-demo.mp4" poster="assets/img/project-web/MacaBae/macabae-web-perpustakaan-digital-landing.webp" autoplay muted loop playsinline preload="none" width="600" height="338"></video>
            </div>
            <div class="project-body">
              <h3 class="project-title">MacaBae — Perpustakaan Digital &amp; MacaBot AI</h3>
              <p class="project-tagline">Katalog buku digital dengan asisten baca cerdas MacaBot (Gemini 2.5 Flash), review komunitas, dan tracking peminjaman.</p>
              <div class="project-tech">
                <span class="pill pill-purple">Gemini API</span>
                <span class="pill pill-blue">Laravel 11</span>
                <span class="pill pill-cyan">Full-text Search</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">EdTech ↗</span></div>
            </div>
          </article>

          <!-- 9. Ngertiin Dia -->
          <article class="project-card" data-category="ai webapp" onclick="openProjectModal('ngertiindia')">
            <div class="project-media">
              <img src="assets/img/project-web/Ngertiin-Dia/ngertiin-dia-web-landing.webp" alt="Ngertiin Dia" width="600" height="338" loading="lazy">
            </div>
            <div class="project-body">
              <h3 class="project-title">Ngertiin Dia — Self-Care &amp; Couple Sync PWA</h3>
              <p class="project-tagline">Aplikasi keintiman emosional dan self-care dengan AI Empathy Engine (Gemini 2.5 Flash) dan sinkronisasi real-time.</p>
              <div class="project-tech">
                <span class="pill pill-pink">AI Empathy</span>
                <span class="pill pill-purple">PWA Offline</span>
                <span class="pill pill-green">Encrypted</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">PWA App ↗</span></div>
            </div>
          </article>

          <!-- 10. Gym Planner -->
          <article class="project-card" data-category="webapp" onclick="openProjectModal('gymplanner')">
            <div class="project-media">
              <img src="assets/img/project-web/Gym-Planner/gym-planner-web-landing.webp" alt="Gym Planner" width="600" height="338" loading="lazy">
            </div>
            <div class="project-body">
              <h3 class="project-title">Custom Gym Split &amp; Nutrition Planner</h3>
              <p class="project-tagline">Manajemen latihan angkat beban 7 hari kustom dengan kalkulator TDEE otomatis, macro kalori, dan visualisasi progres.</p>
              <div class="project-tech">
                <span class="pill pill-amber">TDEE Engine</span>
                <span class="pill pill-blue">Local Storage</span>
                <span class="pill pill-cyan">Chart.js</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Fitness App ↗</span></div>
            </div>
          </article>

          <!-- 11. Thrift -->
          <article class="project-card" data-category="webapp" onclick="openProjectModal('thrift')">
            <div class="project-media">
              <img src="assets/img/project-web/Thrift/toko-baju-thrift-landing.webp" alt="Thrift Store" width="600" height="338" loading="lazy">
            </div>
            <div class="project-body">
              <h3 class="project-title">Toko Baju Thrift — Vintage E-Commerce</h3>
              <p class="project-tagline">Etalase busana vintage kurasi dengan filter size/brand, keranjang belanja interaktif, dan checkout WhatsApp instan.</p>
              <div class="project-tech">
                <span class="pill pill-cyan">E-Commerce</span>
                <span class="pill pill-pink">Cart System</span>
                <span class="pill pill-green">WhatsApp Direct</span>
              </div>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Retail ↗</span></div>
            </div>
          </article>

          <!-- 12. Mango Nyeni in iPhone Mockup -->
          <article class="project-card" data-category="design" onclick="openProjectModal('mango_nyeni')">
            <div class="iphone-mockup-frame" style="max-width:280px;margin:1rem auto;">
              <div class="iphone-inner-screen">
                <div class="iphone-dynamic-pill"></div>
                <img src="assets/img/project-bisnis/mango-nyeni/mango-nyeni-produk-mango-sago.webp" alt="Mango Nyeni Sago" width="300" height="600" loading="lazy">
              </div>
            </div>
            <div class="project-body">
              <span class="pill pill-amber">F&amp;B Entrepreneurship</span>
              <h3 class="project-title">Mango Nyeni — Handcrafted Artisan Sago</h3>
              <p class="project-tagline">Bisnis kuliner mandiri dari nol dengan 3 varian buah segar unggulan dan pemasaran langsung ke konsumen.</p>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Business ↗</span></div>
            </div>
          </article>

          <!-- 13. Gunung Slamet Banner in MacBook Frame -->
          <article class="project-card" data-category="design" onclick="openProjectModal('gunung')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-gunung-slamet.webp" alt="Banner Wisata Gunung Slamet" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="project-body" style="margin-top:1rem;">
              <span class="pill pill-cyan">Visual Design</span>
              <h3 class="project-title">Banner Wisata Gunung Slamet</h3>
              <p class="project-tagline">Desain promosi pariwisata bertema petualangan alam dengan tipografi dinamis dan komposisi visual imersif.</p>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Design ↗</span></div>
            </div>
          </article>

          <!-- 14. Merch Telkom in MacBook Frame -->
          <article class="project-card" data-category="design" onclick="openProjectModal('merch_telkom')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-merchandise-telkom-university.webp" alt="Merchandise Tel-U" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="project-body" style="margin-top:1rem;">
              <span class="pill pill-pink">Brand Identity</span>
              <h3 class="project-title">Merchandise Telkom University</h3>
              <p class="project-tagline">Katalog visual merchandising resmi universitas — hoodie, lanyard, dan aksesori dengan identitas warna kampus.</p>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Merch ↗</span></div>
            </div>
          </article>

          <!-- 15. Komik Telkom in MacBook Frame -->
          <article class="project-card" data-category="design" onclick="openProjectModal('komik_telkom')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-komik-telkom-university.webp" alt="Komik Tel-U" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="project-body" style="margin-top:1rem;">
              <span class="pill pill-purple">Creative Storytelling</span>
              <h3 class="project-title">Komik Edukasi Tel-U</h3>
              <p class="project-tagline">Banner pop-art interaktif yang menggabungkan maskot kartun dengan fotografi nyata kehidupan kampus.</p>
              <div class="project-action-row"><span>Buka Studi Kasus →</span><span style="font-size:0.8rem;color:var(--txt-muted);">Storytelling ↗</span></div>
            </div>
          </article>

        </div>
      </div>
    </section>
  </main>

  <!-- ════ FOOTER ════ -->
  <footer class="site-footer">
    <div class="container footer-container">
      <div class="footer-left">
        <span class="brand-sparkle">✦</span>
        <span style="font-weight:700;">Yossika Putra Erlangga</span>
        <span style="color:var(--txt-muted);font-size:0.85rem;">© 2026 · Solusi Rekayasa Digital</span>
      </div>
      <div class="footer-links">
        <a href="index.html">Beranda</a>
        <a href="jasa.html">Jasa Web</a>
        <a href="dokumentasi/index.html">Dokumentasi</a>
        <a href="https://wa.me/6287778683766" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </footer>

  <!-- ════ FULLSCREEN CASE STUDY OVERLAY ════ -->
  <div class="case-study-overlay" id="caseStudyOverlay" aria-modal="true" role="dialog" data-lenis-prevent>
    <div class="cs-topbar">
      <div class="cs-topbar-inner">
        <button class="cs-back-btn" onclick="closeCaseStudy()" aria-label="Tutup Studi Kasus">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Kembali</span>
        </button>
        <span class="cs-brand" id="csBrand">Yossika · Case Study</span>
        <button class="cs-close-circle" onclick="closeCaseStudy()" aria-label="Tutup">✕</button>
      </div>
    </div>
    <div class="cs-scroll-wrap" id="csScrollWrap">
      <div class="cs-body" id="csDynamicContent"></div>
    </div>
  </div>

  <!-- ════ LIGHTBOX ZOOM MODAL ════ -->
  <div id="lightboxModal" class="lightbox-overlay" onclick="closeLightbox()" aria-label="Klik untuk menutup gambar">
    <div class="lightbox-close-btn" onclick="closeLightbox()" aria-label="Tutup Lightbox">✕</div>
    <img id="lightboxImg" class="lightbox-img" src="" alt="Enlarged View" width="800" height="600" loading="lazy">
  </div>

  <!-- ════ SCRIPTS ════ -->
  <script defer src="js/vendor/lenis.min.js"></script>
  <script defer src="js/vendor/gsap.min.js"></script>
  <script defer src="js/vendor/ScrollTrigger.min.js"></script>
  <script defer src="js/i18n.min.js"></script>
  <script defer src="js/projects-data.min.js"></script>
  <script defer src="js/main.js"></script>

  <script>
    function filterProjectsPage(cat) {
      document.querySelectorAll('.projects-filter-container .proj-filter-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === cat);
      });
      const cards = document.querySelectorAll('#allProjectsGrid .project-card');
      cards.forEach(card => {
        const itemCat = card.getAttribute('data-category') || '';
        if (cat === 'all' || itemCat.includes(cat)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>
"""

with open(TARGET_PATH, "w", encoding="utf-8") as f:
    f.write(projects_html)
print(f"SUCCESS: Generated {TARGET_PATH}")
