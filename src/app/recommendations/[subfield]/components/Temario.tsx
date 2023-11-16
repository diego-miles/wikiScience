"use client"
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './Temario.module.css';

type Props = {
  title: string;
};

const Temario = ({ title }: Props) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [temarioImgs, setTemarioImgs] = useState<string[]>([]);

  const formatTitleForURL = useCallback((title: string) => {
    return encodeURIComponent(title);
  }, []);

  const navigateImage = useCallback((direction: number) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = temarioImgs.length - 1;
    if (newIndex >= temarioImgs.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  }, [currentImageIndex, temarioImgs.length]);

  useEffect(() => {
    const generateImageURLs = () => {
      const baseURL = formatTitleForURL(title);
      const urls = [`${baseURL}.png`];
      for (let i = 1; i <= 24; i++) {
        urls.push(`${baseURL}${i}.png`);
      }
      return urls;
    };
    setTemarioImgs(generateImageURLs());
  }, [title, formatTitleForURL]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOverlayVisible(false);
      } else if (overlayVisible) {
        if (event.key === 'ArrowRight') {
          navigateImage(1);
        } else if (event.key === 'ArrowLeft') {
          navigateImage(-1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [overlayVisible, navigateImage]);

  const openOverlay = () => setOverlayVisible(true);
  const closeButtonStyle = overlayVisible 
    ? styles.navigateButtonCloseOpen 
    : '';

  
  return (
    <div className={styles.temarioContainer}>
      <div className={styles.layer1}>
        <button 
          onClick={openOverlay}
          className={styles.centerButton}>View Syllabus</button>
        <Image 
          src={`${formatTitleForURL(title)}.png`} 
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
          priority={true}
          quality={50}
        />
        <div className={styles.layer0}></div>
        <div className={styles.layer2}></div>
        <div className={styles.layer3}></div>
      </div>
      {overlayVisible && (
        <div className={styles.overlayContainer}>
          <div className={styles.background }></div>
          <figure>
            <Image
              src={temarioImgs[currentImageIndex]}
              alt={`temario ${currentImageIndex}`}
              fill
              style={{
                objectFit: 'contain',
              }}
              priority={false}
              quality={100}
            />
            <div className={styles.navigationContainer}>
              <button onClick={() => navigateImage(-1)} className={styles.navigateButtonLeft}>{"<"}</button>
              <span className={styles.pageIndicator}>{currentImageIndex + 1}/{temarioImgs.length}</span>
              <button onClick={() => navigateImage(1)} className={styles.navigateButtonRight}>{">"}</button>
            </div>
              <button 
                onClick={() => setOverlayVisible(false)} 
                className={`${styles.navigateButtonClose} ${overlayVisible ? styles.navigateButtonCloseOpen : ''}`}>
              </button>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Temario;

