/**
 * Yossika Portfolio — Projects & Documentation Dataset
 * Fully bilingual (en/id) with clean WebP asset paths.
 */

const PROJECTS_DATA = {
  optik_iseeyou: {
    id: "optik_iseeyou",
    status: "in_progress",
    statusBadge: {
      en: "🚧 In Progress / Ongoing Development",
      id: "🚧 Sedang Dikembangkan / Active Development"
    },
    title: "Optik I See You — AR Try-On & Optical Store Website",
    role: "Lead Fullstack & Web AI Developer",
    year: "2026",
    category: "development",
    tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Three.js", "MediaPipe Vision", "Cloudflare R2"],
    techClasses: ["pill-green", "pill-blue", "pill-purple", "pill-cyan", "pill-amber", "pill-pink", "pill-blue"],
    tagline: {
      en: "Full website for local optical store — real-time AR glasses try-on, frame & contact lens catalog, eye exam booking, and AI photobooth.",
      id: "Full website untuk optik lokal — AR glasses try-on real-time, katalog frame & softlens, booking cek mata, dan booth photobooth AI."
    },
    desc: {
      en: "Optik I See You (optikiseeyou.com) is an enterprise web platform built for a premier optical store brand with branches across Purwokerto, Purbalingga, Wonosobo, and Cilacap. It features a cutting-edge browser-based AR Virtual Try-On system powered by Google MediaPipe Face Mesh AI tracking and Three.js 3D rendering, allowing customers to test dozens of frames accurately auto-fitted to their face shape directly from any browser without installing native apps. The platform also includes an interactive AI photobooth with printable frame layouts and QR code download, a rich catalog for frames and contact lenses, seamless booking for free eye exams routing directly to each branch's WhatsApp customer service, and granular local SEO with schema markup.",
      id: "Optik I See You (optikiseeyou.com) adalah platform web resmi untuk jaringan optik modern di Purwokerto, Purbalingga, Wonosobo, dan Cilacap. Menghadirkan fitur unggulan AR Virtual Try-On real-time berbasis browser dengan AI Google MediaPipe Face Mesh dan Three.js 3D rendering, sehingga pengunjung dapat mencoba kacamata secara presisi sesuai bentuk wajah tanpa perlu instalasi aplikasi tambahan. Platform ini juga dilengkapi fitur Photobooth AI interaktif dengan unduh foto via QR Code, katalog frame & softlens lengkap, integrasi booking periksa mata gratis via CS WhatsApp cabang, serta optimasi local SEO berbasis cabang."
    },
    features: {
      en: [
        "Real-Time AR Virtual Glasses Try-On powered by MediaPipe AI face tracking & Three.js",
        "Interactive Photobooth with personalized frames, seasonal layouts, and instant QR scan & download",
        "Comprehensive Frame & Softlens Catalog with categorization, specs, and search",
        "Automated Free Eye Exam Booking routing to WhatsApp Customer Service for 4 branch locations",
        "Branch Locator with Google Maps integration and localized opening hours",
        "Optimized on Next.js 15 App Router with Cloudflare R2 assets for ultra-low latency"
      ],
      id: [
        "AR Try-On Kacamata Real-time ditenagai AI MediaPipe Face Mesh & rendering Three.js",
        "Photobooth Interaktif dengan pilihan frame custom, tata letak cetak, dan download QR Code",
        "Katalog Frame & Softlens Lengkap dengan filter kategori dan rincian produk",
        "Booking Antrean Cek Mata Gratis otomatis terhubung ke WhatsApp CS 4 cabang",
        "Peta Lokasi Cabang terintegrasi Google Maps untuk Purwokerto, Purbalingga, Wonosobo, dan Cilacap",
        "Dibangun dengan arsitektur Next.js 15 App Router & Cloudflare R2 untuk performa super kencang"
      ]
    },
    images: [
      "assets/img/project-web/optik-iseeyou/optik-iseeyou-landing.webp",
      "assets/img/project-web/optik-iseeyou/optik-iseeyou-katalog.webp",
      "assets/img/project-web/optik-iseeyou/optik-iseeyou-try-on.webp",
      "assets/img/project-web/optik-iseeyou/optik-iseeyou-photobooth.webp",
      "assets/img/project-web/optik-iseeyou/optik-iseeyou-tryon-photobooth.webp"
    ],
    video: "assets/img/project-web/optik-iseeyou/optik-iseeyou-demo.mp4",
    previewWebp: "assets/img/project-web/optik-iseeyou/optik-iseeyou-preview.webp",
    imageCaptions: {
      en: [
        "Landing Page & Branch Locator for 4 retail optical stores",
        "Eyewear & Contact Lens Product Catalogue with filtering",
        "Live Browser-based AR Virtual Glasses Try-On with MediaPipe AI",
        "AI Photobooth with personalized frame borders & instant QR download",
        "Combined AR Try-On & Photobooth interactive experience"
      ],
      id: [
        "Halaman Muka & Lokasi 4 Cabang Toko Optik",
        "Katalog Produk Kacamata & Softlens Lengkap dengan filter",
        "Fitur AR Virtual Try-On Kacamata Real-time berbasis AI MediaPipe",
        "Photobooth AI dengan bingkai tematik dan unduh instan via QR Code",
        "Integrasi Try-On dan Photobooth dalam satu alur interaktif"
      ]
    },
    actions: [
      { text: "Live Website ↗", link: "https://optikiseeyou.com", primary: true },
      { text: "AR Try-On 🕶️", link: "https://optikiseeyou.com/photobooth?mode=ar", primary: false }
    ]
  },

  gesture: {
    id: "gesture",
    status: "featured",
    statusBadge: {
      en: "⭐ Featured",
      id: "⭐ Unggulan"
    },
    title: "GestureFlow v3.0 — AI Sign Language Learning",
    role: "AI / Web Developer",
    year: "2026",
    category: "development",
    tech: ["MediaPipe Hands", "JavaScript", "CSS Glassmorphism", "AI/ML", "Webcam Vision"],
    techClasses: ["pill-blue", "pill-purple", "pill-pink", "pill-cyan", "pill-amber"],
    tagline: {
      en: "Real-time AI web app for Indonesian Sign Language (SIBI) detection and gamified quiz directly in the browser.",
      id: "Web app AI real-time untuk belajar Bahasa Isyarat (SIBI) dengan deteksi kamera browser dan kuis interaktif."
    },
    desc: {
      en: "GestureFlow v3.0 is an AI-powered web application designed to help users learn Indonesian Sign Language (SIBI) interactively in real time directly from their web browser. Utilizing Google's MediaPipe Hands machine learning model, it detects 21 3D hand landmarks via webcam with sub-50ms latency.",
      id: "GestureFlow v3.0 adalah aplikasi web berbasis Artificial Intelligence (AI) yang dirancang untuk membantu pengguna belajar Bahasa Isyarat Indonesia (SIBI) secara interaktif dan real-time langsung dari browser tanpa perlu menginstal aplikasi tambahan. Memanfaatkan Google MediaPipe Hands untuk mendeteksi 21 koordinat sendi tangan."
    },
    features: {
      en: [
        "Real-time A-Z hand gesture recognition via browser webcam",
        "Gamified learning quiz mode with dynamic scoring",
        "Interactive photobooth to capture and record gesture achievements",
        "Sentence builder to assemble recognized gestures into full words",
        "Text-to-speech audio feedback for seamless learning accessibility"
      ],
      id: [
        "Deteksi Alphabet A-Z Bahasa Isyarat real-time via webcam browser",
        "Mode Kuis Gamifikasi interaktif dengan kalkulasi skor otomatis",
        "Fitur Photobooth untuk mendokumentasikan gerakan isyarat pengguna",
        "Sentence Builder untuk merangkai gestur menjadi kalimat lengkap",
        "Integrasi Text-to-Speech untuk membacakan hasil terjemahan isyarat"
      ]
    },
    video: "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-demo.mp4",
    previewWebp: "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-preview.webp",
    images: [
      "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-landing-page.webp",
      "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-home-page.webp",
      "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-a-z.webp",
      "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-game-quiz.webp",
      "assets/img/project-web/Gesture-Isyarat/gesture-isyarat-photobooth.webp",
      "assets/img/project-web/Gesture-Isyarat/testing-alphabet-b.webp"
    ],
    imageCaptions: {
      en: [
        "Interactive Landing Page showcasing AI hand tracking architecture",
        "Learning Dashboard with progress tracker & module navigation",
        "Real-time A-Z Gesture Recognition with 21 3D hand landmarks",
        "Gamified Interactive Quiz Mode with dynamic scoring & feedback",
        "Celebratory Photobooth to capture gesture milestones",
        "Realtime Testing & Validation on Alphabet 'B' hand landmark accuracy"
      ],
      id: [
        "Landing Page Interaktif menampilkan arsitektur pelacakan tangan AI",
        "Dashboard Pembelajaran dengan pelacak progress dan navigasi modul",
        "Deteksi Alphabet A-Z Real-time dengan 21 koordinat 3D sendi tangan",
        "Mode Kuis Gamifikasi Interaktif dengan evaluasi dan skor dinamis",
        "Photobooth Interaktif untuk merekam pencapaian belajar gestur",
        "Pengujian dan Validasi Realtime akurasi gestur huruf 'B'"
      ]
    },
    actions: [
      { text: "Live Demo ↗", link: "https://gesture-landing.vercel.app/landing.html", primary: true },
      { text: "GitHub ↗", link: "https://github.com/yoshput", primary: false }
    ]
  },

  food: {
    id: "food",
    status: "completed",
    title: "Food-TYU — Tel-U Digital Canteen System",
    role: "Fullstack Developer",
    year: "2025",
    category: "development",
    tech: ["Laravel", "Midtrans Payment", "MySQL", "TailwindCSS"],
    techClasses: ["pill-green", "pill-amber", "pill-blue", "pill-purple"],
    tagline: {
      en: "Campus e-canteen platform featuring automated food ordering, Midtrans QRIS/E-Wallet payments, and vendor analytics.",
      id: "Sistem pemesanan makanan digital kantin kampus dengan pembayaran cashless Midtrans & TyU-Pay serta analitik vendor."
    },
    desc: {
      en: "Food-TYU is a comprehensive digital canteen management system built for Telkom University Purwokerto. Designed to eliminate long queue times during lunch hours, it provides students and faculty with seamless pre-ordering and multi-channel cashless payments.",
      id: "Food-TYU adalah sistem pemesanan makanan digital (e-canteen) untuk Telkom University Purwokerto. Menghilangkan antrean panjang saat jam istirahat serta menyediakan opsi transaksi non-tunai yang aman dan transparan."
    },
    features: {
      en: [
        "Food-TYU AI Assistant: Intelligent conversational bot recommending campus meals based on mood & budget",
        "Multi-stall Canteen Directory (Kantin Barokah, Kantin Segar, Kantin Nusantara)",
        "Interactive Food Catalog with real-time ratings, pricing, and fast add-to-cart",
        "Midtrans Payment Gateway integration (QRIS, GoPay, ShopeePay, Bank Virtual Accounts)",
        "TyU-Pay internal student virtual wallet and voucher discounts",
        "Campus Location map & operational schedule for Tel-U Purwokerto community"
      ],
      id: [
        "Food-TYU AI Assistant: Asisten pintar rekomendasi menu kantin kampus berbasis mood dan budget",
        "Direktori Kantin Multi-Stand (Kantin Barokah, Kantin Segar, Kantin Nusantara)",
        "Katalog Menu Interaktif dengan rating kepuasan, harga transparan, dan keranjang belanja cepat",
        "Integrasi Midtrans Payment Gateway untuk pembayaran digital (QRIS & E-Wallet)",
        "TyU-Pay Virtual Wallet & sistem diskon voucher khusus civitas akademika",
        "Peta Lokasi Kampus Tel-U Purwokerto dan jam operasional kantin"
      ]
    },
    images: [
      "assets/img/project-web/Food-TYU/food-tyu-dashboard-overview.webp",
      "assets/img/project-web/Food-TYU/food-tyu-ai-assistant.webp",
      "assets/img/project-web/Food-TYU/food-tyu-daftar-kantin.webp",
      "assets/img/project-web/Food-TYU/food-tyu-menu-kantin.webp",
      "assets/img/project-web/Food-TYU/food-tyu-lokasi-kampus.webp",
      "assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-landing.webp",
      "assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-home.webp",
      "assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-form-daftar.webp",
      "assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-midtrans.webp",
      "assets/img/project-web/Food-TYU/food-tyu-web-pemesanan-makanan-midtrans-metode.webp"
    ],
    video: "assets/img/project-web/Food-TYU/food-tyu-demo.mp4",
    previewWebp: "assets/img/project-web/Food-TYU/food-tyu-preview.webp",
    imageCaptions: {
      en: [
        "Student Dashboard Overview: Personalized greeting, active orders, and TyU-Pay balance status",
        "Food-TYU AI Assistant: Interactive conversational culinary bot assisting meal choices & queries",
        "Campus Canteen Directory: Vendor stalls overview with customer ratings and operating statuses",
        "Interactive Menu Grid: Bakso Malang, Soto Ayam, Chicken Katsu with instant ordering controls",
        "Campus Location & Hours: Direct Google Maps navigation to Tel-U Purwokerto dining hub",
        "Landing Page: Direct ordering CTA and digital cashless showcase",
        "Home Menu Catalog: Live vendor stalls, food categories, and search filters",
        "Registration & Checkout: Form to customize meal orders & pickup timing",
        "Midtrans Payment Interface: Seamless QRIS & multi-bank virtual accounts",
        "Payment Methods Selection: E-Wallet (GoPay, ShopeePay) & TyU-Pay Wallet"
      ],
      id: [
        "Dashboard Mahasiswa: Sapaan personal, monitoring pesanan aktif, dan status saldo TyU-Pay",
        "Food-TYU AI Assistant: Asisten kuliner pintar interaktif untuk rekomendasi makanan harian",
        "Daftar Kantin Kampus: Profil stand mitra kantin (Barokah, Segar, Nusantara) dengan rating",
        "Katalog Menu Kantin: Pilihan Bakso Malang, Soto Ayam, Ayam Katsu dengan tombol beli cepat",
        "Peta Lokasi & Jam Operasional: Navigasi Google Maps langsung ke area kantin Tel-U Purwokerto",
        "Landing Page: Halaman muka dengan ajakan pesan digital tanpa antre",
        "Katalog Menu Kantin: Daftar stand kantin, kategori makanan, dan fitur pencarian",
        "Pendaftaran & Checkout: Formulir pesanan dan jadwal pengambilan makanan",
        "Antarmuka Pembayaran Midtrans: Integrasi QRIS dan Virtual Account Bank",
        "Pilihan Metode Pembayaran: E-Wallet (GoPay, ShopeePay) & Saldo TyU-Pay"
      ]
    },
    actions: [
      { text: "GitHub ↗", link: "https://github.com/yoshput", primary: true }
    ]
  },

  macabae: {
    id: "macabae",
    status: "completed",
    title: "MacaBae — AI Smart Digital Library",
    role: "Backend & AI Specialist",
    year: "2025",
    category: "development",
    tech: ["Laravel", "Google Gemini API", "MySQL", "PHPUnit (DUPL)"],
    techClasses: ["pill-pink", "pill-purple", "pill-blue", "pill-green"],
    tagline: {
      en: "Digital library system empowered by MacaBot (Google Gemini AI) for contextual literary recommendations and catalog search.",
      id: "Sistem perpustakaan digital terintegrasi asisten AI MacaBot (Gemini API) untuk kurasi buku dan peminjaman otomatis."
    },
    desc: {
      en: "MacaBae is a robust Laravel digital library platform equipped with MacaBot, an AI librarian powered by Google Gemini API that offers personalized book recommendations and answers user literature queries.",
      id: "MacaBae adalah sistem perpustakaan digital berbasis Laravel yang diperkuat MacaBot, asisten virtual cerdas terintegrasi Google Gemini API untuk rekomendasi buku personal dan automasi sirkulasi pinjam-kembali."
    },
    features: {
      en: [
        "MacaBot AI: Intelligent assistant for book summaries and personalized curation",
        "Automated borrowing, return tracking, and late fee calculations",
        "Comprehensive student and administrative library dashboards",
        "Validated with 71 automated PHPUnit test cases for bulletproof stability"
      ],
      id: [
        "MacaBot AI: Asisten cerdas pustakawan terintegrasi Google Gemini API",
        "Sirkulasi peminjaman, pelacakan masa pinjam, dan hitung denda otomatis",
        "Dashboard Pengguna & Admin untuk monitoring inventaris buku",
        "Tervalidasi dengan 71 automated test cases (DUPL PHPUnit) tanpa kegagalan"
      ]
    },
    images: [
      "assets/img/project-web/maca-bae/macabae-landing-page.webp",
      "assets/img/project-web/maca-bae/macabae-home.webp",
      "assets/img/project-web/maca-bae/macabae-login.webp",
      "assets/img/project-web/maca-bae/macabae-signup.webp",
      "assets/img/project-web/maca-bae/dokumentasi-web.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae02.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae03.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae04.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae05.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae06.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae07.webp",
      "assets/img/project-web/maca-bae/dokumentasi-macabae08.webp"
    ],
    imageCaptions: {
      en: [
        "Landing Page: Digital library portal with easy online access",
        "Home Catalog: Curated categories, trending literature, and eBook reader",
        "Authentication: Secure student login gateway",
        "Student Registration: Onboarding form with university validation",
        "System Architecture: Overview documentation of web services",
        "Test Validation 02: Book reservation and availability checks",
        "Test Validation 03: MacaBot Gemini AI conversational endpoint tests",
        "Test Validation 04: Circulation borrowing lifecycle verification",
        "Test Validation 05: Penalty and due date automatic calculator test",
        "Test Validation 06: Student loan history and fine clearance flow",
        "Test Validation 07: Administrative catalog management test",
        "Test Validation 08: Full 71 PHPUnit automated test suite passing"
      ],
      id: [
        "Landing Page: Portal perpustakaan digital dengan kemudahan akses online",
        "Katalog Buku Utama: Pilihan kategori, buku populer, dan pembaca eBook",
        "Autentikasi: Portal login mahasiswa yang aman",
        "Registrasi Mahasiswa: Formulir pendaftaran akun perpustakaan",
        "Dokumentasi Sistem: Ringkasan arsitektur platform web",
        "Dokumentasi Pengujian 02: Peminjaman dan pengecekan stok buku",
        "Dokumentasi Pengujian 03: Integrasi chatbot MacaBot Gemini AI",
        "Dokumentasi Pengujian 04: Verifikasi siklus peminjaman buku",
        "Dokumentasi Pengujian 05: Perhitungan denda dan masa tenggang otomatis",
        "Dokumentasi Pengujian 06: Riwayat transaksi peminjaman mahasiswa",
        "Dokumentasi Pengujian 07: Manajemen katalog buku oleh staf admin",
        "Dokumentasi Pengujian 08: Hasil uji 71 test cases PHPUnit lolos 100%"
      ]
    },
    actions: [
      { text: "GitHub ↗", link: "https://github.com/yoshput", primary: true }
    ]
  },

  ngertiindia: {
    id: "ngertiindia",
    status: "completed",
    title: "Ngertiin Dia — Self-Care & Couple Sync",
    role: "Lead Fullstack Dev",
    year: "2024",
    category: "development",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Gemini 2.5 Flash", "PWA"],
    techClasses: ["pill-pink", "pill-cyan", "pill-purple", "pill-blue"],
    tagline: {
      en: "Personal emotional wellness and couple synchronization app with Gemini 2.5 AI empathetic assistant.",
      id: "Aplikasi self-care dan sinkronisasi komunikasi pasangan dengan asisten AI empati berbasis Gemini Flash."
    },
    desc: {
      en: "Ngertiin Dia is an empathetic digital self-care companion and couple synchronization app built on Next.js 14 App Router, utilizing Google Gemini 2.5 Flash AI to give tailored, empathetic feedback based on mood check-ins.",
      id: "Ngertiin Dia adalah aplikasi interaktif untuk merawat kesehatan mental pribadi dan menyelaraskan komunikasi pasangan, ditenagai Gemini 2.5 Flash AI untuk merespons mood harian secara empatik."
    },
    features: {
      en: [
        "Daily Mood Tracker with emotional progress analytics",
        "Time Capsule Letter to seal future messages for partners",
        "Daily wellness checklist with circular progress rings",
        "Full offline support via Progressive Web App (PWA)"
      ],
      id: [
        "Daily Check-in & Mood Tracker dengan progress harian",
        "Time Capsule Letter untuk menulis surat harapan masa depan",
        "Target Checklist harian (air, vitamin, skincare, journaling)",
        "PWA Offline-Ready yang dapat diakses tanpa jaringan internet"
      ]
    },
    images: [
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-landing.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-mood-tracker.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-daily-checkin.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-ai-assistant.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-couple-sync.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-progress-ring.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-target-checklist.webp",
      "assets/img/project-web/ngertiin-dia/ngertiin-dia-time-capsule.webp"
    ],
    video: "assets/img/project-web/ngertiin-dia/ngertiin-dia-demo.mp4",
    previewWebp: "assets/img/project-web/ngertiin-dia/ngertiin-dia-preview.webp",
    imageCaptions: {
      en: [
        "Landing Interface: Welcoming, heartwarming design with smooth micro-interactions",
        "Mood Tracker: Dynamic emotional logging with contextual mood insights",
        "Daily Check-in: Guided morning and evening self-care questions",
        "Gemini AI Assistant: Empathetic, supportive conversational counseling",
        "Couple Sync Dashboard: Mutual relationship timeline and shared goals",
        "Progress Ring Visualization: Circular habit and emotional wellness indicators",
        "Daily Target Checklist: Water intake, mindfulness, and journaling targets",
        "Time Capsule Letters: Scheduled future messages unlocked on special dates"
      ],
      id: [
        "Tampilan Landing: Desain hangat dan ramah pengguna dengan mikro-interaksi",
        "Mood Tracker: Pencatatan emosi harian dengan wawasan suasana hati",
        "Daily Check-in: Pertanyaan refleksi diri pagi dan malam hari",
        "Asisten AI Gemini: Konseling ramah dan suportif berbasis AI",
        "Couple Sync Dashboard: Sinkronisasi target hubungan dan catatan bersama",
        "Progress Ring: Indikator pencapaian kebiasaan baik harian",
        "Target Checklist: Target minum air, meditasi, dan journaling harian",
        "Time Capsule: Surat masa depan yang terkunci hingga tanggal tertentu"
      ]
    },
    actions: [
      { text: "Live Demo ↗", link: "https://ngertiin-dia.vercel.app/", primary: true },
      { text: "GitHub ↗", link: "https://github.com/Yoshput/sayang-app", primary: false }
    ]
  },

  gymplanner: {
    id: "gymplanner",
    status: "completed",
    title: "Gym Planner — Offline-First Workout PWA",
    role: "PWA Developer",
    year: "2024",
    category: "development",
    tech: ["JavaScript", "PWA", "Supabase", "LocalStorage", "TDEE Engine"],
    techClasses: ["pill-blue", "pill-green", "pill-amber", "pill-cyan"],
    tagline: {
      en: "Progressive Web App tailored for custom 7-day workout splits, TDEE calculator, and zero-ad offline tracking.",
      id: "Aplikasi PWA perencana latihan 7 hari dengan kalkulator TDEE otomatis, target nutrisi, dan mode offline penuh."
    },
    desc: {
      en: "Gym Planner is a privacy-first, zero-clutter PWA that generates bespoke 7-day workout routines based on the user's fitness goals, complete with automated macronutrient calculation and offline local storage.",
      id: "Gym Planner adalah Progressive Web App perencana latihan yang menyusun program 7 hari sesuai target fisik pengguna tanpa iklan dan sepenuhnya privat, dilengkapi kalkulator TDEE pintar dan mode offline."
    },
    features: {
      en: [
        "7-Day custom workout splits tailored to training experience",
        "Automated TDEE & BMI calculator with macro targets",
        "Offline-first PWA caching for use in gyms without cell reception",
        "Daily consistency checklist with recovery scoring"
      ],
      id: [
        "Program latihan mingguan 7-Day Split sesuai level kebugaran",
        "Kalkulator TDEE & BMI otomatis untuk estimasi kebutuhan kalori",
        "Mode PWA Offline penuh tanpa kendala sinyal di tempat gym",
        "Daily Checklist konsistensi harian dengan pemulihan fisik"
      ]
    },
    images: [
      "assets/img/project-web/gym-planner/gym-planner-landing.webp",
      "assets/img/project-web/gym-planner/gym-planner-home-dashboard.webp",
      "assets/img/project-web/gym-planner/gym-planner-workout-split.webp",
      "assets/img/project-web/gym-planner/gym-planner-exercise-list.webp",
      "assets/img/project-web/gym-planner/gym-planner-daily-checklist.webp",
      "assets/img/project-web/gym-planner/gym-planner-nutrition-target.webp",
      "assets/img/project-web/gym-planner/gym-planner-stats-overview.webp",
      "assets/img/project-web/gym-planner/gym-planner-tdee-calculator.webp",
      "assets/img/project-web/gym-planner/gym-planner-mobile-view1.webp",
      "assets/img/project-web/gym-planner/gym-planner-mobile-view2.webp",
      "assets/img/project-web/gym-planner/gym-planner-mobile-view3.webp",
      "assets/img/project-web/gym-planner/gym-planner-progress-ring.webp",
      "assets/img/project-web/gym-planner/gym-planner-pwa-install.webp",
      "assets/img/project-web/gym-planner/gym-planner-offline-mode.webp",
      "assets/img/project-web/gym-planner/gym-planner-week-schedule.webp",
      "assets/img/project-web/gym-planner/gym-planner-settings.webp"
    ],
    video: "assets/img/project-web/gym-planner/gym-planner-demo.mp4",
    previewWebp: "assets/img/project-web/gym-planner/gym-planner-preview.webp",
    imageCaptions: {
      en: [
        "Landing Interface: Fast, no-nonsense workout split generator",
        "Home Dashboard: Today's scheduled muscle groups & completed sets",
        "Workout Split Configurator: Push-Pull-Legs, Upper-Lower, and Arnold splits",
        "Exercise Library: Muscle diagrams and form guidance",
        "Daily Workout Checklist: Live reps and load tracking",
        "Nutrition & Macro Target: Automated protein, carbs, and fat breakdown",
        "Stats Overview: Weekly volume and progression graphs",
        "TDEE & Calorie Engine: Precise basal metabolic rate calculation",
        "Mobile View 1: Compact phone layout in gym environment",
        "Mobile View 2: Exercise set tracker with resting timer",
        "Mobile View 3: Post-workout summary and muscle recovery score",
        "Circular Recovery Rings: Visualization of muscle rest status",
        "PWA Installation Prompt: 1-click install as native mobile application",
        "Offline-First Operation: Operates flawlessly in basement gyms without cellular data",
        "7-Day Weekly Schedule: Calendar view of training and rest days",
        "Custom Settings: Units, body measurements, and backup export"
      ],
      id: [
        "Landing Page: Generator jadwal latihan praktis dan cepat",
        "Dashboard Utama: Rencana latihan hari ini dan target set yang telah selesai",
        "Konfigurasi Program: Pilihan split Push-Pull-Legs, Upper-Lower, atau Full Body",
        "Katalog Latihan: Ilustrasi otot target dan panduan gerakan",
        "Checklist Harian: Pelacakan repetisi dan beban latihan secara live",
        "Target Nutrisi & Makro: Hitungan kebutuhan protein, karbohidrat, dan lemak",
        "Ringkasan Statistik: Grafik volume latihan dan perkembangan mingguan",
        "Kalkulator TDEE & Kalori: Estimasi akurat kalori pemeliharaan dan defisit/surplus",
        "Mobile Tampilan 1: Layout responsif ramah genggaman satu tangan di gym",
        "Mobile Tampilan 2: Input set latihan disertai timer waktu istirahat",
        "Mobile Tampilan 3: Rekap sesi latihan dan skor pemulihan tubuh",
        "Progress Ring Pemulihan: Status istirahat otot sebelum dilatih kembali",
        "PWA Install Prompt: Instalasi langsung ke homescreen tanpa app store",
        "Mode Offline Penuh: Tetap lancar digunakan di tempat gym tanpa koneksi internet",
        "Jadwal Mingguan 7 Hari: Kalender hari latihan dan hari istirahat",
        "Pengaturan: Kustomisasi satuan beban, ukuran tubuh, dan ekspor data"
      ]
    },
    actions: [
      { text: "Live Demo ↗", link: "https://gym-planner-beta.vercel.app", primary: true },
      { text: "GitHub ↗", link: "https://github.com/Yoshput/GYM-PLANNER", primary: false }
    ]
  },

  thrift: {
    id: "thrift",
    status: "completed",
    title: "Thrift Space — Mobile UI/UX Design",
    role: "UI/UX Designer",
    year: "2024",
    category: "uiux",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Interactive Prototype"],
    techClasses: ["pill-amber", "pill-cyan", "pill-purple", "pill-pink"],
    tagline: {
      en: "Modern mobile e-commerce interface design and interactive prototype for curated pre-loved fashion.",
      id: "Desain antarmuka mobile e-commerce dan prototype interaktif Figma untuk thrift fashion berkualitas."
    },
    desc: {
      en: "Thrift Space is an intuitive mobile app UI/UX design crafted in Figma for the second-hand fashion marketplace, emphasizing clean product discovery, transparency in item condition, and smooth checkout.",
      id: "Thrift Space adalah perancangan antarmuka mobile UI/UX pada Figma untuk platform jual beli pakaian pre-loved berkualitas, mengedepankan navigasi belanja yang intuitif dan visual estetik."
    },
    features: {
      en: [
        "Interactive Onboarding Flow: Communicates sustainable fashion and value proposition",
        "Smart Feed & Category Discovery: Banner highlights, recent stock grid, and brand search",
        "Comprehensive Product Detail: Authentic item condition grading, sizing picker, and buyer ratings",
        "Multi-seller Cart & Fast Checkout: Quantity stepper, voucher redemption, and payment options",
        "Figma Design System: Auto-layout components, typography scales, and interactive prototype"
      ],
      id: [
        "Alur Onboarding Interaktif: Edukasi konsep sustainable pre-loved fashion berkualitas",
        "Eksplorasi Beranda & Kategori: Banner promo, katalog recent stock, dan pencarian brand",
        "Detail Produk Komprehensif: Grading kondisi barang, seleksi ukuran, dan ulasan pembeli",
        "Keranjang Multi-Toko & Checkout Cepat: Pengaturan kuantitas, klaim voucher, dan ragam pembayaran",
        "Sistem Desain Figma: Komponen auto-layout, panduan tipografi, dan prototype interaktif"
      ]
    },
    previewWebp: "assets/img/project-web/thrift-space/thrift-space-preview.webp",
    images: [
      "assets/img/project-web/thrift-space/thrift-space-cover.webp",
      "assets/img/project-web/thrift-space/thrift-space-onboarding.webp",
      "assets/img/project-web/thrift-space/thrift-space-home.webp",
      "assets/img/project-web/thrift-space/thrift-space-detail.webp",
      "assets/img/project-web/thrift-space/thrift-space-cart.webp",
      "assets/img/project-web/thrift-space/thrift-space-checkout.webp",
      "assets/img/project-web/thrift-space/thrift-space-riwayat-pesanan.webp",
      "assets/img/project-web/thrift-space/thrift-space-figma.webp"
    ],
    imageCaptions: {
      en: [
        "Showcase Overview: Multi-device high-fidelity mobile design system in Dark Mode",
        "Onboarding Flow: Value proposition highlighting affordable sustainable fashion",
        "Home Feed: Greeting, personalized search, promo banner, and recent stock items",
        "Product Detail Screen: High-resolution product images, sizing options, customer ratings, and CTA",
        "Shopping Cart Screen: Multi-seller item selection, quantity counter, and total price summary",
        "Payment & Checkout: Delivery address, voucher discounts, multi-channel payment (VA, QRIS, E-Wallet)",
        "Order History (Riwayat Pesanan): Real-time payment tracking, product thumbnails, and instant payment CTA",
        "Figma Design System: Complete wireframes, auto-layout variants, and design tokens"
      ],
      id: [
        "Showcase Desain: Sistem antarmuka mobile multi-device bertema dark mode yang estetik",
        "Alur Onboarding: Halaman awal berburu fashion branded terjangkau dan ramah lingkungan",
        "Halaman Beranda: Sapaan pengguna, pencarian pintar, banner koleksi, dan stok produk terkini",
        "Detail Produk: Tampilan foto produk jernih, pilihan ukuran, rating pembeli, dan tombol beli",
        "Keranjang Belanja: Manajemen pesanan multi-toko, jumlah item, dan kalkulasi subtotal",
        "Detail Pembayaran: Alamat pengiriman, voucher promo, dan multi-channel payment (VA, QRIS, E-Wallet)",
        "Riwayat Pesanan: Pelacakan pembayaran real-time, thumbnail produk, dan tombol Bayar Sekarang",
        "Sistem Desain Figma: Struktur wireframe lengkap, varian auto-layout, dan token desain"
      ]
    },
    actions: [
      { text: "Figma Prototype ↗", link: "https://www.figma.com", primary: true }
    ]
  },

  gunung: {
    id: "gunung",
    status: "completed",
    title: "Gunung — Retro Polaroid Adventure Poster",
    role: "Graphic Designer",
    year: "2023",
    category: "graphic",
    tech: ["Poster Design", "Adobe Illustrator", "Retro Collage", "Typography"],
    techClasses: ["pill-amber", "pill-green", "pill-purple", "pill-blue"],
    tagline: {
      en: "Retro Polaroid outdoor adventure poster combining vintage serif typography with asymmetric photo grid.",
      id: "Poster petualangan alam bebas bernuansa retro Polaroid dengan tipografi serif berkarakter dan grid asimetris."
    },
    desc: {
      en: "A curated poster design celebrating wilderness and mountaineering, blending tactile Polaroid framing, earthy tones, and bold editorial typography.",
      id: "Karya desain poster petualangan alam dengan konsep kolase Polaroid retro yang memadukan tipografi serif berkarakter 'GUNUNG' dengan tata letak dinamis foto-foto pendakian."
    },
    features: {
      en: [
        "Custom Polaroid frame styling with subtle 3D paper drop shadows",
        "Curated palette (Slate Blue, Forest Green, Amber Gold, Rust)",
        "Dynamic asymmetric grid layout"
      ],
      id: [
        "Gaya kolase Polaroid dengan bayangan halus efek 3D kertas nyata",
        "Palet warna kurasi (Slate Blue, Forest Green, Amber Gold)",
        "Tata letak grid asimetris yang dinamis dan modern"
      ]
    },
    images: [
      "assets/img/project-web/selected-graphic-designs/gunung.webp",
      "assets/img/project-web/selected-graphic-designs/bukti-hasil-gunung.webp"
    ],
    actions: [
      { text: "View Design ↗", link: "assets/img/project-web/selected-graphic-designs/gunung.webp", primary: true }
    ]
  },

  merch_telkom: {
    id: "merch_telkom",
    status: "completed",
    title: "STEMATEL Apparel — Official Merch Design",
    role: "Merch Illustrator",
    year: "2023",
    category: "graphic",
    tech: ["Merchandise Design", "Vector Illustration", "Branding", "Adobe Illustrator"],
    techClasses: ["pill-cyan", "pill-amber", "pill-purple", "pill-green"],
    tagline: {
      en: "Official community apparel collection for SMK Telkom Purwokerto combining classical Greek sculpture with tech cyberpunk visuals.",
      id: "Desain merchandise resmi SMK Telkom Purwokerto memadukan seni patung klasik Yunani dan ikonografi teknologi neon."
    },
    desc: {
      en: "A high-impact merchandise graphic collection for STEMATEL featuring the 'STEMATEL BRAVE' motif, classical winged victory statues, and neon tech glyphs optimized for screen printing.",
      id: "Koleksi desain merchandise resmi komunitas SMK Telkom Purwokerto (STEMATEL) bertema 'STEMATEL BRAVE' dengan visual seni patung Yunani klasik dan aksen grafis teknologi siap cetak."
    },
    features: {
      en: [
        "High-density vector graphics ready for screen printing & DTG",
        "Classic Telkom corporate red, gold, and obsidian color palette",
        "Precision iconography representing programming and network disciplines"
      ],
      id: [
        "Grafis vektor beresolusi tinggi siap cetak sablon & DTG",
        "Palet warna khas Telkom (merah, emas, hitam, putih)",
        "Desain ikon teknologi minimalis dengan aksen pencahayaan tajam"
      ]
    },
    images: [
      "assets/img/project-web/selected-graphic-designs/merch-telkom.webp"
    ],
    actions: [
      { text: "View Design ↗", link: "assets/img/project-web/selected-graphic-designs/merch-telkom.webp", primary: true }
    ]
  },

  komik_telkom: {
    id: "komik_telkom",
    status: "completed",
    title: "SMK Telkom Comic — Pop-Art Interactive Banner",
    role: "Comic Artist & Illustrator",
    year: "2023",
    category: "graphic",
    tech: ["Comic & Banner", "Digital Illustration", "Pop Art", "Branding"],
    techClasses: ["pill-pink", "pill-purple", "pill-cyan", "pill-amber"],
    tagline: {
      en: "Pop-art educational banner integrating friendly cartoon mascots with real campus environment photography.",
      id: "Banner edukasi interaktif SMK Telkom bergaya pop-art komik yang memadukan ilustrasi kartun dengan fotografi nyata."
    },
    desc: {
      en: "An energetic pop-art educational publication banner designed for SMK Telkom Purwokerto, pairing vibrant 2D cartoon characters with photo-manipulated campus backdrops.",
      id: "Desain banner publikasi edukasi untuk SMK Telkom Purwokerto dengan gaya pop-art, menampilkan karakter kartun ekspresif dipadukan dengan latar koridor sekolah nyata."
    },
    features: {
      en: [
        "Expressive character illustration in pop-art comic styling",
        "Seamless photo-masking blending real environments with 2D drawings",
        "Optimized layout for social media banners and vertical displays"
      ],
      id: [
        "Ilustrasi karakter kartun ekspresif bergaya komik pop-art",
        "Teknik masking presisi memadukan karakter 2D dengan foto riil sekolah",
        "Tata letak vertikal responsif untuk publikasi media sosial"
      ]
    },
    images: [
      "assets/img/project-web/selected-graphic-designs/komik-telkom.webp"
    ],
    actions: [
      { text: "View Design ↗", link: "assets/img/project-web/selected-graphic-designs/komik-telkom.webp", primary: true }
    ]
  },

  mango_nyeni: {
    id: "mango_nyeni",
    status: "completed",
    title: "Mango Nyeni — Artisan Sago Beverage Enterprise",
    role: "Co-Founder & Operator",
    year: "2026",
    category: "bisnis",
    tech: ["F&B Business", "Brand Identity", "Social Media Marketing", "Operations"],
    techClasses: ["pill-amber", "pill-green", "pill-pink", "pill-cyan"],
    tagline: {
      en: "Independent premium dessert drink venture handcrafted with fresh fruits and sold directly to consumers.",
      id: "Usaha F&B minuman sago buah segar premium yang dikelola mandiri dari produksi, branding, hingga distribusi."
    },
    desc: {
      en: "Mango Nyeni is a handcrafted fresh sago dessert business co-founded and actively run by Yossika and his sibling. Covering daily fresh culinary production, packaging, Instagram visual marketing, direct customer service, and door-to-door deliveries in Banyumas.",
      id: "Mango Nyeni adalah usaha kuliner sago premium yang dirintis dan dikelola mandiri bersama kakak. Meliputi proses produksi harian, pengemasan, pemasaran digital Instagram, hingga pengantaran door-to-door dengan 3 varian buah segar pilihan: Mango Sago, Strawberry Sago, dan Buah Naga Sago."
    },
    features: {
      en: [
        "End-to-End Business Operations: culinary recipe formulation, budgeting, and delivery",
        "3 Signature Fresh Fruit Variants: Mango Sago, Strawberry Sago, and Dragon Fruit Sago",
        "Digital content creation and social media feed management on Instagram",
        "Direct-to-consumer relationship management and repeat order retention"
      ],
      id: [
        "Operasional Bisnis Menyeluruh: formulasi resep, pengemasan, dan delivery",
        "3 Varian Unggulan Buah Segar: Mango Sago, Strawberry Sago, Buah Naga Sago",
        "Manajemen konten visual media sosial & feed Instagram",
        "Pelayanan pelanggan personal dan retensi pesanan rutin"
      ]
    },
    images: [
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-feed-01.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-feed-02.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-feed-03.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-produk-mango-sago.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-produk-strawberry-sago.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-produk-buah-naga-sago.webp",
      "assets/img/project-bisnis/mango-nyeni/mango-nyeni-profile-ig.webp"
    ],
    actions: [
      { text: "Instagram Mango Nyeni ↗", link: "https://instagram.com", primary: true }
    ]
  }
};

const DOCUMENTATION_DATA = {
  market_day: {
    id: "market_day",
    title: {
      en: "Market Day 4.0 — Head of Security Coordinator",
      id: "Market Day 4.0 — Koordinator Keamanan"
    },
    role: { en: "Head of Security", id: "Koordinator Keamanan" },
    date: { en: "May 2026", id: "2 Mei 2026" },
    summary: {
      en: "Led the campus security division, overseeing crowd flow and VIP protocol for Tel-U Purwokerto's largest entrepreneurial festival.",
      id: "Memimpin divisi keamanan, mengoordinasikan pengamanan alur pengunjung dan VIP pada festival wirausaha terbesar kampus."
    },
    desc: {
      en: "As Head of Security for Market Day 4.0 at Telkom University Purwokerto, I directed security logistics, perimeter surveillance, and crowd management across multiple campus zones for thousands of attendees.",
      id: "Sebagai Koordinator Keamanan pada perhelatan akbar Market Day 4.0 di Telkom University Purwokerto, saya memimpin strategi penempatan personel keamanan, koordinasi alur keluar-masuk ribuan pengunjung, serta pengamanan pembukaan oleh pimpinan universitas."
    },
    bullets: {
      en: [
        "Orchestrated tactical deployment of security personnel across event stalls and stage areas",
        "Direct coordination with campus authorities, facility management, and executive committee",
        "Documented crowd flow via drone videography and official Instagram Reels coverage"
      ],
      id: [
        "Menyusun strategi penempatan personel keamanan di seluruh arena stand dan panggung utama",
        "Koordinasi langsung dengan pihak keamanan universitas dan pimpinan kepanitiaan",
        "Dokumentasi video drone dan liputan resmi Instagram Reels acara"
      ]
    },
    images: [
      "assets/img/foto-kegiatan/08-market-day/foto-bersama-market-day.webp",
      "assets/img/foto-kegiatan/08-market-day/foto-dokumentasi-acara-market-day.webp",
      "assets/img/foto-kegiatan/08-market-day/potong-pita-pembukaan-market-day-2026.webp",
      "assets/img/foto-kegiatan/08-market-day/foto-market-day-hari-h.webp"
    ]
  },
  infentra: {
    id: "infentra",
    title: {
      en: "INFENTRA 2025 — Security & Event Operations",
      id: "INFENTRA 2025 — Divisi Keamanan & Operasional"
    },
    role: { en: "Security Operations Staff", id: "Staff Keamanan" },
    date: { en: "Oct – Dec 2025", id: "Oktober – Desember 2025" },
    summary: {
      en: "Safeguarded high-profile technology exhibition and hackathon arena at Tel-U Purwokerto under theme 'Synergy in Motion'.",
      id: "Menjaga keamanan pameran karya teknologi dan arena kompetisi Informatika bertema 'Synergy in Motion'."
    },
    desc: {
      en: "Ensured seamless crowd safety and hardware protection for hardware/software student projects displayed at the flagship annual Informatics showcase.",
      id: "Bertanggung jawab atas ketertiban dan keamanan area pameran produk teknologi mahasiswa, menjaga kelancaran alur pengunjung, dan menjamin sterilitas area penjurian lomba."
    },
    bullets: {
      en: [
        "Monitored project exhibition halls safeguarding prototype hardware and electronics",
        "Coordinated attendee crowd entry for opening ceremony and keynote speakers",
        "Maintained zero-incident track record throughout multi-day exhibition"
      ],
      id: [
        "Mengamankan hall pameran karya teknologi dan perangkat keras prototipe mahasiswa",
        "Mengatur alur registrasi ratusan peserta seminar dan pengunjung pameran",
        "Menjaga kondisi zero-incident selama seluruh rangkaian kegiatan berlangsung"
      ]
    },
    cert: "assets/sertifikat/certifikat-infentra.webp",
    images: [
      "assets/img/foto-kegiatan/01-infentra/01-dokumentasi.webp",
      "assets/img/foto-kegiatan/01-infentra/02-dokumentasi-kegiatan.webp",
      "assets/img/foto-kegiatan/01-infentra/03-foto-bersama.webp",
      "assets/img/foto-kegiatan/01-infentra/04-group-photo.webp"
    ]
  },
  tulc: {
    id: "tulc",
    title: {
      en: "TULC Season II — Campus Security Staff",
      id: "Tel-U Leadermind (TULC) II — Staff Keamanan"
    },
    role: { en: "Security Staff", id: "Staff Keamanan" },
    date: { en: "Sep – Nov 2025", id: "September – November 2025" },
    summary: {
      en: "Maintained security protocol during the university-wide student leadership championship competition.",
      id: "Pengamanan kompetisi kepemimpinan mahasiswa tingkat universitas Telkom University Purwokerto."
    },
    desc: {
      en: "Supported operations and safe flow for university student leaders competing across critical thinking and leadership modules.",
      id: "Berperan dalam pengamanan kompetisi kepemimpinan berskala universitas, mengawal kenyamanan juri, pembicara, dan ratusan delegasi mahasiswa."
    },
    bullets: {
      en: [
        "Coordinated venue access control for auditorium debate sessions",
        "Liaised with organizers for punctual schedule adherence",
        "Assisted in emergency readiness and logistical flow"
      ],
      id: [
        "Pengendalian akses ruang kompetisi debat kepemimpinan",
        "Koordinasi disiplin waktu dan sterilisasi venue pertandingan",
        "Kesiapan tanggap darurat dan pengaturan logistik"
      ]
    },
    cert: "assets/sertifikat/certifikat-tulc.webp",
    images: [
      "assets/img/foto-kegiatan/02-tulc/01-foto-bersama.webp",
      "assets/img/foto-kegiatan/02-tulc/02-kegiatan.webp",
      "assets/img/foto-kegiatan/02-tulc/dokumentasi-rapat-tulc.webp",
      "assets/img/foto-kegiatan/02-tulc/feed-foto-tulc.webp"
    ]
  },
  pkl_telkom: {
    id: "pkl_telkom",
    title: {
      en: "PT Telkom Akses — Field Network Technician (PKL)",
      id: "PT Telkom Akses — Teknisi Jaringan Lapangan (PKL)"
    },
    role: { en: "Service Technician Intern", id: "Teknisi Jaringan & Servis" },
    date: { en: "Apr – Sep 2023", id: "April – September 2023" },
    summary: {
      en: "6-month professional internship servicing IndiHome fiber optic networks, optical distribution points, and OTDR testing.",
      id: "Praktik kerja lapangan 6 bulan di PT Telkom Akses: instalasi fiber optic, splicing ODP, konfigurasi ONT/WiFi, dan uji OTDR."
    },
    desc: {
      en: "Hands-on field engineering internship at PT Telkom Akses Karanganyar, performing end-to-end fiber optic drop cable installations, ODP splicing, ONT optical power verification, and troubleshooting customer premises network latency.",
      id: "Pengalaman teknisi lapangan selama 6 bulan di PT Telkom Akses. Melakukan instalasi kabel drop core FO, penyambungan fiber optic (splicing) pada ODP, pengukuran redaman optik dengan OPM/OTDR, konfigurasi modem ONT, serta penanganan gangguan jaringan internet IndiHome."
    },
    bullets: {
      en: [
        "Executed precision fiber optic core fusion splicing with sub-0.03dB attenuation standards",
        "Configured and hardened customer GPON optical network terminals (ONT)",
        "Diagnosed fiber breaks and signal degradation utilizing optical power meters (OPM) and OTDR"
      ],
      id: [
        "Penyambungan kabel fiber optic (fusion splicing) sesuai standar redaman Telkom",
        "Konfigurasi dan aktivasi perangkat modem ONT/GPON pelanggan",
        "Troubleshooting redaman tinggi dan gangguan fisik kabel menggunakan OPM dan OTDR"
      ]
    },
    cert: "assets/sertifikat/certifikat-pkl-telkom-akses.webp",
    images: [
      "assets/img/foto-kegiatan/03-pkl-telkom/01-dokumentasi-pkl.webp"
    ]
  },
  hipmi: {
    id: "hipmi",
    title: {
      en: "UKM HIPMI PT Tel-U — Cadre & Membership Staff",
      id: "UKM HIPMI PT Tel-U — Staff Kaderisasi & Keanggotaan"
    },
    role: { en: "Department Staff", id: "Staff Kaderisasi & Keanggotaan" },
    date: { en: "Jan 2026 – Present", id: "Januari 2026 – Sekarang" },
    summary: {
      en: "Active management of student entrepreneurship development, internal onboarding, and member networking.",
      id: "Pengelolaan kaderisasi mahasiswa wirausaha kampus Tel-U Purwokerto dan penguatan jaringan keanggotaan."
    },
    desc: {
      en: "Serving as an active officer in the Indonesian Young Entrepreneurs Association Student Chapter (UKM HIPMI PT) at Telkom University Purwokerto, empowering student startups and driving community synergy.",
      id: "Menjadi staf aktif di Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT) Telkom University Purwokerto, menyusun program regenerasi anggota dan mendorong ekosistem wirausaha muda di kampus."
    },
    bullets: {
      en: [
        "Facilitating member registration, database management, and onboarding workshops",
        "Organizing entrepreneurship seminars and networking mixers with regional business mentors",
        "Contributing to department operational reviews and strategic milestones"
      ],
      id: [
        "Memfasilitasi pendataan, verifikasi, dan orientasi calon anggota baru",
        "Mendukung penyelenggaraan seminar bisnis dan sharing session bersama praktisi usaha",
        "Koordinasi internal kepengurusan dalam program inkubasi wirausaha mahasiswa"
      ]
    },
    images: [
      "assets/img/foto-kegiatan/06-hipmi/foto-departemen-kaderisasi-dan-keanggotaan.webp",
      "assets/img/foto-kegiatan/06-hipmi/foto-departement-okk.webp",
      "assets/img/foto-kegiatan/06-hipmi/foto-05-dokumentasi.webp",
      "assets/img/foto-kegiatan/06-hipmi/foto-profile-yossika-kaderisasi-dan-keanggotaan.webp"
    ]
  },
  wpi: {
    id: "wpi",
    title: {
      en: "WPI 2025 — Security Committee",
      id: "Welcoming Party Informatics (WPI) — Staff Keamanan"
    },
    role: { en: "Security Staff", id: "Staff Keamanan" },
    date: { en: "Jul – Sep 2025", id: "Juli – September 2025" },
    summary: {
      en: "Secured orientation welcoming events for incoming Informatics freshmen at Tel-U Purwokerto.",
      id: "Pengamanan acara penyambutan mahasiswa baru S1 Teknik Informatika Telkom University Purwokerto."
    },
    desc: {
      en: "Coordinated visitor flow, crowd safety, and venue protocols for the largest annual welcoming festival for incoming engineering students.",
      id: "Mengatur tata tertib dan pengamanan venue welcoming party mahasiswa baru Teknik Informatika angkatan 2025 agar acara berjalan kondusif dan tertib."
    },
    bullets: {
      en: [
        "Managed attendee movement during orientation plenary and student showcases",
        "Zero security issues reported throughout the full orientation cycle"
      ],
      id: [
        "Mengawal ketertiban ratusan mahasiswa baru selama sesi indoor dan outdoor",
        "Menjaga koordinasi solid antar divisi panitia selama acara berlangsung"
      ]
    },
    cert: "assets/sertifikat/sertifikat-wpi.webp",
    images: [
      "assets/img/foto-kegiatan/07-wpi/foto-bersama-hari-h-wpi.webp",
      "assets/img/foto-kegiatan/07-wpi/cocard-foto-p.webp",
      "assets/img/foto-kegiatan/07-wpi/feed-ig-wpi.webp"
    ]
  }
};

window.PROJECTS_DATA = PROJECTS_DATA;
window.DOCUMENTATION_DATA = DOCUMENTATION_DATA;
