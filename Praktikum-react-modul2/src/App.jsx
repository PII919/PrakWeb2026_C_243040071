// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import FormTransaksi from './FormTransaksi';
import DaftarTransaksi from './DaftarTransaksi';
import SaldoRingkasan from './SaldoRingkasan';

const STORAGE_KEY = 'catatan_keuangan_mini';

function App() {
  // State utama: daftar transaksi, diinisialisasi dari localStorage
  const [transaksi, setTransaksi] = useState(() => {
    const tersimpan = localStorage.getItem(STORAGE_KEY);
    return tersimpan ? JSON.parse(tersimpan) : [];
  });

  // useEffect: simpan ke localStorage setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transaksi));
  }, [transaksi]);

  // Tambah transaksi baru
  const tambahTransaksi = (data) => {
    setTransaksi([...transaksi, data]);
  };

  // Hapus transaksi berdasarkan id
  const hapusTransaksi = (id) => {
    setTransaksi(transaksi.filter((t) => t.id !== id));
  };

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">Kelola pemasukan dan pengeluaranmu dengan mudah</p>

      {/* Komponen 1: Ringkasan Saldo */}
      <SaldoRingkasan transaksi={transaksi} />

      {/* Komponen 2: Form Tambah Transaksi */}
      <div className="kartu">
        <h2>Tambah Transaksi</h2>
        <FormTransaksi onTambah={tambahTransaksi} />
      </div>

      {/* Komponen 3: Daftar Transaksi */}
      <div className="kartu">
        <h2>Riwayat Transaksi</h2>
        <DaftarTransaksi transaksi={transaksi} onHapus={hapusTransaksi} />
      </div>
    </div>
  );
}

export default App;
