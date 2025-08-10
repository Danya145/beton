import { CategoryBlock } from '@/components/CategoryBlock/CategoryBlock';

const MarkInfo = ({ brand, subName, price }: { brand: string; subName: string; price: number }) => (
  <div>
    {/* <ICONS[icon]/> */}
    <strong>{brand}</strong> — {price}$
  </div>
);

export const Categories = () => {
  return (
    <div>
      <CategoryBlock
        header="Бетон на щебне"
        borderColor="red"
        dividerStyle={{ backgroundColor: 'red', height: '3px' }}
      >
        <MarkInfo brand="M 200" subName="(с12/15)" price={180} />
        <MarkInfo brand="M 250" subName="(с16/20)" price={185} />
      </CategoryBlock>

      <CategoryBlock
        header="Бетон на гравии"
        borderColor="blue"
        dividerStyle={{ backgroundColor: 'blue', height: '3px' }}
      >
        <MarkInfo brand="M 150" subName="(с10/12.5)" price={135} />
        <MarkInfo brand="M 200" subName="(с12/15)" price={140} />
      </CategoryBlock>
    </div>
  );
};
