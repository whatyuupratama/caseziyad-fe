import { useEffect, useRef, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type { SearchBarProps } from '@/types/components';

export default function SearchBar({
  value,
  onChange,
  categories = [],
  selectedCategory = '',
  onCategoryChange,
  className = '',
}: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCategorySelect = (category: string) => {
    onCategoryChange?.(category);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative z-20 flex w-full flex-col gap-3 transition-transform duration-200 hover:scale-[1.01] focus-within:scale-[1.01] sm:flex-row sm:items-center sm:gap-4 ${className}`}
    >
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='Cari judul buku, kategori, atau penerbit'
        className='w-full min-w-[180px] rounded-2xl border border-slate-200 bg-transparent px-4 py-2 text-base text-slate-600 placeholder:text-slate-400 transition-[min-width,box-shadow] duration-300 focus:min-w-[220px] focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 sm:min-w-[320px] sm:focus:min-w-[380px] bg-white py-3'
      />
      <button
        type='button'
        onClick={() => setIsOpen((prev) => !prev)}
        className='inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-blue-800 sm:w-auto'
      >
        <SlidersHorizontal className='h-4 w-4' />
        {selectedCategory ? selectedCategory : 'Filter'}
      </button>

      {isOpen && categories.length > 0 && (
        <div className='absolute left-0 top-[calc(100%+0.75rem)] z-50 w-full rounded-2xl border border-slate-100 bg-white p-3  sm:left-auto sm:right-4 sm:w-64'>
          <p className='px-3 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400'>
            Pilih kategori
          </p>
          <button
            type='button'
            onClick={() => handleCategorySelect('')}
            className={`w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
              selectedCategory === ''
                ? 'bg-blue-900 text-white'
                : 'text-gray-600 hover:bg-slate-50'
            }`}
          >
            Semua kategori
          </button>
          {categories.map((category) => (
            <button
              type='button'
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
