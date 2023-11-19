import React from 'react';
import styles from './NavigationMenu.module.css';
import data from '@/data';
import Link from 'next/link';

interface NavigationMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, style }) => {
    return (
        <div className={`${styles.menuWrapper} ${className}`} style={style}>
            <div className={styles.menuMain}>
                <div className={styles.header}>Best Books</div>
                <div className={styles.navContainer}>
                    {data.map((field, idx) => (
                        <div className={styles.branchContainer} key={idx}>
                            <div>
                                <li className={styles.titleField}>{field.title}</li>
                            </div>
                            <div className={styles.gridLayout}>
                                {field.subFields.map((subField, sIdx) => (
                                    <ul key={sIdx}>
                                        <li className={styles.subField}>
                                            {/* Use toSlug to convert subField.title into a slug */}
                                            <Link href={`http://localhost:3000/recommendations/${toSlug(subField.title)}`}>
                                                {subField.title}
                                            </Link>
                                        </li>
                                        {subField.topics.map((topic, tIdx) => (
                                            <li className={styles.subTopic} key={tIdx}>
                                                {/* Use toSlug for both subField.title and topic to create a nested slug */}
                                                <Link href={`http://localhost:3000/recommendations/${toSlug(subField.title)}/${toSlug(topic)}`}>
                                                    {topic}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavigationMenu;
