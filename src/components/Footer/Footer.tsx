import { IMAGES } from '@/ui/constants';

import * as styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={IMAGES.Logo} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <h3>Контакты</h3>
        </div>
        <div className={styles.adressess}>
          <h3>Адреса</h3>
        </div>
        <div className={styles.socials}>
          <h3>Соц. сети</h3>
        </div>
      </div>
    </footer>
  );
};
