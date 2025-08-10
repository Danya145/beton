import { ICONS } from '@/ui/constants';

import * as styles from './CertificateCard.module.scss';
export interface CertificateCardProps {
  name: string;
  image: string;
}
export const CertificateCard = ({ name, image }: CertificateCardProps) => {
  const handleOpen = () => {
    console.log('open certificate');
  };
  return (
    <div className={styles.container} onClick={handleOpen}>
      <ICONS.CertificateIcon />
      <p>{name}</p>
    </div>
  );
};
