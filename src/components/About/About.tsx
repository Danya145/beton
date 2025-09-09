import { useEffect, useState } from 'react';

import { IMAGES } from '@/ui/constants';

import * as styles from './About.module.scss';

export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  const handleCallClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+375297501368';
    } else {
      window.dispatchEvent(new CustomEvent('forceShowHeader'));

      const phoneEl = document.getElementById('phone');
      if (phoneEl) {
        phoneEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        phoneEl.classList.add(styles.highlight);

        setTimeout(() => {
          phoneEl.classList.remove(styles.highlight);
        }, 2000);
      }
    }
  };

  const handleScrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      const offset = -100;
      const top =
        contactsSection.getBoundingClientRect().top +
        window.pageYOffset +
        offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container} id="about">
      <div className={styles.images}>
        <img src={IMAGES.About1} alt="" />
        <img src={IMAGES.About2} alt="" />
        <img
          src={IMAGES.About3}
          alt=""
          style={{ display: isMobile ? 'none' : 'block' }}
        />
        <img src={IMAGES.About4} alt="" />
      </div>
      <div className={styles.info}>
        <div>
          <h1>О нас</h1>
          <p>
            Компания <span>&quot;БетонЦентр&quot;</span> (ЧСУП
            &quot;СпецАвтоЛэнд&quot;) - один из ведущих производителей и
            поставщиков бетонных смесей в Беларуси.
          </p>
          <p>
            Мы работаем с частными заказчиками и крупными строительными
            организациями, обеспечивая качественные материалы и профессиональный
            сервис.
          </p>
          <h6>Наши преимущества:</h6>
          <ul>
            <li>
              <span>Собственное производство -</span> любые марки бетона с
              гарантией качества
            </li>
            <li>
              <span>Быстрая доставка -</span> точно в срок, даже в стесненных
              условиях
            </li>
            <li>
              <span>Спецтехника в аренду -</span> автобетононасосы, миксеры,
              услуги заливки
            </li>
            <li>
              <span>Круглосуточная работа -</span> подача бетона 24/7 по всей
              Беларуси
            </li>
            <li>
              <span>Опытные специалисты -</span> операторы с 10-летним стажем и
              обучением у мировых производителей техники
            </li>
          </ul>
          <p>
            <span>Нам доверяют:</span> ОАО &quot;Минскпромстрой&quot;, ОАО
            &quot;Минскремстрой&quot; и другие крупные компании.
          </p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleCallClick}>позвонить</button>
          <button onClick={handleScrollToContacts}>заказать звонок</button>
        </div>
      </div>
    </section>
  );
};
