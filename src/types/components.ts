import type { Books } from '@/types/books';

export interface TimeLeft {
  hours: string;
  minutes: string;
  seconds: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (value: string) => void;
  className?: string;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'start';
  showIcon?: boolean;
}

export interface SearchResultsSectionProps {
  isLoading: boolean;
  filteredBooks: Books[];
}

export interface FlashSaleSectionProps {
  isLoading: boolean;
  books: Books[];
  timeLeft: TimeLeft;
}

export interface LoadingCardProps {
  height?: string;
}
