import { useEffect, useState } from 'react';

import { useAlert } from '@/ui/Alert/useAlert';
import { ICONS } from '@/ui/constants';

import * as styles from './Phone.module.scss';

export const Phone = () => {
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
    <div className={styles.container} id="phone">
      <ICONS.Phone />
      <div className={styles.phones}>
        {renderPhoneLink('+375297501368', '+375 (29) 750 13 68')}
        {renderPhoneLink('+375445366366', '+375 (44) 536 63 66')}
      </div>
    </div>
  );
};
