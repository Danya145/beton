import { useState } from 'react';

import { ICONS } from '@/ui/constants';

import * as styles from './Nav.module.scss';

export const Nav = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>главная</li>
        <li>о нас</li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setHoveredDropdown('products')}
          onMouseLeave={() => setHoveredDropdown(null)}
        >
          продукция
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'products' ? styles.rotated : ''}`}
          >
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'products' && (
            <ul className={styles.menu}>
              <li>Бетон</li>
              <li>Раствор</li>
              <li>Щебень</li>
              <li>Песок</li>
            </ul>
          )}
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => setHoveredDropdown('services')}
          onMouseLeave={() => setHoveredDropdown(null)}
        >
          услуги
          <span
            className={`${styles.arrow} ${hoveredDropdown === 'services' ? styles.rotated : ''}`}
          >
            <ICONS.BottomArrow />
          </span>
          {hoveredDropdown === 'services' && (
            <ul className={styles.menu}>
              <li>Аренда техники</li>
              <li>Заливка бетона</li>
              <li>Планировка участка</li>
            </ul>
          )}
        </li>

        <li>цены</li>
        <li>доставка</li>
      </ul>
    </nav>
  );
};
