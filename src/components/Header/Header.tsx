import { useEffect, useState } from 'react';

import { Logo } from '@/components/Logo/Logo';
import { Phone } from '@/components/Phone/Phone';
import { BurgerMenu } from '@/ui/BurgerMenu';
import { ICONS } from '@/ui/constants';
import { CURRENT_PHONE } from '@/utils/db';

import { Nav } from '../Nav/Nav';
import * as styles from './Header.module.scss';

export const Header = () => {
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastY = currentY;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    const handleForceShow = () => setShow(true);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('forceShowHeader', handleForceShow);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('forceShowHeader', handleForceShow);
    };
  }, []);

  return (
    <header className={`${styles.header} ${!show ? styles.hidden : ''}`}>
      <Logo />
      {isMobile ? (
        <div className={styles.mobileMenu}>
          <a href={`tel:${CURRENT_PHONE}`}>
            <ICONS.Phone />
          </a>
          <BurgerMenu />
        </div>
      ) : (
        <>
          <Nav />
          <Phone />
        </>
      )}
    </header>
  );
};
