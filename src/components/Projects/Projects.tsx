import { useState } from 'react';

import { PROJECTS } from '@/ui/constants';

import * as styles from './Projects.module.scss';

export const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Наши проекты</h1>
        <div className={styles.divider}></div>
        <p>наши работы говорят сами за себя</p>
      </div>
      <div className={styles.sliderWrapperDesktop}>
        <div className={styles.sliderTrack}>
          {[...Array(2)].flatMap((_, i) =>
            PROJECTS.map((project, id) => (
              <div key={`${i}-${id}`} className={styles.slide}>
                <img src={project.image} alt={`Project ${id + 1}`} />
              </div>
            )),
          )}
        </div>
      </div>

      <div className={styles.sliderWrapperMobile}>
        <button className={styles.arrow} onClick={prevSlide}>
          ‹
        </button>
        <div className={styles.slideMobile}>
          <img src={PROJECTS[current].image} alt={`Project ${current + 1}`} />
        </div>
        <button className={styles.arrow} onClick={nextSlide}>
          ›
        </button>
      </div>
    </section>
  );
};
