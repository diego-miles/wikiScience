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
    // Change the body style based on the overlay's visibility
    document.body.style.overflow = isVisible ? 'hidden' : '';
  }, [isVisible]);

const renderDynamicContent = (data: any, depth: number = 0): React.ReactNode => {
  if (Array.isArray(data)) {
    return data.map((item, index) => (
      <React.Fragment key={index}>{renderDynamicContent(item, depth + 1)}</React.Fragment>
    ));
  } else if (typeof data === 'object' && data !== null) {
    return (
      <p style={{ marginLeft: `${depth * 5}px` }}>
        {Object.entries(data).map(([key, value], index) => (
          <p key={index}>
            <h4>{key}</h4>
            {renderDynamicContent(value, depth + 1)}
          </p>
        ))}
      </p>
    );
  } else {
    return <div>{data}</div>;
  }
};


  const renderSyllabusContent = (): React.ReactNode => {
    if (!syllabusData) {
      return <div className={styles.noContent}>No syllabus content available.</div>;
    }
    return renderDynamicContent(syllabusData);
  };

  const handleClose = () => {
    closeOverlay();
  };

  return isVisible ? (
    <div className={styles.overlayContainer}>
      <div className={styles.syllabusContent}>
        {renderSyllabusContent()}
      </div>
      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${ styles.crossIconOpen}`} onClick={handleClose}></div>

   </div>
  ) : null;
};

export default Overlay;