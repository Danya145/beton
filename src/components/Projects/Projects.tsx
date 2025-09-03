import { PROJECTS } from '@/ui/constants';

import * as styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Наши проекты</h1>
        <div className={styles.divider}></div>
        <p>наши работы говорят сами за себя</p>
      </div>
      <div className={styles.sliderWrapper}>
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
    </section>
  );
};
