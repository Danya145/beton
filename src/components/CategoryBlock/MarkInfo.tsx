import * as styles from './CategoryBlock.module.scss';

export const MarkInfo = ({
  brand,
  Icon,
  subName,
  price,
}: {
  brand: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subName?: string;
  price: number;
}) => {
  return (
    <div className={styles.markInfo}>
      <Icon width={40} height={30} />
      <div>
        <p>
          {brand}
          <span className={styles.subName}>{subName}</span>
        </p>
        <span className={styles.price}>{price} byn</span>
      </div>
    </div>
  );
};
