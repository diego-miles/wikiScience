// components/SyllabusOverlay.js
import React, { useState, useCallback } from 'react';
import ImageLoader from '../ImageLoder'; // Assuming ImageLoader is in the same directory
import styles from './Syllabus.module.css';

type SyllabusOverlayProps = {
  title: string;
  onClose: () => void;
};


export default function SyllabusOverlay({ title, onClose }: SyllabusOverlayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigateImage = useCallback((direction: number) => {
    setCurrentImageIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0 || newIndex >= 25) {
        newIndex = 0;
      }
      return newIndex;
    });
  }, []);

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.background}></div>
      <figure>
        <ImageLoader title={title} />
        <div className={styles.navigationContainer}>
          <button onClick={() => navigateImage(-1)} className={styles.navigateButtonLeft}>{"<"}</button>
          <span className={styles.pageIndicator}>
            {currentImageIndex + 1}
          </span>
          <button onClick={() => navigateImage(1)} className={styles.navigateButtonRight}>{">"}</button>
        </div>
        <button onClick={onClose} className={`${styles.navigateButtonClose} ${styles.navigateButtonCloseOpen}`}></button>
      </figure>
    </div>
  );
}
