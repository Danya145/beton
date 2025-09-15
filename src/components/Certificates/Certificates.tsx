import { useEffect, useState } from 'react';

import { IMAGES } from '@/ui/constants';

import { CertificateCard } from '../CertificateCard/CertificateCard';
import * as styles from './Certificates.module.scss';

const CERTIFICATES_INFO = [
  {
    name: 'Сертификат соотвествия',
    image: [IMAGES.Certificate1],
  },
  {
    name: 'Свидетельство о технической компетентности',
    image: [IMAGES.Certificate31, IMAGES.Certificate32],
  },
  {
    name: 'Сертификат соотвествия',
    image: [IMAGES.Certificate2],
  },
];

export const Certificates = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (activeIndex > 0) setActiveIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (activeIndex < CERTIFICATES_INFO.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  return (
    <section className={styles.container}>
      <h1>Сертификаты качества</h1>
      <div className={styles.divider}></div>

      {isMobile ? (
        <div className={styles.swiper}>
          <button
            className={styles.arrow}
            onClick={handlePrev}
            disabled={activeIndex === 0}>
            ‹
          </button>

          <div className={styles.slidesWrapper}>
            <div
              className={styles.slides}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}>
              {CERTIFICATES_INFO.map((item, index) => (
                <div className={styles.slide} key={index}>
                  <CertificateCard {...item} />
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.arrow}
            onClick={handleNext}
            disabled={activeIndex === CERTIFICATES_INFO.length - 1}>
            ›
          </button>
        </div>
      ) : (
        <div className={styles.certificates}>
          {CERTIFICATES_INFO.map((item, index) => (
            <CertificateCard {...item} key={index} />
          ))}
        </div>
      )}
    </section>
  );
};
