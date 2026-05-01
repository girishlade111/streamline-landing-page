import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://amanesoft.com',
      lastModified: '2026-05-01',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://amanesoft.com/services',
      lastModified: '2026-05-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://amanesoft.com/get-started',
      lastModified: '2026-05-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://amanesoft.com/contact',
      lastModified: '2026-05-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://amanesoft.com/artists',
      lastModified: '2026-05-01',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://amanesoft.com/inquiry',
      lastModified: '2026-05-01',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}