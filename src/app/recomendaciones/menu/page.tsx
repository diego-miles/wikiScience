
import React from 'react';
import styles from './NavigationMenu.module.css';
import data from './data';
import NavBar from "@/NavBarContainer";

const NavigationMenu = () => {
    return (
        <div className={styles.menuWrapper}>
          <NavBar title='./' profileLink={''} menuLink=''/>
          <div className={styles.header}>
          </div>
          <div className={styles.navContainer}>
                {data.map((field, idx) => (
                    <div className={styles.branchContainer} key={idx}>
                        <div className={styles.titleField}>
                            <li className={styles.navListItem}>{field.title.toUpperCase()}</li>
                        </div>
                        <div className={styles.gridLayout}>
                            {field.subFields.map((subField, sIdx) => (
                                <ul className={styles.subField} key={sIdx}>
                                    <li className={styles.navListItem}>{subField.mainField}</li>
                                    {subField.subTopics.map((topic, tIdx) => (
                                        <li className={styles.subTopic} key={tIdx}>{topic}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                ))}
          </div>
        </div>
    );
}

export default NavigationMenu;

