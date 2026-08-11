import { MetadataRoute } from 'next'
import fs from 'fs';
import path from 'path';

function getLastModified(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)

  try {
    const stats = fs.statSync(fullPath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sorting-algorithms-simulator.vercel.app'
  
    const routes = [
        { url: '/', filePath: 'src/app/page.tsx', changeFrequency: 'daily' as const, priority: 1.0 },
        { url: '/about', filePath: 'src/app/about/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: '/contact', filePath: 'src/app/contact/page.tsx', changeFrequency: 'monthly' as const, priority: 0.8 },
    ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: getLastModified(route.filePath),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}