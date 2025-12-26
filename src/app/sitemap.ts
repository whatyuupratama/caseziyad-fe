import type { MetadataRoute } from 'next';

const baseUrl = 'https://caseziyad-fe.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
