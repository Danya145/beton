import { About } from '@/components/About/About';
import { Poster } from '@/components/Poster/Poster';
import { IMAGES } from '@/ui/constants';

import * as styles from './Main.module.scss';

export const MainPage = () => {
  return (
    <main className={styles.container}>
      <Poster />
      <About />
    </main>
  );
};
