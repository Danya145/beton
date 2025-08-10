import { CertificateCard } from '../CertificateCard/CertificateCard';
import * as styles from './Certificates.module.scss';
const CERTIFICATES_INFO = [
  {
    name: 'Сертификат соотвествия',
    image: '',
  },
  {
    name: 'Свидетельство о технической компетентности',
    image: '',
  },
  {
    name: 'Сертификат соотвествия',
    image: '',
  },
];
export const Certificates = () => {
  return (
    <div className={styles.container}>
      <h1>Сертификаты качества</h1>
      <div className={styles.divider}></div>
      <div className={styles.certificates}>
        {CERTIFICATES_INFO.map((item, index) => (
          <CertificateCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
