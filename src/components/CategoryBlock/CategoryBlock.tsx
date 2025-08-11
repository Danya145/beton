import * as styles from './CategoryBlock.module.scss';

export interface CategoryBlockProps {
  header: string;
  children: React.ReactNode;
}

export const CategoryBlock = ({ header, children }: CategoryBlockProps) => {
  return (
    <div className={styles.container}>
      <h3>{header}</h3>
      <div className={styles.divider}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
