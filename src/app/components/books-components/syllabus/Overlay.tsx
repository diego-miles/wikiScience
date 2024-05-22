import React, { useEffect } from 'react';
import styles from './Overlay.module.css';
import Image from 'next/image';
import { Book, Syllabus, Section, Subsection } from '@prisma/client';




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
<div className="fixed left-0 right-0 top-0 bottom-0 py-12 px-6 bg-background1 dark:bg-background1dark  overflow-y-auto z-40">

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


      {Array.isArray(syllabusData) && syllabusData.map((syllabus: Syllabus, syllabusIndex: number) => (
        <div key={syllabusIndex}>
          <h4>{syllabus.chapter || 'Chapter'}</h4>
          {Array.isArray(syllabus.sections) && syllabus.sections.map((section: Section, sectionIndex: number) => (
            <div key={sectionIndex}>
              <p>{section.title || 'Section'}</p>
              {Array.isArray(section.subsections) && section.subsections.map((subsection: Subsection, subsectionIndex: number) => (
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