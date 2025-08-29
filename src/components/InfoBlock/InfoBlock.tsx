import { useNavigate } from 'react-router-dom';

import { ICONS } from '@/ui/constants';

import * as styles from './InfoBlock.module.scss';

export interface InfoBlockProps {
  header: { first_part: string; material: string; second_part: string };
  list: string[];
  link: string;
  image: string;
  reverse: boolean;
  isBlack?: boolean;
}

export const InfoBlock = ({ header, list, link, reverse, isBlack = false }: InfoBlockProps) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.block} ${reverse ? styles.reverse : ''}`}>
      <div
        className={`${styles.content} ${reverse ? styles.orange : ''} ${isBlack ? styles.black : ''}`}
      >
        <h3>
          {header.first_part} <span>{header.material}</span>
          {header.second_part}
        </h3>
        <ul>
          {list.map((el, id) => (
            <li key={id}>{el}</li>
          ))}
        </ul>
        <a
          onClick={() => {
            navigate(link);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Подробнее <ICONS.RightArrow fill={isBlack ? '#000' : '#fff'} />
        </a>
      </div>
    </div>
  );
};
