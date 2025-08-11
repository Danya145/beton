import { CategoryBlock } from '@/components/CategoryBlock/CategoryBlock';
import { ICONS } from '@/ui/constants';

import { MarkInfo } from '../CategoryBlock/MarkInfo';
import * as styles from './Categories.module.scss';

export const Categories = () => {
  return (
    <section className={styles.container}>
      <h1>Цены на бетон и растворы за куб</h1>
      <div className={styles.categories}>
        <CategoryBlock header="Бетон на щебне">
          <MarkInfo brand="M 200" Icon={ICONS.Sheben} subName="(с12/15)" price={180} />
          <MarkInfo brand="M 250" Icon={ICONS.Sheben} subName="(с16/20)" price={185} />
          <MarkInfo brand="M 300" Icon={ICONS.Sheben} subName="(с18/22.5)" price={190} />
          <MarkInfo brand="M 350" Icon={ICONS.Sheben} subName="(с20/25)" price={195} />
          <MarkInfo brand="M 400" Icon={ICONS.Sheben} subName="(с25/30)" price={200} />
          <MarkInfo brand="M 450" Icon={ICONS.Sheben} subName="(с28/35)" price={205} />
          <MarkInfo brand="M 500" Icon={ICONS.Sheben} subName="(с30/37)" price={210} />
        </CategoryBlock>
        <CategoryBlock header="Бетон на гравии">
          <MarkInfo brand="M 150" Icon={ICONS.Gravij} subName="(с10/12.5)" price={135} />
          <MarkInfo brand="M 200" Icon={ICONS.Gravij} subName="(с12/15)" price={140} />
          <MarkInfo brand="M 250" Icon={ICONS.Gravij} subName="(с16/20)" price={145} />
          <MarkInfo brand="M 300" Icon={ICONS.Gravij} subName="(с18/22.5)" price={150} />
        </CategoryBlock>
        <CategoryBlock header="Растворы">
          <MarkInfo brand="M 50" Icon={ICONS.Liquid} price={115} />
          <MarkInfo brand="M 75" Icon={ICONS.Liquid} price={120} />
          <MarkInfo brand="M 100" Icon={ICONS.Liquid} price={125} />
          <MarkInfo brand="M 150" Icon={ICONS.Liquid} price={130} />
          <MarkInfo brand="M 50" Icon={ICONS.Liquid} price={135} />
          <MarkInfo brand="M 200" Icon={ICONS.Liquid} price={135} />
        </CategoryBlock>
      </div>
    </section>
  );
};
