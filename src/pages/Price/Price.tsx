import { Calculator } from '@/components/Calculator/Calculator';
import { Categories } from '@/components/Categories/Categories';
import { Certificates } from '@/components/Certificates/Certificates';
import { Rent } from '@/components/Rent/Rent';

import * as styles from './Price.module.scss';

export const PricePage = () => {
  return (
    <main className={styles.container}>
      <Categories />
      <Rent />
      <Certificates />
      <Calculator />
    </main>
  );
};
