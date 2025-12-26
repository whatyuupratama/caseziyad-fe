import { useMemo } from 'react';
import type { Books } from '@/types/books';

export function useFilteredBooks(
  books: Books[],
  query: string,
  selectedCategory: string
) {
  return useMemo(() => {
    let result = books;
    if (selectedCategory) {
      result = result.filter((book) => book.category === selectedCategory);
    }

    if (!query) return result;
    const normalizedQuery = query.toLowerCase();

    return result.filter((book) =>
      [book.title, book.category, book.brand].some((field) =>
        field.toLowerCase().includes(normalizedQuery)
      )
    );
  }, [books, query, selectedCategory]);
}
