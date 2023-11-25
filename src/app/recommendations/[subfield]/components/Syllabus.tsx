"use client"
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import styles from './Syllabus.module.css';
import imageLimitsData from "@/syllabus_pages.json";
import useImageNavigator from '@/app/hooks/useImageNavigator';

type Props = {
  title: string;
  priority: boolean;
};

type ImageNavigatorProps = {
  currentImageIndex: number;
  navigateImage: (direction: number) => void;
  temarioImgs: string[];
  limit: number;
};

type OverlayProps = {
  isVisible: boolean;
  closeOverlay: () => void;
  children: React.ReactNode;
};

interface ImageLimits {
  [key: string]: number;
}

const imageLimits: ImageLimits = imageLimitsData;

const formatTitleForURL = (title: string) => {
  return title.replace(/[^a-zA-Z0-9 ,'-]/g, "").replace(/ /g, "%20");
};
const formatTitleToCompare = (title: string) => {
  return title.replace(/[^a-zA-Z0-9 ,'-]/g, "")
};

const ImageNavigator = ({ currentImageIndex, navigateImage, limit, temarioImgs }: ImageNavigatorProps) => {
  const [erroredImages, setErroredImages] = useState<Set<number>>(new Set());

  const { isZoomed, toggleZoom, handleMouseDown } = useImageNavigator();


  const handleImageError = (index: number) => {
    setErroredImages((prevErroredImages) => new Set(prevErroredImages).add(index));
    console.error(`Image at index ${index} not exist.`);
  };

  return (
    <>
      {erroredImages.has(currentImageIndex) ? (
        <div className={styles.imageError}>
          {/* Puedes colocar aquí un mensaje de error o una imagen de reserva */}
          <p>Image not available</p>
        </div>

      ) : (
          <div 
            onDoubleClick={toggleZoom}
            onMouseDown={handleMouseDown as unknown as React.MouseEventHandler}
            onTouchStart={handleMouseDown as unknown as React.TouchEventHandler}
            style={{ cursor: isZoomed ? 'move' : 'default' }}
            >
          <Image
          src={temarioImgs[currentImageIndex]}
          alt={`temario ${currentImageIndex}`}
          fill
          style={{
            objectFit: 'contain',
            transform: isZoomed ? 'scale(2)' : 'scale(1)', // Ajusta el nivel de zoom según sea necesario
            transition: 'transform 0.3s ease',
            // Agrega estilos adicionales para manejar la posición de la imagen si es necesario
          }}
          priority={false}
          quality={100}
          onError={() => handleImageError(currentImageIndex)}/>
        </div>
      )}
      {limit > 1 && (
        <div className={styles.navigationContainer}>
          <button onClick={() => navigateImage(-1)} className={styles.navigateButtonLeft}>{"<"}</button>
          <span className={styles.pageIndicator}>{currentImageIndex + 1}/{limit}</span>
          <button onClick={() => navigateImage(1)} className={styles.navigateButtonRight}>{">"}</button>
        </div>
      )}
    </>
  );
};


const Overlay = ({ isVisible, closeOverlay, children }: OverlayProps) => isVisible ? (
  <div className={styles.overlayContainer}>
    <div className={styles.background}></div>
    <figure>{children}</figure>
    <button onClick={closeOverlay} className={`${styles.navigateButtonClose} ${isVisible ? styles.navigateButtonCloseOpen : ''}`}></button>
  </div>
) : null;

const SyllabusButton = ({ onClick }: any) => (
  <button onClick={onClick} className={styles.centerButton}>View Syllabus</button>
);

const Syllabus = ({ title, priority }: Props) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [temarioImgs, setTemarioImgs] = useState<string[]>([]);
  const [limit, setLimit] = useState(3);

  const loadImages = useCallback(() => {
    const formattedTitle = formatTitleForURL(title);
    const newLimit = imageLimits[formatTitleToCompare(title)] || 0;
    setLimit(newLimit);
    setTemarioImgs(Array.from({ length: newLimit }, (_, i) => `${formattedTitle}${i || ''}.png`));
  }, [title]);

  const handleSyllabusButtonClick = () => {
    loadImages();
    setOverlayVisible(true);
  };

  const navigateImage = useCallback((direction: number) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = temarioImgs.length - 1;
    if (newIndex >= temarioImgs.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, temarioImgs.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOverlayVisible(false);
      if (event.key === 'ArrowRight') navigateImage(1);
      if (event.key === 'ArrowLeft') navigateImage(-1);
    };

    if (overlayVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [overlayVisible, navigateImage]);

  return (
    <div className={styles.temarioContainer}>
      <div className={styles.layer}>
        <SyllabusButton onClick={handleSyllabusButtonClick} />
        <figure className={styles.layer0}>
          <Image 
          src={`${formatTitleForURL(title)}.png`} 
          width={200}
          height={250}
          alt={title} style={{ objectFit: 'cover' }} 
          priority={priority} 
          quality={100} 
          className={styles.layer0} 
          sizes="(max-width: 200px)" />
        </figure>
        {/* Additional layers can be separate components if they have specific logic or styles */}
        <div className={styles.layer0}></div>
        <div className={styles.layer2}></div>
        <div className={styles.layer3}></div>
      </div>
      {overlayVisible && (
        <Overlay isVisible={overlayVisible} closeOverlay={() => setOverlayVisible(false)}>
          <ImageNavigator
            currentImageIndex={currentImageIndex}
            navigateImage={navigateImage}
            limit={limit}
            temarioImgs={temarioImgs}
          />
        </Overlay>
      )}
    </div>
  );
};

export default Syllabus;
