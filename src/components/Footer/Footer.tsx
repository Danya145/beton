import { ICONS, IMAGES } from '@/ui/constants';

import * as styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={IMAGES.Logo} alt="" />
        <div>
          <h3>БетонЦентр</h3>
          <p>Производство, доставка, заливка бетона</p>
          <p>Аренда миксеров и бетононасосов</p>
          <p>
            Минск и область, <span>24/7</span>
          </p>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.contacts}>
          <h3>Контакты</h3>
          <a href="tel:+375297501368">+375 (29) 750 13 68</a>
          <a href="tel:+375445366366">+375 (44) 536 63 66</a>
          <a href="mailto:info@kupitbeton.by">info@kupitbeton.by</a>
        </div>
        <div className={styles.adressess}>
          <h3>Адреса</h3>
          <p>Производство: г. Минск, ул. Селицкого 23</p>
          <p>Офис: г. Минск, ул. Шаранговича 20</p>
        </div>
        <div className={styles.socials}>
          <h3>Соц. сети</h3>
          <div>
            <a href="">
              <ICONS.TikTok />
            </a>
            <a href="">
              <ICONS.Insta />
            </a>
            <a href="">
              <ICONS.Facebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
