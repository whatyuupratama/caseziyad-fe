import { Books } from '@/types/books';
import BookCard from '../bookcard';
import EmptyState from '../emptystate';

export default function BookGrid({ books }: { books: Books[] }) {
  if (books.length === 0) return <EmptyState />;

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
