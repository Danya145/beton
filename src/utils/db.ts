import { ICONS } from '@/ui/constants';

export const COST_PER_KM = 10;

interface Mark {
  name: string;
  price: string;
  official_name?: string;
}

interface Category {
  title: string;
  marks: Mark[];
  icon: React.FC;
  material?: string;
}
export const MainInfo: Record<string, Category> = {
  crushedStone: {
    title: 'Бетон на щебне',
    icon: ICONS.Sheben,
    marks: [
      {
        name: 'M 200',
        official_name: '(c12/15)',
        price: '180',
      },
      {
        name: 'M 250',
        official_name: '(c16/20)',
        price: '185',
      },
      {
        name: 'M 300',
        official_name: '(c18/22.5)',
        price: '190',
      },
      {
        name: 'M 350',
        official_name: '(c20/25)',
        price: '195',
      },
      {
        name: 'M 400',
        official_name: '(c25/30)',
        price: '200',
      },
      {
        name: 'M 450',
        official_name: '(c28/35)',
        price: '205',
      },
      {
        name: 'M 500',
        official_name: '(c30/37)',
        price: '210',
      },
    ],
    material: 'щебень',
  },
  gravel: {
    title: 'Бетон на гравии',
    icon: ICONS.Gravij,
    marks: [
      {
        name: 'M 150',
        official_name: '(с10/12.5)',
        price: '135',
      },
      {
        name: 'M 200',
        official_name: '(с12/15)',
        price: '140',
      },
      {
        name: 'M 250',
        official_name: '(c16/20)',
        price: '145',
      },
      {
        name: 'M 300',
        official_name: '(c18/22.5)',
        price: '150',
      },
    ],
    material: 'гравий',
  },
  liquids: {
    icon: ICONS.Liquid,
    marks: [
      {
        name: 'M 50',
        price: '115',
      },
      {
        name: 'M 75',
        price: '120',
      },
      {
        name: 'M 100',
        price: '125',
      },
      {
        name: 'M 150',
        price: '130',
      },
      {
        name: 'M 200',
        price: '135',
      },
    ],
    title: 'Растворы',
  },
};

export const brandOptions: Record<
  string,
  { value: string; label: string; price: number }[]
> = {
  gravel: MainInfo.gravel.marks.map(mark => ({
    value: mark.name,
    label: `${mark.name} (${MainInfo.gravel.material})`,
    price: +mark.price,
  })),
  crushedStone: MainInfo.crushedStone.marks.map(mark => ({
    value: mark.name,
    label: `${mark.name} (${MainInfo.crushedStone.material})`,
    price: +mark.price,
  })),
};
