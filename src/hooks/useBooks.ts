import { useEffect, useMemo, useState } from 'react';
import { fetchBooks } from '@/lib/api';
import type { Books } from '@/types/books';

export function useBooks() {
  const [books, setBooks] = useState<Books[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchBooks()
      .then((data) => {
        if (isMounted) {
          setBooks(data);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(books.map((book) => book.category))),
    [books]
  );

  return { books, isLoading, categories };
}
