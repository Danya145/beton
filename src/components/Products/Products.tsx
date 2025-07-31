import { IMAGES } from '@/ui/constants';

import { InfoBlock, InfoBlockProps } from '../InfoBlock/InfoBlock';
import * as styles from './Products.module.scss';

const INFO_BLOCKS: InfoBlockProps[] = [
  {
    header: 'Бетон на щебне, марок:',
    list: ['M 200 и М 250', 'M 300 и М 350', 'M 400 и М 450', 'M 500'],
    link: '',
    image: IMAGES.Products1,
    reverse: false,
  },
  {
    header: 'Бетон на гравии, марок:',
    list: ['M 150', 'M 200', 'M 250', 'M 300'],
    link: '',
    image: IMAGES.Products2,
    reverse: false,
  },
  {
    header: 'Аренда спец. техники с оператором:',
    list: ['АвтобетоноНасосы', 'АвтобетоноСмесители'],
    link: '',
    image: IMAGES.Products3,
    reverse: true,
  },
  {
    header: 'Аренда спец. техники без оператора:',
    list: ['Стационарные бетононасосы'],
    link: '',
    image: IMAGES.Products4,
    reverse: true,
  },
];

export const Products = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {INFO_BLOCKS.slice(0, 1).map((item, index) => (
          <div key={`block-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
        {INFO_BLOCKS.slice(0, 1).map((item, index) => (
          <div key={`img-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header} className={styles.image} />
          </div>
        ))}
        {INFO_BLOCKS.slice(1, 2).map((item, index) => (
          <div key={`block-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
        {INFO_BLOCKS.slice(1, 2).map((item, index) => (
          <div key={`img-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header} className={styles.image} />
          </div>
        ))}

        {INFO_BLOCKS.slice(2, 3).map((item, index) => (
          <div key={`img2-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header} className={styles.image} />
          </div>
        ))}
        {INFO_BLOCKS.slice(2, 3).map((item, index) => (
          <div key={`block2-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
        {INFO_BLOCKS.slice(3, 4).map((item, index) => (
          <div key={`img2-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header} className={styles.image} />
          </div>
        ))}
        {INFO_BLOCKS.slice(3, 4).map((item, index) => (
          <div key={`block2-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};
