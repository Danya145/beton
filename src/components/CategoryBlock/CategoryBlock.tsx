import * as styles from './CategoryBlock.module.scss';

export interface CategoryBlockProps {
  header: string;
  borderColor: string;
  dividerStyle?: React.CSSProperties;
  children: React.ReactNode;
}

export const CategoryBlock = ({
  header,
  borderColor,
  dividerStyle,
  children,
}: CategoryBlockProps) => {
  return (
    <div className={styles.container} style={{ borderColor }}>
      <h3>{header}</h3>
      <div className={styles.divider} style={dividerStyle}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
