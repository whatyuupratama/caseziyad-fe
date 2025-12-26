import axios from 'axios';
import { Books } from '@/types/books';

export async function fetchBooks(): Promise<Books[]> {
  const res = await axios.get<{ products: Books[] }>(
    'https://dummyjson.com/products?limit=12'
  );

  return res.data.products;
}
