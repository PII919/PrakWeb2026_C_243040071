// src/App.jsx
import React from "react";
import KartuProfil from "./KartuProfil";
import BadgeSkill from "./BadgeSkill";
import KartuProyek from "./KartuProyek";
import "./App.css";

function App() {
  // 1. Data daftar mata kuliah praktikum semester ini
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // 2. Data portofolio proyek
  const daftarProyek = [
    {
      id: 1,
      judul: "Sistem Manajemen Inventaris",
      deskripsi:
        "Aplikasi web fullstack untuk mengelola stok barang gudang dengan fitur CRUD, laporan otomatis, dan dashboard analitik real-time.",
      teknologi: ["React", "Node.js", "PostgreSQL", "Express"],
      githubUrl: "https://github.com/username/inventaris-app",
    },
    {
      id: 2,
      judul: "Platform E-Learning Interaktif",
      deskripsi:
        "Platform pembelajaran online dengan fitur video streaming, kuis adaptif, forum diskusi, dan sistem sertifikasi berbasis progress belajar.",
      teknologi: ["Next.js", "Laravel", "MySQL", "Redis"],
      githubUrl: "https://github.com/username/elearning-platform",
    },
    {
      id: 3,
      judul: "Aplikasi Kasir UMKM",
      deskripsi:
        "Aplikasi point-of-sale berbasis mobile untuk usaha kecil, dilengkapi laporan penjualan harian, manajemen produk, dan cetak struk.",
      teknologi: ["React Native", "Firebase", "Expo", "JavaScript"],
      githubUrl: "https://github.com/username/kasir-umkm",
    },
    {
      id: 4,
      judul: "REST API Layanan Cuaca",
      deskripsi:
        "Backend microservice yang mengagregasi data cuaca dari berbagai sumber, menyediakan endpoint prediksi cuaca dengan caching dan rate limiting.",
      teknologi: ["Node.js", "Express", "MongoDB", "Docker"],
      githubUrl: "https://github.com/username/weather-api",
    },
    {
      id: 5,
      judul: "Dashboard Monitoring Server",
      deskripsi:
        "Panel monitoring real-time untuk memantau performa server, penggunaan CPU/RAM, log error, dan alert otomatis melalui notifikasi email.",
      teknologi: ["Vue.js", "Python", "WebSocket", "Chart.js"],
      githubUrl: "https://github.com/username/server-dashboard",
    },
  ];

  // 3. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div className="app-container">

      {/* ===== HERO HEADER ===== */}
      <header className="app-header">
        <h1 className="app-header__title">Praktikum Pemrograman Web</h1>
        <p className="app-header__sub">Laboratorium Informatika</p>
        <p className="app-header__modul">Modul 1: Pengenalan React JS &amp; Vite</p>
      </header>

      {/* ===== PROFIL MAHASISWA ===== */}
      <section className="app-section">
        <h2 className="section-title">👤 Profil Mahasiswa Praktikan</h2>

        <KartuProfil
          nama="Mochamad Raffi Khoirunnijam"
          npm="243040071"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="/foto-profil.jpg"
        />

        <div className="keahlian-section">
          <p className="keahlian-title">Keahlian</p>
          <div className="keahlian-grid">
            <BadgeSkill namaSkill="React.JS" level="Pemula" />
            <BadgeSkill namaSkill="JavaScript" level="Pemula" />
            <BadgeSkill namaSkill="Java" level="Menengah" />
            <BadgeSkill namaSkill="HTML" level="Menengah" />
            <BadgeSkill namaSkill="CSS" level="Menengah" />
          </div>
        </div>
      </section>

      {/* ===== DAFTAR PRAKTIKUM ===== */}
      <section className="app-section">
        <h2 className="section-title">📋 Daftar Rencana Praktikum Semester</h2>
        <p className="section-desc">List Rendering — data dirender secara dinamis dari array.</p>
        <div className="matkul-grid">
          {daftarPraktikum.map((matkul) => (
            <div key={matkul.id} className="matkul-item">
              <div>
                <span className="matkul-item__kode">{matkul.kode}</span>
                {" — "}
                {matkul.nama}
                <div className="matkul-item__hari">🗓 Jadwal Sesi: {matkul.hari}</div>
              </div>
              <span className="matkul-item__sks">{matkul.sks} SKS</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SHOWCASE PORTOFOLIO MINI ===== */}
      <section className="app-section">
        <h2 className="section-title">🚀 Showcase Portofolio Mini</h2>
        <p className="section-desc">
          Kumpulan proyek yang telah dikerjakan selama masa studi.
        </p>
        <div className="portofolio-grid">
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              githubUrl={proyek.githubUrl}
            />
          ))}
        </div>
      </section>

      {/* ===== TOMBOL INTERAKTIF ===== */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button className="tombol-utama" onClick={notifikasiSapaan}>
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>

    </div>
  );
}

export default App;
