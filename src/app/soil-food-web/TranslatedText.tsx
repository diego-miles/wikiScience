import React from 'react';

const translations = {
  startGame: 'Start Game',
  soilFoodWebFrenzy: 'Soil Food Web Frenzy (Game)',
  quitGame: 'Quit Game',
  nextLevel: 'Next Level',
  gameOver: 'Game Over!',
  howToPlay: 'How to Play',
  useArrowKeys: 'Use arrow keys to move Protozoa-Pac (P)',
  avoidEnemies: 'Avoid enemies:',
  powerUps: 'Power-ups',
  collectInfoBubbles: 'Collect info bubbles (i) to learn and gain points',
  soilFoodWebFact: 'Soil Food Web Fact',
  close: 'Close',
  level: 'Level',
  score: 'Score',
  lives: 'Lives',
  nematode: 'Nematode',
  predatoryMite: 'Predatory Mite',
  largerProtozoa: 'Large Protozoa',
  fungalHyphae: 'Fungal Hyphae',
  organicMatter: 'Organic Matter',
  compost: 'Compost',
  biochar: 'Biochar',
  humus: 'Humus',
  rhizobacteria: 'Rhizobacteria',
  vermicompost: 'Vermicompost',
  coverCrops: 'Cover Crops',
  biofertilizers: 'Biofertilizers',
  greenManure: 'Green Manure',
  youveCollected: 'You\'ve collected',
  levelCompleted: 'Level completed!',
  youCanAdvance: 'You can now advance to the next level.',
  congratulations: 'Congratulations!',
  allLevelsCompleted: 'You\'ve completed all levels.',
  integratedSoilManagement: 'Integrated Soil Management',
  humanImpact: 'Human Impact on Soil',
  soilAndClimateChange: 'Soil and Climate Change',
  advancedSoilFoodWeb: 'Advanced Soil Food Web',
  rootMicrobeSymbiosis: 'Root-Microbe Symbiosis',
  microbialInteractions: 'Microbial Interactions',
  soilStructureAndHealth: 'Soil Structure and Health',
  eachOrganismPlays: 'Each organism in the soil food web plays a unique role in maintaining ecosystem balance.',
  vermicompostEnriches: 'Vermicompost, produced by earthworms, enriches soil with nutrients and beneficial microbes.',
  soilFoodWeb: 'The soil food web is a complex network of organisms interacting to maintain soil health.',
  symbioticRelationships: 'Symbiotic relationships between roots and microbes are crucial for plant health.',
  rhizobacteriaPromote: 'Rhizobacteria promote plant growth by fixing nitrogen and producing growth hormones.',
  mycorrhizalFungi: 'Mycorrhizal fungi extend root systems, increasing water and nutrient uptake.',
  diverseMicrobialCommunities: 'Diverse microbial communities increase soil resilience to environmental stress.',
  humusEnhances: 'Humus, a stable organic matter, enhances nutrient retention and soil structure.',
  microbialInteractionsDrive: 'Microbial interactions in soil drive nutrient cycling and organic matter decomposition.',
  goodSoilStructure: 'Good soil structure supports a diverse range of microorganisms, improving soil health.',
  biocharEnhances: 'Biochar is a stable form of carbon that enhances soil fertility and microbial habitats.',
  soilStructureAffects: 'Soil structure affects water infiltration, root penetration, and microbial activity.',
  predatoryMitesControl: 'Predatory mites control pest populations, promoting a balanced soil ecosystem.',
  organicMatterImproves: 'Organic matter improves soil structure, water retention, and nutrient availability.',
  fungiFormSymbiotic: 'Fungi form symbiotic relationships with plant roots, enhancing water and nutrient uptake.',
  nematodesCan: 'Nematodes can be beneficial, aiding in nutrient cycling, or harmful, attacking plant roots.',
  protozoaFeed: 'Protozoa feed on bacteria, releasing nitrogen in a form plants can absorb.',
  bacteriaAreEssential: 'Bacteria are essential microorganisms in the soil, breaking down organic matter and cycling nutrients.',
  soilHealthIs: 'Soil health is vital for sustainable agriculture and ecosystem stability.',
};

type Translations = typeof translations;
type TranslationKey = keyof Translations;

const translatedTexts = {
  en: translations,
  es: {
    startGame: 'Comenzar Juego',
    soilFoodWebFrenzy: 'Red alimentaria del suelo',
    quitGame: 'Salir del Juego',
    nextLevel: 'Siguiente Nivel',
    gameOver: '¡Juego Terminado!',
    howToPlay: 'Cómo Jugar',
    useArrowKeys: 'Usa las teclas de flecha para mover Protozoa-Pac (P)',
    avoidEnemies: 'Evita a los enemigos:',
    powerUps: 'Potenciadores',
    collectInfoBubbles: 'Colecciona burbujas de información (i) para aprender y obtener puntos',
    soilFoodWebFact: 'Dato sobre la Red Alimentaria del Suelo',
    close: 'Cerrar',
    level: 'Nivel',
    score: 'Puntuación',
    lives: 'Vidas',
    nematode: 'Nematodo',
    predatoryMite: 'Ácaro Depredador',
    largerProtozoa: 'Protozoo Grande',
    fungalHyphae: 'Hifas Fúngicas',
    organicMatter: 'Materia Orgánica',
    compost: 'Compost',
    biochar: 'Biocarbón',
    humus: 'Humus',
    rhizobacteria: 'Rizobacterias',
    vermicompost: 'Vermicompost',
    coverCrops: 'Cultivos de Cobertura',
    biofertilizers: 'Biofertilizantes',
    greenManure: 'Abono Verde',
    youveCollected: 'Has recogido',
    levelCompleted: '¡Nivel completado!',
    youCanAdvance: 'Ahora puedes avanzar al siguiente nivel.',
    congratulations: '¡Felicidades!',
    allLevelsCompleted: 'Has completado todos los niveles.',
    integratedSoilManagement: 'Manejo Integrado del Suelo',
    humanImpact: 'Impacto Humano en el Suelo',
    soilAndClimateChange: 'El Suelo y el Cambio Climático',
    advancedSoilFoodWeb: 'Red Alimentaria del Suelo Avanzada',
    rootMicrobeSymbiosis: 'Simbiosis Raíz-Microbio',
    microbialInteractions: 'Interacciones Microbianas',
    soilStructureAndHealth: 'Estructura y Salud del Suelo',
    eachOrganismPlays: 'Cada organismo en la red alimentaria del suelo juega un papel único en el mantenimiento del equilibrio del ecosistema.',
    vermicompostEnriches: 'El vermicompost, producido por las lombrices de tierra, enriquece el suelo con nutrientes y microbios beneficiosos.',
    soilFoodWeb: 'La red alimentaria del suelo es una compleja red de organismos que interactúan para mantener la salud del suelo.',
    symbioticRelationships: 'Las relaciones simbióticas entre las raíces y los microbios son cruciales para la salud de las plantas.',
    rhizobacteriaPromote: 'Las rizobacterias promueven el crecimiento de las plantas fijando nitrógeno y produciendo hormonas de crecimiento.',
    mycorrhizalFungi: 'Los hongos micorrízicos extienden los sistemas radiculares, aumentando la absorción de agua y nutrientes.',
    diverseMicrobialCommunities: 'Las comunidades microbianas diversas aumentan la resiliencia del suelo al estrés ambiental.',
    humusEnhances: 'El humus, una materia orgánica estable, mejora la retención de nutrientes y la estructura del suelo.',
    microbialInteractionsDrive: 'Las interacciones microbianas en el suelo impulsan el ciclo de nutrientes y la descomposición de la materia orgánica.',
    goodSoilStructure: 'Una buena estructura del suelo admite una gama diversa de microorganismos, mejorando la salud del suelo.',
    biocharEnhances: 'El biocarbón es una forma estable de carbono que mejora la fertilidad del suelo y los hábitats microbianos.',
    soilStructureAffects: 'La estructura del suelo afecta la infiltración de agua, la penetración de las raíces y la actividad microbiana.',
    predatoryMitesControl: 'Los ácaros depredadores controlan las poblaciones de plagas, promoviendo un ecosistema de suelo equilibrado.',
    organicMatterImproves: 'La materia orgánica mejora la estructura del suelo, la retención de agua y la disponibilidad de nutrientes.',
    fungiFormSymbiotic: 'Los hongos forman relaciones simbióticas con las raíces de las plantas, mejorando la absorción de agua y nutrientes.',
    nematodesCan: 'Los nematodos pueden ser beneficiosos, ayudando en el ciclo de nutrientes, o dañinos, atacando las raíces de las plantas.',
    protozoaFeed: 'Los protozoos se alimentan de bacterias, liberando nitrógeno en una forma que las plantas pueden absorber.',
    bacteriaAreEssential: 'Las bacterias son microorganismos esenciales en el suelo, descomponiendo materia orgánica y ciclando nutrientes.',
    soilHealthIs: 'La salud del suelo es vital para la agricultura sostenible y la estabilidad del ecosistema.',
  }
};


interface TranslateTextProps {
  textKey: TranslationKey; // Use the TranslationKey type here
  language: 'en' | 'es';
}




const TranslateTextComponent: React.FC<TranslateTextProps> = ({ textKey, language }) => {
  const getTranslatedText = (key: TranslationKey): string => {
    return translatedTexts[language][key];
  };

  return <>{getTranslatedText(textKey)}</>;
};

export default TranslateTextComponent;
