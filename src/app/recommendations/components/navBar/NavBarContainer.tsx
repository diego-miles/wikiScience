"use client"
import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import { Suspense, lazy } from 'react';

const NavigationMenu = lazy(() => import('./NavigationMenu'));

const toSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '_');

interface NavbarProps {
    title?: string;
    title2?: string;
    title3?: string;
    domain?: string;
    active?: boolean;
}

const NavBarContainer: React.FC<NavbarProps> = memo(({ title, title2, title3, domain, active }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const wasMenuVisible = useRef(isMenuVisible);

    const generateLink = useCallback((_domain: string | undefined, title: string | undefined, additionalPath = '') => {
        const safeTitle = title ?? '';
        return `/recommendations/${toSlug(safeTitle)}${additionalPath}`;
    }, []);


    const closeDropdown = useCallback(() => {
        const elem = document.activeElement as HTMLElement;
        elem?.blur();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    useEffect(() => {
        const bodyStyle = document.body.style;
        if (isMenuVisible) {
          bodyStyle.overflow = 'hidden';
          bodyStyle.height = '100vh';
        } else {
          bodyStyle.overflow = 'auto';
          bodyStyle.height = 'auto';
        }
    }, [isMenuVisible]);

    useEffect(() => {
        if (!isMenuVisible && wasMenuVisible.current) {
            window.scrollTo(0, scrollPosition);
            setShowNavbar(true);
        }
    }, [isMenuVisible, scrollPosition]);



    const menuStyle: React.CSSProperties = {
        visibility: isMenuVisible ? 'visible' : 'hidden',
        display: isMenuVisible ? 'flex' : 'none',
        opacity: isMenuVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    };

const toggleMenu = useCallback(() => {
    setIsMenuVisible(prevState => {
        wasMenuVisible.current = prevState;
        return !prevState;
    });

    // Actualizar lastScrollY al abrir el menú
    if (!isMenuVisible) {
        setScrollPosition(window.scrollY);
        setLastScrollY(window.scrollY);
    }

    setShowNavbar(true);
}, [isMenuVisible]);


    return (
        <div className={styles.container}>
            <div className={`${styles.navbarContainer} ${showNavbar ? '' : styles.hidden}`}>
                <div className={styles.contextualLinks}>
                    <Link href={`/recommendations/`} onClick={closeDropdown}>{title}</Link>
                    {title2 && (
                        <>
                            <span className={styles.padding}>{" > "}</span>
                            <Link href={generateLink(domain, title2)} style={{ color: active ? 'var(--color-active-element)' : '' }} onClick={closeDropdown}>
                                {title2}
                            </Link>
                        </>
                    )}
                    {title3 && (
                        <>
                            <span className={styles.padding}>{">"}</span>
                            <Link href={generateLink(domain, title2, `/${toSlug(title3)}`)} className={`${styles.active} 'menu-link'`} onClick={closeDropdown}>
                                {title3}
                            </Link>
                        </>
                    )}
                </div>
                <button className={styles.rightIcon} onClick={toggleMenu}>
                    <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
                </button>
            </div>
            <Suspense fallback={<div>Loading menu...</div>}>
                <NavigationMenu style={menuStyle} />
            </Suspense>
        </div>
    );
});

NavBarContainer.displayName = 'NavBarContainer';

export default memo(NavBarContainer);