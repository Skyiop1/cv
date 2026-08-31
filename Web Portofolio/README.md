# Portofolio Muhammad Naufal Zaki

Versi source code lokal dari website portofolio bilingual Muhammad Naufal Zaki. Proyek ini tidak terikat pada hosting sebelumnya dan seluruh isi utama ditulis langsung di dalam source code.

## Yang dibutuhkan

- Node.js 22.13 atau lebih baru
- npm

Unduh Node.js versi LTS dari https://nodejs.org apabila belum terpasang.

## Menjalankan di lokal

1. Ekstrak file ZIP.
2. Buka Terminal, Command Prompt, atau terminal VS Code pada folder proyek.
3. Jalankan:

```bash
npm install
npm run dev
```

4. Buka http://localhost:3000 di browser.

Hentikan server dengan menekan `Ctrl+C` pada terminal.

## Membuat versi produksi

```bash
npm run build
npm run preview
```

Hasil website statis akan dibuat di folder `out`. Folder tersebut dapat diunggah ke layanan static hosting.

## Bagian yang paling sering diedit

- `app/portfolio-data.ts`: profil, pengalaman, proyek, skill, tautan GitHub/LinkedIn, dan isi bilingual.
- `components/portfolio-page.tsx`: struktur dan interaksi halaman.
- `app/globals.css`: warna, font, layout, animasi, dan tampilan responsif.
- `public/profile.jpg`: foto profil.
- `public/muhammad-naufal-zaki-cv.pdf`: CV yang dapat diunduh.
- `public/og.png`: gambar preview saat tautan website dibagikan.

## Sebelum hosting

Salin `.env.example` menjadi `.env.local`, lalu ganti nilai berikut dengan domain final:

```env
NEXT_PUBLIC_SITE_URL=https://domain-kamu.com
```

Setelah itu jalankan kembali `npm run build`.

## Struktur halaman

- `/` — beranda, pengalaman, pendidikan, proyek pilihan, skill, dan kontak.
- `/projects/` — daftar lengkap proyek dengan tautan GitHub dan LinkedIn.

Website mendukung bahasa Inggris/Indonesia serta tema gelap/terang. Pilihan pengguna disimpan di browser menggunakan `localStorage`.
