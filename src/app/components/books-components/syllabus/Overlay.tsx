"use client"
import React, { useCallback, useEffect, useMemo } from 'react';
import styles from './Overlay.module.css';
import Image from 'next/image';

type OverlayProps = {
  isVisible: boolean;
  closeOverlay: () => void;
  syllabusData: any;
  title: string;
};

const Overlay: React.FC<OverlayProps> = ({ isVisible, closeOverlay, syllabusData, title }) => {
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
  }, [isVisible]);

  const handleClose = useCallback(() => {
    closeOverlay();
  }, [closeOverlay]);

  const renderDynamicContent = useCallback((data: any, depth: number = 0): React.ReactNode => {
    if (!data) return null;

    if (Array.isArray(data)) {
      return data.map((item, index) => (
        <React.Fragment key={index}>{renderDynamicContent(item, depth + 1)}</React.Fragment>
      ));
    } else if (typeof data === 'object') {
      return (
        <div style={{ marginLeft: `${depth * 20}px` }}>
          {Object.entries(data).map(([key, value], index) => (
            <div key={index}>
              {renderDynamicContent(value, depth + 1)}
            </div>
          ))}
        </div>
      );
    } else {
      return depth > 1 ? (depth <= 3 ? <h4>{data}</h4> : <p>{data}</p>) : null;
    }
  }, []);

  const isContentEmpty = useCallback((content: React.ReactNode): boolean => {
    if (Array.isArray(content)) {
      return content.every(item => isContentEmpty(item));
    }
    return !content;
  }, []);

  const syllabusContent = useMemo(() => renderDynamicContent(syllabusData), [syllabusData, renderDynamicContent]);

  const formatTitleForURL = useCallback((title: string) => {
    return title
      .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
      .replace(/&/g, "%26")
      .replace(/ /g, "+");
  }, []);

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
        {!isContentEmpty(syllabusContent) ? syllabusContent : <div className={styles.noContent}>No syllabus content available.</div>}
      </div>
      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${styles.crossIconOpen}`} onClick={handleClose}></div>
    </div>
  );
};

export default Overlay;
