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
