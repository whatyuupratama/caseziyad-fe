'use client';

import { useMemo, useState } from 'react';
import SearchBar from '@/components/searchbar';
import { SearchResultsSection } from '@/components/ui/search-results';

import { FlashSaleSection } from '@/components/flash-sale';
import { useCountdown } from '@/hooks/useCountdown';
import { useBooks } from '@/hooks/useBooks';
import { useFilteredBooks } from '@/hooks/useFilteredBooks';

export default function LandingContent() {
  const { books, isLoading, categories } = useBooks();
  const timeLeft = useCountdown();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const flashSaleBooks = useMemo(() => books.slice(3, 9), [books]);
  const filteredBooks = useFilteredBooks(books, query, selectedCategory);

  return (
    <main className='mx-auto max-w-6xl px-4 pb-24'>
      <SearchBar
        value={query}
        onChange={setQuery}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        className='mt-10'
      />
      <SearchResultsSection
        isLoading={isLoading}
        filteredBooks={filteredBooks}
      />

      <FlashSaleSection
        isLoading={isLoading}
        books={flashSaleBooks}
        timeLeft={timeLeft}
      />
    </main>
  );
}
