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
            {price.name}{' '}
            <span
              style={{
                paddingLeft: /\d/.test(price.cost) ? '30px' : 0,
                fontWeight: /\d/.test(price.cost) ? 600 : 500,
              }}>
              {price.cost}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};
