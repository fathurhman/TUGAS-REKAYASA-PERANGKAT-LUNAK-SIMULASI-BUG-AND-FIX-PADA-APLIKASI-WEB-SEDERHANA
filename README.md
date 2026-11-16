# BakeFlow – Toko Roti Hangat

BakeFlow adalah aplikasi web interaktif sederhana yang dirancang untuk mensimulasikan penanganan **BUG dan FIX** dalam mata kuliah Rekayasa Perangkat Lunak. Aplikasi ini mendemonstrasikan empat jenis perbaikan (*corrective maintenance*) pada fitur pencarian menu roti.

Daftar menu: Roti Tawar, Croissant, Donat Cokelat, Roti Sobek Keju.

## Fitur Utama

* **Pencarian Menu Interaktif**: Mencari menu roti berdasarkan berbagai kondisi input.
* **Simulasi Bug & Fix (`index.html`)**: Perbandingan langsung secara visual antara kode bermasalah (*Sebelum / BUG*) dan kode setelah diperbaiki (*Sesudah / FIX*).
* **Dokumentasi Bug Report Terstruktur**: Memuat 4 skenario perbaikan bug lengkap dengan langkah reproduksi, akar masalah, dan level prioritasnya.

## Struktur Berkas

| Berkas | Fungsi |
| --- | --- |
| `index.html` | Antarmuka aplikasi web dan pusat demo simulasi 4 skenario Bug & Fix |
| `README.md` | Dokumentasi lengkap penjelasan proyek dan panduan penggunaan |

## Panduan Menjalankan Aplikasi

1. Buka folder proyek di **VS Code**.
2. Jalankan aplikasi menggunakan ekstensi **Live Server** di VS Code atau buka langsung file `index.html` di browser (Chrome/Edge).
3. Uji tombol **"Jalankan BUG"** dan **"Jalankan FIX"** pada kolom simulasi untuk melihat perbedaan perilaku sistem.

---

## Ringkasan 4 Skenario Bug dan Perbaikan

Aplikasi ini mendemonstrasikan empat perbaikan utama (*Corrective Maintenance*):

### 1. Bug #01: Sensitivitas Huruf Besar/Kecil & Spasi

* **Masalah (v1.0.0):** Pencarian gagal jika huruf tidak persis sama atau terdapat spasi di tepi kata.
* **Perbaikan (v1.1.0):** Menambahkan fungsi pembersihan spasi (`trim()`) dan penyeragaman huruf (`toLowerCase()`).

### 2. Bug #02: Validasi Kolom Kosong

* **Masalah (v1.0.0):** Kolom pencarian yang dibiarkan kosong tetap memproses pencarian tanpa peringatan.
* **Perbaikan (v1.1.0):** Menambahkan validasi pengecekan input kosong (`if (!kata.trim()) return "Masukkan kata kunci."`).

### 3. Bug #03: Batasan Hasil Pencarian (*Find* vs *Filter*)

* **Masalah (v1.0.0):** Menggunakan metode array `find()` sehingga hanya menampilkan **satu hasil pertama** yang cocok.
* **Perbaikan (v1.1.0):** Mengubah metode menjadi `filter()` agar seluruh menu yang sesuai kriteria dapat ditampilkan.

### 4. Bug #04: Batasan Pencocokan Awalan (*StartsWith* vs *Includes*)

* **Masalah (v1.0.0):** Menggunakan `startsWith()` sehingga kata kunci hanya bisa ditemukan jika diketik dari awal nama menu.
* **Perbaikan (v1.1.0):** Mengubah metode menjadi `includes()` agar kata kunci dapat ditemukan di bagian mana saja (depan, tengah, atau belakang).

---

## Changelog

### [1.1.0] - Versi Perbaikan

* Pencarian menu tidak lagi peka huruf besar/kecil dan mengabaikan spasi tepi (#01).
* Kolom pencarian kosong berhasil ditolak dengan pesan peringatan (#02).
* Semua menu yang cocok berhasil ditampilkan menggunakan `filter()` (#03).
* Pencarian fleksibel di bagian mana pun pada nama menu menggunakan `includes()` (#04).

### [1.0.0] - Versi Awal (Buggy)

* Rilis awal aplikasi dengan berbagai kendala logika pencarian dan validasi input.
