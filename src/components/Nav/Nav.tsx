import { ICONS } from '@/ui/constants';

import * as styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>главная</li>
        <li>о нас</li>
        <li>
          продукция <ICONS.BottomArrow />
        </li>
        <li>
          услуги <ICONS.BottomArrow />
        </li>
        <li>цены</li>
        <li>доставка</li>
      </ul>
    </nav>
  );
};
