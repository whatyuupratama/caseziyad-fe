import BookGrid from '@/components/ui/gridcard';
import { LoadingCard } from './loading-card';
import type { SearchResultsSectionProps } from '@/types/components';

export function SearchResultsSection({
  isLoading,
  filteredBooks,
}: SearchResultsSectionProps) {
  return (
    <section className='mt-10'>
      <div className='rounded-[32px] p-4 backdrop-blur sm:p-6'>
        {isLoading ? (
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, idx) => (
              <LoadingCard key={idx} height='h-64' />
            ))}
          </div>
        ) : (
          <BookGrid books={filteredBooks} />
        )}
      </div>
    </section>
  );
}
