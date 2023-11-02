
import React from 'react';
import styles from './NavigationMenu.module.css';
import data from '@/data';

const NavigationMenu = () => {
    
    return (
        <div className={styles.menuWrapper}>
            {/* <div className={styles.backLinkWrapper}>
                <BackButton />
            </div> */}
            {/* <NavBar title='./' profileLink={''} menuLink=''/> */}
            <main className={styles.menuMain}>
                <div className={styles.header}>
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

