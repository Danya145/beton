import { RentBlock } from '../RentBlock/RentBlock';
import * as styles from './Rent.module.scss';

const RENT_BLOCK_INFO = [
  { header: 'Аренда спец.техники с оператором' },
  { header: 'Аренда спец.техники без оператора' },
];
export const Rent = () => {
  return (
    <section className={styles.container}>
      <h1>Цены на аренду спец.техники</h1>
      <div className={styles.rentBlocks}>
        {RENT_BLOCK_INFO.map((item, index) => (
          <RentBlock {...item} key={index} />
        ))}
      </div>
    </section>
  );
};
