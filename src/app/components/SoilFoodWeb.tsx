"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AlertCircle, ArrowRight, Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import levelConfig from './LevelConfig'; // Import levelConfig from the separate component
import FungalHyphae from '@/components/icons/FungalHyphae'
import ParasiteNematode from '@/components/icons/ParasiteNematode'
import Protozoa from '@/components/icons/Protozoa'

const GRID_SIZE = 20;
const CELL_SIZE = 25;

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

 


const SoilFoodWebFrenzy: React.FC = () => {
  const [level, setLevel] = useState<number>(0);
  const [protozoa, setProtozoa] = useState<Position>({ x: 1, y: 1 });
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [powerUps, setPowerUps] = useState<PowerUp[]>([]);
  const [infoBubbles, setInfoBubbles] = useState<InfoBubble[]>([]);
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isPoweredUp, setIsPoweredUp] = useState<boolean>(false);
  const [infoMessage, setInfoMessage] = useState<string>('');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentInfoBubble, setCurrentInfoBubble] = useState<InfoBubble | null>(null);
  const [levelComplete, setLevelComplete] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('en'); // Default to English
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const initializeLevel = useCallback(() => {
    const config = levelConfig[level];
    setEnemies(config.enemies.flatMap(enemy =>
      Array(enemy.count).fill(null).map(() => ({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
        type: enemy.type
      }))
    ));
    setPowerUps(config.powerUps.map(() => ({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
      type: config.powerUps[Math.floor(Math.random() * config.powerUps.length)]
    })));
    setInfoBubbles(config.infoBubbles.map((info, index) => ({
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
      info: language === 'en' ? info.en : info.es, // Get appropriate info based on language
      id: index
    })));
    setLevelComplete(false);
    setProtozoa({ x: 1, y: 1 });
  }, [level, language]);

  useEffect(() => {
    if (isGameStarted) {
      initializeLevel();
    }
  }, [level, initializeLevel, isGameStarted]);

  const moveCharacter = useCallback((character: Position, direction: string): Position => {
    const newPos = { ...character };
    switch (direction) {
      case 'ArrowUp': newPos.y = Math.max(0, character.y - 1); break;
      case 'ArrowDown': newPos.y = Math.min(GRID_SIZE - 1, character.y + 1); break;
      case 'ArrowLeft': newPos.x = Math.max(0, character.x - 1); break;
      case 'ArrowRight': newPos.x = Math.min(GRID_SIZE - 1, character.x + 1); break;
      default: break;
    }
    return newPos;
  }, []);

  const moveEnemies = useCallback(() => {
    setEnemies(prevEnemies =>
      prevEnemies.map(enemy => {
        const directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        return { ...moveCharacter(enemy, randomDirection), type: enemy.type };
      })
    );
  }, [moveCharacter]);

  const checkCollisions = useCallback(() => {
    if (isPaused) return;

    // Check enemy collisions
    if (!isPoweredUp && enemies.some(e => e.x === protozoa.x && e.y === protozoa.y)) {
      setLives(prevLives => {
        const newLives = prevLives - 1;
        if (newLives <= 0) setGameOver(true);
        return newLives;
      });
    }

    // Check power-up collisions
    setPowerUps(prevPowerUps => {
      const collidedPowerUp = prevPowerUps.find(p => p.x === protozoa.x && p.y === protozoa.y);
      if (collidedPowerUp) {
        if (collidedPowerUp.type === 'fungalHyphae') {
          setIsPoweredUp(true);
          setTimeout(() => setIsPoweredUp(false), 5000);
        }
        setScore(prevScore => prevScore + 50);
        showInfoMessage(`You've collected ${collidedPowerUp.type}!`);
      }
      return prevPowerUps.filter(p => !(p.x === protozoa.x && p.y === protozoa.y));
    });

    // Check info bubble collisions
    setInfoBubbles(prevInfoBubbles => {
      const collidedInfoBubble = prevInfoBubbles.find(b => b.x === protozoa.x && b.y === protozoa.y);
      if (collidedInfoBubble) {
        setCurrentInfoBubble(collidedInfoBubble);
        setIsPaused(true);
        setScore(prevScore => prevScore + 100);
      }
      return prevInfoBubbles.filter(b => !(b.x === protozoa.x && b.y === protozoa.y)); // Corrected line
    });

    // Check if level is complete
    if (powerUps.length === 0 && infoBubbles.length === 0) {
      setLevelComplete(true);
      showInfoMessage(`Level ${level + 1} completed! You can now advance to the next level.`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [protozoa, enemies, powerUps, infoBubbles, isPoweredUp, level, isPaused]);

  const showInfoMessage = useCallback((message: string) => {
    setInfoMessage(message);
    setTimeout(() => setInfoMessage(""), 3000);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isGameStarted && !gameOver && !isPaused && !levelComplete) {
        switch (e.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case 'ArrowLeft':
          case 'ArrowRight':
            e.preventDefault();
            setProtozoa(prevProtozoa => moveCharacter(prevProtozoa, e.key));
            break;
          case ' ': // Spacebar
            e.preventDefault();
            // You can add a specific action for spacebar if needed
            break;
          default:
            break;
        }
      }
    };

    const preventDefaultKeyEvents = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', preventDefaultKeyEvents, { capture: true });

    const gameInterval = setInterval(() => {
      if (isGameStarted && !gameOver && !isPaused && !levelComplete) {
        moveEnemies();
        checkCollisions();
      }
    }, 500);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keydown', preventDefaultKeyEvents, { capture: true });
      clearInterval(gameInterval);
    };
  }, [isGameStarted, gameOver, isPaused, levelComplete, moveCharacter, moveEnemies, checkCollisions]);

const renderGrid = () => {
  const grid = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    const row = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      const isProtozoa = protozoa.x === x && protozoa.y === y;
      const enemy = enemies.find(e => e.x === x && e.y === y);
      const powerUp = powerUps.find(p => p.x === x && p.y === y);
      const infoBubble = infoBubbles.find(b => b.x === x && b.y === y);
      let cellContent = null;
      let cellColor = 'bg-gray-700';
      
      if (isProtozoa) {
        cellContent = <Protozoa className="w-full h-full" />;
        cellColor = isPoweredUp ? 'bg-yellow-400' : 'bg-yellow-200';
      } else if (enemy) {
        switch (enemy.type) {
          case 'nematode':
            cellContent = <ParasiteNematode className="w-full h-full" />;
            break;
          case 'predatoryMite':
            cellContent = <AlertCircle className="w-full h-full" />; // Using Lucide icon as placeholder
            break;
          case 'largerProtozoa':
            cellContent = <Protozoa className="w-full h-full" />; // Using the same Protozoa icon
            break;
        }
        cellColor = 'bg-red-500';
      } else if (powerUp) {
        switch (powerUp.type) {
          case 'fungalHyphae':
            cellContent = <FungalHyphae className="w-full h-full" />;
            break;
          // Add cases for other power-ups using appropriate icons
          default:
            cellContent = powerUp.type[0].toUpperCase();
        }
        cellColor = 'bg-green-300';
      } else if (infoBubble) {
        cellContent = 'i';
        cellColor = 'bg-blue-300';
      }
      
      row.push(
        <div
          key={`${x}-${y}`}
          className={`inline-flex items-center justify-center ${cellColor} text-xs font-bold border border-gray-600`}
          style={{ width: `${CELL_SIZE}px`, height: `${CELL_SIZE}px` }}
        >
          {cellContent}
        </div>
      );
    }
    grid.push(
      <div key={`row-${y}`} className="flex">
        {row}
      </div>
    );
  }
  return grid;
};

  const handleNextLevel = () => {
    if (level < levelConfig.length - 1) {
      setLevel(prevLevel => prevLevel + 1);
      setLevelComplete(false);
    } else {
      setGameOver(true);
      showInfoMessage("Congratulations! You've completed all levels.");
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLives(3);
    setLevel(0);
    initializeLevel();
  };

  const quitGame = () => {
    setIsGameStarted(false);
    setGameOver(false);
    setScore(0);
    setLives(3);
    setLevel(0);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'en' ? 'es' : 'en');
  };

  const getTranslatedText = (key: string) => {
    switch (key) {
      case 'startGame':
        return language === 'en' ? 'Start Game' : 'Comenzar Juego';
      case 'soilFoodWebFrenzy':
        return language === 'en' ? 'Soil Food Web Frenzy (Game)' : 'Red alimentaria del suelo';
      case 'quitGame':
        return language === 'en' ? 'Quit Game' : 'Salir del Juego';
      case 'nextLevel':
        return language === 'en' ? 'Next Level' : 'Siguiente Nivel';
      case 'gameOver':
        return language === 'en' ? 'Game Over!' : '¡Juego Terminado!';
      case 'howToPlay':
        return language === 'en' ? 'How to Play' : 'Cómo Jugar';
      case 'useArrowKeys':
        return language === 'en' ? 'Use arrow keys to move Protozoa-Pac (P)' : 'Usa las teclas de flecha para mover Protozoa-Pac (P)';
      case 'avoidEnemies':
        return language === 'en' ? 'Avoid enemies:' : 'Evita a los enemigos:';
      case 'powerUps':
        return language === 'en' ? 'Power-ups' : 'Potenciadores';
      case 'collectInfoBubbles':
        return language === 'en' ? 'Collect info bubbles (i) to learn and gain points' : 'Colecciona burbujas de información (i) para aprender y obtener puntos';
      case 'soilFoodWebFact':
        return language === 'en' ? 'Soil Food Web Fact' : 'Dato sobre la Red Alimentaria del Suelo';
      case 'close':
        return language === 'en' ? 'Close' : 'Cerrar';
      case 'level':
        return language === 'en' ? 'Level' : 'Nivel';
      case 'score':
        return language === 'en' ? 'Score' : 'Puntuación';
      case 'lives':
        return language === 'en' ? 'Lives' : 'Vidas';
      case 'nematode':
        return language === 'en' ? 'Nematode' : 'Nematodo';
      case 'predatoryMite':
        return language === 'en' ? 'Predatory Mite' : 'Ácaro Depredador';
      case 'largerProtozoa':
        return language === 'en' ? 'Large Protozoa' : 'Protozoo Grande';
      case 'fungalHyphae':
        return language === 'en' ? 'Fungal Hyphae' : 'Hifas Fúngicas';
      case 'organicMatter':
        return language === 'en' ? 'Organic Matter' : 'Materia Orgánica';
      case 'compost':
        return language === 'en' ? 'Compost' : 'Compost';
      case 'biochar':
        return language === 'en' ? 'Biochar' : 'Biocarbón';
      case 'humus':
        return language === 'en' ? 'Humus' : 'Humus';
      case 'rhizobacteria':
        return language === 'en' ? 'Rhizobacteria' : 'Rizobacterias';
      case 'vermicompost':
        return language === 'en' ? 'Vermicompost' : 'Vermicompost';
      case 'coverCrops':
        return language === 'en' ? 'Cover Crops' : 'Cultivos de Cobertura';
      case 'biofertilizers':
        return language === 'en' ? 'Biofertilizers' : 'Biofertilizantes';
      case 'greenManure':
        return language === 'en' ? 'Green Manure' : 'Abono Verde';
      case 'youveCollected':
        return language === 'en' ? 'You\'ve collected' : 'Has recogido';
      case 'levelCompleted':
        return language === 'en' ? 'Level completed!' : '¡Nivel completado!';
      case 'youCanAdvance':
        return language === 'en' ? 'You can now advance to the next level.' : 'Ahora puedes avanzar al siguiente nivel.';
      case 'congratulations':
        return language === 'en' ? 'Congratulations!' : '¡Felicidades!';
      case 'allLevelsCompleted':
        return language === 'en' ? 'You\'ve completed all levels.' : 'Has completado todos los niveles.';
      case 'integratedSoilManagement':
        return language === 'en' ? 'Integrated Soil Management' : 'Manejo Integrado del Suelo';
      case 'humanImpact':
        return language === 'en' ? 'Human Impact on Soil' : 'Impacto Humano en el Suelo';
      case 'soilAndClimateChange':
        return language === 'en' ? 'Soil and Climate Change' : 'El Suelo y el Cambio Climático';
      case 'advancedSoilFoodWeb':
        return language === 'en' ? 'Advanced Soil Food Web' : 'Red Alimentaria del Suelo Avanzada';
      case 'rootMicrobeSymbiosis':
        return language === 'en' ? 'Root-Microbe Symbiosis' : 'Simbiosis Raíz-Microbio';
      case 'microbialInteractions':
        return language === 'en' ? 'Microbial Interactions' : 'Interacciones Microbianas';
      case 'soilStructureAndHealth':
        return language === 'en' ? 'Soil Structure and Health' : 'Estructura y Salud del Suelo';
      case 'eachOrganismPlays':
        return language === 'en' ? 'Each organism in the soil food web plays a unique role in maintaining ecosystem balance.' : 'Cada organismo en la red alimentaria del suelo juega un papel único en el mantenimiento del equilibrio del ecosistema.';
      case 'vermicompostEnriches':
        return language === 'en' ? 'Vermicompost, produced by earthworms, enriches soil with nutrients and beneficial microbes.' : 'El vermicompost, producido por las lombrices de tierra, enriquece el suelo con nutrientes y microbios beneficiosos.';
      case 'soilFoodWeb':
        return language === 'en' ? 'The soil food web is a complex network of organisms interacting to maintain soil health.' : 'La red alimentaria del suelo es una compleja red de organismos que interactúan para mantener la salud del suelo.';
      case 'symbioticRelationships':
        return language === 'en' ? 'Symbiotic relationships between roots and microbes are crucial for plant health.' : 'Las relaciones simbióticas entre las raíces y los microbios son cruciales para la salud de las plantas.';
      case 'rhizobacteriaPromote':
        return language === 'en' ? 'Rhizobacteria promote plant growth by fixing nitrogen and producing growth hormones.' : 'Las rizobacterias promueven el crecimiento de las plantas fijando nitrógeno y produciendo hormonas de crecimiento.';
      case 'mycorrhizalFungi':
        return language === 'en' ? 'Mycorrhizal fungi extend root systems, increasing water and nutrient uptake.' : 'Los hongos micorrízicos extienden los sistemas radiculares, aumentando la absorción de agua y nutrientes.';
      case 'diverseMicrobialCommunities':
        return language === 'en' ? 'Diverse microbial communities increase soil resilience to environmental stress.' : 'Las comunidades microbianas diversas aumentan la resiliencia del suelo al estrés ambiental.';
      case 'humusEnhances':
        return language === 'en' ? 'Humus, a stable organic matter, enhances nutrient retention and soil structure.' : 'El humus, una materia orgánica estable, mejora la retención de nutrientes y la estructura del suelo.';
      case 'microbialInteractionsDrive':
        return language === 'en' ? 'Microbial interactions in soil drive nutrient cycling and organic matter decomposition.' : 'Las interacciones microbianas en el suelo impulsan el ciclo de nutrientes y la descomposición de la materia orgánica.';
      case 'goodSoilStructure':
        return language === 'en' ? 'Good soil structure supports a diverse range of microorganisms, improving soil health.' : 'Una buena estructura del suelo admite una gama diversa de microorganismos, mejorando la salud del suelo.';
      case 'biocharEnhances':
        return language === 'en' ? 'Biochar is a stable form of carbon that enhances soil fertility and microbial habitats.' : 'El biocarbón es una forma estable de carbono que mejora la fertilidad del suelo y los hábitats microbianos.';
      case 'soilStructureAffects':
        return language === 'en' ? 'Soil structure affects water infiltration, root penetration, and microbial activity.' : 'La estructura del suelo afecta la infiltración de agua, la penetración de las raíces y la actividad microbiana.';
      case 'predatoryMitesControl':
        return language === 'en' ? 'Predatory mites control pest populations, promoting a balanced soil ecosystem.' : 'Los ácaros depredadores controlan las poblaciones de plagas, promoviendo un ecosistema de suelo equilibrado.';
      case 'organicMatterImproves':
        return language === 'en' ? 'Organic matter improves soil structure, water retention, and nutrient availability.' : 'La materia orgánica mejora la estructura del suelo, la retención de agua y la disponibilidad de nutrientes.';
      case 'fungiFormSymbiotic':
        return language === 'en' ? 'Fungi form symbiotic relationships with plant roots, enhancing water and nutrient uptake.' : 'Los hongos forman relaciones simbióticas con las raíces de las plantas, mejorando la absorción de agua y nutrientes.';
      case 'nematodesCan':
        return language === 'en' ? 'Nematodes can be beneficial, aiding in nutrient cycling, or harmful, attacking plant roots.' : 'Los nematodos pueden ser beneficiosos, ayudando en el ciclo de nutrientes, o dañinos, atacando las raíces de las plantas.';
      case 'protozoaFeed':
        return language === 'en' ? 'Protozoa feed on bacteria, releasing nitrogen in a form plants can absorb.' : 'Los protozoos se alimentan de bacterias, liberando nitrógeno en una forma que las plantas pueden absorber.';
      case 'bacteriaAreEssential':
        return language === 'en' ? 'Bacteria are essential microorganisms in the soil, breaking down organic matter and cycling nutrients.' : 'Las bacterias son microorganismos esenciales en el suelo, descomponiendo la materia orgánica y ciclando nutrientes.';
      default:
        return key;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 ">
      <div className='h-32'></div>
      <h1 className="text-4xl font-bold mb-0">{getTranslatedText('soilFoodWebFrenzy')}</h1>
            <Button onClick={toggleLanguage} className="mb-8  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center">
        {language === 'en' ? 'Español' : 'English'}
      </Button>
      <div className="mb-4 text-lg">
        <span className="mr-4">{getTranslatedText('level')}: {level + 1}</span>
        <span className="mr-4">{getTranslatedText('score')}: {score}</span>
        <span>{getTranslatedText('lives')}: {lives}</span>
      </div>
      <div
        ref={gameAreaRef}
        className="mb-4 inline-block select-none focus:outline-none"
        tabIndex={0} // Make the div focusable
        onFocus={() => {
          if (isGameStarted && !gameOver && !isPaused && !levelComplete) {
            gameAreaRef.current?.focus();
          }
        }}
      >
        {isGameStarted ? renderGrid() : (
          <div className="flex items-center justify-center" style={{ width: `${GRID_SIZE * CELL_SIZE}px`, height: `${GRID_SIZE * CELL_SIZE}px` }}>
            <Button
              onClick={() => {
                startGame();
                gameAreaRef.current?.focus();
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
            >
              {getTranslatedText('startGame')} <Play className="ml-2" size={16} />
            </Button>
          </div>
        )}
      </div>
      {isGameStarted && (
        <Button onClick={quitGame} className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center">
          {getTranslatedText('quitGame')} <X className="ml-2" size={16} />
        </Button>
      )}
      {levelComplete && (
        <Button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
          onClick={handleNextLevel}
        >
          {getTranslatedText('nextLevel')} <ArrowRight className="ml-2" />
        </Button>
      )}
      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-red-500">{getTranslatedText('gameOver')}</div>
      )}
      {infoMessage && (
        <div className="mt-4 p-2 bg-blue-800 text-white rounded flex items-center">
          <AlertCircle className="mr-2" />
          {infoMessage}
        </div>
      )}
      <div className="mt-4 text-sm text-center max-w-4xl grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold mb-2">{getTranslatedText('howToPlay')}</h2>
          <p>{getTranslatedText('useArrowKeys')}</p>
          <p>{getTranslatedText('avoidEnemies')}</p>
          <ul className="list-disc list-inside">
            <li>{getTranslatedText('nematode')}: N</li>
            <li>{getTranslatedText('predatoryMite')}: M</li>
            <li>{getTranslatedText('largerProtozoa')}: L</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">{getTranslatedText('powerUps')}</h2>
          <ul className="list-disc list-inside">
            <li>F: {getTranslatedText('fungalHyphae')}</li>
            <li>O: {getTranslatedText('organicMatter')}</li>
            <li>D: {getTranslatedText('compost')}</li>
            <li>N: {getTranslatedText('biochar')}</li>
            <li>R: {getTranslatedText('humus')}</li>
          </ul>
          <p>{getTranslatedText('collectInfoBubbles')}</p>
        </div>
      </div>
      <Dialog open={isPaused} onOpenChange={setIsPaused}>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
          <DialogTitle>{getTranslatedText('soilFoodWebFact')}</DialogTitle>
          <DialogDescription>
            {currentInfoBubble?.info}
          </DialogDescription>
          <Button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setIsPaused(false)}
          >
            {getTranslatedText('close')}
          </Button>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default SoilFoodWebFrenzy;