"use client"
import React, { FC, useState } from 'react';
import LinkItem from './LinkItem';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styles from './ScienceFieldsMenu.module.css';

interface ExpandableSubItemProps {
  title: string;
  items: string[];
}

const ExpandableSubItem: FC<ExpandableSubItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.subItem}>
      <div onClick={toggleOpen} className={styles.itemHeader}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.listIcon}></div>
        </div>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}

      </div>
      {isOpen && items.map((item, index) => (
        <LinkItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ExpandableSubItem;
