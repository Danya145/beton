import { IMAGES } from '@/ui/constants';

import * as styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src={IMAGES.About1} alt="" />
        <img src={IMAGES.About2} alt="" />
        <img src={IMAGES.About3} alt="" />
        <img src={IMAGES.About4} alt="" />
      </div>
      <div className={styles.info}>
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
        <button>позвонить</button>
        <button>заказать звонок</button>
      </div>
    </div>
  );
};
