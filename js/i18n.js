/**
 * Yossika Portfolio — Internationalization (i18n) System
 * Supports English (default) and Indonesian.
 * Stored in localStorage under 'lang-pref'.
 */

const I18N_DATA = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.designs": "Designs",
    "nav.business": "Business",
    "nav.journey": "Journey",
    "nav.docs": "Documentation",
    "nav.skills": "Skills",
    "nav.certs": "Certificates",
    "nav.contact": "Contact",
    "nav.cv": "View CV",
    "nav.allWorks": "All Works",

    // Hero
    "hero.badge": "Available for Opportunities",
    "hero.role": "Informatics Student · Telkom University Purwokerto",
    "hero.bio": "Semester 4 Informatics undergraduate bridging robust network infrastructure with modern digital design. TKJ background from SMK Telkom Purwokerto, now specializing in Fullstack Web Development, AI/ML integration, and clean UI/UX.",
    "hero.ctaCv": "View CV",
    "hero.ctaProjects": "Explore Projects",
    "hero.ctaContact": "Get in Touch",
    "hero.statExp": "Experiences",
    "hero.statCerts": "Certifications",
    "hero.statProjects": "Featured Works",
    "hero.statSemester": "Current Semester",

    // About
    "about.eyebrow": "About Me",
    "about.title": "Engineering Purposeful Digital Solutions",
    "about.p1": "I am an undergraduate Informatics Engineering student at Telkom University Purwokerto with a deep passion for modern web engineering and computer networks. Combining hands-on network technician experience from PT Telkom Akses with cutting-edge fullstack and AI development skills, I build robust, high-performance, and human-centric software.",
    "about.p2": "Active in university leadership as Department Staff at UKM HIPMI PT Telkom University Purwokerto, and seasoned in campus event management. Always eager to collaborate on innovative projects and production-ready tech.",
    "about.bornKey": "Origin",
    "about.bornVal": "Banyumas, Central Java, Indonesia",
    "about.eduKey": "Education",
    "about.eduVal": "S1 Informatics · Telkom University Purwokerto",
    "about.gpaKey": "GPA",
    "about.gpaVal": "3.65 / 4.00",
    "about.statusKey": "Status",
    "about.statusVal": "Semester 4 → 5 (Class of 2024)",

    // Projects
    "projects.eyebrow": "Selected Works",
    "projects.title": "Featured Projects",
    "projects.sub": "Production web applications, interactive AI tools, and real-time systems built from scratch.",
    "projects.viewAll": "Explore All Works ↗",
    "projects.viewDetail": "View Detail →",
    "projects.liveDemo": "Live Demo ↗",
    "projects.github": "GitHub ↗",
    "projects.statusOngoing": "In Progress / Ongoing Development",
    "projects.statusFeatured": "Featured",

    // Design Portfolio
    "designs.eyebrow": "Visual Arts",
    "designs.title": "Graphic Design & Apparel",
    "designs.sub": "Branding, retro poster illustrations, and digital merchandise created for communities and institutions.",
    "designs.viewWork": "View Design →",

    // Business
    "business.eyebrow": "Entrepreneurship",
    "business.title": "Mango Nyeni — Premium Sago Drink",
    "business.tagline": "Independent F&B enterprise built and operated from the ground up — handcrafted fresh artisan sago desserts with direct-to-consumer digital marketing.",
    "business.role": "Co-Founder & Lead Operator",
    "business.viewDetail": "View Business Details →",

    // Journey / Experience
    "journey.eyebrow": "Career & Education",
    "journey.title": "Experience & Academic Path",
    "journey.sub": "A timeline of formal education, professional technician roles, and organizational leadership.",
    "journey.toggleDetails": "Show Responsibilities",
    "journey.hideDetails": "Hide Responsibilities",

    // Documentation
    "docs.eyebrow": "Campus & Community",
    "docs.title": "Event Documentation & Leadership",
    "docs.sub": "Leadership roles, coordination track record, and hands-on contributions in major university events.",
    "docs.viewDetail": "View Full Documentation →",

    // Skills
    "skills.eyebrow": "Technical Stack",
    "skills.title": "Tools & Technologies",
    "skills.sub": "Core proficiencies across programming, web frameworks, networks, and design software.",
    "skills.tabAll": "All",
    "skills.tabDev": "Development",
    "skills.tabNet": "Networking & DevOps",
    "skills.tabDesign": "Design & Creative",

    // Certifications
    "certs.eyebrow": "Credentials",
    "certs.title": "Licenses & Certifications",
    "certs.sub": "Verified professional certificates across software engineering, networks, and workshops.",
    "certs.verify": "View Credential ↗",

    // Contact & Feedback
    "contact.eyebrow": "Get In Touch",
    "contact.title": "Let's Connect & Collaborate",
    "contact.sub": "Have a project in mind, an opportunity to discuss, or just want to say hi? Reach out directly.",
    "contact.nameLabel": "Your Name",
    "contact.emailLabel": "Your Email",
    "contact.msgLabel": "Your Message",
    "contact.sendBtn": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Thank you! Your message has been sent successfully.",
    "contact.error": "Failed to send message. Please try again.",
    "contact.profanityWarning": "Please use polite and respectful language.",

    // Language Modal
    "langModal.title": "Select Language",
    "langModal.sub": "Choose preferred language / Pilih bahasa:",
    "langModal.enBtn": "English",
    "langModal.idBtn": "Bahasa Indonesia",

    // Chatbot
    "chatbot.title": "YosBot Assistant",
    "chatbot.online": "Online · Powered by Gemini AI",
    "chatbot.greeting": "Hi! I am YosBot, Yossika's AI portfolio assistant. How can I help you today?",
    "chatbot.placeholder": "Ask anything about Yossika...",
    "chatbot.send": "Send"
  },
  id: {
    // Navigation
    "nav.about": "Tentang",
    "nav.projects": "Project",
    "nav.designs": "Desain",
    "nav.business": "Bisnis",
    "nav.journey": "Pengalaman",
    "nav.docs": "Dokumentasi",
    "nav.skills": "Keahlian",
    "nav.certs": "Sertifikat",
    "nav.contact": "Kontak",
    "nav.cv": "Lihat CV",
    "nav.allWorks": "Semua Karya",

    // Hero
    "hero.badge": "Terbuka untuk Peluang Baru",
    "hero.role": "Mahasiswa TI · Telkom University Purwokerto",
    "hero.bio": "Mahasiswa S1 Teknik Informatika Semester 4 yang menjembatani infrastruktur jaringan andal dengan sentuhan desain modern. Latar belakang TKJ dari SMK Telkom Purwokerto, kini fokus pada Fullstack Web, integrasi AI/ML, dan UI/UX.",
    "hero.ctaCv": "Lihat CV",
    "hero.ctaProjects": "Lihat Projects",
    "hero.ctaContact": "Hubungi Saya",
    "hero.statExp": "Pengalaman",
    "hero.statCerts": "Sertifikat",
    "hero.statProjects": "Karya Unggulan",
    "hero.statSemester": "Semester",

    // About
    "about.eyebrow": "Tentang Saya",
    "about.title": "Membangun Solusi Digital yang Bermanfaat",
    "about.p1": "Saya adalah mahasiswa S1 Teknik Informatika di Telkom University Purwokerto dengan minat mendalam pada rekayasa web modern dan jaringan komputer. Menggabungkan pengalaman lapangan sebagai teknisi jaringan PT Telkom Akses dengan keahlian fullstack dan AI terkini, saya fokus menciptakan perangkat lunak yang cepat, stabil, dan ramah pengguna.",
    "about.p2": "Aktif dalam organisasi kemahasiswaan sebagai staf departemen di UKM HIPMI PT Telkom University Purwokerto, serta berpengalaman dalam kepanitiaan acara kampus skala besar. Selalu siap berkolaborasi untuk proyek teknologi yang inovatif.",
    "about.bornKey": "Asal",
    "about.bornVal": "Banyumas, Jawa Tengah, Indonesia",
    "about.eduKey": "Pendidikan",
    "about.eduVal": "S1 Teknik Informatika · Telkom University Purwokerto",
    "about.gpaKey": "IPK",
    "about.gpaVal": "3.65 / 4.00",
    "about.statusKey": "Status",
    "about.statusVal": "Semester 4 → 5 (Angkatan 2024)",

    // Projects
    "projects.eyebrow": "Karya Terpilih",
    "projects.title": "Project Unggulan",
    "projects.sub": "Aplikasi web nyata, integrasi AI real-time, dan sistem fungsional yang dibangun dari awal.",
    "projects.viewAll": "Lihat Semua Karya ↗",
    "projects.viewDetail": "Lihat Detail →",
    "projects.liveDemo": "Live Demo ↗",
    "projects.github": "GitHub ↗",
    "projects.statusOngoing": "Sedang Dikembangkan / Active Development",
    "projects.statusFeatured": "Unggulan",

    // Design Portfolio
    "designs.eyebrow": "Karya Visual",
    "designs.title": "Desain Grafis & Merchandise",
    "designs.sub": "Karya visual branding, poster retro, dan apparel komunitas yang berkarakter.",
    "designs.viewWork": "Lihat Desain →",

    // Business
    "business.eyebrow": "Kewirausahaan",
    "business.title": "Mango Nyeni — Minuman Sago Premium",
    "business.tagline": "Usaha F&B mandiri yang dirintis dari nol — minuman sago buah segar berkualitas dengan pemasaran digital langsung ke konsumen.",
    "business.role": "Co-Founder & Pengelola Utama",
    "business.viewDetail": "Lihat Detail Bisnis →",

    // Journey / Experience
    "journey.eyebrow": "Karir & Pendidikan",
    "journey.title": "Pengalaman & Riwayat Akademik",
    "journey.sub": "Perjalanan pendidikan formal, peran teknisi profesional, dan kepengurusan organisasi.",
    "journey.toggleDetails": "Lihat Tanggung Jawab",
    "journey.hideDetails": "Tutup Tanggung Jawab",

    // Documentation
    "docs.eyebrow": "Kampus & Komunitas",
    "docs.title": "Dokumentasi Kegiatan & Kepanitiaan",
    "docs.sub": "Rekam jejak kepemimpinan, koordinasi lapangan, dan kontribusi nyata dalam event universitas.",
    "docs.viewDetail": "Lihat Dokumentasi Lengkap →",

    // Skills
    "skills.eyebrow": "Keahlian Teknis",
    "skills.title": "Teknologi & Perangkat",
    "skills.sub": "Penguasaan bahasa pemrograman, framework web, konfigurasi jaringan, dan software desain.",
    "skills.tabAll": "Semua",
    "skills.tabDev": "Pengembangan Web",
    "skills.tabNet": "Jaringan & DevOps",
    "skills.tabDesign": "Desain & Kreatif",

    // Certifications
    "certs.eyebrow": "Kredensial",
    "certs.title": "Sertifikasi & Lisensi",
    "certs.sub": "Sertifikat keahlian terverifikasi di bidang software, jaringan komputer, dan workshop.",
    "certs.verify": "Lihat Sertifikat ↗",

    // Contact & Feedback
    "contact.eyebrow": "Hubungi Saya",
    "contact.title": "Mari Terhubung & Berkolaborasi",
    "contact.sub": "Punya ide proyek, tawaran kolaborasi, atau sekadar ingin menyapa? Kirim pesan langsung di sini.",
    "contact.nameLabel": "Nama Lengkap",
    "contact.emailLabel": "Alamat Email",
    "contact.msgLabel": "Pesan Anda",
    "contact.sendBtn": "Kirim Pesan",
    "contact.sending": "Mengirim...",
    "contact.success": "Terima kasih! Pesan Anda telah berhasil terkirim.",
    "contact.error": "Gagal mengirim pesan. Silakan coba kembali.",
    "contact.profanityWarning": "Mohon gunakan bahasa yang sopan dan santun ya.",

    // Language Modal
    "langModal.title": "Pilih Bahasa",
    "langModal.sub": "Pilih bahasa tampilan portofolio:",
    "langModal.enBtn": "English",
    "langModal.idBtn": "Bahasa Indonesia",

    // Chatbot
    "chatbot.title": "Asisten YosBot",
    "chatbot.online": "Online · Ditenagai Gemini AI",
    "chatbot.greeting": "Halo! Saya YosBot, asisten virtual portofolio Yossika. Ada yang bisa saya bantu?",
    "chatbot.placeholder": "Tanyakan apa saja tentang Yossika...",
    "chatbot.send": "Kirim"
  }
};

window.I18N = {
  current: 'en',

  init() {
    const saved = localStorage.getItem('lang-pref');
    if (saved && (saved === 'en' || saved === 'id')) {
      this.current = saved;
    } else {
      this.current = 'en'; // English by default
      // Non-blocking slide-in of popup on first visit
      window.addEventListener('load', () => {
        setTimeout(() => {
          const modal = document.getElementById('langModal');
          if (modal && !localStorage.getItem('lang-pref')) {
            modal.classList.add('active');
          }
        }, 1200);
      });
    }
    this.apply();
    this.updateToggleBtn();
  },

  dismissModal() {
    const modal = document.getElementById('langModal');
    if (modal) modal.classList.remove('active');
    localStorage.setItem('lang-pref', this.current);
  },

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    this.current = lang;
    localStorage.setItem('lang-pref', lang);
    document.documentElement.lang = lang;
    this.apply();
    this.updateToggleBtn();

    const modal = document.getElementById('langModal');
    if (modal) modal.classList.remove('active');

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  get(key) {
    return (I18N_DATA[this.current] && I18N_DATA[this.current][key]) || 
           (I18N_DATA.en && I18N_DATA.en[key]) || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.get(key);
      if (val && el.textContent.trim() !== val.trim()) {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = this.get(key);
      if (val && el.innerHTML.trim() !== val.trim()) {
        el.innerHTML = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.get(key);
      if (val && el.getAttribute('placeholder') !== val) {
        el.setAttribute('placeholder', val);
      }
    });
  },

  updateToggleBtn() {
    const btn = document.getElementById('langToggleBtn');
    const txt = document.getElementById('langCurrentText');
    if (txt) {
      txt.textContent = this.current.toUpperCase();
    }
    if (btn) {
      btn.setAttribute('aria-label', `Switch Language (${this.current.toUpperCase()})`);
    }
  }
};
