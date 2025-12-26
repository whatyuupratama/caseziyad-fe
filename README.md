# Modern Book Catalog

A fully responsive book/catalog landing page built with Next.js 16 that showcases 12 books from the DummyJSON API. The page mimics a polished marketing site with hero, curated collections, flash-sale countdown, and a real-time searchable grid of book cards.

![Modern Book Catalog UI](public/showcase.png)

## Tech Stack
- Next.js App Router (React 19)
- Tailwind CSS 4 for utility-first styling
- Axios for API requests
- Lucide icons (`SlidersHorizontal`) and custom illustrations for UX polish

## Features
- **Responsive grid layout**: `grid-cols-1` on mobile and up to three columns on desktop (`lg:grid-cols-3`) to keep cards aligned during viewport changes.
- **Real-time search + category filter**: Client-side filtering updates instantly as you type and supports optional category pills.
- **Custom empty state & 404**: Centered illustration (`/nobooks.png`) with friendly copy when search results vanish, plus a dedicated `/not-found` page for mistyped URLs.
- **Flash-sale teaser**: Countdown hook and highlight cards share the same fetched data to keep UI consistent.
- **Semantic layout**: `Header`, `Hero`, `LandingContent`, and `Footer` components keep the page modular and easy to extend.

## Data Fetching (Axios)
`src/lib/api.tsx` centralizes the DummyJSON request and normalizes the payload before it reaches the UI.

```ts
import axios from 'axios';
import { Books } from '@/types/books';

export async function fetchBooks(): Promise<Books[]> {
  const res = await axios.get('https://dummyjson.com/products?limit=12');
  const data: { products: Books[] } = res.data;

  return data.products.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    brand: item.brand,
    thumbnail: item.thumbnail,
    price: item.price,
    description: item.description,
    rating: item.rating,
    stock: item.stock,
  }));
}
```

## Real-time Search Logic
The combination of `SearchBar`, `useBooks`, and `useFilteredBooks` delivers instant feedback while you type. The hook memoizes filtering by query and category to avoid unnecessary renders.

```ts
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
```

`SearchBar` exposes an input and filter toggle that uses the `SlidersHorizontal` icon from Lucide, keeps focus states vivid, and collapses nicely on mobile. When filtering removes all items, `BookGrid` swaps to the illustrated empty state component.

## Getting Started
1. **Install** dependencies: `npm install`
2. **Run locally**: `npm run dev`
3. Visit `http://localhost:3000` to explore the catalog. Resize the browser to verify the grid transitions from one to three columns, and try both matching and non-matching queries to see the empty state.

## Project Layout
- `src/components` – Modular UI (header, hero, search, cards, empty state, flash sale)
- `src/hooks` – Data fetching (`useBooks`), countdown timer, and filtering logic
- `src/lib/api.tsx` – Axios-powered API client
- `public/` – Marketing assets and `showcase.png` screenshot referenced above

## Deployment Notes
- Duplicate `.env.example` into `.env.local` and update `NEXT_PUBLIC_SITE_URL` with your final domain (e.g., the Vercel preview/production URL). This value feeds both `robots.txt` and `sitemap.xml`.
- `src/app/sitemap.ts` exposes the canonical `/sitemap.xml` endpoint, while `src/app/robots.ts` links to it so crawlers can pick it up automatically.
- Vercel will detect the Next.js app automatically—no extra config is required beyond the environment variable above.

Feel free to fork the repo, record your own showcase video, and submit the links per the hiring brief.
