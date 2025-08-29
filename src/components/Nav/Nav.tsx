import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ICONS } from '@/ui/constants';

import * as styles from './Nav.module.scss';

export const Nav = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setHoveredDropdown(null);
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo === 'about') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li onClick={() => navigate('/')}>главная</li>
        <li
          onClick={() => {
            if (location.pathname === '/') {
              const el = document.getElementById('about');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            } else {
              navigate('/', { state: { scrollTo: 'about' } });
            }
          }}
        >
          о нас
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setHoveredDropdown('products')}
          onMouseLeave={(e) => {
            if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).closest(`.${styles.menu}`)) {
              setHoveredDropdown(null);
            }
          }}
        >
          продукция
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'products' ? styles.rotated : ''}`}
          >
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'products' && (
            <ul className={styles.menu} onMouseLeave={() => setHoveredDropdown(null)}>
              <li>Бетон</li>
              <li>Раствор</li>
              <li>Щебень</li>
              <li>Песок</li>
            </ul>
          )}
        </li>

        <li className={styles.dropdown} onMouseEnter={() => setHoveredDropdown('services')}>
          услуги
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'services' ? styles.rotated : ''}`}
          >
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'services' && (
            <ul className={styles.menu} onMouseLeave={() => setHoveredDropdown(null)}>
              <li>Аренда техники</li>
              <li>Заливка бетона</li>
              <li>Планировка участка</li>
            </ul>
          )}
        </li>

        <li onClick={() => navigate('/price')}>цены</li>
        <li onClick={() => navigate('/price')}>доставка</li>
      </ul>
    </nav>
  );
};
