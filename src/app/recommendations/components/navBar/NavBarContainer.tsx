"use client"
import React, { useState, useEffect, useCallback, memo, useRef, CSSProperties, FC } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import { Suspense, lazy } from 'react';

const NavigationMenu = lazy(() => import('./NavigationMenu'));

const toSlug = (title: string): string => title.toLowerCase().replace(/\s+/g, '_');

interface NavbarProps {
    title?: string;
    title2?: string;
    title3?: string;
    domain?: string;
    active?: boolean;
}

const NavBarContainer: FC<NavbarProps> = memo(({ title, title2, title3, domain, active }) => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const wasMenuVisible = useRef<boolean>(isMenuVisible);

    const generateLink = useCallback((_domain: string | undefined, _title: string | undefined, additionalPath: string = ''): string => {
        const safeTitle = _title ?? '';
        return `/recommendations/${toSlug(safeTitle)}${additionalPath}`;
    }, []);

    const closeDropdown = useCallback(() => {
        const elem = document.activeElement as HTMLElement;
        elem?.blur();
    }, []);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const updateBodyStyle = useCallback((menuVisible: boolean) => {
        const bodyStyle = document.body.style;
        bodyStyle.overflow = menuVisible ? 'hidden' : 'auto';
        bodyStyle.height = menuVisible ? '100vh' : 'auto';
    }, []);

    useEffect(() => {
        updateBodyStyle(isMenuVisible);
        return () => updateBodyStyle(false);
    }, [isMenuVisible, updateBodyStyle]);

    useEffect(() => {
        if (!isMenuVisible && wasMenuVisible.current) {
            window.scrollTo(0, scrollPosition);
            setShowNavbar(true);
        }
    }, [isMenuVisible, scrollPosition]);

    const toggleMenu = useCallback(() => {
        setIsMenuVisible(prevState => {
            wasMenuVisible.current = prevState;
            return !prevState;
        });

        if (!isMenuVisible) {
            setScrollPosition(window.scrollY);
            setLastScrollY(window.scrollY);
        }

        setShowNavbar(true);
    }, [isMenuVisible]);

    const menuStyle: CSSProperties = {
        visibility: isMenuVisible ? 'visible' : 'hidden',
        display: isMenuVisible ? 'flex' : 'none',
        opacity: isMenuVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.navbarContainer} ${showNavbar ? '' : styles.hidden}`}>
                <div className={styles.contextualLinks}>
                    <Link href="/recommendations/" onClick={closeDropdown}>{title}</Link>
                    {title2 && (
                        <>
                            <span className={styles.padding}>{" > "}</span>
                            <Link href={generateLink(domain, title2)} style={{ color: active ? 'var(--color-title1)' : '' }} onClick={closeDropdown}>
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
                <button className={styles.rightIcon} onClick={toggleMenu}  aria-label="Open menu">
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
