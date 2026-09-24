# Product Requirement Document (PRD)
## Interactive 3D & High-Impact Portfolio Website: Yossika Putra Erlangga

---

## 1. Executive Summary & Project Overview

- **Subject / Profile**: Yossika Putra Erlangga — Mahasiswa S1 Teknik Informatika (Semester 4), Telkom University Purwokerto. Alumni SMK Telkom Purwokerto (TKJ). Focus: Fullstack Web Development, AI/ML Integration, UI/UX Engineering, Network Infrastructure.
- **Primary Domain**: `yossikaputra.my.id`
- **Objective**: Transformasi total dari web statis menjadi **Next-Generation Interactive Portfolio** yang berkarakter *Super Bold, Modern Dark Glassmorphism, Ultra Responsive di Mobile*, memiliki animasi scroll super mulus (setara standar *bagasalfanto.my.id* & *motionsites.ai*), serta fitur unggulan berupa **3D Interactive Profile Avatar/Card** yang bisa diputar (360° rotation / cursor track).
- **Target Audience**: Tech Recruiters, Startup Founders, Klien Freelance (Jasa Pembuatan Web & Integrasi AI), Komunitas Tech / Developer.

---

## 2. Design Intelligence & Style Rules (UI/UX Pro Max Standard)

Berdasarkan framework `ui-ux-pro-max-skill`, website ini menggunakan arsitektur visual:

### 2.1 Aesthetic Archetype: "Futuristic Dark Neo-Brutalism & Kinetic Glass"
- **Style Priority**: High contrast, bold typography, micro-interactions, dark canvas with subtle glowing accents (mesh/aurora gradient backdrop).
- **Color Mood**:
  - `Canvas Dark`: `#090A0F` (Base background)
  - `Surface Elevated`: `#121520` (Card container, opacity 75%, backdrop-filter blur 16px)
  - `Accent Primary`: `#3B82F6` / `#6366F1` (Cyber Blue & Electric Indigo)
  - `Accent Secondary`: `#10B981` (Emerald Green - Status available for hire / active indicator)
  - `Text Hierarchy`: Primary `#F8FAFC`, Muted `#94A3B8`, Subtle `#475569`
  - *Anti-Pattern Prohibition*: Dilarang menggunakan generic AI purple-pink muddy gradients tanpa kontras atau font monoton tanpa balance visual hierarchy.

### 2.2 Typography Architecture
- **Display / Heading**: `Syne` atau `Space Grotesk` (Weight: 700 / 800 Ultra Bold) — memberikan kesan punchy, modern, tech-driven.
- **Body / Interface**: `Inter` atau `Plus Jakarta Sans` (Weight: 400 Regular, 500 Medium, 600 Semi-bold).
- **Code / Metrics / Badges**: `JetBrains Mono` (Weight: 500).

---

## 3. Core Features & Structural Blueprint

### 3.1 Hero Section: "The 3D Centerpiece"
1. **Interactive 3D Face / Profile Model / Holographic 3D Tilt Card**:
   - **Desktop**: 3D model kepala / avatar atau 3D Card berbingkai hologram yang mengikuti posisi kursor (mouse parallax tracking via Three.js / Spline / @react-three/fiber). Bisa di-drag dan di-rotate 360 derajat.
   - **Mobile**: Touch-drag rotation + Device Gyroscope tilt interaction (dengan fallback smooth auto-rotate 60fps).
2. **Bold Branding & Tagline**:
   - Status badge live pulse: `🟢 Open Jasa Pembuatan Website & AI Integration`.
   - Huge Typography: **YOSSIKA PUTRA** dengan masking gradient atau kinetic letter reveal saat initial load.
3. **Value Proposition Chips**:
   - Badges: `Telkom University Purwokerto` · `Ex-TKJ SMK Telkom` · `IPK 3.85 / 4.00`.
4. **Primary CTAs**:
   - Magnetic Buttons: `Explore Projects (Scroll)` | `Hire Me / Jasa Web` | `Lihat CV (Direct PDF / Interactive Modal)`.

### 3.2 Smooth Scroll Experience (Bagas Alfanto + MotionSites.ai Match)
1. **Lenis Smooth Scroll Engine**:
   - Implementasi `@studio-freight/lenis` untuk inersia scroll yang fluid dan zero-stutter.
2. **Scroll-Driven Animation (GSAP ScrollTrigger / Framer Motion)**:
   - **Pinning & Horizontal Scroll Track**: Bagian *Featured Projects* berjalan horizontal saat di-scroll vertikal pada desktop.
   - **Text Stagger & Velocity Marquee**: Running text infinite tech stack (Next.js, TypeScript, Python, Tailwind, PyTorch, Linux/Networking).
   - **Progress Tracker**: Minimalist scroll progress bar di sisi atas/kanan layar.

### 3.3 What I Do & What’s In Here (Capability Showcase)
- **Interactive Bento Grid Layout**:
  - **Card 1: Fullstack Web Craft**: UI/UX engineering + performant front-end (Next.js/React, Tailwind) & back-end logic.
  - **Card 2: AI/ML Application**: Fine-tuning, prompt engineering, generative AI workflows.
  - **Card 3: Networking & Infrastructure**: Warisan fondasi TKJ SMK Telkom (Linux Server, Mikrotik, Cisco, Cloud deployment).
  - **Card 4: Live Stats Counter**: Animated numbers on scroll (6+ Pengalaman, 12+ Sertifikat, 8+ Project Unggulan).

### 3.4 Projects Showcase (High-End Showcase Cards)
- Setiap card project memiliki:
  - Mockup browser / gadget yang interaktif (hover zoom + tilt parallax).
  - Live demo link + GitHub repository link.
  - Badges tech stack berukuran kompak (Lucide icons).
  - Ringkasan impact / metrics nyata dari project tersebut.

### 3.5 Experience & Education Journey
- Clean vertical dynamic timeline (mengadaptasi struktur teruji dari portfolio Bagas Alfanto):
  - Pendidikan: S1 Informatika Telkom University Purwokerto & SMK Telkom Purwokerto.
  - Pengalaman: Asisten Praktikum / Developer Internship / Organisasi.
  - Interactive expand/collapse detail tugas.

### 3.6 Conversion-Focused Footer & Contact
- "Ready to Build Something Bold?" contact form dengan integrasi EmailJS atau Formspree.
- Direct WhatsApp instant chat CTA (floating quick trigger di mobile).
- Social links: GitHub, LinkedIn, Instagram.

---

## 4. Technical Stack & Architecture

- **Framework**: Next.js 14+ (App Router) atau Astro / React + Vite (prioritaskan Static Site Generation / SSG untuk load time < 0.8s).
- **Styling**: Tailwind CSS v3.4+ / v4 dengan custom utility classes.
- **3D & Canvas Rendering**:
  - `Three.js` / `@react-three/fiber` + `@react-three/drei` ATAU `Spline WebGL embed` dengan dynamic lazy loading.
  - Low-power mode fallback: CSS 3D Transform + Parallax tilt (`vanilla-tilt.js` logic) jika browser tidak mendukung WebGL.
- **Animation Suite**:
  - `GSAP` + `ScrollTrigger` ATAU `Framer Motion`.
  - `@studio-freight/lenis` untuk smooth scrolling global.
- **Icons**: `Lucide React` (Strict Anti-Pattern Rule: Jangan gunakan raw emoji untuk elemen UI!).

---

## 5. Mobile-First Optimization & Responsiveness Specs

1. **Breakpoints Matrix**:
   - `xs`: 375px (iPhone SE standard)
   - `sm`: 440px (iPhone 16 Pro Max test benchmark sesuai inspect user)
   - `md`: 768px (Tablet portrait)
   - `lg`: 1024px (Laptop/Tablet landscape)
   - `xl`: 1440px+ (Desktop display)
2. **Mobile UX Refinements**:
   - *No Horizontal Overflow*: Body `overflow-x: hidden` wajib di-enforce.
   - *Touch Target*: Minimum touch target 48x48px untuk semua tombol dan link.
   - *Viewport Height Compliance*: Gunakan `100dvh` (bukan `100vh`) agar tidak terpotong oleh address bar Safari/Chrome mobile.
   - *3D Throttling*: Render resolution 3D model di-downscale ke `1x dpr` pada perangkat mobile untuk menghemat baterai dan menjaga 60 FPS stabil.

---

## 6. Comprehensive SEO & Performance Matrix

### 6.1 Meta Data & OpenGraph Standard
- **Title**: `Yossika Putra Erlangga | Fullstack Web Developer & AI Enthusiast`
- **Description**: `Official portfolio of Yossika Putra Erlangga - Informatics student at Telkom University Purwokerto specializing in high-performance web development, modern UI/UX, and AI integrations.`
- **Canonical**: `https://yossikaputra.my.id/`
- **Keywords**: `Yossika Putra, Yossika Putra Erlangga, Telkom University Purwokerto, Portfolio Web Developer, Fullstack Developer Purwokerto, UI UX Designer`
- **Social Tags**: Open Graph (og:title, og:description, og:image, og:type=website) & Twitter Card (summary_large_image).

### 6.2 Structured Data (Schema.org JSON-LD)
Wajib menyertakan skrip Schema.org tipe `Person` dan `WebSite`:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yossika Putra Erlangga",
  "url": "https://yossikaputra.my.id",
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "SMK Telkom Purwokerto"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Telkom University Purwokerto"
    }
  ],
  "jobTitle": "Fullstack Web Developer",
  "knowsAbout": ["Web Development", "AI Integration", "Networking", "UI/UX Design"]
}
```

### 6.3 Core Web Vitals Target
- **LCP (Largest Contentful Paint)**: < 1.5s
- **FID / INP (Interaction to Next Paint)**: < 100ms
- **CLS (Cumulative Layout Shift)**: 0.00
- **Asset Optimization**: Semua gambar format `.webp` atau `.avif` dengan responsive `sizes` dan `loading="lazy"` kecuali hero assets.

---

## 7. Implementation Checklist for AI Agent (Antigravity)

- [ ] **Step 1**: Inisialisasi struktur layout semantic (`<header>`, `<main>`, `<section id="...">`, `<footer>`).
- [ ] **Step 2**: Pasang font `Syne` & `Plus Jakarta Sans`, setup theme color token Tailwind CSS.
- [ ] **Step 3**: Bangun komponen Hero dengan Canvas 3D (Spline/Three.js) yang responsif dan tidak lag di mobile.
- [ ] **Step 4**: Konfigurasi Lenis Smooth Scroll dan daftarkan GSAP ScrollTrigger timeline.
- [ ] **Step 5**: Susun Bento Grid untuk keahlian (Fullstack, AI, Networking, UI/UX) dengan micro-interactions.
- [ ] **Step 6**: Implementasi Projects Showcase cards dengan hover tilt & preview demo.
- [ ] **Step 7**: Buat Experience & Education section dengan vertical line timeline.
- [ ] **Step 8**: Uji responsivitas pada resolusi 440px (iPhone 16 Pro Max) hingga 1920px.
- [ ] **Step 9**: Injeksi meta tags lengkap, OpenGraph image, favicon, dan JSON-LD Structured Data.