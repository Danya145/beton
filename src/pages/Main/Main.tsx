import { About } from '@/components/About/About';
import { Poster } from '@/components/Poster/Poster';
import { Products } from '@/components/Products/Products';
import { Projects } from '@/components/Projects/Projects';

import * as styles from './Main.module.scss';
import { Contacts } from '@/components/Contacts/Contacts';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <Poster />
      <About />
      <Products />
      <Projects />
      <Contacts />
    </main>
  );
};
