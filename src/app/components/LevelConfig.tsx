// components/LevelConfig.js
"use client";

interface Enemy {
  x: number;
  y: number;
  type: string;
}

interface PowerUp {
  x: number;
  y: number;
  type: string;
}

interface InfoBubble {
  x: number;
  y: number;
  info: string;
  id: number;
}

interface Position {
  x: number;
  y: number;
}

interface LevelConfig {
  name: string;
  enemies: { type: string; count: number }[];
  powerUps: string[];
  infoBubbles: { en: string; es: string }[]; // Changed to object with English and Spanish
  mazeComplexity: number;
}

const levelConfig: LevelConfig[] = [
  {
    name: "Soil Life Fundamentals",
    enemies: [{ type: 'nematode', count: 3 }],
    powerUps: ['fungalHyphae', 'organicMatter'],
    infoBubbles: [
      {
        en: "Bacteria: Microscopic prokaryotes (0.2-2 μm) that play crucial roles in nutrient cycling. They decompose organic matter, fix nitrogen, and form symbiotic relationships with plants.",
        es: "Bacterias: Procariotas microscópicos (0.2-2 μm) que juegan roles cruciales en el ciclo de nutrientes. Descomponen materia orgánica, fijan nitrógeno y forman relaciones simbióticas con plantas."
      },
      {
        en: "Protozoa: Single-celled eukaryotes (10-50 μm) that regulate bacterial populations. By grazing on bacteria, they release excess nitrogen in plant-available forms, enhancing soil fertility.",
        es: "Protozoos: Eucariotas unicelulares (10-50 μm) que regulan poblaciones bacterianas. Al alimentarse de bacterias, liberan exceso de nitrógeno en formas disponibles para las plantas, mejorando la fertilidad del suelo."
      },
      {
        en: "Nematodes: Microscopic worms (50 μm - 1 mm) with diverse feeding habits. Beneficial nematodes prey on plant pests, while plant-parasitic types can damage crops by feeding on roots.",
        es: "Nematodos: Gusanos microscópicos (50 μm - 1 mm) con hábitos alimenticios diversos. Los nematodos beneficiosos se alimentan de plagas de plantas, mientras que los tipos parásitos pueden dañar cultivos al alimentarse de raíces."
      }
    ],
    mazeComplexity: 1
  },
  {
    name: "Nutrient Cycling Dynamics",
    enemies: [{ type: 'nematode', count: 5 }, { type: 'predatoryMite', count: 2 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'compost'],
    infoBubbles: [
      {
        en: "Fungi: Eukaryotic microorganisms forming extensive hyphal networks. Mycorrhizal fungi create symbioses with 80-90% of land plants, extending root surface area by 100-1000 times for enhanced nutrient uptake.",
        es: "Hongos: Microorganismos eucariotas que forman extensas redes de hifas. Los hongos micorrízicos crean simbiosis con el 80-90% de las plantas terrestres, extendiendo el área superficial de las raíces 100-1000 veces para mejorar la absorción de nutrientes."
      },
      {
        en: "Organic matter: Complex mixture of plant/animal residues and microbial biomass. It improves soil structure, increasing water retention by up to 20% and providing a carbon source for soil microbes.",
        es: "Materia orgánica: Mezcla compleja de residuos vegetales/animales y biomasa microbiana. Mejora la estructura del suelo, aumentando la retención de agua hasta un 20% y proporcionando una fuente de carbono para los microorganismos del suelo."
      },
      {
        en: "Predatory mites: Tiny arachnids (0.3-0.5 mm) that help control pest populations. They can consume up to 5 pest mites or 20 thrips per day, promoting natural pest control in soil ecosystems.",
        es: "Ácaros depredadores: Pequeños arácnidos (0.3-0.5 mm) que ayudan a controlar poblaciones de plagas. Pueden consumir hasta 5 ácaros plaga o 20 trips por día, promoviendo el control natural de plagas en ecosistemas del suelo."
      }
    ],
    mazeComplexity: 2
  },
  {
    name: "Soil Structure and Health",
    enemies: [{ type: 'nematode', count: 7 }, { type: 'predatoryMite', count: 3 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'biochar'],
    infoBubbles: [
      {
        en: "Soil structure: Arrangement of soil particles into aggregates. Good structure can increase water infiltration rates by 5-10 times, promoting root growth and creating habitats for soil microorganisms.",
        es: "Estructura del suelo: Disposición de partículas del suelo en agregados. Una buena estructura puede aumentar las tasas de infiltración de agua de 5 a 10 veces, promoviendo el crecimiento de raíces y creando hábitats para microorganismos del suelo."
      },
      {
        en: "Biochar: Carbonized organic matter produced by pyrolysis. It can persist in soil for 100-1000 years, increasing cation exchange capacity by 50% and providing stable habitats for beneficial microbes.",
        es: "Biocarbón: Materia orgánica carbonizada producida por pirólisis. Puede persistir en el suelo durante 100-1000 años, aumentando la capacidad de intercambio catiónico en un 50% y proporcionando hábitats estables para microorganismos beneficiosos."
      },
      {
        en: "Diverse microorganisms: A teaspoon of healthy soil contains up to 1 billion bacteria, several meters of fungal hyphae, thousands of protozoa, and dozens of nematodes, indicating robust soil health.",
        es: "Microorganismos diversos: Una cucharadita de suelo saludable contiene hasta 1 billón de bacterias, varios metros de hifas fúngicas, miles de protozoos y docenas de nematodos, indicando una salud robusta del suelo."
      }
    ],
    mazeComplexity: 3
  },
  {
    name: "Microbial Interactions",
    enemies: [{ type: 'nematode', count: 8 }, { type: 'predatoryMite', count: 4 }, { type: 'largerProtozoa', count: 2 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'humus'],
    infoBubbles: [
      {
        en: "Microbial interactions: Complex networks involving competition, predation, and symbiosis. These interactions can accelerate nutrient cycling rates by 30-50%, enhancing soil fertility and plant growth.",
        es: "Interacciones microbianas: Redes complejas que involucran competencia, depredación y simbiosis. Estas interacciones pueden acelerar las tasas de ciclo de nutrientes en un 30-50%, mejorando la fertilidad del suelo y el crecimiento de las plantas."
      },
      {
        en: "Humus: Stable organic matter resistant to decomposition. It can retain up to 20 times its weight in water and significantly increases soil cation exchange capacity, improving nutrient retention.",
        es: "Humus: Materia orgánica estable resistente a la descomposición. Puede retener hasta 20 veces su peso en agua y aumenta significativamente la capacidad de intercambio catiónico del suelo, mejorando la retención de nutrientes."
      },
      {
        en: "Diverse communities: Soils with high biodiversity can be 30-40% more resistant to drought and other environmental stresses, demonstrating the importance of maintaining complex soil ecosystems.",
        es: "Comunidades diversas: Los suelos con alta biodiversidad pueden ser 30-40% más resistentes a la sequía y otros estreses ambientales, demostrando la importancia de mantener ecosistemas de suelo complejos."
      }
    ],
    mazeComplexity: 4
  },
  {
    name: "Root-Microbe Symbiosis",
    enemies: [{ type: 'nematode', count: 10 }, { type: 'predatoryMite', count: 5 }, { type: 'largerProtozoa', count: 3 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'rhizobacteria'],
    infoBubbles: [
      {
        en: "Rhizobacteria: Plant growth-promoting bacteria in the rhizosphere. Some species can fix up to 150 kg N/ha/year and produce phytohormones like IAA, enhancing plant growth by 20-30%.",
        es: "Rizobacterias: Bacterias promotoras del crecimiento vegetal en la rizosfera. Algunas especies pueden fijar hasta 150 kg N/ha/año y producir fitohormonas como AIA, mejorando el crecimiento de las plantas en un 20-30%."
      },
      {
        en: "Mycorrhizal fungi: Symbiotic fungi that colonize 80-90% of land plants. They can increase nutrient uptake efficiency by 10-1000 times, especially for phosphorus in nutrient-poor soils.",
        es: "Hongos micorrízicos: Hongos simbióticos que colonizan el 80-90% de las plantas terrestres. Pueden aumentar la eficiencia de absorción de nutrientes de 10 a 1000 veces, especialmente para el fósforo en suelos pobres en nutrientes."
      },
      {
        en: "Root-microbe symbiosis: Plants allocate 20-40% of their photosynthates to root exudates, supporting microbial communities that, in turn, enhance plant nutrient uptake and stress tolerance.",
        es: "Simbiosis raíz-microbio: Las plantas asignan el 20-40% de sus fotosintatos a exudados radiculares, apoyando comunidades microbianas que, a su vez, mejoran la absorción de nutrientes y la tolerancia al estrés de las plantas."
      }
    ],
    mazeComplexity: 5
  },
  {
    name: "Advanced Soil Food Web",
    enemies: [{ type: 'nematode', count: 12 }, { type: 'predatoryMite', count: 6 }, { type: 'largerProtozoa', count: 4 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'vermicompost'],
    infoBubbles: [
      {
        en: "Soil food web: Interconnected network of organisms from microbes to macrofauna. A balanced web can process up to 35,000 kg of organic matter per hectare annually, recycling nutrients efficiently.",
        es: "Red alimentaria del suelo: Red interconectada de organismos desde microbios hasta macrofauna. Una red equilibrada puede procesar hasta 35,000 kg de materia orgánica por hectárea anualmente, reciclando nutrientes eficientemente."
      },
      {
        en: "Vermicompost: Earthworm-processed organic matter. Contains 5-11 times more N, P, and K than surrounding soil and harbors microbes that can suppress soil-borne plant pathogens by up to 70%.",
        es: "Vermicompost: Materia orgánica procesada por lombrices. Contiene de 5 a 11 veces más N, P y K que el suelo circundante y alberga microbios que pueden suprimir patógenos de plantas transmitidos por el suelo hasta en un 70%."
      },
      {
        en: "Ecosystem balance: Each trophic level in the soil food web is crucial. For example, protozoa can regulate bacterial populations, releasing up to 80% of N locked in bacterial biomass as plant-available forms.",
        es: "Equilibrio del ecosistema: Cada nivel trófico en la red alimentaria del suelo es crucial. Por ejemplo, los protozoos pueden regular las poblaciones bacterianas, liberando hasta el 80% del N bloqueado en la biomasa bacteriana en formas disponibles para las plantas."
      }
    ],
    mazeComplexity: 6
  },
  {
    name: "Soil and Climate Change",
    enemies: [{ type: 'nematode', count: 14 }, { type: 'predatoryMite', count: 7 }, { type: 'largerProtozoa', count: 5 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'coverCrops'],
    infoBubbles: [
      {
        en: "Carbon sequestration: Soils store 2-3 times more carbon than the atmosphere. Improved management practices can sequester an additional 0.9-1.85 Gt C/year, mitigating climate change impacts.",
        es: "Secuestro de carbono: Los suelos almacenan 2-3 veces más carbono que la atmósfera. Las prácticas de gestión mejoradas pueden secuestrar 0.9-1.85 Gt C/año adicionales, mitigando los impactos del cambio climático."
      },
      {
        en: "Cover crops: Non-cash crops grown for soil protection. They can reduce soil erosion by up to 90%, increase organic matter by 1-2% over 5-10 years, and fix 40-200 kg N/ha/year for legumes.",
        es: "Cultivos de cobertura: Cultivos no comerciales cultivados para protección del suelo. Pueden reducir la erosión del suelo hasta en un 90%, aumentar la materia orgánica en 1-2% en 5-10 años y fijar 40-200 kg N/ha/año para leguminosas."
      },
      {
        en: "Soil health management: Holistic practices can increase soil organic carbon by 0.1-0.5% per year, improve water holding capacity by 20-40%, and enhance crop yields by 20-70% in degraded soils.",
        es: "Gestión de salud del suelo: Las prácticas holísticas pueden aumentar el carbono orgánico del suelo en 0.1-0.5% por año, mejorar la capacidad de retención de agua en 20-40% y aumentar los rendimientos de los cultivos en 20-70% en suelos degradados."
      }
    ],
    mazeComplexity: 7
  },
  {
    name: "Human Impact on Soil",
    enemies: [{ type: 'nematode', count: 16 }, { type: 'predatoryMite', count: 8 }, { type: 'largerProtozoa', count: 6 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'biofertilizers'],
    infoBubbles: [
      {
        en: "Land use impact: Intensive agriculture can reduce soil organic matter by 50-70% over 50 years. Deforestation increases soil erosion rates by 10-100 times, threatening food security and biodiversity.",
        es: "Impacto del uso del suelo: La agricultura intensiva puede reducir la materia orgánica del suelo en un 50-70% en 50 años. La deforestación aumenta las tasas de erosión del suelo de 10 a 100 veces, amenazando la seguridad alimentaria y la biodiversidad."
      },
      {
        en: "Biofertilizers: Microbial inoculants enhancing soil fertility. They can increase crop yields by 10-30%, reduce chemical fertilizer use by 25-50%, and improve nutrient use efficiency by 5-25%.",
        es: "Biofertilizantes: Inoculantes microbianos que mejoran la fertilidad del suelo. Pueden aumentar los rendimientos de los cultivos en un 10-30%, reducir el uso de fertilizantes químicos en un 25-50% y mejorar la eficiencia del uso de nutrientes en un 5-25%."
      },
      {
        en: "Sustainable practices: Crop rotation can increase yields by 10-25% and reduce pest pressure by up to 50%. Reduced tillage can increase soil organic matter by 0.1-0.7% per year and decrease erosion by 60-90%.",
        es: "Prácticas sostenibles: La rotación de cultivos puede aumentar los rendimientos en un 10-25% y reducir la presión de plagas hasta en un 50%. La labranza reducida puede aumentar la materia orgánica del suelo en 0.1-0.7% por año y disminuir la erosión en un 60-90%."
      }
    ],
    mazeComplexity: 8
  },
  {
    name: "Integrated Soil Management",
    enemies: [{ type: 'nematode', count: 18 }, { type: 'predatoryMite', count: 9 }, { type: 'largerProtozoa', count: 7 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'greenManure'],
    infoBubbles: [
      {
        en: "Holistic approach: Combines physical, chemical, and biological methods. Integrated management can increase soil organic matter by 0.5-2% over 5-10 years, improving overall soil health and crop productivity by 20-50%.",
        es: "Enfoque holístico: Combina métodos físicos, químicos y biológicos. El manejo integrado puede aumentar la materia orgánica del suelo en 0.5-2% en 5-10 años, mejorando la salud general del suelo y la productividad de los cultivos en un 20-50%."
      },
      {
        en: "Green manure: Cover crops incorporated into soil. Can add 60-200 kg N/ha/year, increase soil organic matter by 0.5-1% over 2-5 years, and improve soil structure, reducing bulk density by 5-15%.",
        es: "Abono verde: Cultivos de cobertura incorporados al suelo. Puede añadir 60-200 kg N/ha/año, aumentar la materia orgánica del suelo en 0.5-1% en 2-5 años y mejorar la estructura del suelo, reduciendo la densidad aparente en un 5-15%."
      },
      {
        en: "Balanced management: Enhances productivity and ecosystem services. Proper soil management can increase water holding capacity by 20-40%, sequester 0.2-0.5 tons C/ha/year, and boost crop resilience to climate extremes by 30-50%.",
        es: "Gestión equilibrada: Mejora la productividad y los servicios ecosistémicos. El manejo adecuado del suelo puede aumentar la capacidad de retención de agua en un 20-40%, secuestrar 0.2-0.5 toneladas de C/ha/año y aumentar la resiliencia de los cultivos a los extremos climáticos en un 30-50%."
      }
    ],
    mazeComplexity: 9
  },
  {
    name: "Soil Biodiversity and Ecosystem Services",
    enemies: [{ type: 'nematode', count: 20 }, { type: 'predatoryMite', count: 10 }, { type: 'largerProtozoa', count: 8 }],
    powerUps: ['fungalHyphae', 'organicMatter', 'biocontrolAgents'],
    infoBubbles: [
      {
        en: "Soil biodiversity: A single gram of soil can contain up to 1 billion bacterial cells of possibly 10,000 species. High biodiversity can increase nutrient cycling rates by 30-50% and improve soil structure stability by 20-40%.",
        es: "Biodiversidad del suelo: Un solo gramo de suelo puede contener hasta 1 billón de células bacterianas de posiblemente 10,000 especies. La alta biodiversidad puede aumentar las tasas de ciclo de nutrientes en un 30-50% y mejorar la estabilidad de la estructura del suelo en un 20-40%."
      },
      {
        en: "Ecosystem services: Healthy soils provide multiple services. They can filter up to 99.5% of pollutants from water, store 0.5-1.5 tons C/ha/year, and support 25% of global biodiversity, crucial for food security and climate regulation.",
        es: "Servicios ecosistémicos: Los suelos saludables proporcionan múltiples servicios. Pueden filtrar hasta el 99.5% de los contaminantes del agua, almacenar 0.5-1.5 toneladas de C/ha/año y soportar el 25% de la biodiversidad global, crucial para la seguridad alimentaria y la regulación climática."
      },
      {
        en: "Biocontrol agents: Beneficial organisms for pest management. Predatory nematodes can reduce pest populations by 60-90%, while certain fungi can parasitize up to 80% of pest insects, reducing the need for chemical pesticides.",
        es: "Agentes de biocontrol: Organismos beneficiosos para el manejo de plagas. Los nematodos depredadores pueden reducir las poblaciones de plagas en un 60-90%, mientras que ciertos hongos pueden parasitar hasta el 80% de los insectos plaga, reduciendo la necesidad de pesticidas químicos."
      }
    ],
    mazeComplexity: 10
  }
];


export default levelConfig;