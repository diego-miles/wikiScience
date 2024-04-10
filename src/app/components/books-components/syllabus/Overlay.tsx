"use client"
import React, { useEffect } from 'react';
import styles from './Overlay.module.css';
import Image from 'next/image';

type OverlayProps = {
  isVisible: boolean;
  closeOverlay: () => void;
  syllabusData: any; // Es recomendable definir un tipo más específico si es posible.
  title: string;
};

const Overlay: React.FC<OverlayProps> = ({ isVisible, closeOverlay, syllabusData, title }) => {
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
  }, [isVisible]);

  const formatTitleForURL = (title: string): string => {
    return title
      .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
      .replace(/&/g, "%26")
      .replace(/ /g, "+");
  };

  const renderContent = (data: any, depth: number = 0): React.ReactNode => {
    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <React.Fragment key={index}>{renderContent(item, depth + 1)}</React.Fragment>
      ));
    } else if (typeof data === 'object' && data !== null) {
      return (
        <div style={{ marginLeft: `${depth * 5}px` }}>
          {Object.entries(data).map(([key, value], index) => (
            <div key={index}>
              <strong>{}</strong>: {renderContent(value, depth + 1)}
            </div>
          ))}
        </div>
      );
    } else {
      if (depth <= 0) {
        return null; // Omitir los dos primeros niveles
      } else if (depth <= 3) {
        return <h4>{data}</h4>; // Tercer nivel
      } else {
        return <p>{data}</p>; // Cuarto nivel y más
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlayContainer} style={{ overflowY: 'auto' }}>
      <div className={styles.syllabusContent}>
        <figure className={styles.figureOverlay}>
          <Image
            src={`${formatTitleForURL(title)}.png`}
            fill
            alt={title}
            style={{ objectFit: 'cover' }}
            priority={false}
            quality={100}
            sizes="(max-width: 150px)"
          />
        </figure>

        {/* Renderizando los datos del syllabus directamente con la función renderContent */}
        {syllabusData ? renderContent(syllabusData) : (
          <div className={styles.noContent}>No syllabus content available.</div>
        )}
      </div>

      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${styles.crossIconOpen}`} onClick={closeOverlay}></div>
    </div>
  );
};

export default Overlay;
