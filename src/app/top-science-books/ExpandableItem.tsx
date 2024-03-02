"use client"
import React, { FC, useState } from 'react';
import { FaChevronDown, FaChevronRight, FaListUl } from 'react-icons/fa';
import ExpandableSubItem from './ExpandableSubitem';
import styles from './ScienceFieldsMenu.module.css';

interface ExpandableItemProps {
  title: string;
  items: Wiki.SubTopic[];
}

const ExpandableItem: FC<ExpandableItemProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <div className={styles.item}>
      <div onClick={toggleOpen} className={styles.itemHeader}>
        <div className={styles.titleContainer}>
          <h2 className={styles.branchTitle}>{title}</h2>
          <div className={styles.listIcon}>
          </div>
          {/* <FaListUl onClick={setIsOpen} className={styles.listIcon} /> */}
        </div>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {isOpen && items.map((item, index) => (
        <ExpandableSubItem key={index} title={item.title} items={item.topics} />
      ))}
    </div>
  );
};

export default ExpandableItem;
