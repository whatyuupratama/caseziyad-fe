import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
      <Image
        src='/nobooks.png'
        alt='Halaman tidak ditemukan'
        width={220}
        height={220}
        priority
      />
      <div className='space-y-2'>
        <p className='text-xl font-semibold uppercase  text-blue-900'>404</p>
        <h1 className='text-3xl font-bold text-slate-900'>
          Halaman yang kamu cari kosong
        </h1>
        <p className='text-base text-slate-500'>
          URL yang kamu buka nggak sesuai katalog kami. Coba cek lagi
          penulisannya atau kembali ke beranda untuk jelajah koleksi terbaru.
        </p>
      </div>
      <Link
        href='/'
        className='rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800'
      >
        Balik ke katalog
      </Link>
    </main>
  );
}
