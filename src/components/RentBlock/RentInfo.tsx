import * as styles from './RentBlock.module.scss';
export interface RentInfoProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
  extraInfo: string;
  prices: {
    name: string;
    cost: string;
  }[];
}
export const RentInfo = ({ Icon, name, extraInfo, prices }: RentInfoProps) => {
  return (
    <div className={styles.rentInfo}>
      <div>
        <Icon width={40} height={30} />
        <div className={styles.info}>
          <p>{name}</p>
          <span>{extraInfo}</span>
        </div>
      </div>
      <div className={styles.price}>
        {prices.map((price, index) => (
          <p key={index}>
            {price.name} <span>{price.cost}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
