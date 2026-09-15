/**
 * MUBES_DATA — Single Source of Truth
 * Musyawarah Besar (MUBES) UKM HIPMI PT Telkom University Purwokerto
 * Digunakan oleh:
 * 1. Halaman Interaktif (mubes-hipmi.html)
 * 2. Dokumen Proposal Formal Print-Ready (proposal-mubes-hipmi.html)
 */

const MUBES_DATA = {
  meta: {
    namaKegiatan: "Musyawarah Besar (MUBES) Himpunan Pengusaha Muda Indonesia (HIPMI) Perguruan Tinggi Telkom University Purwokerto",
    namaSingkat: "MUBES HIPMI PT Tel-U Purwokerto",
    periode: "2026/2027",
    tahun: "2026",
    statusDraft: "DRAFT PROPOSAL — SIAP REVIEW & PENGESAHAN",
    ketuaPelaksana: "Yossika Putra Erlangga",
    nimKetuaPelaksana: "[ISI/SESUAIKAN: 2311102xxx]",
    ketuaUmumHipmi: "[ISI/SESUAIKAN: Nama Ketua Umum HIPMI PT]",
    pembinaUkm: "[ISI/SESUAIKAN: Nama Dosen Pembina UKM HIPMI / Bagian Kemahasiswaan]",
    nipPembina: "[ISI/SESUAIKAN: NIP/NIDN Pembina]",
    tanggalSurat: "[ISI/SESUAIKAN: Banyumas, DD MMMM 2026]",
    nomorSuratPeminjaman: "[ISI/SESUAIKAN: 012/PAN-MUBES/HIPMI-TUP/V/2026]",
    nomorSuratUndangan: "[ISI/SESUAIKAN: 014/PAN-MUBES/HIPMI-TUP/V/2026]",
    targetPeserta: "120 Peserta (Pengurus Periode Berjalan, Demisioner, Anggota Aktif, Calon Pengurus, dan Delegasi Tamu)",
  },

  waktuTempat: {
    tempat: "Aula Telkom University Purwokerto",
    alamat: "Jl. D.I. Panjaitan No.128, Karangreja, Purwokerto Selatan, Banyumas, Jawa Tengah 53147",
    hariTanggal: "[ISI/SESUAIKAN: Sabtu, 16 Mei 2026]",
    waktuMulai: "08.00 WIB",
    waktuSelesai: "17.45 WIB",
    targetDurasiTotal: "9 Jam 45 Menit (termasuk istirahat ISHOMA)",
    countdownTarget: "2026-05-16T08:00:00+07:00",
    estimasiPeserta: "100 - 120 Orang",
  },

  temaOptions: [
    {
      id: 1,
      isDefault: true,
      judul: "Navigating Synergy: Melahirkan Pemimpin Pengusaha Muda yang Adaptif, Akuntabel, dan Berkelanjutan",
      tagline: "Sinergi Nyata, Akuntabilitas Teruji, Regenerasi Berdaya Saing",
      deskripsi: "Menekankan pentingnya kolaborasi antar departemen, pertanggungjawaban program kerja yang transparan, dan kesiapan suksesi kepengurusan baru di era wirausaha digital."
    },
    {
      id: 2,
      isDefault: false,
      judul: "Ignite the Spirit: Restrukturisasi Visi, Membangun Ekosistem Wirausaha Kampus Berdaya Saing",
      tagline: "Nyalakan Semangat Inovasi Menuju Kemandirian Organisasi",
      deskripsi: "Fokus pada evaluasi mendalam arah strategis organisasi guna melahirkan kurikulum kaderisasi wirausaha yang relevan dengan kebutuhan mahasiswa Telkom University."
    },
    {
      id: 3,
      isDefault: false,
      judul: "Revitalisasi Sinergi: Transformasi Pengurus Menuju HIPMI PT Tel-U yang Mandiri dan Progresif",
      tagline: "Evaluasi Terukur, Regulasi Solid, Suksesi Bermartabat",
      deskripsi: "Menitikberatkan pada penguatan AD/ART internal, pembenahan tata kelola persidangan, serta estafet kepemimpinan yang berintegritas tinggi."
    }
  ],

  latarBelakang: [
    "Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT) Telkom University Purwokerto merupakan wadah strategis bagi mahasiswa dalam menumbuhkembangkan jiwa kepemimpinan, kapabilitas wirausaha, serta jejaring bisnis profesional di lingkup kampus maupun regional Banyumas Raya. Seiring berjalannya roda organisasi selama satu periode penuh, dinamika program kerja dan dedikasi seluruh pengurus perlu diuji, diapresiasi, dan dievaluasi secara terstruktur.",
    "Musyawarah Besar (MUBES) merupakan pemegang kekuasaan dan forum pengambilan keputusan tertinggi dalam struktur organisasi UKM HIPMI PT Telkom University Purwokerto. Forum ini bukan sekadar seremoni serah terima jabatan, melainkan momentum konstitusional krusial yang mengemban tugas pokok: mengevaluasi laporan pertanggungjawaban (LPJ) per departemen secara terukur, menetapkan pedoman peraturan organisasi serta tata tertib persidangan, memberikan apresiasi atas dedikasi pengurus periode berjalan, serta memilih dan menetapkan formatur kepengurusan baru.",
    "Berbeda dari evaluasi internal biasa, MUBES kali ini menitikberatkan pada Laporan Pertanggungjawaban (LPJ) berbasis capaian objektif per departemen, meliputi realisasi program kerja, efisiensi anggaran, hingga evaluasi tantangan riil di lapangan. Hasil kajian ini akan menjadi landasan rekomendasi strategis bagi pengurus periode berikutnya.",
    "Mengingat urgensi dan skala agenda yang melibatkan seluruh elemen organisasi, alumni/demisioner, serta tamu kehormatan civitas akademika, pelaksanaan MUBES bertempat di Aula Kampus Telkom University Purwokerto dengan persiapan matang, kepanitiaan yang solid, serta perencanaan anggaran yang transparan."
  ],

  tujuan: [
    {
      no: 1,
      poin: "Laporan Pertanggungjawaban (LPJ) Per Departemen",
      uraian: "Memaparkan, menguji, dan mengesahkan LPJ setiap departemen kepengurusan periode berjalan secara transparan dan akuntabel."
    },
    {
      no: 2,
      poin: "Apresiasi Kinerja Pengurus Periode Berjalan",
      uraian: "Memberikan penghargaan dan apresiasi resmi kepada jajaran pengurus, koordinator divisi, dan staf atas dedikasi serta realisasi program kerja sepanjang periode kepengurusan."
    },
    {
      no: 3,
      poin: "Penetapan Presidium Sidang & Tata Tertib MUBES",
      uraian: "Memilih Presidium Sidang definitif dan menetapkan tata tertib persidangan sebagai pedoman konstitusional jalannya MUBES."
    },
    {
      no: 4,
      poin: "Penyusunan Aturan Organisasi & Rekomendasi Kerja",
      uraian: "Mengkaji AD/ART, menyempurnakan pedoman internal organisasi, serta merumuskan rekomendasi arah strategis bagi kepengurusan selanjutnya."
    },
    {
      no: 5,
      poin: "Pemilihan & Penetapan Ketua Umum / Formatur Baru",
      uraian: "Melaksanakan suksesi kepemimpinan yang demokratis, berintegritas, dan menjunjung tinggi nilai-nilai persaudaraan pengusaha muda (Pejuang Pengusaha, Pengusaha Pejuang)."
    }
  ],

  manfaat: {
    organisasi: [
      "Menjamin kesinambungan siklus estafet kepemimpinan UKM HIPMI PT Telkom University Purwokerto.",
      "Menciptakan transparansi dan akuntabilitas tata kelola organisasi melalui LPJ per departemen yang terdokumentasi rapi.",
      "Menyediakan dokumen rekomendasi strategis sebagai kompas kerja bagi jajaran pengurus periode berikutnya."
    ],
    anggota: [
      "Sebagai sarana pembelajaran demokrasi, kepemimpinan, dan etika persidangan formal bagi kader mahasiswa.",
      "Membuka ruang partisipasi aktif anggota untuk menyampaikan aspirasi dan kontribusi pemikiran langsung terhadap masa depan organisasi.",
      "Mempererat jejaring kekeluargaan antar-angkatan, anggota aktif, dan para demisioner HIPMI Tel-U."
    ],
    kampus: [
      "Menegaskan eksistensi UKM HIPMI PT sebagai organisasi kemahasiswaan yang mandiri, tertib administratif, dan berprestasi.",
      "Mendukung indikator kinerja universitas dalam melahirkan lulusan berjiwa entrepreneurship dan kepemimpinan adaptif.",
      "Menjaga iklim organisasi kemahasiswaan di lingkungan Telkom University Purwokerto tetap sehat dan dinamis."
    ]
  },

  departemenLpj: [
    {
      kode: "BPH",
      nama: "Badan Pengurus Harian (BPH Inti)",
      fokus: "Arah kebijakan strategis, administrasi persuratan umum, tata kelola keuangan, dan relasi institusional universitas.",
      prokerUtama: "Rapat Kerja Tahunan, Pengelolaan Kas Organisasi, Supervisi Program Kerja Antar-Departemen."
    },
    {
      kode: "OKK",
      nama: "Departemen Organisasi, Kaderisasi & Keanggotaan (OKK)",
      fokus: "Rekrutmen anggota baru, penjenjangan kaderisasi wirausaha, pembinaan integritas anggota, dan database anggota HIPMI.",
      prokerUtama: "Open Recruitment HIPMI 2026, Masa Bimbingan Kader Wirausaha, Database Membership & Keaktifan."
    },
    {
      kode: "EKRAF",
      nama: "Departemen Pengembangan Bisnis & Ekonomi Kreatif (Ekraf)",
      fokus: "Inkubasi ide bisnis anggota, pengadaan merchant/merchandise organisasi, dan fasilitasi bazar/event kewirausahaan.",
      prokerUtama: "Market Day & Entrepreneur Booth, HIPMI Official Merch, Klinik Mentoring Ide Bisnis Mahasiswa."
    },
    {
      kode: "HUMAS",
      nama: "Departemen Hubungan Masyarakat & Kemitraan Eksternal",
      fokus: "Membangun jejaring dengan BPC HIPMI Banyumas, sponsor, instansi pemerintah, dan komunitas bisnis luar kampus.",
      prokerUtama: "Company Visit / Industri Tour, Sinergi BPC HIPMI Banyumas, Partnership Acara Kampus."
    },
    {
      kode: "MEDKREATIF",
      nama: "Departemen Media, Branding & Informasi Kreatif (Medkraf)",
      fokus: "Pengelolaan identitas visual, media sosial resmi Instagram/LinkedIn, dokumentasi kegiatan, dan publikasi digital.",
      prokerUtama: "Social Media Branding Campaign, Liputan & Dokumentasi Event, Konten Edukasi Bisnis Mingguan."
    }
  ],

  rundown: [
    {
      waktu: "07.30 - 08.00",
      durasi: "30 menit",
      sesi: "Registrasi & Pra-Acara",
      kegiatan: "Registrasi peserta, pembagian berkas persidangan, snack pagi, dan pemutaran video kilas balik HIPMI Tel-U",
      pic: "Divisi Kesekretariatan & Konsumsi",
      kategori: "persiapan"
    },
    {
      waktu: "08.00 - 08.45",
      durasi: "45 menit",
      sesi: "Opening Ceremony",
      kegiatan: "Menyanyikan Lagu Indonesia Raya, Mars HIPMI, sambutan Ketua Panitia (Yossika), sambutan Ketua Umum HIPMI PT, sambutan Pembina Kemahasiswaan & Pembukaan Resmi",
      pic: "Divisi Acara & MC",
      kategori: "pembukaan"
    },
    {
      waktu: "08.45 - 09.30",
      durasi: "45 menit",
      sesi: "Sidang Pleno I",
      kegiatan: "Pembacaan dan Pengesahan Agenda Acara serta Tata Tertib Sidang MUBES, dilanjutkan pemilihan Presidium Sidang Definitif",
      pic: "Presidium Sidang Sementara / Divisi Acara",
      kategori: "sidang"
    },
    {
      waktu: "09.30 - 11.45",
      durasi: "135 menit",
      sesi: "Sidang Pleno II (LPJ Departemen)",
      kegiatan: "Penyampaian Laporan Pertanggungjawaban (LPJ) per Departemen: BPH, OKK, Ekraf, Humas & Kemitraan, Media Kreatif, dilanjutkan pandangan umum dan tanya jawab peserta",
      pic: "Presidium Sidang Definitif & Seluruh Kadep",
      kategori: "lpj"
    },
    {
      waktu: "11.45 - 12.15",
      durasi: "30 menit",
      sesi: "Pemberian Apresiasi Pengurus",
      kegiatan: "Penyerahan sertifikat & cinderamata apresiasi kepada seluruh jajaran pengurus, koordinator departemen, dan staf periode berjalan",
      pic: "Ketua Panitia & Ketua Umum",
      kategori: "apresiasi"
    },
    {
      waktu: "12.15 - 13.15",
      durasi: "60 menit",
      sesi: "ISHOMA (Istirahat, Sholat, Makan)",
      kegiatan: "Istirahat siang, sholat dzuhur berjamaah, dan makan siang bersama di area selasar Aula",
      pic: "Divisi Konsumsi & Perlengkapan",
      kategori: "istirahat"
    },
    {
      waktu: "13.15 - 14.45",
      durasi: "90 menit",
      sesi: "Sidang Pleno III (Sidang Komisi)",
      kegiatan: "Pembahasan Komisi A (AD/ART & Regulasi Organisasi), Komisi B (Garis Besar Haluan Program Kerja & Rekomendasi Masa Depan), serta pleno pengesahan hasil komisi",
      pic: "Presidium Sidang & Ketua Komisi",
      kategori: "sidang"
    },
    {
      waktu: "14.45 - 16.30",
      durasi: "105 menit",
      sesi: "Sidang Pleno IV (Suksesi & Pemilihan)",
      kegiatan: "Verifikasi berkas calon Ketua Umum, penyampaian visi misi calon, uji panelis/tanya jawab terbuka, musyawarah mufakat / pemungutan suara pemilihan Ketua Umum baru",
      pic: "Presidium Sidang & Panitia Pemilihan",
      kategori: "pemilihan"
    },
    {
      waktu: "16.30 - 17.15",
      durasi: "45 menit",
      sesi: "Pleno V (Pengesahan & Serah Terima)",
      kegiatan: "Pembacaan Surat Keputusan (SK) Pengesahan Ketua Umum Terpilih, prosesi serah terima pataka bendera HIPMI, serta pidato perdana Ketua Umum baru",
      pic: "Presidium Sidang & BPH",
      kategori: "pelantikan"
    },
    {
      waktu: "17.15 - 17.45",
      durasi: "30 menit",
      sesi: "Closing Ceremony & Dokumentasi",
      kegiatan: "Doa penutup, ucapan selamat dari seluruh peserta, foto bersama seluruh jajaran delegasi di panggung Aula, dan ramah tamah",
      pic: "Divisi Acara & Dokumentasi",
      kategori: "penutupan"
    }
  ],

  susunanPanitia: {
    pengarah: [
      { jabatan: "Pelindung", nama: "[ISI/SESUAIKAN: Rektor / Wakil Rektor Bidang Kemahasiswaan Tel-U Purwokerto]" },
      { jabatan: "Penasihat / Pembina", nama: "[ISI/SESUAIKAN: Dosen Pembina UKM HIPMI PT Telkom University Purwokerto]" },
      { jabatan: "Penanggung Jawab", nama: "[ISI/SESUAIKAN: Nama Ketua Umum HIPMI PT Periode Berjalan]" }
    ],
    bphKepanitiaan: [
      { jabatan: "Ketua Pelaksana", nama: "Yossika Putra Erlangga", nim: "[ISI/SESUAIKAN: 2311102xxx]", roleDesc: "Memimpin koordinasi menyeluruh persiapan, negosiasi perizinan Aula, pengawasan teknis & anggaran, serta bertanggung jawab penuh atas kelancaran MUBES." },
      { jabatan: "Wakil Ketua Pelaksana", nama: "[ISI/SESUAIKAN: Nama Wakil Ketua]", nim: "[ISI/SESUAIKAN: NIM]", roleDesc: "Mendampingi Ketua Pelaksana, memonitor kesiapan logistik lapangan, dan mengkoordinasikan flow internal antar divisi panitia." },
      { jabatan: "Sekretaris I", nama: "[ISI/SESUAIKAN: Nama Sekretaris 1]", nim: "[ISI/SESUAIKAN: NIM]", roleDesc: "Mengelola surat-menyurat resmi, surat peminjaman aula, lembar pengesahan proposal, dan arsip berkas LPJ." },
      { jabatan: "Sekretaris II", nama: "[ISI/SESUAIKAN: Nama Sekretaris 2]", nim: "[ISI/SESUAIKAN: NIM]", roleDesc: "Mencatat notulensi persidangan, menyiapkan draf tata tertib, absensi presensi peserta, dan rangkuman SK keputusan." },
      { jabatan: "Bendahara Pelaksana", nama: "[ISI/SESUAIKAN: Nama Bendahara]", nim: "[ISI/SESUAIKAN: NIM]", roleDesc: "Menyusun rekapitulasi RAB, mengontrol arus kas kepanitiaan, mencatat nota belanja, dan menyusun laporan keuangan kegiatan." }
    ],
    divisi: [
      {
        namaDivisi: "Divisi Acara & Persidangan",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Acara]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]",
          "[ISI/SESUAIKAN: Anggota 3]"
        ],
        tugas: [
          "Menyusun time keeper dan memandu alur rundown dari pembukaan hingga penutupan.",
          "Menyiapkan draft tata tertib sidang, berkas komisi, palu sidang, dan teks janji sumpah pengurus.",
          "Menugaskan Master of Ceremony (MC), pembaca doa, dan dirigen lagu Indonesia Raya & Mars HIPMI."
        ]
      },
      {
        namaDivisi: "Divisi Kesekretariatan",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Kesekretariatan]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]"
        ],
        tugas: [
          "Mencetak bundel draft proposal dan berkas persidangan untuk seluruh peserta & delegasi.",
          "Membuat ID Card kepanitiaan dan kartu suara peserta sidang.",
          "Menyiapkan meja registrasi digital/manual serta mendistribusikan seminar kit / berkas LPJ."
        ]
      },
      {
        namaDivisi: "Divisi Humas & Publikasi",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Humas]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]"
        ],
        tugas: [
          "Menyebarkan surat undangan resmi ke jajaran pengurus, demisioner, BPC HIPMI Banyumas, dan perwakilan Ormawa kampus.",
          "Mempublikasikan countdown dan teaser informasi MUBES di media sosial HIPMI Tel-U.",
          "Menjadi penghubung komunikasi utama dengan pihak eksternal dan tamu kehormatan."
        ]
      },
      {
        namaDivisi: "Divisi Perlengkapan & Logistik (Venue Aula)",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Perlengkapan]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]",
          "[ISI/SESUAIKAN: Anggota 3]"
        ],
        tugas: [
          "Mengawal proses perizinan teknis dan check-in inventaris Aula kampus Tel-U Purwokerto.",
          "Menata layout panggung presidium, bendera merah putih, bendera pataka HIPMI, podium, dan meja registrasi.",
          "Menguji kelistrikan, mic wireless, sound system aula, kabel proyektor HDMI, dan pointer slide presentasi."
        ]
      },
      {
        namaDivisi: "Divisi Konsumsi",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Konsumsi]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]"
        ],
        tugas: [
          "Menyiapkan snack pagi dan kopi/teh untuk sesi pembukaan dan tamu VIP.",
          "Mengkoordinasikan pemesanan, pengecekan ketepatan waktu, dan distribusi makan siang (ISHOMA) untuk seluruh peserta.",
          "Menyediakan air mineral galon/botol di meja presidium sidang dan area peserta."
        ]
      },
      {
        namaDivisi: "Divisi Dokumentasi & Multimedia",
        koordinator: "[ISI/SESUAIKAN: Nama Koordinator Dokum]",
        anggota: [
          "[ISI/SESUAIKAN: Anggota 1]",
          "[ISI/SESUAIKAN: Anggota 2]"
        ],
        tugas: [
          "Mendokumentasikan seluruh rangkaian sidang dalam bentuk foto resolusi tinggi dan video cinematic.",
          "Menyiapkan slide presentasi materi pembukaan, countdown timer layar, dan banner digital aula.",
          "Menyusun video dokumentasi kilas balik kepengurusan dan after-movie resmi MUBES."
        ]
      }
    ]
  },

  rab: {
    mataUang: "IDR",
    totalEstimasi: 5850000,
    kategori: [
      {
        nama: "Kesekretariatan & Persidangan",
        persentase: 18,
        subtotal: 1050000,
        items: [
          { no: 1, uraian: "Penggandaan Draft Materi Sidang & Berkas LPJ", volume: "100 eksemplar", satuan: 4500, jumlah: 450000, catatan: "Dicetak ringkas 15 halaman bolak-balik [ISI/SESUAIKAN]" },
          { no: 2, uraian: "ID Card Panitia & Co-Card Peserta Sidang", volume: "120 pcs", satuan: 3500, jumlah: 420000, catatan: "Bahan art paper + tali lanyard [ISI/SESUAIKAN]" },
          { no: 3, uraian: "Surat Suara Pemilihan & Kertas Berita Acara", volume: "2 rim", satuan: 65000, jumlah: 130000, catatan: "HVS A4 80gr [ISI/SESUAIKAN]" },
          { no: 4, uraian: "Sewa Palu Sidang & Bantalan Kayu", volume: "1 set", satuan: 50000, jumlah: 50000, catatan: "Kebutuhan sidang pleno [ISI/SESUAIKAN]" }
        ]
      },
      {
        nama: "Publikasi, Dekorasi & Visual",
        persentase: 15,
        subtotal: 880000,
        items: [
          { no: 5, uraian: "Cetak Backdrop Panggung Utama Aula (4 x 2.5 meter)", volume: "1 buah", satuan: 280000, jumlah: 280000, catatan: "Bahan flexi korea doff anti-pantul [ISI/SESUAIKAN]" },
          { no: 6, uraian: "X-Banner Informasi Alur & Barcode Berkas", volume: "2 buah", satuan: 85000, jumlah: 170000, catatan: "Diletakkan di pintu masuk Aula [ISI/SESUAIKAN]" },
          { no: 7, uraian: "Plakat Apresiasi Pengurus / Dosen Pembina", volume: "3 buah", satuan: 110000, jumlah: 330000, catatan: "Akrilik premium [ISI/SESUAIKAN]" },
          { no: 8, uraian: "Sertifikat Panitia & Pengurus (Kertas Linen)", volume: "50 lembar", satuan: 2000, jumlah: 100000, catatan: "Sertifikat penghargaan fisik [ISI/SESUAIKAN]" }
        ]
      },
      {
        nama: "Konsumsi (Peserta, Tamu & Panitia)",
        persentase: 44,
        subtotal: 2570000,
        items: [
          { no: 9, uraian: "Snack Box Pagi (Tamu Undangan & Peserta)", volume: "120 box", satuan: 7000, jumlah: 840000, catatan: "3 kue + air mineral cup [ISI/SESUAIKAN]" },
          { no: 10, uraian: "Makan Siang Prasmanan / Bento Box (ISHOMA)", volume: "120 box", satuan: 13000, jumlah: 1560000, catatan: "Nasi bento komplit lauk ayam & sayur [ISI/SESUAIKAN]" },
          { no: 11, uraian: "Air Mineral Botol 330ml (Meja Presidium & VIP)", volume: "2 dus", satuan: 45000, jumlah: 90000, catatan: "Untuk meja sidang dan tamu VIP [ISI/SESUAIKAN]" },
          { no: 12, uraian: "Air Mineral Galon Refill + Cup Dispenser", volume: "4 galon", satuan: 20000, jumlah: 80000, catatan: "Disediakan gratis di selasar Aula [ISI/SESUAIKAN]" }
        ]
      },
      {
        nama: "Logistik, Kebersihan & Aula",
        persentase: 13,
        subtotal: 750000,
        items: [
          { no: 13, uraian: "Kebersihan & Operasional Pengawas Aula", volume: "1 paket", satuan: 350000, jumlah: 350000, catatan: "Insentif petugas pendamping fasilitas kampus [ISI/SESUAIKAN]" },
          { no: 14, uraian: "Lakban Kain, Plastik Sampah, & Baterai Mic Wireless", volume: "1 paket", satuan: 150000, jumlah: 150000, catatan: "Kebutuhan sound system & kabel panggung [ISI/SESUAIKAN]" },
          { no: 15, uraian: "P3K Ringan & Medis Darurat", volume: "1 paket", satuan: 100000, jumlah: 100000, catatan: "Minyak kayu putih, tolak angin, obat pereda pusing [ISI/SESUAIKAN]" },
          { no: 16, uraian: "Bunga Meja Presidium & Kain Taplak Cadangan", volume: "1 paket", satuan: 150000, jumlah: 150000, catatan: "Dekorasi panggung resmi [ISI/SESUAIKAN]" }
        ]
      },
      {
        nama: "Dana Cadangan & Biaya Tak Terduga",
        persentase: 10,
        subtotal: 600000,
        items: [
          { no: 17, uraian: "Alokasi Dana Tak Terduga (Emergency Contingency)", volume: "1 paket", satuan: 600000, jumlah: 600000, catatan: "Mengantisipasi lonjakan peserta, print darurat, kabel tambahan [ISI/SESUAIKAN]" }
        ]
      }
    ]
  },

  mitigasiRisiko: [
    {
      id: "R-01",
      kategori: "Akademik & Konten",
      risiko: "Keterlambatan Kesiapan LPJ dari Departemen Tertentu",
      level: "Tinggi",
      dampak: "Sidang Pleno II terhambat, waktu molor, dan berpotensi menunda agenda pemilihan formatur baru.",
      mitigasi: [
        "Menetapkan deadline submit H-7 sebelum hari pelaksanaan MUBES kepada seluruh Kepala Departemen.",
        "Mewajibkan simulasi internal pra-MUBES bersama BPH Inti pada H-3 untuk review kelengkapan data & nota keuangan.",
        "Menyiapkan template presentasi dan template dokumen ringkasan LPJ standar agar format seragam dan cepat dikompilasi."
      ]
    },
    {
      id: "R-02",
      kategori: "Konstitusi & Kehadiran",
      risiko: "Kuorum Peserta Sidang Tidak Terpenuhi",
      level: "Tinggi",
      dampak: "Sidang pleno tidak dapat dibuka secara legal sesuai AD/ART, tertundanya pengesahan regulasi dan formatur.",
      mitigasi: [
        "Pemberitahuan resmi dan konfirmasi RSVP kehadiran via Google Form & grup WhatsApp mulai H-14.",
        "Mengadopsi aturan penundaan/skorsing resmi (2 x 15 menit) dalam Tata Tertib Sidang, setelah itu sidang dinyatakan sah melanjutkan agenda dengan peserta yang hadir.",
        "Divisi Humas melakukan follow-up intensif dan menyediakan absensi presensi digital real-time."
      ]
    },
    {
      id: "R-03",
      kategori: "Tempat & Fasilitas",
      risiko: "Bentrok Jadwal / Kendala Izin Peminjaman Aula Kampus",
      level: "Kritis",
      dampak: "Acara tidak memiliki venue utama representatif, relokasi mendadak memicu kekacauan peserta dan citra organisasi menurun.",
      mitigasi: [
        "Pengajuan surat peminjaman resmi dilakukan minimal 3-4 minggu sebelum tanggal kegiatan (H-30).",
        "Melakukan audiensi langsung dengan Bagian Logistik / Kemahasiswaan Telkom University Purwokerto oleh Ketua Panitia (Yossika).",
        "Menyiapkan Plan B: Ruang Auditorium Gedung D / Ruang Sidang Bersama kampus sebagai cadangan darurat jika Aula Utama digunakan agenda mendesak rektorat."
      ]
    },
    {
      id: "R-04",
      kategori: "Teknis & Kelistrikan",
      risiko: "Gangguan Sound System, Mic Wireless Mati, atau Proyektor HDMI Eror",
      level: "Sedang",
      dampak: "Suara presidium tidak terdengar jelas, presentasi materi LPJ tidak terbaca, suasana sidang menjadi gaduh dan tidak khidmat.",
      mitigasi: [
        "Uji coba gladi bersih (Sound & Display Check) bersama teknisi kampus pada H-1 sore hari di Aula.",
        "Menyediakan kabel konverter cadangan (Type-C to HDMI, VGA, USB Hub) dan minimal 2 set baterai alkaline cadangan untuk mic.",
        "Menyimpan file materi presentasi LPJ di flashdisk ganda serta diakses offline tanpa bergantung pada koneksi internet."
      ]
    },
    {
      id: "R-05",
      kategori: "Dinamika Sidang",
      risiko: "Potensi Deadlock / Perdebatan Berkepanjangan Saat Pemilihan Presidium & Ketua Baru",
      level: "Tinggi",
      dampak: "Waktu sidang membengkak melewati jam operasional kampus (melewati batas malam), suasana menjadi tegang.",
      mitigasi: [
        "Menunjuk presidium sidang yang memiliki pengalaman sidang formal organisasi dan bersikap netral tegas.",
        "Membatasi interupsi dan durasi bicara per peserta maksimal 2-3 menit sesuai aturan tata tertib.",
        "Mekanisme voting tertutup yang jelas jika musyawarah mufakat tidak mencapai titik temu dalam batas waktu 2 x 10 menit."
      ]
    },
    {
      id: "R-06",
      kategori: "Jadwal & Agenda Kampus",
      risiko: "Konflik Jadwal dengan Agenda Akademik (Kuis/UAS/Tugas Besar/Event Universitas)",
      level: "Sedang",
      dampak: "Tingkat kehadiran anggota rendah karena prioritas perkuliahan, fokus peserta terpecah.",
      mitigasi: [
        "Melakukan sinkronisasi kalender akademik Telkom University Purwokerto sebelum memfinalisasi tanggal kegiatan.",
        "Memilih hari Sabtu/Minggu di luar pekan ujian (UTS/UAS) atau di masa tenang perkuliahan.",
        "Menerbitkan surat izin dispensasi resmi bertanda tangan pembina kemahasiswaan bagi panitia dan presidium jika ada sesi persiapan di hari aktif."
      ]
    }
  ],

  suratPeminjamanAula: {
    nomor: "[ISI/SESUAIKAN: 012/PAN-MUBES/HIPMI-TUP/V/2026]",
    lampiran: "1 (satu) Berkas Proposal",
    perihal: "Permohonan Izin Peminjaman Tempat & Fasilitas Aula",
    kepada: "Yth. Kepala Bagian Logistik & Pengelolaan Fasilitas\nc.q. Bagian Kemahasiswaan Telkom University Purwokerto\ndi Tempat",
    isiSurat: [
      "Dengan hormat,",
      "Sehubungan dengan akan diselenggarakannya agenda tahunan Musyawarah Besar (MUBES) Himpunan Pengusaha Muda Indonesia Perguruan Tinggi (HIPMI PT) Telkom University Purwokerto Periode [ISI/SESUAIKAN: 2026/2027], kami selaku Panitia Pelaksana bermaksud mengajukan permohonan izin peminjaman tempat beserta fasilitas pendukung.",
      "Adapun rincian kegiatan dimaksud adalah sebagai berikut:\n• Nama Kegiatan : Musyawarah Besar (MUBES) UKM HIPMI PT Telkom University Purwokerto\n• Hari, Tanggal  : [ISI/SESUAIKAN: Sabtu, 16 Mei 2026]\n• Waktu          : 07.30 – 18.00 WIB (termasuk persiapan dan sterilisasi venue)\n• Tempat         : Aula Telkom University Purwokerto\n• Jumlah Peserta : ± 120 Orang (Pengurus, Anggota, Demisioner, dan Tamu Undangan)",
      "Guna mendukung kelancaran kegiatan tersebut, kami juga memohon izin pemanfaatan fasilitas pendukung Aula berupa:\n1. Sound system dan 4 (empat) buah microphone wireless\n2. LCD Projector dan screen layar panggung utama\n3. Kursi peserta (120 unit) beserta 1 meja panjang presidium panggung\n4. Akses daya listrik dan pendingin ruangan (AC)\n5. Podium sambutan dan tiang bendera",
      "Kami berkomitmen untuk senantiasa menjaga kebersihan, ketertiban, serta mematuhi seluruh tata tertib penggunaan fasilitas kampus yang berlaku. Sebagai bahan pertimbangan Bapak/Ibu, kami lampirkan 1 (satu) berkas proposal kegiatan.",
      "Demikian surat permohonan ini kami sampaikan. Atas perhatian, dukungan, dan kerja sama yang baik dari pihak kampus, kami ucapkan terima kasih."
    ]
  },

  suratUndangan: {
    nomor: "[ISI/SESUAIKAN: 014/PAN-MUBES/HIPMI-TUP/V/2026]",
    lampiran: "1 (satu) Lembar Rundown Acara",
    perihal: "Undangan Menghadiri Musyawarah Besar (MUBES) HIPMI PT",
    kepada: "Yth. [ISI/SESUAIKAN: Nama Penerima / Delegasi / Pengurus / Demisioner]\ndi Tempat",
    isiSurat: [
      "Dengan hormat,",
      "Dalam rangka menuntaskan amanah konstitusi organisasi serta melanjutkan estafet kepemimpinan pengusaha muda, Panitia Pelaksana Musyawarah Besar (MUBES) UKM HIPMI PT Telkom University Purwokerto mengundang Saudara/i untuk hadir dan berpartisipasi aktif dalam kegiatan MUBES tahunan.",
      "Acara akan diselenggarakan pada:\n• Hari, Tanggal : [ISI/SESUAIKAN: Sabtu, 16 Mei 2026]\n• Waktu         : 08.00 WIB s.d. Selesai\n• Tempat        : Aula Kampus Telkom University Purwokerto\n• Dresscode     : Kemeja / Jas Almamater / PDH Organisasi / Bebas Rapi Bersepatu",
      "Kehadiran dan gagasan konstruktif dari Saudara/i sangat kami harapkan demi terwujudnya masa depan UKM HIPMI PT yang progresif, mandiri, dan berdaya saing.",
      "Demikian undangan ini kami sampaikan. Atas perhatian dan kesediaan hadirnya, kami ucapkan terima kasih."
    ]
  }
};

if (typeof window !== 'undefined') {
  window.MUBES_DATA = MUBES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MUBES_DATA;
}
