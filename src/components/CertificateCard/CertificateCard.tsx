import { useState } from 'react';

import { ICONS } from '@/ui/constants';

import * as styles from './CertificateCard.module.scss';
export interface CertificateCardProps {
  name: string;
  image: string[];
}
export const CertificateCard = ({ name, image }: CertificateCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.icon} onClick={handleOpen}>
          <ICONS.CertificateIcon />
        </div>
        <p>{name}</p>
      </div>
      {open && (
        <div className={styles.modal} onClick={handleClose}>
          {image.map((el) => (
            <img src={el} alt={name} className={styles.fullImage} key={el} />
          ))}
        </div>
      )}
    </>
  );
};
