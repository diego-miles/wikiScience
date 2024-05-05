"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

interface ImageData {
  URL: string;
  Description: string;
}

interface ImageCarouselProps {
  images: ImageData[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      
      <div className={styles.arrow} onClick={prevImage}>{"<"}</div>

      <div className={styles.imageArea}>
        <div className={styles.imageContainer}>
          <Image 
            src={images[currentIndex].URL}
            alt={images[currentIndex].Description}
            layout='fill'
            objectFit='cover'
          />
        </div>
        {/* Description below the image */}
        <p className={styles.description}>{images[currentIndex].Description}</p>
      </div>

      <div className={styles.arrow} onClick={nextImage}>{">"}</div>

    </div>
  );
};

export default ImageCarousel;