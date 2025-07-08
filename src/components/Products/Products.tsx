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
      {INFO_BLOCKS.map((item, id) => (
        <InfoBlock
          key={id}
          header={item.header}
          list={item.list}
          link={item.link}
          image={item.image}
          reverse={item.reverse}
        />
      ))}
    </section>
  );
};
