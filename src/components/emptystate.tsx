import Image from 'next/image';
export default function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center py-24 text-gray-500'>
      <Image src={'/nobooks.png'} alt='no books' width={200} height={200} />
      <p className='text-lg font-medium'>Buku yang kamu cari tidak ditemukan</p>
      <p className='text-sm'>Coba kata kunci lain</p>
    </div>
  );
}
