
import React, { FC } from 'react';
import Link from 'next/link';
import styles from './ScienceFieldsMenu.module.css';

interface LinkItemProps {
  item: string;
}

const LinkItem: FC<LinkItemProps> = ({ item }) => (
  <div className={styles.linkItem}>
    <Link href={`/articles/${item}`} className={styles.title}>
      {item}
    </Link>
  </div>
);

export default LinkItem;
