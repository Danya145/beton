import { useEffect, useState } from 'react';

import { Logo } from '@/components/Logo/Logo';
import { Phone } from '@/components/Phone/Phone';

import { Nav } from '../Nav/Nav';
import * as styles from './Header.module.scss';

export const Header = () => {
  const [show, setShow] = useState(true);

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

    const handleForceShow = () => setShow(true);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('forceShowHeader', handleForceShow);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('forceShowHeader', handleForceShow);
    };
  }, []);

  return (
    <header className={`${styles.header} ${!show ? styles.hidden : ''}`}>
      <Logo />
      <Nav />
      <Phone />
    </header>
  );
};
