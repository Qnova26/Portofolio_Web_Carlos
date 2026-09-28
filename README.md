# PortoFolio CARLOS QNOVA BHA'A GANI

Website portofolio interaktif dan modern dengan desain 3D, efek *glassmorphism*, dan animasi yang mulus. Proyek ini dibangun untuk menampilkan profil, data diri, serta proyek-proyek web (portofolio) yang pernah dibuat dengan pengalaman visual yang premium.

## 🚀 Fitur Utama

- **Animasi 3D Interaktif**: Latar belakang 3D yang dinamis dan mengikuti pergerakan *scroll* (dibangun dengan Three.js & React Three Fiber).
- **Desain Premium (Dark Mode & Neon)**: UI modern bergaya *glassmorphism* dengan perpaduan warna neon (*React Bits Inspired*).
- **Smooth Animations**: Transisi dan animasi masuk elemen menggunakan Framer Motion.
- **Export/Download CV**: Pengunjung dapat mengunduh file *Curriculum Vitae* (CV) secara langsung melalui navbar.
- **Responsive Layout**: Tampilan disesuaikan untuk berbagai ukuran layar (Desktop & Mobile).

---

## 🛠️ Teknologi & Bahasa yang Digunakan

Proyek ini dibangun menggunakan kumpulan teknologi modern terkini dalam ekosistem web development:

### 💻 Bahasa Pemrograman
- **JavaScript (ES6+)**: Bahasa logika utama untuk interaktivitas komponen.
- **CSS3 / Vanilla CSS**: Digunakan untuk *styling* kustom dan desain visual *glassmorphism*.
- **HTML5**: Struktur dasar halaman web.

### ⚙️ Framework & Library (Tech Stack)
- **[React 18](https://react.dev/)**: *Library* utama untuk membangun antarmuka pengguna berbasis komponen.
- **[Vite](https://vitejs.dev/)**: *Build tool* dan *dev server* yang super cepat untuk lingkungan React.
- **[Three.js](https://threejs.org/)**: *Library* 3D WebGL untuk rendering grafik.
- **[React Three Fiber (@react-three/fiber)](https://docs.pmnd.rs/react-three-fiber)**: *Renderer* React untuk Three.js, mempermudah pembuatan elemen 3D secara deklaratif.
- **[React Three Drei (@react-three/drei)](https://github.com/pmndrs/drei)**: Kumpulan komponen pembantu untuk React Three Fiber (seperti efek bintang di latar belakang).
- **[Framer Motion](https://www.framer.com/motion/)**: *Library* untuk membuat animasi *scroll*, rotasi, dan transisi komponen yang mulus layaknya *React Bits*.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Ikon modern (menggunakan set Feather Icons) untuk melengkapi UI.

---

## 📖 Panduan Menjalankan Proyek (Setup)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal di komputer Anda.

### 1. Prasyarat
Pastikan Anda sudah menginstal **[Node.js](https://nodejs.org/)** di perangkat Anda.

### 2. Instalasi Dependensi
Buka terminal pada direktori proyek ini, lalu jalankan perintah:
```bash
npm install
```

### 3. Menjalankan Development Server
Setelah instalasi selesai, jalankan perintah berikut:
```bash
npm run dev
```
Buka browser Anda dan kunjungi URL yang muncul di terminal (biasanya `http://localhost:5173`).

### 4. Menambahkan CV Anda
Agar tombol **"Download CV"** berfungsi dengan benar:
1. Siapkan file CV Anda dalam bentuk PDF.
2. Ubah nama file menjadi `CV.pdf`.
3. Pindahkan file tersebut ke dalam folder `public/` di dalam direktori proyek ini.

---

*Built with passion and modern web technologies.* ✨
