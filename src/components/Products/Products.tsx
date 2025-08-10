import { IMAGES } from '@/ui/constants';

import { InfoBlock, InfoBlockProps } from '../InfoBlock/InfoBlock';
import * as styles from './Products.module.scss';

const INFO_BLOCKS: InfoBlockProps[] = [
  {
    header: {
      first_part: 'Бетон на ',
      material: 'щебне,',
      second_part: ' марок:',
    },
    list: ['M 200 и М 250', 'M 300 и М 350', 'M 400 и М 450', 'M 500'],
    link: '/price',
    image: IMAGES.Products1,
    reverse: false,
  },
  {
    header: {
      first_part: 'Бетон на ',
      material: 'гравии,',
      second_part: ' марок:',
    },
    list: ['M 150', 'M 200', 'M 250', 'M 300'],
    link: '/price',
    image: IMAGES.Products2,
    reverse: false,
  },
  {
    header: {
      first_part: 'Аренда спец. техники',
      material: 'с оператором:',
      second_part: '',
    },
    list: ['АвтобетоноНасосы', 'АвтобетоноСмесители'],
    link: '/price',
    image: IMAGES.Products3,
    reverse: true,
    isBlack: true,
  },
  {
    header: {
      first_part: 'Аренда спец. техники',
      material: 'без оператора:',
      second_part: '',
    },
    list: ['Стационарные бетононасосы'],
    link: '/price',
    image: IMAGES.Products4,
    reverse: true,
    isBlack: true,
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
            <img src={item.image} alt={item.header.material} className={styles.image} />
          </div>
        ))}
        {INFO_BLOCKS.slice(1, 2).map((item, index) => (
          <div key={`block-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
        {INFO_BLOCKS.slice(1, 2).map((item, index) => (
          <div key={`img-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header.material} className={styles.image} />
          </div>
        ))}

        {INFO_BLOCKS.slice(2, 3).map((item, index) => (
          <div key={`img2-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header.material} className={styles.image} />
          </div>
        ))}
        {INFO_BLOCKS.slice(2, 3).map((item, index) => (
          <div key={`block2-${index}`} className={styles.gridItem}>
            <InfoBlock {...item} />
          </div>
        ))}
        {INFO_BLOCKS.slice(3, 4).map((item, index) => (
          <div key={`img2-${index}`} className={styles.gridItem}>
            <img src={item.image} alt={item.header.material} className={styles.image} />
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
