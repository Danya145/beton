import { ICONS } from '@/ui/constants';

import * as styles from './Phone.module.scss';

export const Phone = () => {
  return (
    <div className={styles.container}>
      <ICONS.Phone />
      <div className={styles.phones}>
        <a href="tel:+375297501368">+375 (29) 750 13 68</a>
        <a href="tel:+375445366366">+375 (44) 536 63 66</a>
      </div>
    </div>
  );
};
