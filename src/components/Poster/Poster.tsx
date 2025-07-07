import { IMAGES } from '@/ui/constants';

import * as styles from './Poster.module.scss';

export const Poster = () => {
  return (
    <div className={styles.container}>
      <img src={IMAGES.BgImage} alt="" />
      <div className={styles.info}>
        <div>
          <img src={IMAGES.LogoLight} alt="" />
          <h3>
            БЕТОН
            <br />
            СПЕЦ.ТЕХНИКА
          </h3>
          <p>Строим будущее вместе !</p>
        </div>
      </div>
    </div>
  );
};
