// src/FormTransaksi.jsx
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('Pemasukan');
  const [galat, setGalat] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keterangan.trim()) {
      setGalat('Keterangan tidak boleh kosong.');
      return;
    }
    if (!nominal || Number(nominal) <= 0) {
      setGalat('Nominal harus berupa angka lebih dari 0.');
      return;
    }

    onTambah({
      id: Date.now(),
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis,
    });

    setKeterangan('');
    setNominal('');
    setJenis('Pemasukan');
    setGalat('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {galat && <p className="galat">{galat}</p>}

      <div className="baris-form">
        <label className="label-form">Keterangan</label>
        <input
          className="input"
          type="text"
          placeholder="Contoh: Gaji bulan ini"
          value={keterangan}
          onChange={(e) => {
            setKeterangan(e.target.value);
            setGalat('');
          }}
        />
      </div>

      <div className="baris-form">
        <label className="label-form">Nominal (Rp)</label>
        <input
          className="input"
          type="number"
          placeholder="Contoh: 500000"
          min="1"
          value={nominal}
          onChange={(e) => {
            setNominal(e.target.value);
            setGalat('');
          }}
        />
      </div>

      <div className="baris-form">
        <label className="label-form">Jenis</label>
        <select
          className="input"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
        >
          <option value="Pemasukan">Pemasukan</option>
          <option value="Pengeluaran">Pengeluaran</option>
        </select>
      </div>

      <button className="tombol tombol-tambah" type="submit">
        + Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;

