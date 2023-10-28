 "use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { FaListUl, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from '../components/ScienceFieldsMenu.module.css';

interface ScienceField {
  mainField: string;
  subTopics: string[];
}

interface Wiki {
  title: string;
  subFields: ScienceField[];
}

interface ScienceFieldsMenuProps {
  data: Wiki[];
}

export const ScienceFieldsMenu: FC<ScienceFieldsMenuProps> = ({ data }) => {
  return (
    <div>
      {data.map((field, index) => (
        <ExpandableItem key={index} title={field.title} items={field.subFields} />
      ))}
    </div>
  );
};

interface ExpandableItemProps {
  title: string;
  items: ScienceField[];
}

const ExpandableItem: FC<ExpandableItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.item}>
      <div onClick={toggleOpen} className={styles.itemHeader}>
        <div className={styles.textIconWrapper}>
          <h2>{title}</h2>
          <div className={styles.iconContainer}>
            <ListIconWithOverlay>
              <p>This is a list content for {title}</p>
            </ListIconWithOverlay>
          </div>
        </div>
        <div className={styles.menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      {isOpen &&
        items.map((item, index) => (
          <ExpandableSubItem key={index} title={item.mainField} items={item.subTopics} />
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
    <div className={styles.item}>
      <div onClick={toggleOpen} className={styles.itemHeader}>
        <div className={styles.textIconWrapper}>
          <h3>{title}</h3>
          <div className={styles.iconContainer}>
            <ListIconWithOverlay>
              <p>This is a list content for {title}</p>
            </ListIconWithOverlay>
          </div>
        </div>
        <div className={styles.menuIcon}>
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      {isOpen && items.map((item, index) => (
        <LinkItem key={index} item={item} />
      ))}
    </div>
  );
};

// ... rest of your code ...


function isScienceField(item: Wiki.ScienceField | Wiki.SubTopic): item is Wiki.ScienceField {
  return (item as Wiki.ScienceField).subFields !== undefined;
}

function isSubTopic(item: Wiki.ScienceField | Wiki.SubTopic): item is Wiki.SubTopic {
  return (item as Wiki.SubTopic).subTopics !== undefined;  // Assuming subTopics is the correct property name
}

interface LinkItemProps {
  item: string;
}

const LinkItem: FC<LinkItemProps> = ({ item }) => (
  <div className={styles.linkItem}>
    <Link href={`/articles/${item}`}>
      <p>{item}</p>
    </Link>
    <div className={styles.iconContainer}>
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
      <FaListUl onClick={toggleListOpen} className={styles.icon} />
      {isListOpen && (
        <div className={styles.listOverlay}>
          {children}
          <button onClick={() => setIsListOpen(false)} className={styles.closeButton}>Cerrar</button>
        </div>
      )}
    </>
  );
};
