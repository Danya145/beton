import * as styles from './RentBlock.module.scss';
import { RentInfo, RentInfoProps } from './RentInfo';

export interface RentBlockProps {
  header: string;
  payload: RentInfoProps[];
}

export const RentBlock = ({ header, payload }: RentBlockProps) => {
  return (
    <div className={styles.container}>
      <h3>{header}</h3>
      <div className={styles.divider}></div>
      <div className={styles.rents}>
        {payload.map((item, index) => (
          <RentInfo {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
