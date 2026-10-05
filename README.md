# 🎡 Roda Cabaran Toleransi

Game pendidikan interaktif berasaskan web dalam Bahasa Melayu untuk **Pendidikan Moral Tahun 5**.

## Objektif pembelajaran
Game ini mengukuhkan topik **Nilai Toleransi dalam Hidup Bermasyarakat**. Murid berlatih:
- mengenal pasti masalah;
- memilih tindakan bertoleransi;
- menjelaskan sebab;
- meramalkan kesan jika toleransi diabaikan;
- memberikan justifikasi;
- mengekspresikan perasaan;
- mengaplikasikan toleransi dalam situasi kehidupan sebenar.

## Cara bermain
1. Tekan **Mula Bermain**.
2. Pilih Mod Biasa, **Mod Mudah** atau **Mod KBAT**.
3. Putar roda.
4. Baca kad situasi yang dipilih secara rawak.
5. Jawab cabaran dan kumpul **Bintang Toleransi**.
6. Capai **10 bintang** untuk menjadi **🏆 Pasukan Harmoni**.
7. Lengkapkan Refleksi Akhir.

## Ciri utama
- Roda digital 7 kategori yang benar-benar berputar.
- Minimum 3 situasi bagi setiap kategori biasa.
- 8 soalan **Cabaran KBAT**.
- Cabaran 4 tahap untuk Dewan Komuniti.
- Mod Mudah, Mod KBAT dan Mod Guru.
- Sistem bintang dan lencana.
- Web Speech API: **🔊 Baca Soalan**.
- Bunyi ringan berasaskan Web Audio API.
- Progres disimpan melalui **localStorage**.
- Responsive untuk desktop, Chromebook, tablet, iPad dan telefon.
- Tiada backend, login, database atau API berbayar.

## Struktur fail
```
/
├── index.html
├── style.css
├── script.js
└── README.md
```

Folder `assets/` tidak wajib kerana versi ini menggunakan emoji, CSS dan Web Audio API supaya GitHub Pages boleh berjalan tanpa aset luaran.

## Menjalankan secara lokal
Muat turun repositori dan buka `index.html` dalam pelayar moden. Untuk fungsi Web Speech API yang lebih konsisten, jalankan melalui local web server, contohnya VS Code Live Server.

## Deploy ke GitHub Pages
1. Buka **Settings** repositori.
2. Pilih **Pages**.
3. Di bahagian **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`.
5. Simpan.

Laman akan tersedia pada:
`https://ainifaiz.github.io/tahun-5-toleransi/`

## Cara guru menambah situasi baharu
Buka `script.js` dan cari objek:
```js
const data = { ... }
```
Tambah objek situasi ke kategori yang dikehendaki, contohnya:
```js
{s:"Teks situasi", q:"Soalan", o:["A","B","C"], a:1, answer:"Cadangan jawapan"}
```
- `s` = situasi
- `q` = soalan
- `o` = pilihan jawapan
- `a` = indeks jawapan betul bermula dengan 0
- `answer` = cadangan jawapan guru

Untuk soalan terbuka gunakan:
```js
{s:"Teks situasi", q:"Soalan terbuka", open:true, answer:"Cadangan jawapan"}
```

## Mengubah sasaran bintang
Di bahagian atas `script.js`, ubah:
```js
const TARGET_STARS = 10;
```

## Mesej utama
**🤝 TOLERANSI MEMBINA MASYARAKAT HARMONI**

**“BERBINCANG, MENGHORMATI DAN BERTOLAK ANSUR!”**
