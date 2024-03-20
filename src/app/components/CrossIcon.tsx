import React, { FC } from 'react';
import styles from './NavbarContainer.module.css';

const CrossIcon: FC<{ isOpen: boolean, onClick: () => void }> = ({ isOpen, onClick }) => (
    <div
        className={`${styles.crossIcon} ${isOpen ? styles.crossIconOpen : ''}`}
        onClick={onClick}
        aria-label="Close menu"
    >
        <span className={styles.crossIconLine}></span>
        <span className={styles.crossIconLine}></span>
    </div>
);

export default CrossIcon;
