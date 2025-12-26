import { formatRupiah } from '@/lib/format';
import { LoadingCard } from './ui/loading-card';
import { SectionHeading } from './ui/section-heading';
import type { FlashSaleSectionProps } from '@/types/components';

export function FlashSaleSection({
  isLoading,
  books,
  timeLeft,
}: FlashSaleSectionProps) {
  return (
    <section className='mt-20 rounded-[32px] p-6 sm:p-8 lg:p-10'>
      <SectionHeading
        eyebrow='Flash Sale'
        title='Kejar deal terbatas hari ini'
        description='Stok sangat terbatas. Setiap buku mendapatkan diskon tambahan saat countdown berakhir.'
        // showIcon
      />
      <div className='mt-10 flex flex-wrap items-center justify-center gap-6 text-center text-blue-900'>
        {[
          ['Hours', timeLeft.hours],
          ['Minutes', timeLeft.minutes],
          ['Seconds', timeLeft.seconds],
        ].map(([label, value]) => (
          <div
            key={label}
            className='flex flex-col items-center rounded-2xl px-8 py-4'
          >
            <span className='text-4xl font-bold'>{value}</span>
            <span className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-400'>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className='mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <LoadingCard key={idx} height='h-52' />
            ))
          : books.map((book) => (
              <div key={book.id} className='rounded-3xl p-4'>
                <div className='relative'>
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className='h-44 w-full rounded-2xl object-cover'
                  />
                </div>
                <div className='mt-4 space-y-2'>
                  <p className='text-sm font-semibold text-slate-900 line-clamp-1'>
                    {book.title}
                  </p>

                  <div className='flex items-center gap-2'>
                    <span className='text-xs font-bold text-blue-900'>
                      {formatRupiah(book.price * 780)}
                    </span>
                    <span className='text-xs text-slate-400 line-through'>
                      {formatRupiah(book.price * 1000)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
