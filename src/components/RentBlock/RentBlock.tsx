import { ICONS } from '@/ui/constants';

import * as styles from './RentBlock.module.scss';
import { RentInfo } from './RentInfo';

export interface RentBlockProps {
  header: string;
}

const RENT_INFO = [
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
    prices: [
      { name: 'Неделя аренды', cost: '1500' },
      { name: 'Месяц аренды', cost: '6000' },
    ],
  },
  {
    Icon: ICONS.StaticPump,
    name: 'Стационарный бетононасос',
    extraInfo: '(Putzmeister BSA 1409 D)',
    prices: [{ name: 'Цена', cost: 'договорная' }],
  },
];
export const RentBlock = ({ header }: RentBlockProps) => {
  return (
    <div className={styles.container}>
      <h3>{header}</h3>
      <div className={styles.divider}></div>
      <div className={styles.rents}>
        {RENT_INFO.map((item, index) => (
          <RentInfo {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
