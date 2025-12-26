import Image from 'next/image';

export default function Icon() {
  return (
    <div className='flex items-center gap-3'>
      <Image src='/icon.png' alt='ZiyadBooks' width={50} height={50} priority />

      <div>
        <p className='text-xl font-bold text-slate-900'>ZiyadBooks</p>
        <p className='text-xs text-slate-500'>Book Store Website</p>
      </div>
    </div>
  );
}
