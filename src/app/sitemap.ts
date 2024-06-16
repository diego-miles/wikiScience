import { MetadataRoute } from 'next';
import data from '@/data/ScienceFieldsData'; // Asegúrate de que la ruta de importación sea correcta
import words from '@/data/words.json'

const baseUrl = 'https://wiki-science.com/top-science-books';
const wordsBaseUrl = 'https://wiki-science.com/dictionary/'; 


type SitemapFile = Array<{
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}>;


const toSlug = (title: string) => {
  const slug = title.replace(/[^a-zA-Z0-9 ,'-()]/g, "").replace(/ /g, "_");
  return slug.toLowerCase();
};

const chemicalElements  = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron",
    "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus",
    "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese",
    "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine",
    "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium",
    "Palladium", "Silver", "Cadmium", "Indium", "Tin",
    "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium",
    "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium",
    "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
    "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium",
    "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine",
    "Radon", "Francium", "Radium", "Actinium", "Thorium",
    "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium",
    "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
    "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium",
    "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
    "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium",
    "Livermorium", "Tennessine", "Oganesson"
]

const lowercaseElements = chemicalElements.map(element => element.toLowerCase());

  let sitemapEntries : SitemapFile = [];

export default function sitemap(): MetadataRoute.Sitemap {

  // for (const field of data) {
  //   for (const subField of field.subFields) {
  //     const subFieldUrl = `${baseUrl}/${toSlug(subField.title)}`;
  //     sitemapEntries.push({
  //       url: subFieldUrl,
  //       lastModified: new Date(),
  //       changeFrequency: 'monthly' as const, // Especifica el tipo constante
  //       priority: 0.8,
  //     });

  //     for (const topic of subField.topics) {
  //       const topicUrl = `${subFieldUrl}/${toSlug(topic)}`;
  //       sitemapEntries.push({
  //         url: topicUrl,
  //         lastModified: new Date(),
  //         changeFrequency: 'weekly' as const, // Especifica el tipo constante
  //         priority: 0.8,
  //       });
  //     }
  //   }
  // }


  // Adding chemical elements
  const elementsBaseUrl = 'https://wiki-science.com/periodic-table/';
  lowercaseElements.forEach(element => {
    const elementUrl = `${elementsBaseUrl}${toSlug(element)}`;
    sitemapEntries.push({
      url: elementUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7, // Priority can be adjusted as needed
    });
  });


  //  Logic for dictionary words
  words.forEach(word => {
    const wordUrl = `${wordsBaseUrl}${toSlug(word)}`;
    sitemapEntries.push({
      url: wordUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Adjust as needed
      priority: 0.7,          // Adjust as needed
    });
  });


console.log(sitemapEntries)



  return sitemapEntries;
}
