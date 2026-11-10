// src/SaldoRingkasan.jsx

function SaldoRingkasan({ transaksi }) {
  const formatRupiah = (angka) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(Math.abs(angka));

  const totalMasuk = transaksi
    .filter((t) => t.jenis === 'Pemasukan')
    .reduce((acc, t) => acc + Number(t.nominal), 0);

  const totalKeluar = transaksi
    .filter((t) => t.jenis === 'Pengeluaran')
    .reduce((acc, t) => acc + Number(t.nominal), 0);

  const saldo = totalMasuk - totalKeluar;

  return (
    <div className="kartu kartu-saldo">
      <h2>💰 Ringkasan Saldo</h2>
      <div className="grid-saldo">
        <div className="kotak-saldo kotak-masuk">
          <p className="label-saldo">Total Pemasukan</p>
          <p className="angka-saldo warna-hijau">+ {formatRupiah(totalMasuk)}</p>
        </div>
        <div className="kotak-saldo kotak-keluar">
          <p className="label-saldo">Total Pengeluaran</p>
          <p className="angka-saldo warna-merah">- {formatRupiah(totalKeluar)}</p>
        </div>
      </div>
      <div className="kotak-total">
        <p className="label-saldo">Saldo Bersih</p>
        <p
          className="angka-saldo angka-total"
          style={{ color: saldo >= 0 ? '#16A34A' : '#DC2626' }}
        >
          {saldo >= 0 ? '+' : '-'} {formatRupiah(saldo)}
        </p>
      </div>
    </div>
  );
}

export default SaldoRingkasan;

