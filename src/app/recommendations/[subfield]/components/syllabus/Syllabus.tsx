"use client"
import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import styles from './Syllabus.module.css';
import imageLimitsData from "@/syllabus_pages.json";
import SyllabusButton from './SyllabusButton';
import ImageNavigator from './ImageNavigator';

type Props = {
  title: string;
  priority: boolean;
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
  return title
    .replace(/[^a-zA-Z0-9 ,'&-]/g, "") // Remove characters except alphanumerics, space, comma, single quote, and hyphen
    .replace(/&/g, "%26") // Replace '&' with '%26'
    .replace(/ /g, "%20") // Replace spaces with '%20'
};

const formatTitleToCompare = (title: string) => {
  return title.replace(/[^a-zA-Z0-9 ,'-]/g, "")
};


const Overlay = ({ isVisible, closeOverlay, children }: OverlayProps) => isVisible ? (
  <div className={styles.overlayContainer}>
    <div className={styles.background}></div>
    <figure>{children}</figure>
    <button onClick={closeOverlay} className={`${styles.navigateButtonClose} ${isVisible ? styles.navigateButtonCloseOpen : ''}`}></button>
  </div>
) : null;

const Syllabus = ({ title, priority }: Props) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
          quality={50} 
          className={styles.layer0} 
          sizes="(max-width: 200px)" />
        </figure>
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
