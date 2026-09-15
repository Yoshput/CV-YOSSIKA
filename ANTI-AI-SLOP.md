# ANTI-AI-SLOP & APPLE HIG DESIGN MANIFESTO
> **Standar Desain, Tipografi, Palet Warna & Engineering UI/UX Premium Anti-Generic AI**
> *Berlaku untuk Seluruh Ekosistem Web Yossika Putra (Portfolio, Optik I See You, MUBES HIPMI, dsb.)*

---

## 1. Prinsip Utama: Anti-AI Slop (Bebas Corak Murahan AI)

### ❌ Dilarang Keras (AI Slop Signals):
1. **NO EMOJI SEBAGAI ELEMEN UI**:
   - Dilarang keras menaruh emoji generik (seperti 🚀, 💡, ✨, 🔥, 🎙️, 🤖, 💥, 🎉, 📈, ⏱️, 👥, 🖨️, 📄, 📌, ⏰, 🏛️, 🏢, 🎓) pada header, tombol, badge, tab menu, card, maupun bullet points.
   - Emoji murahan membuat website terlihat seperti proyek demo mainan hasil copy-paste ChatGPT pemula.
   - **Solusi**: Selalu gunakan icon vektor presisi stroke SVG (Lucide / Apple SF Symbols) dengan `stroke-width="1.5"` atau `"1.75"` yang monokromatis dan berkelas.
2. **NO PURPLE/NEON AI GRADIENTS**:
   - Dilarang memakai gradient ungu-biru neon generik (`from-indigo-500 to-purple-600`) yang sering diasosiasikan dengan template startup AI murahan.
3. **NO ROBOTIC / OVERPROMISED COPYWRITING**:
   - Dilarang menggunakan buzzword kosong seperti *"Revolutionize your workflow with next-gen AI-powered cutting-edge synergy"*, *"Delve into the vibrant world"*, *"Beacon of excellence"*.
   - Gunakan copy profesional, ringkas, tegas, dan natural sesuai konteks operasional nyata.
4. **NO BORDERLESS / MESSY CARDS**:
   - Dilarang membuat card putih di atas background abu-abu tanpa depth, border, dan padding yang proporsional.
5. **NO BLURRY / LOW-RESOLUTION ASSETS**:
   - Selalu gunakan aset grafis beresolusi tajam, dioptimasi ke WebP modern dengan decoding asynchronous (`decoding="async"`).

---

## 2. Apple iOS / macOS / visionOS Design DNA

### 📐 Geometri & Radius Apple (Squircle):
- Sudut lengkung lembut khas Apple:
  - `border-radius: 10px` — Micro badge, code block, chip kecil
  - `border-radius: 14px - 16px` — Cards, input controls, tombol utama
  - `border-radius: 20px - 24px` — Container panels, modals, hero showcase
  - `border-radius: 9999px` — Full rounded pills, floating navbars

### 🪟 Translucent Frosted Glass (Liquid Glass):
- Gunakan multi-layer background blur:
  - `background: rgba(15, 23, 42, 0.72);`
  - `backdrop-filter: blur(20px) saturate(180%);`
  - `-webkit-backdrop-filter: blur(20px) saturate(180%);`
  - Border 1px ultra-tipis dengan specular highlight:
    `border: 1px solid rgba(255, 255, 255, 0.09);`
    `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.5);`

### ⚡ Micro-Interactions & Haptic Feel:
- Feedback haptic visual pada setiap elemen interaktif:
  - Default: `transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);`
  - Hover: `transform: translateY(-2px); border-color: var(--accent);`
  - Click / Tap: `active:scale(0.98)` / `transform: scale(0.98);`
- GSAP animations: ScrollTrigger halus, stagger reveal untuk list/grid, number counter ticking, dan zero layout shifts.

### 🔢 Typography Hierarchy:
- Font Display: **Space Grotesk** / **SF Pro Display** (Optical kerning ketat `letter-spacing: -0.03em`).
- Font Body: **Plus Jakarta Sans** / **Inter** (Line-height lega `1.6 - 1.7`).
- Tabular Figures: Wajib memakai `font-variant-numeric: tabular-nums` atau `font-feature-settings: "tnum"` untuk semua angka nominal uang (Rupiah), countdown timer, jam, dan nomor urut agar tidak bergeser saat nilai berubah.

---

## 3. Sistem Palet Warna Resmi per Domain Proyek

### A. Palet Executive Organisasi (MUBES & UKM HIPMI PT)
- **Deep Obsidian / Midnight Navy (Background)**: `#070A12` $\rightarrow$ `#0B1120`
- **Surface Card Glass**: `rgba(17, 24, 39, 0.75)` dengan border `rgba(255, 255, 255, 0.08)`
- **Luxe Royal Gold / Champagne (Signature Accent)**: `#D4AF37` $\rightarrow$ `#F59E0B`
- **Artha Jayana Golden Glow**: `rgba(212, 175, 55, 0.25)`
- **Titanium White (Primary Text)**: `#F8FAFC`
- **Subtle Slate (Secondary Text)**: `#94A3B8` & `#64748B`

### B. Palet Healthcare & Retail (Optik I See You — IRIS)
- **Ivory Warm Base (Light)**: `#FDFBF7`
- **Primary Deep Emerald**: `#064E3B` & `#047857`
- **Surface Elevation**: `bg-white/85 backdrop-blur-xl border border-black/[0.05]`
- **Text**: Slate-900 (`#0F172A`) & Slate-500 (`#64748B`)

### C. Palet Personal Engineering Portfolio (yossikaputra.my.id)
- **Dark Space Canvas**: `#090A0F` & `#11131A`
- **Indigo Lavender Accent**: `#A5B4FC`
- **Tech Highlights**: Cyan (`#38BDF8`), Emerald Mint (`#34D399`), Amber (`#FBBF24`)

---

## 4. Checklist Wajib Sebelum Rilis (Quality Assurance)

- [ ] **Bebas Emoji 100%**: Tidak ada satu pun emoji generik di tombol, card, heading, list, ataupun badge.
- [ ] **Icon Vektor Presisi**: Semua icon menggunakan SVG stroke berkualitas tinggi dengan ukuran proporsional (14px – 20px).
- [ ] **Liquid Glass Apple Feel**: Terdapat frosted glass blur, border ultra-halus, dan specular lighting.
- [ ] **Responsif Maksimal**: Uji di resolusi iPhone (375px / 430px), Android, tablet iPad, hingga layar lebar MacBook/Desktop tanpa horizontal overflow.
- [ ] **Tabular Numbers**: Nominal RAB, countdown timer, dan jam terformat rapi dengan `tabular-nums`.
- [ ] **Animasi GSAP Ringan**: Smooth 60fps tanpa memory leaks atau lag saat scrolling.
- [ ] **Aset Brand Asli**: Logo resmi HIPMI dan Kabinet Artha Jayana terpasang jernih dan berwibawa.
