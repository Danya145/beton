import { CategoryBlock } from '@/components/CategoryBlock/CategoryBlock';
import { MainInfo } from '@/utils/db';

import { MarkInfo } from '../CategoryBlock/MarkInfo';
import * as styles from './Categories.module.scss';

export const Categories = () => {
  return (
    <section className={styles.container} id="categories">
      <h1>Цены на бетон и растворы за куб</h1>
      <div className={styles.categories}>
        {Object.entries(MainInfo).map(([key, category]) => (
          <CategoryBlock key={key} header={category.title}>
            {category.marks.map(mark => (
              <MarkInfo
                key={mark.name}
                brand={`${mark.name[0]} ${mark.name.slice(1)}`}
                Icon={category.icon}
                subName={mark.official_name}
                price={+mark.price}
              />
            ))}
          </CategoryBlock>
        ))}
      </div>
    </section>
  );
};
