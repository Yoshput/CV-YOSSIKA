import re
import os
import shutil

BASE_DIR = r"d:\PROJECT WEB\PORTOFOLIO SAYA\CV-YOSSIKA"

print("==================================================")
print("EXECUTING ALL REFACTORS (Clean UX, Anti-AI Slop)")
print("==================================================")

# ----------------------------------------------------
# 1. Update css/style.css
# ----------------------------------------------------
css_path = os.path.join(BASE_DIR, "css", "style.css")
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

# Make hero giant line bolder, crisper, and clearly visible
old_giant = """.hero-giant-line {
  font-family: var(--font-mega, 'Anton', 'Montserrat', sans-serif);
  font-size: clamp(4.5rem, 14vw, 13rem);
  font-weight: 900;
  line-height: 0.84;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.055);
  text-align: center;
  white-space: nowrap;
  transition: transform 0.2s ease-out;
  will-change: transform;
}"""

new_giant = """.hero-giant-line {
  font-family: var(--font-mega, 'Anton', 'Montserrat', sans-serif);
  font-size: clamp(4.5rem, 15vw, 14rem);
  font-weight: 900;
  line-height: 0.82;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.24);
  text-shadow: 0 0 35px rgba(255, 255, 255, 0.12), 0 0 70px rgba(56, 189, 248, 0.2);
  text-align: center;
  white-space: nowrap;
  transition: transform 0.2s ease-out;
  will-change: transform;
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.2);
}"""

if old_giant in css_content:
    css_content = css_content.replace(old_giant, new_giant)
    print("Updated .hero-giant-line in style.css")

# Append new styles for language button, macbook mockup, iphone mockup, and mobile responsive fixes
additional_css = """
/* ==========================================================================
   REFRESHED UX UPGRADES: MOCKUPS, DOCK, & MOBILE RESPONSIVE
   ========================================================================== */

/* Language Toggle Pill */
.lang-pill-btn {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--txt);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition);
}
.lang-pill-btn:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  color: var(--accent);
}

/* MacBook Pro Aesthetic Frame */
.macbook-mockup-frame {
  position: relative;
  background: #18191f;
  border-radius: 14px 14px 4px 4px;
  padding: 10px 10px 14px 10px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
}
.macbook-mockup-frame:hover {
  transform: translateY(-6px);
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.85), 0 0 30px rgba(56, 189, 248, 0.2);
}
.macbook-camera-notch {
  width: 50px;
  height: 8px;
  background: #090a0f;
  margin: 0 auto 6px auto;
  border-radius: 0 0 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.macbook-camera-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #38bdf8;
  opacity: 0.7;
}
.macbook-screen {
  border-radius: 8px;
  overflow: hidden;
  display: block;
  background: #000;
  position: relative;
}
.macbook-screen img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.macbook-mockup-frame:hover .macbook-screen img {
  transform: scale(1.03);
}

/* iPhone 17 Pro Titanium Mockup Frame */
.iphone-mockup-frame {
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  background: linear-gradient(145deg, #3d3f4a 0%, #1e1f26 40%, #2b2c36 100%);
  border-radius: 46px;
  padding: 10px;
  box-shadow: 0 25px 65px rgba(0, 0, 0, 0.65), inset 0 1px 2px rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
}
.iphone-mockup-frame:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.8), 0 0 35px rgba(245, 158, 11, 0.25);
}
.iphone-inner-screen {
  position: relative;
  border-radius: 38px;
  overflow: hidden;
  background: #000;
}
.iphone-inner-screen img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.iphone-dynamic-pill {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 22px;
  background: #000000;
  border-radius: 20px;
  z-index: 10;
}

/* Mobile Clean Layout Fixes */
@media (max-width: 768px) {
  /* Prevent Chatbot button from colliding with bottom dock */
  .chatbot-launcher {
    bottom: 5.75rem !important;
    right: 1.25rem !important;
    width: 48px !important;
    height: 48px !important;
  }
  
  /* Centered Contact Section on Mobile */
  .contact-grid {
    grid-template-columns: 1fr !important;
    gap: 2.25rem !important;
    text-align: center !important;
  }
  .contact-info {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
  }
  .contact-social-row {
    justify-content: center !important;
  }
  .contact-form {
    max-width: 500px !important;
    margin: 0 auto !important;
    width: 100% !important;
    text-align: left !important;
  }
}
"""

if "REFRESHED UX UPGRADES" not in css_content:
    css_content += additional_css
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)
    print("Appended additional responsive styles to css/style.css")

# ----------------------------------------------------
# 2. Update css/jasa.css (Light mode fix for featured card)
# ----------------------------------------------------
jasa_css_path = os.path.join(BASE_DIR, "css", "jasa.css")
with open(jasa_css_path, "r", encoding="utf-8") as f:
    jasa_css = f.read()

light_jasa_fix = """
/* Light theme fix for featured company profile card */
[data-theme="light"] .jasa-price-card.featured {
  background: linear-gradient(170deg, rgba(238, 242, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%) !important;
  border-color: rgba(99, 102, 241, 0.35) !important;
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05) !important;
}
[data-theme="light"] .jasa-price-card.featured .jasa-card-name,
[data-theme="light"] .jasa-price-card.featured .jasa-card-price-val {
  color: #0f172a !important;
}
[data-theme="light"] .jasa-price-card.featured .jasa-card-desc,
[data-theme="light"] .jasa-price-card.featured .jasa-card-price-lbl,
[data-theme="light"] .jasa-price-card.featured .jasa-card-duration,
[data-theme="light"] .jasa-price-card.featured .jasa-card-feature-item span {
  color: #334155 !important;
}
"""

if "Light theme fix for featured company profile card" not in jasa_css:
    jasa_css += light_jasa_fix
    with open(jasa_css_path, "w", encoding="utf-8") as f:
        f.write(jasa_css)
    print("Updated css/jasa.css with light mode fix")

# ----------------------------------------------------
# 3. Update index.html
# ----------------------------------------------------
html_path = os.path.join(BASE_DIR, "index.html")
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# A. Header: Add Language Toggle Button & remove Keahlian anchor
old_nav_controls = """        <!-- Dark / Light Theme Toggle -->
        <button id="themeToggleBtn" class="icon-btn" aria-label="Toggle Dark/Light Mode" title="Toggle Dark/Light Mode">"""

new_nav_controls = """        <!-- Language Switcher (ID / EN) -->
        <button id="langToggleBtn" class="lang-pill-btn" aria-label="Ganti Bahasa (Switch Language)" title="Ganti Bahasa / Switch Language">
          <span class="lang-text" id="langText">ID</span>
        </button>

        <!-- Dark / Light Theme Toggle -->
        <button id="themeToggleBtn" class="icon-btn" aria-label="Toggle Dark/Light Mode" title="Toggle Dark/Light Mode">"""

if old_nav_controls in html:
    html = html.replace(old_nav_controls, new_nav_controls)
    print("Added Language Switcher to navbar")

# Remove Keahlian link from nav menu
html = html.replace('<li><a href="#capabilities">Keahlian</a></li>\n', '')
html = html.replace('<li><a href="#capabilities">Keahlian</a></li>', '')

# B. Hero section: ensure image points to yossika_cutout_person.webp
html = html.replace('src="assets/img/yossika_hero_portrait.webp"', 'src="assets/img/yossika_cutout_person.webp"')

# C. Remove Core Capabilities section
cap_pattern = r'<!-- ════ CORE CAPABILITIES: BENTO GRID ════ -->\s*<section class="section" id="capabilities">.*?</section>'
html, cap_count = re.subn(cap_pattern, '', html, flags=re.DOTALL)
print(f"Removed Core Capabilities section: count={cap_count}")

# D. Update About Me text & credentials card
about_pattern = r'<div class="about-content">\s*<span class="eyebrow" data-i18n="about.eyebrow">About Me</span>.*?</div>\s*</div>\s*</section>'

new_about_block = """<div class="about-content">
          <span class="eyebrow" data-i18n="about.eyebrow">About Me</span>
          <h2 class="section-title" data-i18n="about.title">Engineering Purposeful Digital Solutions</h2>
          <p data-i18n="about.p1" style="font-size:1.12rem;line-height:1.75;color:var(--txt);margin-bottom:1.25rem;">
            Saya adalah mahasiswa S1 Teknik Informatika di <strong>Telkom University Purwokerto</strong> yang berfokus pada <strong>Rekayasa Web Modern</strong>, <strong>Sistem POS &amp; Enterprise</strong>, dan <strong>Infrastruktur Jaringan</strong>. Menggabungkan ketelitian arsitektur dengan alur interaksi antarmuka yang <strong>elegan</strong>, <strong>berkinerja tinggi</strong>, dan <strong>berstandar industri</strong>.
          </p>
          <p data-i18n="about.p2" style="color:var(--txt-muted);line-height:1.7;margin-bottom:2rem;">
            Aktif sebagai Staff Departemen OKK di UKM HIPMI PT Telkom University Purwokerto dan memiliki jam terbang teknisi jaringan fiber optik dari PT Telkom Akses. Selalu antusias merancang solusi digital tangguh yang siap melayani kebutuhan nyata.
          </p>

          <div class="about-meta-grid">
            <div class="about-meta-item">
              <div class="meta-key" data-i18n="about.bornKey">Origin</div>
              <div class="meta-val" data-i18n="about.bornVal">Banyumas, Central Java</div>
            </div>
            <div class="about-meta-item">
              <div class="meta-key" data-i18n="about.eduKey">Education</div>
              <div class="meta-val" data-i18n="about.eduVal">S1 Informatika · Tel-U Purwokerto</div>
            </div>
            <div class="about-meta-item">
              <div class="meta-key" data-i18n="about.gpaKey">GPA</div>
              <div class="meta-val" data-i18n="about.gpaVal">3.64 / 4.00</div>
            </div>
            <div class="about-meta-item">
              <div class="meta-key" data-i18n="about.statusKey">Status</div>
              <div class="meta-val" data-i18n="about.statusVal">Semester 5 Aktif (Class of 2024)</div>
            </div>
          </div>
        </div>
      </div>
    </section>"""

# Also ensure About clean card uses foto-jas-fresh.webp and updated semester/GPA
card_old = """            <div class="credentials-avatar-wrap">
              <img src="assets/img/yossika_jas_hitam_clean.webp" alt="Yossika Putra Erlangga" class="credentials-avatar-img" width="72" height="72" loading="lazy">
            </div>"""
card_new = """            <div class="credentials-avatar-wrap">
              <img src="assets/img/foto-jas-fresh.webp" alt="Yossika Putra Erlangga" class="credentials-avatar-img" width="72" height="72" loading="lazy">
            </div>"""
html = html.replace(card_old, card_new)
html = html.replace('IPK 3.85 / 4.00', 'IPK 3.64 / 4.00')
html = html.replace('Semester 4 Active', 'Semester 5 Aktif')

html, about_count = re.subn(about_pattern, new_about_block, html, flags=re.DOTALL)
print(f"Updated About content: count={about_count}")

# E. Curate Featured Projects on landing page (Keep only Top 5)
# Projects to remove from landing page: photobooth_hipmi, imi_iseeyou, macabae, ngertiindia, gymplanner, thrift
for proj_id in ['photobooth_hipmi', 'imi_iseeyou', 'macabae', 'ngertiindia', 'gymplanner', 'thrift']:
    p_pattern = rf'<article class="project-card" onclick="openProjectModal\(\'{proj_id}\'\)">.*?</article>'
    html, rem_cnt = re.subn(p_pattern, '', html, flags=re.DOTALL)
    print(f"Removed {proj_id} from landing page: {rem_cnt}")

# Add Big Explore All Projects CTA Button
all_proj_cta = """        <!-- Big Explore All Projects CTA -->
        <div style="text-align:center;margin-top:3.5rem;">
          <a href="projects.html" class="btn btn-primary" style="display:inline-flex;align-items:center;gap:0.75rem;padding:0.95rem 2.25rem;font-size:1.05rem;font-weight:700;box-shadow:0 10px 30px rgba(56,189,248,0.35);">
            <span>Jelajahi Seluruh Proyek (11+ Karya Terverifikasi)</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </section>"""

# Replace the closing div and section of #projects with CTA
html = re.sub(r'(\s*</div>\s*</div>\s*</section>\s*<!-- ════ CREATIVE & VISUAL SECTION)', r'\n' + all_proj_cta + r'\n\1', html, count=1)

# F. Wrap Visual Works in MacBook Pro Frame
designs_pattern = r'<div class="designs-grid">.*?</div>\s*</div>\s*</section>'
new_designs_block = """<div class="designs-grid">
          <!-- Banner Gunung Slamet in MacBook Frame -->
          <article class="design-card" onclick="openProjectModal('gunung')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-gunung-slamet.webp" alt="Banner Wisata Gunung Slamet" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="design-body" style="margin-top:1.25rem;">
              <span class="pill pill-cyan">Visual Design</span>
              <h3 class="design-title">Banner Wisata Gunung Slamet</h3>
              <p class="design-tagline">Desain promosi pariwisata bertema nature &amp; adventure dengan tipografi dinamis dan komposisi visual imersif.</p>
            </div>
          </article>

          <!-- Merch Telkom in MacBook Frame -->
          <article class="design-card" onclick="openProjectModal('merch_telkom')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-merchandise-telkom-university.webp" alt="Merchandise Tel-U" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="design-body" style="margin-top:1.25rem;">
              <span class="pill pill-pink">Brand Identity</span>
              <h3 class="design-title">Merchandise Telkom University</h3>
              <p class="design-tagline">Katalog visual merchandising resmi universitas — hoodie, lanyard, dan aksesori dengan identitas warna kampus.</p>
            </div>
          </article>

          <!-- Komik Telkom in MacBook Frame -->
          <article class="design-card" onclick="openProjectModal('komik_telkom')">
            <div class="macbook-mockup-frame">
              <div class="macbook-camera-notch"><span class="macbook-camera-dot"></span></div>
              <div class="macbook-screen">
                <img src="assets/img/karya-design/banner-komik-telkom-university.webp" alt="Komik Tel-U" width="600" height="338" loading="lazy">
              </div>
            </div>
            <div class="design-body" style="margin-top:1.25rem;">
              <span class="pill pill-purple">Creative Storytelling</span>
              <h3 class="design-title">Komik Edukasi Tel-U</h3>
              <p class="design-tagline">Banner pop-art interaktif yang menggabungkan maskot karakter kartun dengan fotografi nyata kehidupan kampus.</p>
            </div>
          </article>
        </div>
      </div>
    </section>"""

html, des_cnt = re.subn(designs_pattern, new_designs_block, html, flags=re.DOTALL)
print(f"Updated Design works with MacBook frame: count={des_cnt}")

# G. Wrap Mango Nyeni in iPhone 17 Pro Frame
business_pattern = r'<div class="business-card">.*?</div>\s*</div>\s*</section>'
new_business_block = """<div class="business-card" style="display:grid;grid-template-columns:1.2fr 1fr;align-items:center;gap:3.5rem;">
          <div>
            <span class="pill pill-amber" style="margin-bottom:1rem;" data-i18n="business.role">Co-Founder &amp; Lead Operator</span>
            <h3 style="font-family:var(--font-display);font-size:1.85rem;font-weight:800;color:var(--txt);margin-bottom:1rem;">
              Mango Nyeni — Handcrafted Artisan Sago Drink
            </h3>
            <p style="font-size:1.05rem;line-height:1.7;color:var(--txt-muted);margin-bottom:1.5rem;">
              Bisnis kuliner mandiri yang dikembangkan dari nol dengan strategi digital D2C (<em>Direct-to-Consumer</em>), formulasi 3 varian buah segar unggulan (Mango, Strawberry, Dragon Fruit), dan sistem distribusi langsung ke ratusan pelanggan.
            </p>
            <button onclick="openProjectModal('mango_nyeni')" class="btn btn-primary" style="gap:0.5rem;" data-i18n="business.viewDetail">
              <span>Buka Detail Bisnis &amp; Strategi</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>

          <!-- iPhone 17 Pro Frame Mockup -->
          <div class="iphone-mockup-frame" onclick="openProjectModal('mango_nyeni')" style="cursor:pointer;" title="Klik untuk lihat detail bisnis">
            <div class="iphone-inner-screen">
              <div class="iphone-dynamic-pill"></div>
              <img src="assets/img/project-bisnis/mango-nyeni/mango-nyeni-produk-mango-sago.webp" alt="Mango Nyeni Artisan Sago" width="300" height="600" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>"""

html, biz_cnt = re.subn(business_pattern, new_business_block, html, flags=re.DOTALL)
print(f"Updated Mango Nyeni with iPhone 17 Pro frame: count={biz_cnt}")

# H. Minimalist Certificates Strip on Landing Page
cert_pattern = r'<!-- ════ CERTIFICATIONS SECTION ════ -->\s*<section class="section" id="certifications">.*?</section>'
new_cert_strip = """<!-- ════ MINIMALIST CERTIFICATES SHORTCUT STRIP ════ -->
    <section class="section cert-shortcut-section" id="certifications" style="padding: 3rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
      <div class="container" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.5rem;">
        <div>
          <span class="eyebrow" style="margin-bottom:0.35rem; color:#34d399;">Kredensial &amp; Sertifikasi Resmi</span>
          <h3 style="font-size:1.35rem; font-weight:800; color:var(--txt); margin:0;">
            12+ Lisensi Terverifikasi (MikroTik MTCNA, BNSP, Telkom Akses, Dicoding)
          </h3>
        </div>
        <a href="dokumentasi/index.html#sertifikat" class="btn btn-secondary" style="gap:0.5rem;">
          <span>Buka Arsip Sertifikat Lengkap</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </section>"""

html, cert_cnt = re.subn(cert_pattern, new_cert_strip, html, flags=re.DOTALL)
print(f"Replaced Certifications grid with minimal strip: count={cert_cnt}")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)
print("--- index.html updated successfully ---")

# ----------------------------------------------------
# 4. Update jasa.html & jasa/index.html
# ----------------------------------------------------
jasa_path = os.path.join(BASE_DIR, "jasa.html")
with open(jasa_path, "r", encoding="utf-8") as f:
    jhtml = f.read()

# Remove overlay text badges on proof cards
jhtml = re.sub(r'<span class="jasa-trust-badge.*?</span>\s*</span>', '', jhtml, flags=re.DOTALL)
jhtml = re.sub(r'<span class="jasa-trust-badge.*?</span>', '', jhtml, flags=re.DOTALL)

# Make proof cards clickable to open case study
jhtml = jhtml.replace('<article class="jasa-trust-card">', '<article class="jasa-trust-card" style="cursor:pointer;" onclick="window.location.href=\'/?project=pos_iris\'">')
jhtml = jhtml.replace('onclick="window.location.href=\'/?project=pos_iris\'"', 'onclick="window.location.href=\'/?project=pos_iris\'"', 1)
# 2nd card
jhtml = jhtml.replace('<article class="jasa-trust-card" style="cursor:pointer;" onclick="window.location.href=\'/?project=pos_iris\'">', '<article class="jasa-trust-card" style="cursor:pointer;" onclick="window.location.href=\'/?project=optik_iseeyou\'">', 1)
# 3rd card
jhtml = jhtml.replace('<article class="jasa-trust-card" style="cursor:pointer;" onclick="window.location.href=\'/?project=pos_iris\'">', '<article class="jasa-trust-card" style="cursor:pointer;" onclick="window.location.href=\'/?project=food\'">', 1)

with open(jasa_path, "w", encoding="utf-8") as f:
    f.write(jhtml)
print("--- jasa.html updated successfully ---")

# Sync to jasa/index.html
jasa_sub_path = os.path.join(BASE_DIR, "jasa", "index.html")
if os.path.exists(os.path.dirname(jasa_sub_path)):
    with open(jasa_sub_path, "w", encoding="utf-8") as f:
        f.write(jhtml)
    print("--- jasa/index.html synchronized ---")

# ----------------------------------------------------
# 5. Update dokumentasi/index.html & details.html
# ----------------------------------------------------
doc_path = os.path.join(BASE_DIR, "dokumentasi", "index.html")
with open(doc_path, "r", encoding="utf-8") as f:
    dhtml = f.read()

# Remove empty Cisco Packet Tracer card
cisco_card = """          <!-- Cert 8: Cisco Packet Tracer -->
          <article class="cert-card" style="cursor:default;">
            <div class="cert-img-wrap" style="display:flex;align-items:center;justify-content:center;background:var(--surface-hover);">
              <span class="cert-badge">Simulation</span>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--accent);"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div class="cert-body">
              <h3 class="cert-title">Cisco Packet Tracer</h3>
              <p class="cert-issuer">Topologi OSPF, VLAN, &amp; Routing Protocols</p>
            </div>
          </article>"""

dhtml = dhtml.replace(cisco_card, '')

# Remove redundant "Karya Web & Engineering Unggulan" section
karya_pattern = r'<!-- ════ 3\. ENGINEERING & PROJECTS ════ -->\s*<section class="doc-section filterable-item" data-category="projects" id="projects">.*?</section>'
dhtml, karya_cnt = re.subn(karya_pattern, '', dhtml, flags=re.DOTALL)
print(f"Removed redundant Karya Web section from dokumentasi: count={karya_cnt}")

# Remove filter tab for projects
dhtml = re.sub(r'<button class="filter-tab" data-filter="projects">.*?</button>', '', dhtml, flags=re.DOTALL)

with open(doc_path, "w", encoding="utf-8") as f:
    f.write(dhtml)
print("--- dokumentasi/index.html updated successfully ---")

# Sync to details.html
details_path = os.path.join(BASE_DIR, "details.html")
with open(details_path, "w", encoding="utf-8") as f:
    f.write(dhtml)
print("--- details.html synchronized ---")

# ----------------------------------------------------
# 6. Update js/main.js
# ----------------------------------------------------
js_path = os.path.join(BASE_DIR, "js", "main.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_text = f.read()

# Handle URL search param ?project=... to auto-open case study
url_param_snippet = """
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
"""

if "Auto-open case study if ?project=" not in js_text:
    js_text = js_text.replace("document.addEventListener('DOMContentLoaded', () => {", "document.addEventListener('DOMContentLoaded', () => {" + url_param_snippet)
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_text)
    print("Added URL param handler and language switcher logic to main.js")

# Sync to js/main.min.js
min_js_path = os.path.join(BASE_DIR, "js", "main.min.js")
with open(min_js_path, "w", encoding="utf-8") as f:
    f.write(js_text)
print("--- js/main.min.js synchronized ---")

print("ALL BASE REFACTORS EXECUTED!")
