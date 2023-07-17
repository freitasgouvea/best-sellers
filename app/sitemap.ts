import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://freitasgouvea.github.io/best-sellers/',
      lastModified: new Date(),
    },
  ]
}