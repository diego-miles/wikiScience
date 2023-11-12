
import React from 'react';
import styles from './NavigationMenu.module.css';
import data from '@/data';

interface NavigationMenuProps {
  className?: string;
  style?: React.CSSProperties; // Add this line
}




const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, style }) => {
    
    return (
        <div className={`${styles.menuWrapper} ${className}`} style={style}>
            <main className={styles.menuMain}>
                <div className={styles.header}>Best Books
                </div>
                <div className={styles.navContainer}>
                        {data.map((field, idx) => (
                            <div className={styles.branchContainer} key={idx}>
                                <div className={styles.titleField}>
                                    <li className={styles.navListItem}>{field.title}</li>
                                </div>
                                <div className={styles.gridLayout}>
                                    {field.subFields.map((subField, sIdx) => (
                                        <ul className={styles.subField} key={sIdx}>
                                            <li className={styles.navListItem}>{subField.title}</li>
                                            {subField.topics.map((topic, tIdx) => (
                                                <li className={styles.subTopic} key={tIdx}>{topic}</li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </div>
    );
}

export default NavigationMenu;

