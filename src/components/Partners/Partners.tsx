import { IMAGES } from '@/ui/constants';

import * as styles from './Partners.module.scss';

const images = [IMAGES.Partners1, IMAGES.Partners2, IMAGES.Partners3, IMAGES.Partners4];

export const Partners = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {[...Array(2)].flatMap((_, i) =>
          images.map((src, idx) => (
            <div key={`${i}-${idx}`} className={styles.slide}>
              <img src={src} alt={`Partner ${idx + 1}`} />
            </div>
          )),
        )}
      </div>
    </div>
  );
};
