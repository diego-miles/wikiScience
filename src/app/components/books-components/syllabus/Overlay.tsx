"use client"
import React, { useEffect } from 'react';
import styles from './Overlay.module.css';
import Image from 'next/image';
import { Book,  Section, Subsection } from '@prisma/client';


type Syllabus = {
  chapter: string;
  sections: {
    title: string;
    subsections: {
      title: string;
    }[];
  }[];
};


type OverlayProps = {
  syllabusData: Syllabus[];
  isVisible: boolean;
  closeOverlay: () => void;
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

        {Array.isArray(syllabusData) && syllabusData.map((syllabus, syllabusIndex) => (
          <div key={syllabusIndex}>
            <strong>{syllabus.chapter || 'Chapter'}</strong>
            {syllabus.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <p>{section.title || 'Section'}</p>
                {section.subsections.map((subsection, subsectionIndex) => (
                  <div key={subsectionIndex}>
                    <p>{subsection.title || 'Subsection'}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}


      </div>

      <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${styles.crossIconOpen}`} onClick={closeOverlay}></div>
    </div>
  );
};

export default Overlay;