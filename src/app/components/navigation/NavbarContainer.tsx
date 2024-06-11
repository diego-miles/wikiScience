"use client"
import React, { useState, useEffect, useCallback, memo, useRef, FC, CSSProperties } from 'react';
import Link from 'next/link';
import styles from './NavbarContainer.module.css';
import { Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
// import DarkModeTooggle from '@/components/DarkModeToggle'
import Image from 'next/image'
import NavigationMenu from './NavigationMenu'

// NavigationMenu
// const NavigationMenu = dynamic(() => import('./NavigationMenu'), { ssr: false });
const DarkModeTooggle = dynamic(() => import('@/components/DarkModeToggle'), { ssr: false });

const toSlug = (title: string): string => title.toLowerCase().replace(/\s+/g, '_');



const MenuToggle: FC<{ onMouseDown: () => void; isMenuVisible: boolean }> = ({ onMouseDown, isMenuVisible }) => (
    <button className="bg-[url('/microscope.svg')] dark:bg-[url('/microscope-yellow.svg')] bg-no-repeat bg-contain h-[3.8rem] my-2" onMouseDown={onMouseDown} aria-label="Open menu">
        <div tabIndex={0} className={`${styles.iconWrapper} ${styles.crossIcon} ${isMenuVisible ? styles.crossIconOpen : styles.crossIconClosed}`}></div>
    </button>
);

const NavBarContainer = memo(() => {
    // const NavigationMenu = lazy(() => import(`${menuPath}`));
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

  const closeMenu = useCallback(() => {
    setIsMenuVisible(false);
  }, []);



    return (
    <div className="absolute w-full top-0 left-0 z-40  ">
        <div className={`fixed top-0 right-0 left-0 w-full max-w-[120rem] min-h-[5rem] mx-auto px-4 lg:py-3 bg-gray-100 dark:bg-background1dark shadow-sm z-40 flex justify-end items-center content-end lg:rounded-b-xl  ${showNavbar ? '' : 'hidden'}`}>
            <div className='flex items-center pt-1'>
                <div className='px-4 '>
                    <DarkModeTooggle></DarkModeTooggle>
                </div>
                <MenuToggle onMouseDown={toggleMenu} isMenuVisible={isMenuVisible}  />
            </div>

            </div>
            <Suspense>
                <NavigationMenu style={menuStyle} closeMenu={closeMenu}  />
            </Suspense>
        </div>
    );
});


NavBarContainer.displayName = 'NavBarContainer';

export default (NavBarContainer);
