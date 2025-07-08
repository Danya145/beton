import { useEffect, useState } from 'react';

import { Logo } from '@/components/Logo/Logo';
import { Phone } from '@/components/Phone/Phone';

import { Nav } from '../Nav/Nav';
import * as styles from './Header.module.scss';

export const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${!show ? styles.hidden : ''}`}>
      <Logo />
      <Nav />
      <Phone />
    </header>
  );
};

//overflow-x
