import { Logo } from '@/components/Logo/Logo';
import { Phone } from '@/components/Phone/Phone';

import { Nav } from '../Nav/Nav';
import * as styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Phone />
    </header>
  );
};
