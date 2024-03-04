import { MetadataRoute } from 'next';
import data from '@/components/ScienceFieldsData'; // Asegúrate de que la ruta de importación sea correcta

const baseUrl = 'https://wiki-science.com/top-science-books';

const toSlug = (title: string) => {
  return title.replace(/[^a-zA-Z0-9 ,'-]/g, "").replace(/ /g, "%20");
};

export default function sitemap(): MetadataRoute.Sitemap {
  let sitemapEntries = [];

  for (const field of data) {
    for (const subField of field.subFields) {
      const subFieldUrl = `${baseUrl}/${toSlug(subField.title)}`;
      sitemapEntries.push({
        url: subFieldUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const, // Especifica el tipo constante
        priority: 0.8,
      });

      for (const topic of subField.topics) {
        const topicUrl = `${subFieldUrl}/${toSlug(topic)}`;
        sitemapEntries.push({
          url: topicUrl,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const, // Especifica el tipo constante
          priority: 0.8,
        });
      }
    }
  }

  return sitemapEntries;
}
