"use client"
import React, { useState, useEffect, useCallback, memo, useRef, FC, CSSProperties } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import { Suspense, lazy } from 'react';

const toSlug = (title: string): string => title.toLowerCase().replace(/\s+/g, '_');

interface NavbarProps {
    title?: string;
    title2?: string;
    title3?: string;
    domain?: string;
    active?: boolean;
    menuPath?: string; // Add the menuPath prop
}

interface LinkProps {
    title?: string;
    path: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;  // Add this line
}
const LinkComponent: FC<LinkProps> = ({ title, path, active, onClick }) => (
    <Link href={path} onClick={onClick} style={{ color: active ? 'var(--color-h1)' : '' }}>
        {title}
    </Link>
);

const NavigationLinks: FC<NavbarProps> = ({ title, title2, title3, domain, active }) => {
    const generateLink = useCallback((_domain: string | undefined, _title: string | undefined, additionalPath: string = ''): string => {
        const safeTitle = _title ?? '';
        return `/top-science-books/${toSlug(safeTitle)}${additionalPath}`;
    }, []);
    
    return (
        <div className={styles.contextualLinks}>
            <LinkComponent title={title} path="/top-science-books/" />
            {title2 && (
                <>
                    <span className={styles.padding}>{" > "}</span>
                    <LinkComponent title={title2} path={generateLink(domain, title2)} active={active} />
                </>
            )}
            {title3 && (
                <>
                    <span className={styles.padding}>{">"}</span>
                    <LinkComponent title={title3} path={generateLink(domain, title2, `/${toSlug(title3)}`)} active={true} />
                </>
            )}
        </div>
    );
};

const MenuToggle: FC<{ onClick: () => void; isMenuVisible: boolean }> = ({ onClick, isMenuVisible }) => (
    <button className={styles.rightIcon} onClick={onClick} aria-label="Open menu">
        <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
    </button>
);

const NavBarContainer: FC<NavbarProps> = memo(({ title, title2, title3, domain, active, menuPath }) => {
    const NavigationMenu = lazy(() => import(`${menuPath}`));
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showNavbar, setShowNavbar] = useState<boolean>(true);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const wasMenuVisible = useRef<boolean>(isMenuVisible);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const updateBodyStyle = (menuVisible: boolean) => {
            const bodyStyle = document.body.style;
            bodyStyle.overflow = menuVisible ? 'hidden' : 'auto';
            bodyStyle.height = menuVisible ? '100vh' : 'auto';
        };

        updateBodyStyle(isMenuVisible);
        return () => updateBodyStyle(false);
    }, [isMenuVisible]);

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
                <NavigationLinks title={title} title2={title2} title3={title3} domain={domain} active={active} />
                <MenuToggle onClick={toggleMenu} isMenuVisible={isMenuVisible} />
            </div>
            <Suspense fallback={<div>Loading menu...</div>}>
                <NavigationMenu style={menuStyle} />
            </Suspense>
        </div>
    );
});

NavBarContainer.displayName = 'NavBarContainer';

export default memo(NavBarContainer);
