# PROMPT UNTUK ANTIGRAVITY (GEMINI) — FULL AUDIT & REDESIGN PORTFOLIO

Copy semua isi di bawah ini (dari `## ROLE` sampai akhir), paste ke Antigravity, jalankan di repo portfolio (`yossikaputra.my.id` / repo `Yoshput/CV-YOSSIKA`).

---

## ROLE
Kamu adalah senior frontend engineer + performance engineer. Tugasmu: audit menyeluruh dan redesign total situs portfolio ini agar clean, minimalist, super ringan, dan smooth di device apapun — termasuk laptop/HP low-end — sambil mempertahankan semua konten dan fungsionalitas yang sudah ada (chatbot, modal project detail, CV viewer, filter "All Works", form feedback).

Situs: `https://www.yossikaputra.my.id/` (GitHub Pages, single-page portfolio).

## TARGET UTAMA
1. **Google PageSpeed Insights: skor 95–100 di Mobile DAN Desktop** (Performance, Accessibility, Best Practices, SEO semua hijau).
2. **Terasa instan & smooth di hardware rendah** — no jank, no layout shift, animasi ringan (CSS transform/opacity only, hindari heavy JS animation library kalau bisa diganti CSS).
3. **Visual minimalist, bold, clean** — arah desain seperti referensi:
   - https://faiz-azzahra-portfolio.vercel.app/
   - https://nadivspace.id/
   Ambil dari referensi itu: banyak whitespace, tipografi besar/bold untuk judul, layout grid rapi, transisi halus tapi tidak berlebihan, warna minim & konsisten (bukan gradient/efek 3D berat).
4. **Semua konten UI dan teks utama pakai Bahasa Inggris.**

## 1. LANGUAGE TOGGLE POPUP (ID/EN)
- Saat pertama kali user membuka web (first visit / belum ada pilihan tersimpan), tampilkan **popup ringan** (bukan full-page loader, bukan modal berat) untuk memilih bahasa: **"Bahasa Indonesia" / "English"**.
- UI popup: minimalist, center-card kecil, backdrop blur tipis, animasi fade+scale singkat (~200ms), tombol besar jelas, auto-close setelah pilih.
- Simpan pilihan di `localStorage` (mis. key `lang-pref`), jangan tampilkan lagi di visit berikutnya kecuali user reset lewat toggle kecil di navbar (icon 🌐 / EN|ID switch).
- Semua string UI (nav, judul section, tombol, label) di-generate dari satu file i18n (`en.json` / `id.json`) supaya gampang di-maintain — jangan hardcode teks ganda di HTML.
- Default konten (isi lengkap: about, deskripsi project, pengalaman, dst) **dalam Bahasa Inggris**, dan translate ke Bahasa Indonesia untuk versi ID.

## 2. RINGKAS KONTEN — "JUDUL/SUBJUDUL DULU, DETAIL DI-KLIK"
Semua section yang saat ini menampilkan paragraf panjang langsung di halaman harus diringkas jadi **judul + subjudul/1 baris ringkas saja**, dengan tombol/link **"Detail"** atau card yang bisa diklik untuk membuka **modal atau accordion** berisi deskripsi lengkap. Terapkan pola ini ke:
- **Projects** (card sudah punya "Lihat Detail →" — pertahankan pola ini, tapi pastikan card di halaman utama HANYA menampilkan: gambar, judul, 1 baris tagline pendek, tech-stack badges. Deskripsi panjang penuh hanya muncul di modal detail).
- **Design Portfolio** (poster/desain) — sama, tagline pendek di card, detail lengkap di klik.
- **Dokumentasi & Pengalaman (Journey / Dokumentasi Kegiatan)** — saat ini paragraf-paragraf panjang (INFENTRA, TULC, PKL, dst) langsung terlihat semua. Ubah jadi: judul kegiatan + role + tanggal + 1 kalimat ringkas, lalu tombol "Lihat Detail" membuka accordion/modal yang isinya paragraf lengkap + bullet tanggung jawab + sertifikat.
- **Bisnis (Mango Nyeni)** — ringkas jadi judul + tagline, detail lengkap on click.
- **Experience/Pendidikan (Journey)** timeline — tampilkan hanya: periode, judul role/pendidikan, institusi. Bullet detail tanggung jawab disembunyikan di balik "Detail" (expand/collapse per item), supaya timeline terasa clean saat pertama dibuka.

Gunakan pola interaksi ringan: native `<details>/<summary>` yang di-style ulang, ATAU modal reusable satu komponen untuk semua "Detail" (lebih konsisten). Pilih yang paling ringan secara performa (hindari re-render berat / animasi library besar).

## 3. TAMBAH KONTEN
- **LinkedIn**: tambahkan link LinkedIn `https://www.linkedin.com/in/yossikaputraerlangga/` di:
  - Navbar/hero social icons (sejajar dengan Instagram, GitHub, Email yang sudah ada)
  - Section Contact ("Let's Connect")
  - Footer
- **Project baru**: tambahkan card project baru di section Projects untuk:
  - **Nama**: Optik I See You — AR Try-On & Optical Store Website
  - **Live URL**: https://optikiseeyou.com
  - **Tagline singkat**: "Full website untuk optik lokal — AR glasses try-on real-time, katalog frame & softlens, booking cek mata, dan booth photobooth AI."
  - **Tech badges**: Next.js 15, React, TypeScript, Tailwind CSS, Three.js, MediaPipe Vision (AI face tracking), Cloudflare R2
  - **Detail lengkap (untuk modal)**: jelaskan fitur AR try-on kacamata real-time berbasis face tracking (auto-fit ke bentuk wajah), photobooth dengan berbagai tema frame & layout cetak, katalog produk frame & softlens per kategori, halaman cabang dengan integrasi WhatsApp CS & Google Maps per lokasi (Purwokerto, Purbalingga, Wonosobo, Cilacap), dan local SEO (structured data per cabang).
  - Tandai sebagai **"🚧 In Progress / Ongoing Development"** karena project ini masih aktif dikembangkan (bukan status "selesai" seperti project lain) — pakai badge kecil beda warna, jangan disamakan status-nya dengan project yang sudah final.
  - Screenshot: ambil screenshot landing page optikiseeyou.com terbaru untuk thumbnail card.

## 4. PERFORMANCE AUDIT & OPTIMIZATION (target Lighthouse 95–100)
Lakukan audit menyeluruh dan perbaiki:
1. **Gambar**:
   - Convert semua gambar ke **WebP/AVIF**, kompres agresif tanpa merusak kualitas visual.
   - **Rename semua file gambar** yang saat ini pakai spasi di nama file (contoh: `FOTO JAS FRESH.jpeg`, `foto kegiatan/01-INFENTRA/...`) menjadi kebab-case tanpa spasi (`foto-jas-fresh.webp`) — spasi di URL bisa bikin request gagal/encoding issue dan tidak best-practice.
   - Tambahkan `width`/`height` eksplisit di semua `<img>` untuk mencegah Cumulative Layout Shift (CLS).
   - `loading="lazy"` untuk semua gambar di luar viewport pertama (semua kecuali hero/LCP image).
   - Generate `srcset`/responsive image sizes agar mobile tidak load gambar resolusi desktop.
   - Preload hanya LCP image (foto hero) dengan `<link rel="preload">`.
2. **CSS & JS**:
   - Minify & bundle semua CSS/JS.
   - Hapus CSS/JS unused (audit dengan Coverage tab).
   - `defer`/`async` semua script non-critical, pastikan tidak ada render-blocking resource.
   - Inline critical CSS untuk above-the-fold, load sisanya async.
   - Kalau ada animasi library berat (GSAP/AOS/dll) yang dipakai cuma untuk efek kecil, evaluasi ganti ke CSS transitions/animations native.
3. **Font**: gunakan `font-display: swap`, subset font ke karakter yang perlu, preconnect ke font host, batasi jumlah font-weight yang di-load.
4. **Third-party**: chatbot AI (YosBot/Gemini API), YouTube embed — pastikan **lazy-load** (baru load resource pas section terlihat/di-klik), jangan block initial load. Ganti YouTube iframe langsung dengan facade/thumbnail yang baru load iframe on-click.
5. **Video/GIF** dokumentasi (kalau ada) — kompres, convert ke format ringan (mp4/webm), lazy load.
6. **General**: kurangi total DOM nodes (karena banyak section repetitif), pastikan tidak ada memory leak dari modal/chatbot yang dibuka-tutup berulang, test dengan CPU throttling 4x & network throttling Slow 4G di DevTools.
7. Jalankan PageSpeed Insights sebelum & sesudah, laporkan skor before/after untuk Mobile & Desktop.

## 5. RESPONSIVE & UI POLISH
- Pastikan breakpoint rapi di semua ukuran: mobile kecil (360px), mobile besar, tablet, laptop, desktop besar.
- Judul-judul section (`About`, `Projects`, `Skills`, dst) dibuat **besar, bold, jelas** — sesuai arah referensi (faiz-azzahra-portfolio & nadivspace).
- Warna & style dibuat konsisten minimalist (evaluasi apakah theme color ungu `#8b5cf6` saat ini masih cocok dengan arah baru yang lebih clean/minimalist, atau perlu disederhanakan ke palet netral + 1 accent color).
- Interaksi (hover, klik "Detail", toggle bahasa, navbar) harus terasa smooth tapi ringan — gunakan CSS transition, hindari JS animation yang berat di re-render.
- Pastikan chatbot widget, modal project, modal CV, filter "All Works" semua tetap berfungsi normal setelah refactor.

## 6. SEO & ACCESSIBILITY
- Pastikan semua meta tag (title, description, OG, Twitter card) tetap ada dan update kalau perlu (sesuaikan kalau ada perubahan bahasa default ke EN).
- Tambahkan alt text jelas di semua gambar.
- Pastikan kontras warna teks memenuhi WCAG AA.
- Pastikan struktur heading (`h1`-`h6`) logis dan tidak loncat level.
- Update `sitemap.xml` kalau ada perubahan struktur URL/section.

## 7. DELIVERABLES
Setelah selesai, berikan:
1. Ringkasan semua file yang diubah/ditambah.
2. Skor PageSpeed Insights before vs after (Mobile & Desktop, keempat kategori).
3. Konfirmasi bahwa semua fungsi lama (chatbot, modal, CV viewer, filter, form feedback) masih jalan normal.
4. Screenshot/preview hasil akhir di mobile & desktop.

---

**Catatan tambahan buat kamu (Antigravity):** kerjakan bertahap — audit dulu, tulis daftar temuan & rencana, baru eksekusi perubahan. Jangan hapus konten apapun, cuma direstrukturisasi tampilannya (ringkas + klik detail) dan dioptimasi performanya. Test di real device kalau bisa, minimal di DevTools mobile emulation + throttling.
