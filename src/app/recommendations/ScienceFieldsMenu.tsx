"use client"
import React, { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { FaListUl, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from './ScienceFieldsMenu.module.css';

interface ScienceFieldsMenuProps {
  data: Wiki.ScienceField[];
}

export const ScienceFieldsMenu: FC<ScienceFieldsMenuProps> = ({ data }) => {
  return (
    <div className={styles.menu}>
      {data.map((field, index) => (
        <ExpandableItem key={index} title={field.title} items={field.subFields} />
      ))}
    </div>
  );
};

interface ExpandableItemProps {
  title: string;
  items: Wiki.SubTopic[];
}

const ExpandableItem: FC<ExpandableItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className={styles.ScienceFieldsMenu__item}>
      <button onClick={toggleOpen} className={styles.ScienceFieldsMenu__itemHeader}>
        <div className={styles.ScienceFieldsMenu__textAndIconWrapper}>
          <h2 className={styles.branchTitle}>{title.toUpperCase()}</h2>
          <div className={styles.ScienceFieldsMenu__iconContainer}>
            <ListIconWithOverlay title={title} />
          </div>
        </div>
        <div className={styles.ScienceFieldsMenu__menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </button>
      {isOpen && items.map((item, index) => (
        <ExpandableSubItem key={index} title={item.title} items={item.topics} />
      ))}
    </div>
  );
};

interface ExpandableSubItemProps {
  title: string;
  items: string[];
}

const ExpandableSubItem: FC<ExpandableSubItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0); // New state to track click count
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleTitleClick = useCallback(() => {
    setClickCount(prevCount => prevCount + 1);
    if (clickCount === 1) {
      // Navigate to a different URL on the second click
      // Replace 'your-new-url' with the actual URL you want to navigate to
      window.location.href = `/new-path/${title}`;
    }
  }, [clickCount, title]);

  return (
    <div className={styles.ScienceFieldsMenu__item}>
      <button onClick={toggleOpen} className={styles.ScienceFieldsMenu__itemHeader}>
        <div className={styles.ScienceFieldsMenu__textAndIconWrapper}>
          {/* Modified to handle the new click behavior */}
          <h3 className={styles.subFieldTitle} onClick={handleTitleClick}>{title}</h3>
          <div className={styles.ScienceFieldsMenu__iconContainer}>
            <ListIconWithOverlay title={title} />
          </div>
        </div>
        <div className={styles.ScienceFieldsMenu__menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </button>
      {isOpen && items.map((item, index) => (
        // Using Link for navigation
        <Link key={index} href={`/articles/${item}`} className={styles.ScienceFieldsMenu__linkItem}>
           {item}
        </Link>
      ))}
    </div>
  );
};


interface LinkItemProps {
  item: string;
}

const LinkItem: FC<LinkItemProps> = ({ item }) => (
  <div className={styles.ScienceFieldsMenu__linkItem}>
    <Link href={`/articles/${item}`}>
      <h4 className={styles.topicTitle}>{item}</h4>
    </Link>
    <div className={styles.ScienceFieldsMenu__iconContainer}>
      <ListIconWithOverlay title={item} />
    </div>
  </div>
);

interface ListIconWithOverlayProps {
  title: string;
}

const ListIconWithOverlay: FC<ListIconWithOverlayProps> = ({ title }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleListOpen = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsListOpen(prev => !prev);
  }, []);

  return (
    <>
      <FaListUl onClick={toggleListOpen} className={styles.ScienceFieldsMenu__icon} />
      {isListOpen && (
        <div className={styles.ScienceFieldsMenu__listOverlay}>
          <p>This is a list content for {title}</p>
          <button onClick={() => setIsListOpen(false)} className={styles.ScienceFieldsMenu__closeButton}>Cerrar</button>
        </div>
      )}
    </>
  );
};




