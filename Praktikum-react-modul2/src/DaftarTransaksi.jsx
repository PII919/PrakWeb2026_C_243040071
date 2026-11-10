// src/DaftarTransaksi.jsx

function DaftarTransaksi({ transaksi, onHapus }) {
  if (transaksi.length === 0) {
    return (
      <p className="kosong">
        📭 Belum ada transaksi. Tambahkan transaksi pertamamu!
      </p>
    );
  }

  const formatRupiah = (angka) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);

  return (
    <ul className="daftar">
      {transaksi.map((item) => (
        <li key={item.id} className="item-transaksi">
          <div className="info-transaksi">
            <span className="keterangan-transaksi">{item.keterangan}</span>
            <span className={`badge ${item.jenis === 'Pemasukan' ? 'badge-masuk' : 'badge-keluar'}`}>
              {item.jenis}
            </span>
          </div>
          <div className="nominal-hapus">
            <span
              className="nominal-transaksi"
              style={{ color: item.jenis === 'Pemasukan' ? '#16A34A' : '#DC2626' }}
            >
              {item.jenis === 'Pemasukan' ? '+' : '-'} {formatRupiah(item.nominal)}
            </span>
            <button
              className="tombol tombol-merah tombol-kecil"
              onClick={() => onHapus(item.id)}
            >
              Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DaftarTransaksi;

