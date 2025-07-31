import { IMAGES } from '@/ui/constants';

import * as styles from './About.module.scss';

export const About = () => {
  const handleCallClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = 'tel:+375297501368';
    } else {
      const phoneInput = document.getElementById('phone');
      if (phoneInput) {
        const links = phoneInput.querySelectorAll('a');
        links.forEach((link) => link.classList.add(styles.highlight));
        phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
          links.forEach((link) => link.classList.remove(styles.highlight));
        }, 2000);
      }
    }
  };

  const handleScrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      const offset = -100; // подняться на 100px выше элемента
      const top = contactsSection.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.images}>
        <img src={IMAGES.About1} alt="" />
        <img src={IMAGES.About2} alt="" />
        <img src={IMAGES.About3} alt="" />
        <img src={IMAGES.About4} alt="" />
      </div>
      <div className={styles.info}>
        <div>
          <h1>О нас</h1>
          <p>
            Компания <span>&quot;БетонЦентр&quot;</span> (ЧСУП &quot;СпецАвтоЛэнд&quot;) - один из
            ведущих производителей и поставщиков бетонных смесей в Беларуси.
          </p>
          <p>
            Мы работаем с частными заказчиками и крупными строительными организациями, обеспечивая
            качественные материалы и профессиональный сервис.
          </p>
          <h6>Наши преимущества:</h6>
          <ul>
            <li>
              <span>Собственное производство -</span> любые марки бетона с гарантией качества
            </li>
            <li>
              <span>Быстрая доставка -</span> точно в срок, даже в стесненных условиях
            </li>
            <li>
              <span>Спецтехника в аренду -</span> автобетононасосы, миксеры, услуги заливки
            </li>
            <li>
              <span>Круглосуточная работа -</span> подача бетона 24/7 по всей Беларуси
            </li>
            <li>
              <span>Опытные специалисты -</span> операторы с 10-летним стажем и обучением у мировых
              производителей техники
            </li>
          </ul>
          <p>
            <span>Нам доверяют:</span> ОАО «Минскпромстрой», ОАО «Минскремстрой» и другие крупные
            компании.
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
