import { About } from '@/components/About/About';
import { Contacts } from '@/components/Contacts/Contacts';
import { CustomMap } from '@/components/Map/Map';
import { Partners } from '@/components/Partners/Partners';
import { Poster } from '@/components/Poster/Poster';
import { Products } from '@/components/Products/Products';
import { Projects } from '@/components/Projects/Projects';

import * as styles from './Main.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <Poster />
      <About />
      <Products />
      <Projects />
      <Contacts />
      <Partners />
      <CustomMap latitude={53.819609} longitude={27.696066} />
    </main>
  );
};
