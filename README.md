# BakeFlow – Toko Roti Hangat

BakeFlow adalah aplikasi web sederhana untuk mencari menu roti pada sebuah toko roti. Proyek ini dibuat untuk mensimulasikan **BUG dan FIX** serta menerapkan **pipeline CI** menggunakan GitHub Actions.

Daftar menu: Roti Tawar, Croissant, Donat Cokelat, Roti Sobek Keju.

# Fitur

- Mencari menu roti berdasarkan nama
- Demo perbandingan versi BUG dan versi FIX (`index.html`)
- Pengujian otomatis untuk fungsi pencarian (`cari.test.js`)

# Struktur Berkas

| Berkas | Fungsi |
|---|---|
| `index.html` | Tampilan aplikasi dan demo BUG/FIX |
| `cari.js` | Fungsi pencarian menu |
| `cari.test.js` | Unit test untuk fungsi pencarian |
| `package.json` | Konfigurasi proyek dan perintah test |
| `.github/workflows/ci.yml` | Workflow CI GitHub Actions |

# Menjalankan Tes

Prasyarat: Node.js (versi 22 atau yang lebih baru).

npm test

Tidak perlu `npm install` karena proyek tidak memakai dependensi tambahan.

# Penjelasan CI

Proyek ini memakai GitHub Actions (`.github/workflows/ci.yml`). Workflow berjalan otomatis setiap ada push ke branch `main` atau pull request. Langkahnya:

1. Checkout: mengambil kode terbaru dari repository.
2. Setup Node.js: menyiapkan Node.js versi 22.
3. `npm test`: menjalankan semua unit test.

Hasil dapat dilihat di tab Actions pada repository: ✅ hijau jika semua tes lulus, ❌ merah jika ada tes yang gagal.

# Ringkasan Error dan Perbaikan

Error (v1.0.0): pencarian gagal untuk kata `roti` yang ditulis dengan huruf kecil. Penyebabnya, fungsi `cari` membandingkan teks apa adanya, sehingga `"roti"` tidak cocok dengan `"Roti Tawar"`. Spasi di awal atau akhir juga tidak diabaikan. Akibatnya 3 dari 4 tes gagal dan run CI berstatus gagal.

js
// Sebelum (BUG)
function cari(nama, kata) {
  return nama.includes(kata);
}

## Langkah perbaikan (v1.1.0):

1. Mereproduksi bug: mengetik `roti` huruf kecil, menu tidak ditemukan.
2. Menemukan akar masalah: teks tidak diseragamkan sebelum dibandingkan.
3. Menambahkan `toLowerCase()` agar huruf besar/kecil tidak dibedakan, dan `trim()` agar spasi diabaikan.
4. Menjalankan `npm test`, semua tes lulus.
5. Push ke GitHub, run CI berstatus sukses.

js
// Sesudah (FIX)
function cari(nama, kata) {
  return nama.toLowerCase().includes(kata.trim().toLowerCase());
}

# Bukti CI

- Run gagal (sebelum perbaikan): [tempel link run di tab Actions]
- Run sukses (sesudah perbaikan): [tempel link run di tab Actions]

# Pembagian Peran

| Nama | Peran | Tugas |
|---|---|---|
| [Nama Anggota 1] | [Penulis kode] | Membuat `cari.js` dan `index.html` |
| [Nama Anggota 2] | [Penguji] | Membuat `cari.test.js` dan menjalankan `npm test` |
| [Nama Anggota 3] | [Pengelola CI] | Membuat workflow `ci.yml` dan mengecek hasil Actions |
| [Nama Anggota 4] | [Dokumentasi] | Menulis `README.md` dan mengambil screenshot bukti |

## Changelog

- **1.1.0**: Fixed, pencarian tidak lagi peka huruf besar/kecil dan mengabaikan spasi.
- **1.0.0**: Versi awal, pencarian masih peka huruf besar/kecil.