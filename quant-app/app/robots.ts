import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://quant-apps.com',
    sitemap: 'https://quant-apps.com/sitemap.xml',
  }
}