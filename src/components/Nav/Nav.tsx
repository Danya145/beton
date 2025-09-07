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
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          location.state.nmt +
          location.state.pmt;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <nav className={styles.nav}>
      <ul>
        <li
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          главная
        </li>
        <li
          onClick={() => {
            if (location.pathname === '/') {
              const el = document.getElementById('about');
              const y =
                el.getBoundingClientRect().top + window.pageYOffset - 90;
              window.scrollTo({ top: y, behavior: 'smooth' });
            } else {
              navigate('/', { state: { scrollTo: 'about', nmt: 90, pmt: 0 } });
            }
          }}>
          о нас
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setHoveredDropdown('products')}>
          продукция
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'products' ? styles.rotated : ''}`}>
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'products' && (
            <ul
              className={styles.menu}
              onMouseLeave={() => setHoveredDropdown(null)}
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/', {
                    state: { scrollTo: 'products', nmt: 90, pmt: 0 },
                  });
                } else {
                  const el = document.getElementById('products');
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset - 90;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}>
              <li>Бетон на гравии</li>
              <li>Бетон на щебне</li>
            </ul>
          )}
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setHoveredDropdown('services')}>
          услуги
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'services' ? styles.rotated : ''}`}>
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'services' && (
            <ul
              className={styles.menu}
              onMouseLeave={() => setHoveredDropdown(null)}
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/', {
                    state: { scrollTo: 'products', pmt: 200, nmt: 0 },
                  });
                } else {
                  const el = document.getElementById('products');
                  const y =
                    el.getBoundingClientRect().top + window.pageYOffset + 200;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}>
              <li>Аренда техники с оператором</li>
              <li>Аренда техники без оператором</li>
            </ul>
          )}
        </li>

        <li
          onClick={() => {
            if (location.pathname !== '/price') {
              navigate('/price');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          цены
        </li>
        <li
          onClick={() => {
            if (location.pathname !== '/price') {
              navigate('/price', {
                state: { scrollTo: 'calculator', pmt: 0, nmt: 0 },
              });
            }
            const el = document.getElementById('calculator');
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
          доставка
        </li>
      </ul>
    </nav>
  );
};
