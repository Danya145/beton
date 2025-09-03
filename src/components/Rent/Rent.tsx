import { ICONS } from '@/ui/constants';

import { RentBlock } from '../RentBlock/RentBlock';
import * as styles from './Rent.module.scss';

const RENT_BLOCK_INFO = [
  {
    header: 'Аренда спец.техники с оператором',
    payload: [
      {
        Icon: ICONS.AutoPump,
        name: 'АвтобетоноНасосы',
        extraInfo: '(Стрела 37-42 метра)',
        prices: [{ name: 'Цена', cost: 'договорная' }],
      },
      {
        Icon: ICONS.Mixer,
        name: 'АвтобетоноСмесители',
        extraInfo: '(Миксеры, объем 7-12 куб)',
        prices: [{ name: 'Цена', cost: 'договорная' }],
      },
    ],
  },
  {
    header: 'Аренда спец.техники без оператора',
    payload: [
      {
        Icon: ICONS.StaticPump,
        name: 'Стационарный бетононасос',
        extraInfo: '(Putzmeister BSA 1409 D)',
        prices: [
          { name: 'Неделя аренды', cost: '1 500 byn' },
          { name: 'Месяц аренды', cost: '6 000 byn' },
        ],
      },
    ],
  },
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
