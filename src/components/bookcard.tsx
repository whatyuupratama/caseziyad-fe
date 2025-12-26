import { formatRupiah } from '@/lib/format';
import { Books } from '@/types/books';

export default function BookCard({ book }: { book: Books }) {
  return (
    <div className='group flex h-full flex-col rounded-xl border border-gray-200  bg-cover bg-center bg-no-repeat p-5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(79,70,229,0.18)]'>
      <div className='relative flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-slate-50'>
        <img
          src={book.thumbnail}
          alt={book.title}
          className='h-full w-full object-contain transition duration-300 group-hover:scale-105'
          style={{
            backgroundImage: "url('/bg-card.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      <div className='mt-4 flex flex-1 flex-col'>
        <div className='text-xs font-semibold uppercase tracking-[0.2em] text-blue-900'>
          {book.category}
        </div>
        <h3 className='mt-2 text-lg font-semibold text-slate-900'>
          {book.title}
        </h3>
        <p className='text-sm text-slate-500'>{book.brand}</p>
        <div className='mt-auto pt-4 text-xl font-bold text-slate-900'>
          {formatRupiah(book.price * 1000)}
        </div>
      </div>
    </div>
  );
}
