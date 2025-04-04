import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
   const product_url:string  =  process.env.WEBSITE_URL ?? WEBSITE_URL;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${product_url}/sitemap.xml`,
  }
}
