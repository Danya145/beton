import { useEffect, useRef, useState } from 'react';

import { Nav } from '@/components/Nav/Nav';

import { ICONS } from './constants';
import * as styles from './UI.module.scss';

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.burgerMenu} ref={menuRef}>
      <button onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
        <ICONS.BurgerMenu />
      </button>
      {open && (
        <div className={styles.menu} onClick={() => setOpen(false)}>
          <Nav />
        </div>
      )}
    </div>
  );
};
