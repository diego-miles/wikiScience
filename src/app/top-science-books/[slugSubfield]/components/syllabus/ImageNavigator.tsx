import { useState } from 'react';
import Image from 'next/image';
import styles from './Syllabus.module.css';
import useImageNavigator from '../../../../../hooks/useImageNavigator';


type ImageNavigatorProps = {
  currentImageIndex: number;
  navigateImage: (direction: number) => void;
  temarioImgs: string[];
  limit: number;
};




const ImageNavigator = ({ currentImageIndex, navigateImage, limit, temarioImgs }: ImageNavigatorProps) => {
  const [erroredImages, setErroredImages] = useState<Set<number>>(new Set());
  const { isZoomed, toggleZoom, handleMouseDown } = useImageNavigator();

  const handleImageError = (index: number) => {
    setErroredImages(prevErroredImages => new Set(prevErroredImages).add(index));
  };

  return (
    <>
      {erroredImages.has(currentImageIndex) ? (
        <div className={styles.imageError}>
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
              transform: isZoomed ? 'scale(2)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
            priority={false}
            quality={100}
            onError={() => handleImageError(currentImageIndex)}
          />
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


export default ImageNavigator;
