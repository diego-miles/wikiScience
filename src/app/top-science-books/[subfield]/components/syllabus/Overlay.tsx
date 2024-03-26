"use client"
import React, { useEffect } from 'react';
import styles from './Overlay.module.css';
import CrossIcon from '@/components/CrossIcon2';


type OverlayProps = {
  isVisible: boolean;
  closeOverlay: () => void;
  syllabusData: any;
};

const Overlay: React.FC<OverlayProps> = ({ isVisible, closeOverlay, syllabusData }) => {
  useEffect(() => {
    if (isVisible) {
      // Disable scrolling on the main document
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the main document
      document.body.style.overflow = '';
    }
  }, [isVisible]);

  const handleClose = () => {
    closeOverlay();
  };

const renderDynamicContent = (data: any, depth: number = 0): React.ReactNode => {
  if (Array.isArray(data)) {
    // Incrementa la profundidad sin renderizar en los primeros dos niveles
    return data.map((item, index) => (
      <React.Fragment key={index}>{renderDynamicContent(item, depth + 1)}</React.Fragment>
    ));
  } else if (typeof data === 'object' && data !== null) {
    // Incrementa la profundidad sin renderizar en los primeros dos niveles
    return (
      <div style={{ marginLeft: `${depth * 5}px` }}>
        {Object.values(data).map((value, index) => (
          <div key={index}>
            {renderDynamicContent(value, depth + 1)}
          </div>
        ))}
      </div>
    );
  } else {
    if (depth <= 3) {
      // Omitir renderizado para los dos primeros niveles
      return null;
    } else if (depth <= 5) {
      // Tercer nivel: utilizar <strong>
      return <strong>{data}</strong>;
    } else {
      // Cuarto nivel y más: utilizar <p>
      return <p>{data}</p>;
    }
  }
};


  const renderSyllabusContent = (): React.ReactNode => {
    if (!syllabusData) {
      return <div className={styles.noContent}>No syllabus content available.</div>;
    }
    return renderDynamicContent(syllabusData);
  };

  return isVisible ? (
    <div className={styles.overlayContainer} style={{ overflowY: 'auto' }}>
      <div className={styles.syllabusContent}>
        {renderSyllabusContent()}
      </div>
      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${ styles.crossIconOpen}`}  onClick={handleClose}></div>

   </div>
  ) : null;
};

export default Overlay;