import React from 'react';
import styles from './NavigationMenu.module.css';
import data from '../ScienceFieldsData';
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
        <div tabIndex={0} className={`${styles.menuWrapper} ${className}`} style={style}>
            <div className={styles.menuMain}> 
                {/* <div className={styles.header}>~ Top Science Books ~</div> */}
                <div className={'pt-9'}>
                    <Link href={'#'}></Link>
                    <h3>Top Science Books</h3>
                </div>
            </div>
        </div>
    );
}

export default NavigationMenu;
