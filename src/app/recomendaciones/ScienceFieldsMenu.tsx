"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FaListUl, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from './ScienceFieldsMenu.module.css';

interface ScienceFieldsMenuProps {
  data: Wiki.ScienceField[];
}


const menu = {
  padding: '20px 0px',
}

export const ScienceFieldsMenu: FC<ScienceFieldsMenuProps> = ({ data }) => {
  return (
    <div style={menu}>
      {data.map((field, index) => (
        <ExpandableItem key={index} title={field.title} items={field.subFields} />
      ))}
    </div>
  );
};

interface ExpandableItemProps {
  title: string;
  items: Wiki.SubTopic[]; // Global type
}

const ExpandableItem: FC<ExpandableItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);
  
  return (
    <div className={styles.ScienceFieldsMenu__item}>
      <div onClick={toggleOpen} className={styles.ScienceFieldsMenu__itemHeader}>
        <div className={styles.ScienceFieldsMenu__textIconWrapper}>
          <h2>{title}</h2>
          <div className={styles.ScienceFieldsMenu__iconContainer}>
            <ListIconWithOverlay>
              <p>This is a list content for {title}</p>
            </ListIconWithOverlay>
          </div>
        </div>
        <div className={styles.ScienceFieldsMenu__menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      {isOpen &&
        items.map((item, index) => (
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
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.ScienceFieldsMenu__item}>
      <div onClick={toggleOpen} className={styles.ScienceFieldsMenu__itemHeader}>
        <div className={styles.ScienceFieldsMenu__textIconWrapper}>
          <h3>{title}</h3>
          <div className={styles.ScienceFieldsMenu__iconContainer}>
            <ListIconWithOverlay>
              <p>This is a list content for {title}</p>
            </ListIconWithOverlay>
          </div>
        </div>
        <div className={styles.ScienceFieldsMenu__menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      {isOpen && items.map((item, index) => (
        <LinkItem key={index} item={item} />
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
      <h4>{item}</h4>
    </Link>
    <div className={styles.ScienceFieldsMenu__iconContainer}>
      <ListIconWithOverlay>
        <p>This is a list content for {item}</p>
      </ListIconWithOverlay>
    </div>
  </div>
);

interface ListIconWithOverlayProps {
  children: React.ReactNode;
}

const ListIconWithOverlay: FC<ListIconWithOverlayProps> = ({ children }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const toggleListOpen = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsListOpen(prev => !prev);
  };

  return (
    <>
      <FaListUl onClick={toggleListOpen} className={styles.ScienceFieldsMenu__icon} />
      {isListOpen && (
        <div className={styles.ScienceFieldsMenu__listOverlay}>
          {children}
          <button onClick={() => setIsListOpen(false)} className={styles.ScienceFieldsMenu__closeButton}>Cerrar</button>
        </div>
      )}
    </>
  );
};
