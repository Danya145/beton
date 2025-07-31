import { ICONS } from '@/ui/constants';

import * as styles from './InfoBlock.module.scss';

export interface InfoBlockProps {
  header: string;
  list: string[];
  link: string;
  image: string;
  reverse: boolean;
}

export const InfoBlock = ({ header, list, link, reverse }: InfoBlockProps) => {
  return (
    <div className={`${styles.block} ${reverse ? styles.reverse : ''}`}>
      <div className={`${styles.content} ${reverse ? styles.orange : ''}`}>
        <h3>{header}</h3>
        <ul>
          {list.map((el, id) => (
            <li key={id}>{el}</li>
          ))}
        </ul>
        <a href={link}>
          Подробнее <ICONS.RightArrow />
        </a>
      </div>
    </div>
  );
};
