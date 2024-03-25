"use client"
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Overlay from './Overlay'; // Asegúrate de que esta importación sea correcta
import SyllabusButton from './SyllabusButton';
import styles from './Syllabus.module.css';
import { JsonValue } from '@prisma/client/runtime/library';

type Props = {
  title: string;
  priority: boolean;
  syllabusData: JsonValue ;
};

const formatTitleForURL = (title: string) => {
  return title
    .replace(/[^a-zA-Z0-9 ,'&-]/g, "")
    .replace(/&/g, "%26")
    .replace(/ /g, "+");
};

const Syllabus = ({ title, priority, syllabusData }: Props) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleSyllabusButtonClick = () => {
    setOverlayVisible(true);
  };

  return (
    <div className={styles.temarioContainer}>
      <div className={styles.layer}>
        <SyllabusButton onClick={handleSyllabusButtonClick} />
        <figure className={styles.layer0}>
        <div className={styles.layer0}></div>
        <div className={styles.layer2}></div>
        <div className={styles.layer3}></div>
          <Image
            src={`${formatTitleForURL(title)}.png`}
            fill
            alt={title}
            style={{ objectFit: 'cover' }}
            priority={priority}
            quality={100}
            className={styles.layer0}
            sizes="(max-width: 200px)"
          />
        </figure>
        {/* Otros elementos del layout aquí, si es necesario */}
      </div>
      {overlayVisible && (
        <Overlay syllabusData={syllabusData}  isVisible={overlayVisible} closeOverlay={() => setOverlayVisible(false)} />
      )}
    </div>
  );
};

export default Syllabus;
