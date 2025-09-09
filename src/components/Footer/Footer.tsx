import { useEffect, useState } from 'react';

import { useAlert } from '@/ui/Alert/useAlert';
import { ICONS, IMAGES } from '@/ui/constants';

import * as styles from './Footer.module.scss';

export const Footer = () => {
  const { showAlert } = useAlert();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
  }, []);

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone).then(() => {
      showAlert({ type: 'success', message: `Номер ${phone} скопирован` });
    });
  };

  const renderPhoneLink = (phone: string, display: string) => {
    return isMobile ? (
      <a href={`tel:${phone}`}>{display}</a>
    ) : (
      <span onClick={() => handleCopy(phone)} className={styles.clickable}>
        {display}
      </span>
    );
  };
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
          {renderPhoneLink('+375296034046', '+375 (29) 603 40 46')}
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
