import { PROJECTS } from '@/ui/constants';
import * as styles from './Projects.module.scss';

export const Projects = () => {
  return <section className={styles.container}>
    <div className={styles.header}>
      <h1>Готовые проекты</h1>
      <div></div>
      <p>наши работы говорят сами за себя</p>
    </div>
    <div className={styles.projects}>
      {PROJECTS.map((project, id) => <img src={project.image} key={id} />)}
    </div>
  </section>;
};
