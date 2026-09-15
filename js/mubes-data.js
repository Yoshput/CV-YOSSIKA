/**
 * MUBES_DATA — Single Source of Truth
 * Musyawarah Besar (MUBES) UKM HIPMI PT Telkom University Purwokerto
 * Kabinet Artha Jayana Periode 2025/2026
 *
 * Mengikuti Template Baku Dokumen Kemahasiswaan Telkom University Purwokerto (PROPOSAL TW 3.docx)
 * Digunakan oleh:
 * 1. Halaman Interaktif (mubes-hipmi.html)
 * 2. Dokumen Proposal Formal Print-Ready (proposal-mubes-hipmi.html)
 */

const MUBES_DATA = {
  meta: {
    namaKegiatan: "Musyawarah Besar (MUBES) Himpunan Pengusaha Muda Indonesia (HIPMI) Perguruan Tinggi Telkom University Purwokerto Tahun 2026",
    namaSingkat: "MUBES HIPMI PT Tel-U Purwokerto 2026",
    kabinet: "Kabinet Artha Jayana",
    periode: "2025/2026",
    tahun: "2026",
    nomorSurat: "001/0002/A.1/PRD.1/HIPMI-TUP/V/2026",
    tanggalSurat: "Purwokerto, 20 Mei 2026",
    tanggalKegiatan: "Sabtu, 30 Mei 2026",
    waktuKegiatan: "08.00–17.30 WIB",
    tempatKegiatan: "Aula Gedung DSP / Auditorium Telkom University Purwokerto",
    alamatKampus: "Jalan D.I. Panjaitan No. 128, Kec. Purwokerto Selatan, Banyumas 53147",
    emailOrganisasi: "hipmitelkompurwokerto@gmail.com",
    statusDraft: "PROPOSAL FORMAL — SIAP PENGESAHAN",
    targetPeserta: "120 Peserta (Pengurus Kabinet Artha Jayana, Anggota Aktif, Dewan Pembina, Demisioner, dan Delegasi Tamu Ormawa)",
    
    // Pimpinan & Pejabat Resmi Telkom University Purwokerto & HIPMI PT
    ketuaPelaksana: "Yossika Putra Erlangga",
    nimKetuaPelaksana: "103112430026",
    prodiKetuaPelaksana: "S1 Teknik Informatika, 2024",

    sekretarisPelaksana: "Salumita Ardiana",
    nimSekretarisPelaksana: "109092530004",
    prodiSekretarisPelaksana: "S1 Rekayasa Perangkat Lunak, 2025",

    bendaharaPelaksana: "Nuriyatul Wafiroh (Afi)",
    nimBendaharaPelaksana: "103122400057",
    prodiBendaharaPelaksana: "S1 Rekayasa Perangkat Lunak, 2024",

    ketuaUmumHipmi: "Raden Aurel Aditya Kusumawaningyun",
    nimKetuaUmumHipmi: "103112430267",
    prodiKetuaUmumHipmi: "S1 Teknik Informatika, 2024",

    pembinaUkm: "Kurnia Indah Sumunar, S.E., M.S.Ak",
    nipPembina: "25910001",

    ketuaPanitiaPengarah: "Faizah, S.TP., M.Si.",
    nipKetuaPanitiaPengarah: "0608129203",

    kaurKemahasiswaan: "Kadarisman, S.Si.",
    nipKaurKemahasiswaan: "22960016",

    kaurSespinLegalPr: "Silvia Van Marsally, S.E., M.M.",

    warekAkademikRiset: "Dr. Catur Nugroho, S.Sos., M.I.Kom.",
    nipWarekAkademikRiset: "14780035-1",

    direkturTelU: "Dr. Tenia Wahyuningrum, S.Kom., M.T.",
    nipDirekturTelU: "07820045-1",

    // Logos
    logoTelu: "assets/img/logo-telkom-university-purwokerto.png",
    logoTeluWebp: "assets/img/logo-telkom-university-purwokerto.webp",
    logoTeluHorizontal: "assets/img/logo-telkom-university-horizontal.png",
    logoHipmiOfficial: "assets/img/logo-hipmi-pt-telu-official.png",
    logoHipmiOfficialWebp: "assets/img/logo-hipmi-pt-telu-official.webp",
    logoArthaJayana: "assets/img/logo-artha-jayana.webp",
    logoEmblemComposite: "assets/img/hipmi-artha-jayana-emblem.webp"
  },

  waktuTempat: {
    tempat: "Aula Gedung DSP / Auditorium Telkom University Purwokerto",
    alamat: "Jl. D.I. Panjaitan No. 128, Karangreja, Kec. Purwokerto Selatan, Banyumas 53147",
    hariTanggal: "Sabtu, 30 Mei 2026",
    waktuMulai: "08.00 WIB",
    waktuSelesai: "17.30 WIB",
    countdownTarget: "2026-05-30T08:00:00+07:00",
    estimasiPeserta: "120 Orang",
    durasiTotal: "9 Jam 30 Menit (termasuk ISHOMA)"
  },

  temaKegiatan: {
    judul: "Navigating Synergy: Melahirkan Pemimpin Pengusaha Muda yang Adaptif, Akuntabel, dan Berkelanjutan",
    tagline: "Sinergi Nyata, Akuntabilitas Teruji, Suksesi Berdaya Saing",
    deskripsi: "Mengukuhkan sinergi antar departemen Kabinet Artha Jayana, mengevaluasi pertanggungjawaban program kerja secara transparan dan objektif, serta meregenerasikan estafet kepemimpinan UKM HIPMI PT Telkom University Purwokerto menuju ekosistem wirausaha kampus yang mandiri, adaptif, dan berdaya saing global."
  },

  latarBelakang: [
    "Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT) Telkom University Purwokerto merupakan organisasi kemahasiswaan strategis yang berkomitmen menumbuhkembangkan ekosistem wirausaha, jiwa kepemimpinan inovatif, serta jejaring kolaborasi bisnis di lingkungan civitas akademika dan regional Banyumas.",
    "Sepanjang masa bakti periode 2025/2026, jajaran pengurus Kabinet Artha Jayana telah merealisasikan berbagai inisiatif program kerja di bidang organisasi, kaderisasi, pengembangan bisnis, inkubasi, kemitraan eksternal, teknologi informasi, hingga media publikasi. Setiap amanah dan anggaran yang diamanahkan memerlukan pertanggungjawaban komprehensif, terukur, dan transparan sebagai wujud akuntabilitas tata kelola kelembagaan.",
    "Musyawarah Besar (MUBES) merupakan forum permusyawaratan tertinggi UKM HIPMI PT Telkom University Purwokerto. Forum ini menjadi pilar konstitusional yang mengemban tugas krusial: menilai dan mengesahkan Laporan Pertanggungjawaban (LPJ) Kabinet Artha Jayana per departemen, mengevaluasi serta merekomendasikan penyempurnaan AD/ART dan pedoman organisasi, memberikan apresiasi atas dedikasi pengurus demisioner, serta menyelenggarakan pemilihan dan pengesahan Ketua Umum beserta Tim Formatur kepengurusan periode berikutnya.",
    "Berdasarkan pedoman pengelolaan kegiatan organisasi mahasiswa Telkom University Purwokerto, pelaksanaan MUBES 2026 dirancang dengan standar tata kelola profesional, kepanitiaan yang solid, mitigasi risiko kegiatan yang komprehensif, serta akuntabilitas anggaran yang tepat sasaran demi terwujudnya regenerasi kepemimpinan yang bermartabat."
  ],

  tujuan: [
    "Menyampaikan, menguji, dan mengesahkan Laporan Pertanggungjawaban (LPJ) kepengurusan HIPMI PT Telkom University Purwokerto Kabinet Artha Jayana Periode 2025/2026 secara transparan dan akuntabel.",
    "Memberikan apresiasi dan penghargaan kelembagaan atas kontribusi dedikatif seluruh jajaran Badan Pengurus Harian, Koordinator Bidang, Kepala Departemen, dan Staf Kabinet Artha Jayana.",
    "Membahas, menyempurnakan, dan menetapkan Anggaran Dasar / Anggaran Rumah Tangga (AD/ART), Pedoman Pokok Organisasi (PPO), serta Tata Tertib Persidangan MUBES.",
    "Merumuskan pokok-pokok pikiran strategis dan rekomendasi program kerja bagi kepengurusan HIPMI PT Telkom University Purwokerto periode selanjutnya.",
    "Memilih, menetapkan, dan mengesahkan Ketua Umum definitif serta Tim Formatur HIPMI PT Telkom University Purwokerto Periode 2026/2027 melalui mekanisme permusyawaratan yang demokratis."
  ],

  manfaat: [
    "Bagi Pengurus Kabinet Artha Jayana: Menjadi wahana evaluasi objektif, apresiasi nyata atas pencapaian program kerja, serta penuntasan amanah kepengurusan secara konstitusional dan terhormat.",
    "Bagi Anggota & Calon Pengurus: Memperoleh pemahaman mendalam terkait dinamika kepemimpinan organisasi, tata tertib persidangan formil, serta transfer wawasan strategis dari para demisioner.",
    "Bagi Institusi Telkom University Purwokerto: Memperkokoh iklim demokrasi mahasiswa yang sehat, akuntabel, dan mendukung pencapaian Capaian Pelaksanaan Program (CPP) kemahasiswaan yang berintegritas tinggi.",
    "Bagi Ekosistem HIPMI Banyumas Raya: Menjamin kesinambungan estafet kaderisasi pengusaha muda di kampus Telkom University Purwokerto yang adaptif terhadap tantangan ekonomi digital."
  ],

  peserta: "Seluruh Badan Pengurus Harian (BPH), Kepala Bidang, Kepala Departemen, dan Staf Kabinet Artha Jayana, Anggota Aktif UKM HIPMI PT Tel-U Purwokerto, Dewan Pembina, Alumni/Demisioner, serta Perwakilan Ormawa Telkom University Purwokerto dengan total estimasi 120 orang.",

  // 9 Departemen Resmi Kabinet Artha Jayana (Berdasarkan Data Rilis Resmi Instagram)
  departemenKabinet: [
    {
      id: "bendum",
      posterUrl: "assets/img/feed-hipmi/bendum_poster.webp",
      kode: "BND",
      nama: "Bendahara Umum",
      instagramUrl: "https://www.instagram.com/p/DXgZ1SaExPk/",
      fokus: "Transparansi Arus Kas & Akuntabilitas Finansial Organisasi",
      prokerUtama: "SOP Pengelolaan Arus Kas, Penyusunan Anggaran Departemen, Rekonsiliasi Finansial Terbuka, Audit LPJ",
      deskripsi: "Sebagai pengelola keuangan organisasi, Bendahara bertanggung jawab menjaga transparansi, akuntabilitas, serta kestabilan finansial organisasi. Seluruh arus kas dikelola secara sistematis dan terdokumentasi dengan baik.",
      pimpinan: [
        { nama: "Muhammad Naufal Hanif", jabatan: "Bendahara Umum", prodi: "S1 Rekayasa Perangkat Lunak, 2024" },
        { nama: "Nabilah", jabatan: "Bendahara 1", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Nuriyatul Wafiroh", jabatan: "Bendahara 2", prodi: "S1 Teknik Logistik, 2024" }
      ],
      staf: []
    },
    {
      id: "kabid",
      posterUrl: "assets/img/feed-hipmi/kabid_poster.webp",
      kode: "KBD",
      nama: "Kepala Bidang (OKK, PPB, PRD)",
      instagramUrl: "https://www.instagram.com/p/DXe_DlIE7AU/",
      fokus: "Pengarahan Strategis, Sinergi Antar Bidang & Pengendalian Proker",
      prokerUtama: "Sinkronisasi Visi Misi Kabinet, Monitoring Kinerja Departemen, Evaluasi Pencapaian Target Organisasi",
      deskripsi: "Sebagai penggerak utama organisasi, Kepala Bidang bertanggung jawab dalam mengarahkan, mengendalikan, serta memastikan seluruh program kerja di setiap departemen berjalan selaras dengan visi HIPMI.",
      pimpinan: [
        { nama: "Raihan Marzo Yudhistira", jabatan: "Kepala Bidang OKK (Organisasi, Kaderisasi, Keanggotaan)", prodi: "S1 Bisnis Digital, 2024" },
        { nama: "Bintang Putra Angkasa", jabatan: "Kepala Bidang PPB (Pengembangan Potensi Bisnis)", prodi: "S1 Teknik Informatika, 2023" },
        { nama: "Ma’ruf Sarifudin", jabatan: "Kepala Bidang PRD (Pengembangan Riset & Data)", prodi: "S1 Teknik Informatika, 2024" }
      ],
      staf: []
    },
    {
      id: "po",
      posterUrl: "assets/img/feed-hipmi/po_poster.webp",
      kode: "PO",
      nama: "Departemen Pengembangan Organisasi",
      instagramUrl: "https://www.instagram.com/p/DXgYyLNE8cR/",
      fokus: "Penguatan Fondasi Kelembagaan, Standarisasi Sistem & Budaya Kerja",
      prokerUtama: "Upgrading Internal Pengurus, Analisis Beban Kerja, Penyusunan SOP Operasional, Evaluasi Kinerja Berkala",
      deskripsi: "Memperkuat fondasi internal organisasi melalui pengembangan sistem, peningkatan kapasitas, serta pembentukan budaya kerja yang profesional. Memastikan struktur yang solid, adaptif, dan berkelanjutan.",
      pimpinan: [
        { nama: "Luluk Aulia Putri Salma", jabatan: "Kepala Departemen", prodi: "S1 Teknik Logistik, 2024" }
      ],
      staf: [
        { nama: "Muhammad Daffa Tegar Ollivery", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Muhammad Firdaus Ardiansyah", prodi: "S1 Teknik Informatika, 2025" },
        { nama: "Putri Rahma Wati", prodi: "S1 Teknik Informatika, 2024" },
        { nama: "Hesti Purwati", prodi: "S1 Bisnis Digital, 2025" }
      ]
    },
    {
      id: "kaderisasi",
      posterUrl: "assets/img/feed-hipmi/kaderisasi_poster.webp",
      kode: "KDR",
      nama: "Departemen Kaderisasi & Keanggotaan",
      instagramUrl: "https://www.instagram.com/p/DXgRYwQAMW2/",
      fokus: "Regenerasi Terstruktur, Sense of Belonging & Pembinaan Kader",
      prokerUtama: "Perekrutan Anggota Baru, Diklat Kepemimpinan Wirausaha, Database Keanggotaan Terpadu, Mentoring Pengurus",
      deskripsi: "Membangun regenerasi organisasi yang terstruktur dan berkelanjutan melalui proses kaderisasi sistematis. Fokus pada kualitas, loyalitas, serta kesiapan melanjutkan estafet kepemimpinan.",
      pimpinan: [
        { nama: "Siska Yulianti", jabatan: "Kepala Departemen", prodi: "S1 Sistem Informasi, 2024" }
      ],
      staf: [
        { nama: "Cindy Dwi Cahyaningsih", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Hanif Fathur Rohman", prodi: "S1 Bisnis Digital, 2024" },
        { nama: "Aulia Nurussyifa", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Yossika Putra Erlangga", prodi: "S1 Teknik Informatika, 2024" }
      ]
    },
    {
      id: "inkubasi",
      posterUrl: "assets/img/feed-hipmi/inkubasi_poster.webp",
      kode: "INK",
      nama: "Departemen Inkubasi Bisnis",
      instagramUrl: "https://www.instagram.com/p/DXe_-tokw0E/",
      fokus: "Akselerasi Rintisan Bisnis Mahasiswa & Pendampingan Mentor",
      prokerUtama: "Business Pitching Bootcamp, Mentorship Praktisi Usaha, Validasi Ide Produk, Akses Legalitas Usaha Mikro",
      deskripsi: "Berfokus pada pengembangan ide bisnis menjadi realisasi nyata melalui proses inkubasi yang terarah: pembinaan, pendampingan uji pasar, hingga evaluasi kesiapan kompetitif.",
      pimpinan: [
        { nama: "Finsa Annisa", jabatan: "Kepala Departemen", prodi: "S1 Teknik Biomedis, 2024" }
      ],
      staf: [
        { nama: "Agesna Johdan", prodi: "S1 Teknik Telekomunikasi, 2024" },
        { nama: "Angelia Thirstinove", prodi: "S1 Bisnis Digital, 2024" },
        { nama: "Nayaka Shafwan Bagas Adi Prasetyo", prodi: "S1 Sistem Informasi, 2024" },
        { nama: "Muhammad Dafin Susilo Putra", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Naufal Aziz", prodi: "S1 Bisnis Digital, 2025" }
      ]
    },
    {
      id: "enterprise",
      posterUrl: "assets/img/feed-hipmi/enterprise_poster.webp",
      kode: "ENT",
      nama: "Departemen Enterprise",
      instagramUrl: "https://www.instagram.com/p/DXe-ohxEza_/",
      fokus: "Komersialisasi Unit Usaha Mandiri & Pendapatan Organisasi",
      prokerUtama: "Pengelolaan Merchandise Kampus, Unit Bisnis Kantin/Event, Market Day Partnership, Revenue Sharing",
      deskripsi: "Menjalankan dan mengembangkan unit usaha organisasi sebagai wujud implementasi nyata kewirausahaan mahasiswa, menciptakan perputaran nilai ekonomi mandiri yang berkelanjutan.",
      pimpinan: [
        { nama: "Almas Mustika Putri Ramadhani", jabatan: "Kepala Departemen", prodi: "S1 Bisnis Digital, 2024" }
      ],
      staf: [
        { nama: "Aulia Zulfina Azahra", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Hilman Kanzi", prodi: "S1 Teknik Informatika, 2025" },
        { nama: "Syahda Nur Lathifah", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Nadya Salsabila Fauziyah", prodi: "S1 Bisnis Digital, 2025" }
      ]
    },
    {
      id: "harmonisasi",
      posterUrl: "assets/img/feed-hipmi/harmonisasi_poster.webp",
      kode: "HRM",
      nama: "Departemen Harmonisasi Eksternal",
      instagramUrl: "https://www.instagram.com/p/DXe9okZk7og/",
      fokus: "Kemitraan Strategis, Ekosistem HIPMI Banyumas & Relasi Industri",
      prokerUtama: "Kunjungan Industri & BPC HIPMI Banyumas, Forum Kolaborasi Antar Ormawa, Sinergi CSR Perusahaan",
      deskripsi: "Membangun dan menjaga hubungan eksternal dengan pemangku kepentingan kampus, jejaring HIPMI regional Banyumas Raya, instansi swasta/pemerintah, dan mitra strategis.",
      pimpinan: [
        { nama: "Aisyah Akhmad", jabatan: "Kepala Departemen", prodi: "S1 Teknik Informatika, 2024" }
      ],
      staf: [
        { nama: "Rifky Dzaky Eka Saputra", prodi: "S1 Teknik Informatika, 2025" },
        { nama: "Muhammad Hanif Baihaqi", prodi: "S1 Rekayasa Perangkat Lunak, 2024" },
        { nama: "Nefiesta Fatmaidy Udiya", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Nasywa Aulia Putri", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Artika Ayu Permana", prodi: "S1 Bisnis Digital, 2025" }
      ]
    },
    {
      id: "medkraf",
      posterUrl: "assets/img/feed-hipmi/medkraf_poster.webp",
      kode: "MDK",
      nama: "Departemen Media Kreatif",
      instagramUrl: "https://www.instagram.com/p/DXezjEtE0Ll/",
      fokus: "Identitas Visual, Visual Branding Digital & Media Publikasi",
      prokerUtama: "Desain Konten Feed & Reels Instagram, Liputan Multimedia Kegiatan, Brand Guidelines Kabinet Artha Jayana",
      deskripsi: "Membangun identitas visual dan branding organisasi melalui karya multimedia yang kreatif, profesional, serta memperkuat reputasi UKM HIPMI PT Telkom University Purwokerto.",
      pimpinan: [
        { nama: "Azevedo Ardhani", jabatan: "Kepala Departemen", prodi: "S1 Bisnis Digital, 2024" }
      ],
      staf: [
        { nama: "Najla Azizah Daniel", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Naqa Halim Arya Putra", prodi: "S1 Bisnis Digital, 2024" },
        { nama: "M. Devfan Adefrid Sutopo", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Meisya Ajeng Deswari", prodi: "S1 Bisnis Digital, 2024" },
        { nama: "Salsabilla Nurul Hassanah", prodi: "S1 Teknik Informatika, 2024" },
        { nama: "Apriani Putri", prodi: "S1 Rekayasa Perangkat Lunak, 2025" },
        { nama: "Zahra Primanda Shafira", prodi: "S1 Bisnis Digital, 2025" }
      ]
    },
    {
      id: "ti",
      posterUrl: "assets/img/feed-hipmi/ti_poster.webp",
      kode: "TI",
      nama: "Departemen Teknologi Informasi",
      instagramUrl: "https://www.instagram.com/p/DXeZqELkwbF/",
      fokus: "Rekayasa Perangkat Lunak, Portal Digital & Modernisasi Sistem",
      prokerUtama: "Pengembangan Website Resmi & Microsite MUBES, Integrasi Form Registrasi Digital, Pemeliharaan Cloud Server",
      deskripsi: "Bertanggung jawab atas pengelolaan arsitektur teknologi digital, portal web, basis data terintegrasi, dan penyediaan infrastruktur digital demi keunggulan operasional organisasi.",
      pimpinan: [
        { nama: "Azaila Dwi Putri Fajarwati", jabatan: "Kepala Departemen", prodi: "S1 Sistem Informasi, 2024" }
      ],
      staf: [
        { nama: "Wafiq Azizah", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Nabilah Syahirah Restuti", prodi: "S1 Bisnis Digital, 2025" },
        { nama: "Muhammad Omar Nadiv", prodi: "S1 Teknik Informatika, 2024" },
        { nama: "Hilkia Farrel Azaria", prodi: "S1 Teknik Informatika, 2025" }
      ]
    }
  ],

  // Alias untuk kompatibilitas renderer mubes-hipmi.html
  get departemenLpj() {
    return this.departemenKabinet;
  },

  // Rundown Sidang Interaktif
  rundown: [
    { id: 1, waktu: "08.00–08.45", durasi: "45 Menit", sesi: "Registrasi & Verifikasi", badge: "Pleno Terbuka", uraian: "Registrasi delegasi ormawa, verifikasi presensi anggota aktif, dan coffee break pagi.", pic: "Sekretariat & Keamanan" },
    { id: 2, waktu: "08.45–09.05", durasi: "20 Menit", sesi: "Upacara Pembukaan", badge: "Seremonial", uraian: "Menyanyikan Lagu Kebangsaan Indonesia Raya, Mars Telkom University, Hymne HIPMI & Mars HIPMI.", pic: "Sie Acara & Dirigen" },
    { id: 3, waktu: "09.05–09.15", durasi: "10 Menit", sesi: "Laporan Ketua Pelaksana", badge: "Laporan", uraian: "Laporan kesiapan sidang dan pertanggungjawaban kepanitiaan oleh Yossika Putra Erlangga.", pic: "Ketua Pelaksana" },
    { id: 4, waktu: "09.15–09.30", durasi: "15 Menit", sesi: "Sambutan Ketua Umum HIPMI", badge: "Pidato", uraian: "Pidato refleksi kepengurusan satu periode oleh Raden Aurel Aditya Kusumawaningyun.", pic: "Ketua Umum" },
    { id: 5, waktu: "09.30–09.55", durasi: "25 Menit", sesi: "Sambutan Pembina & Pimpinan Kampus", badge: "Pengesahan", uraian: "Apresiasi Pembina dan sambutan pembukaan resmi oleh Pimpinan Telkom University Purwokerto.", pic: "Pimpinan & Pembina" },
    { id: 6, waktu: "09.55–10.10", durasi: "15 Menit", sesi: "Doa & Dokumentasi Resmi", badge: "Dokumentasi", uraian: "Pembacaan doa kelancaran sidang bersama seluruh hadirin dilanjutkan foto bersama.", pic: "Sie Acara & Medkraf" },
    { id: 7, waktu: "10.10–11.00", durasi: "50 Menit", sesi: "Sidang Pleno I (Agenda & Tatib)", badge: "Sidang Pleno", uraian: "Pembahasan klausul tata tertib persidangan, hak suara, mekanisme interupsi, dan kuorum.", pic: "Presidium Sementara" },
    { id: 8, waktu: "11.00–11.20", durasi: "20 Menit", sesi: "Pemilihan Presidium Tetap", badge: "Suksesi", uraian: "Musyawarah pemilihan tiga Presidium Sidang Tetap dan serah terima palu sidang resmi.", pic: "Presidium Tetap" },
    { id: 9, waktu: "11.20–12.00", durasi: "40 Menit", sesi: "Sidang Pleno II (Pembacaan LPJ Bag. 1)", badge: "Akuntabilitas", uraian: "Pemamparan Laporan Pertanggungjawaban BPH dan Departemen Kabinet Artha Jayana.", pic: "BPH & Seluruh Kadep" },
    { id: 10, waktu: "12.00–13.00", durasi: "60 Menit", sesi: "ISHOMA (Istirahat, Sholat, Makan)", badge: "Istirahat", uraian: "Sholat Dzuhur berjamaah dan makan siang bersama di area selasar aula.", pic: "Sie Konsumsi" },
    { id: 11, waktu: "13.00–14.00", durasi: "60 Menit", sesi: "Sidang Pleno II (Pandangan & Pengesahan LPJ)", badge: "Pengesahan", uraian: "Penyampaian pandangan umum fraksi, tanggapan BPH, dan pengesahan LPJ secara aklamasi.", pic: "Presidium Tetap" },
    { id: 12, waktu: "14.00–14.25", durasi: "25 Menit", sesi: "Demisioner & Piagam Apresiasi", badge: "Seremonial", uraian: "Pernyataan demisioner pengurus Kabinet Artha Jayana dan penyerahan piagam apresiasi.", pic: "SC & Pembina HIPMI" },
    { id: 13, waktu: "14.25–15.15", durasi: "50 Menit", sesi: "Sidang Pleno III (Sidang Komisi)", badge: "Komisi", uraian: "Pemaparan hasil Komisi A (AD/ART), Komisi B (Pedoman Organisasi), dan Komisi C (Rekomendasi Proker).", pic: "Presidium & Komisi" },
    { id: 14, waktu: "15.15–15.35", durasi: "20 Menit", sesi: "Coffee Break & Sholat Ashar", badge: "Istirahat", uraian: "Sholat Ashar dan snack sore di area hospitality.", pic: "Sie Konsumsi" },
    { id: 15, waktu: "15.35–16.35", durasi: "60 Menit", sesi: "Sidang Pleno IV (Debat & Pemilihan Ketum)", badge: "Suksesi", uraian: "Uji kelayakan, debat visi-misi calon ketua umum baru, dan pemungutan suara formatur.", pic: "Panlih & Presidium" },
    { id: 16, waktu: "16.35–17.00", durasi: "25 Menit", sesi: "Penetapan Ketua Umum Terpilih", badge: "Ketetapan", uraian: "Penandatanganan berita acara penetapan Ketua Umum definitif Periode 2026/2027.", pic: "Presidium & Ketum Terpilih" },
    { id: 17, waktu: "17.00–17.30", durasi: "30 Menit", sesi: "Serah Terima Pataka & Penutupan", badge: "Penutupan", uraian: "Penyerahan Pataka bendera kebesaran HIPMI, pidato perdana formatur, dan ketukan palu penutup.", pic: "Presidium Sidang & MC" }
  ],

  // Susunan Panitia Lengkap
  susunanPanitia: {
    pelindung: { jabatan: "Direktur Telkom University Purwokerto", nama: "Dr. Tenia Wahyuningrum, S.Kom., M.T.", nip: "07820045-1" },
    pengarah: { jabatan: "Wakil Direktur Bidang Akademik & Riset", nama: "Dr. Catur Nugroho, S.Sos., M.I.Kom.", nip: "14780035-1" },
    penanggungJawab: { jabatan: "Kepala Urusan Kemahasiswaan, Karier, dan Alumni", nama: "Kadarisman, S.Si.", nip: "22960016" },
    pembina: { jabatan: "Pembina UKM HIPMI PT Tel-U Purwokerto", nama: "Kurnia Indah Sumunar, S.E., M.S.Ak", nip: "25910001" },
    ketuaPanitiaPengarah: { jabatan: "Ketua Panitia Pengarah", nama: "Faizah, S.TP., M.Si.", nip: "0608129203" },
    steeringCommittee: [
      { nama: "Raden Aurel Aditya Kusumawaningyun", nim: "103112430267", prodi: "S1 Teknik Informatika, 2024" },
      { nama: "Raihan Marzo Yudhistira", nim: "104062430159", prodi: "S1 Bisnis Digital, 2024" },
      { nama: "Bintang Putra Angkasa", nim: "103112330012", prodi: "S1 Teknik Informatika, 2023" }
    ],
    ketuaPelaksana: { nama: "Yossika Putra Erlangga", nim: "103112430026", prodi: "S1 Teknik Informatika, 2024" },
    sekretaris: [
      { nama: "Salumita Ardiana", nim: "109092530004", prodi: "S1 Rekayasa Perangkat Lunak, 2025" }
    ],
    bendahara: [
      { nama: "Nuriyatul Wafiroh (Afi)", nim: "104062400057", prodi: "S1 Teknik Logistik, 2024" }
    ],
    divisi: [
      {
        namaDivisi: "Kaderisasi & Keanggotaan (KK)",
        koordinator: "Siska Yulianti (102092400041)",
        anggota: ["Cindy Dwi Cahyaningsih", "Aulia Nurussyifa (Syifa)", "Hanif Fathur Rohman"],
        tugas: [
          "Verifikasi presensi dan database keanggotaan aktif UKM HIPMI PT",
          "Mengelola registrasi delegasi dan hak suara anggota sidang MUBES",
          "Memfasilitasi forum apresiasi kader dan pengenalan kepengurusan"
        ]
      },
      {
        namaDivisi: "Pengembangan Organisasi (PO)",
        koordinator: "Muhammad Firdaus Ardiansyah (109082500126)",
        anggota: ["Putri Rahma Wati"],
        tugas: [
          "Menyusun draf tata tertib persidangan dan evaluasi AD/ART organisasi",
          "Menyiapkan konsideran ketetapan sidang dan berita acara serah terima",
          "Mendampingi Presidium Sidang dalam tata kelola persidangan"
        ]
      },
      {
        namaDivisi: "Inkubasi Bisnis (IB)",
        koordinator: "Finsa Annisa (105022400015)",
        anggota: ["Nayaka Shafwan Bagas Adi Prasetyo"],
        tugas: [
          "Menyiapkan materi evaluasi program kerja inkubasi dan pitching",
          "Mengelola koordinasi kebutuhan konsumsi dan akomodasi tamu persidangan",
          "Membantu kelancaran teknis operasional forum sidang pleno"
        ]
      },
      {
        namaDivisi: "Enterprise",
        koordinator: "Almas Mustika Putri Ramadhani (104062400069)",
        anggota: ["Syahda Nur Lathifah"],
        tugas: [
          "Pengelolaan merchandise resmi MUBES, plakat penghargaan, dan tanda terima",
          "Mengatur inventaris perlengkapan sidang, banner panggung, dan meja presidium",
          "Memastikan seluruh logistik fisik aula tertata rapi"
        ]
      },
      {
        namaDivisi: "Harmonisasi Eksternal (Harex)",
        koordinator: "Nefiesta Fatmaidy Udiya (Nafiesta)",
        anggota: [],
        tugas: [
          "Distribusi surat undangan resmi kepada Direktorat, Ormawa kampus, dan alumni",
          "Protokoler penyambutan tamu VIP civitas akademika dan pembina",
          "Menjaga ketertiban ruang sidang dan alur keluar-masuk delegasi"
        ]
      },
      {
        namaDivisi: "Media Kreatif (Medkraf)",
        koordinator: "M. Devfan Adefrid Sutopo (Defvan)",
        anggota: ["Najla Azizah Daniel", "Zahra Primanda Shafira (Fira)"],
        tugas: [
          "Desain visual backdrop panggung aula 4x3 meter dan materi presentasi",
          "Dokumentasi fotografi, videografi, dan siaran pers publikasi MUBES",
          "Pengelolaan live feed visual persidangan dan publikasi media sosial resmi"
        ]
      },
      {
        namaDivisi: "Teknologi Informasi (TI)",
        koordinator: "Divisi TI HIPMI",
        anggota: [],
        tugas: [
          "Pengembangan dan pemeliharaan portal digital resmi MUBES",
          "Pengelolaan sistem presensi barcode dan live rekapitulasi formatur",
          "Dukungan teknis audio visual, proyektor, dan jaringan internet aula"
        ]
      }
    ]
  },

  // Rencana Anggaran Biaya (RAB) Lengkap
  rab: {
    total: 2000000,
    alokasiKemahasiswaan: 800000,
    kategori: [
      {
        nama: "1. Kesekretariatan & Persidangan",
        subtotal: 350000,
        persentase: 17.5,
        items: [
          { no: "1.1", uraian: "Kertas HVS A4 80gr untuk Draf Tatib & LPJ", volume: "2 Rim", satuan: 55000, jumlah: 110000, catatan: "Kemahasiswaan (Rp800k)" },
          { no: "1.2", uraian: "Tinta Printer & Penggandaan Berkas Sidang", volume: "1 Paket", satuan: 140000, jumlah: 140000, catatan: "Kemahasiswaan (Rp800k)" },
          { no: "1.3", uraian: "Map Folio & Konsideran Ketetapan Sidang", volume: "1 Pack", satuan: 40000, jumlah: 40000, catatan: "Kas Internal" },
          { no: "1.4", uraian: "Stempel Panitia MUBES & Bak Tinta", volume: "1 Paket", satuan: 60000, jumlah: 60000, catatan: "Kas Internal" }
        ]
      },
      {
        nama: "2. Perlengkapan & Sarana Aula",
        subtotal: 450000,
        persentase: 22.5,
        items: [
          { no: "2.1", uraian: "Banner Backdrop Panggung Aula 4x3 Meter", volume: "1 Paket", satuan: 250000, jumlah: 250000, catatan: "Kemahasiswaan (Rp800k)" },
          { no: "2.2", uraian: "Palu Sidang & Perlengkapan Presidium", volume: "1 Set", satuan: 100000, jumlah: 100000, catatan: "Kas Internal" },
          { no: "2.3", uraian: "Baterai Mic Wireless & Trash Bag Pilah", volume: "1 Paket", satuan: 100000, jumlah: 100000, catatan: "Kas Internal" }
        ]
      },
      {
        nama: "3. Konsumsi & Hospitality",
        subtotal: 750000,
        persentase: 37.5,
        items: [
          { no: "3.1", uraian: "Makan Siang Presidium, Tamu Undangan & Pembina", volume: "15 Kotak", satuan: 20000, jumlah: 300000, catatan: "Kemahasiswaan (Rp800k)" },
          { no: "3.2", uraian: "Snack Box Pagi & Coffee Break Pembukaan", volume: "35 Kotak", satuan: 10000, jumlah: 350000, catatan: "Iuran Panitia" },
          { no: "3.3", uraian: "Air Mineral Botol VIP & Galon Refill Aula", volume: "1 Paket", satuan: 100000, jumlah: 100000, catatan: "Kas Internal" }
        ]
      },
      {
        nama: "4. Publikasi, Dokumentasi & Sertifikat",
        subtotal: 300000,
        persentase: 15.0,
        items: [
          { no: "4.1", uraian: "Sertifikat Panitia & Pengurus Demisioner", volume: "40 Lembar", satuan: 5000, jumlah: 200000, catatan: "Iuran Panitia" },
          { no: "4.2", uraian: "ID Card Lanyard Panitia Pelaksana", volume: "20 Pcs", satuan: 5000, jumlah: 100000, catatan: "Iuran Panitia" }
        ]
      },
      {
        nama: "5. Dana Taktis Operasional",
        subtotal: 150000,
        persentase: 7.5,
        items: [
          { no: "5.1", uraian: "Kotak P3K, Obat Ringan & Kebutuhan Darurat", volume: "1 Paket", satuan: 150000, jumlah: 150000, catatan: "Kas Internal" }
        ]
      }
    ],
    pemasukan: [
      { no: 1, sumber: "Dana Kemahasiswaan Telkom University Purwokerto", volume: 1, satuan: "Paket", harga: 800000, jumlah: 800000, keterangan: "Kemahasiswaan (Acc)" },
      { no: 2, sumber: "Kas Internal UKM HIPMI PT Telkom Purwokerto", volume: 1, satuan: "Paket", harga: 550000, jumlah: 550000, keterangan: "Kas Internal" },
      { no: 3, sumber: "Iuran Kontribusi Mandiri Panitia Pelaksana", volume: 1, satuan: "Paket", harga: 650000, jumlah: 650000, keterangan: "Iuran Panitia" }
    ],
    totalPemasukan: 2000000,
    totalPengeluaran: 2000000,
    selisih: 0
  },

  // Mitigasi Risiko
  mitigasiRisiko: [
    {
      id: "R-01",
      kategori: "Alur & Tata Tertib Persidangan",
      level: "Sedang",
      risiko: "Perdebatan Interupsi Alot & Potensi Deadlock Fraksi",
      dampak: "Jadwal sidang mundur, ketegangan antar fraksi pengusung calon formatur.",
      mitigasi: [
        "Penerapan SOP Tata Tertib persidangan baku dengan batasan waktu interupsi 2 menit",
        "Penunjukan 3 Presidium Sidang berkompeten dan berwibawa tinggi",
        "Mediasi informal oleh Steering Committee (SC) jika terjadi kebuntuan musyawarah"
      ]
    },
    {
      id: "R-02",
      kategori: "Kelistrikan & Sarana Audio Visual",
      level: "Kritis",
      risiko: "Padam Listrik Kampus & Lonjakan Beban Audio/Visual",
      dampak: "Audio mati, tampilan layar proyektor padam, proses rekapitulasi terhenti.",
      mitigasi: [
        "Koordinasi resmi dengan Bagian Logistik Sarpras kampus Telkom University",
        "Penyediaan genset otomatis siap pakai dan UPS pada server/laptop operator",
        "Penempatan alat pemadam api ringan (APAR) di dekat panel listrik utama"
      ]
    },
    {
      id: "R-03",
      kategori: "Konsumsi & Kebugaran Fisik",
      level: "Sedang",
      risiko: "Keterlambatan Distribusi Katering & Peserta Kelelahan",
      dampak: "Konsentrasi peserta buyar, gangguan maag/asam lambung di tengah sidang.",
      mitigasi: [
        "Sampling vendor katering terpercaya dengan garansi pengiriman 1 jam sebelum ISHOMA",
        "Penyediaan posko P3K dengan obat maag, oksigen portable, dan air galon berkala",
        "Pengaturan ventilasi pendingin AC aula secara optimal di suhu 22–24°C"
      ]
    },
    {
      id: "R-04",
      kategori: "Keamanan & Sterilisasi Ruang",
      level: "Rendah",
      risiko: "Penyusup Liar & Kehilangan Barang Bawaan Peserta",
      dampak: "Kegaduhan di dalam ruangan dan hilangnya aset pribadi peserta sidang.",
      mitigasi: [
        "Pemberlakuan ID card resmi ber-barcode warna khusus bagi panitia dan delegasi",
        "Pengawasan ketat pada pintu masuk utama oleh tim keamanan panitia",
        "Koordinasi terpadu dengan satuan pengamanan (Satpam) Telkom University Purwokerto"
      ]
    },
    {
      id: "R-05",
      kategori: "Pemungutan Suara & Integritas Data",
      level: "Tinggi",
      risiko: "Sengketa Rekapitulasi Suara & Surat Suara Rusak",
      dampak: "Keabsahan pemilihan Ketua Umum dipertanyakan, memicu gugatan hasil sidang.",
      mitigasi: [
        "Surat suara dicetak dengan nomor seri rahasia dan dibubuhi stempel basah panlih",
        "Penghitungan suara disaksikan oleh saksi mandiri dari masing-masing calon ketua",
        "Tampilan rekapitulasi diproyeksikan langsung secara transparan di layar panggung utama"
      ]
    },
    {
      id: "R-06",
      kategori: "Dokumentasi & Konsideran Hukum",
      level: "Tinggi",
      risiko: "Draf Berkas Konsideran Ketetapan Tertinggal / Hilang",
      dampak: "Hambatan dalam penerbitan Surat Keputusan (SK) pelantikan oleh Rektorat.",
      mitigasi: [
        "Penyimpanan ganda hardcopy bertanda tangan basah dalam map arsip arsiparis",
        "Digitalisasi PDF real-time yang langsung diunggah ke repositori cloud resmi HIPMI",
        "Penyerahan salinan resmi langsung kepada Ka.Ur Kemahasiswaan pasca acara"
      ]
    }
  ]
};

// Pastikan dapat diakses baik di browser maupun di Node.js
if (typeof window !== 'undefined') {
  window.MUBES_DATA = MUBES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUBES_DATA;
}
