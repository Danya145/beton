import { useNavigate } from 'react-router-dom';

import { IMAGES } from '@/ui/constants';

import * as styles from './Logo.module.scss';

export const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.logo} onClick={handleClick}>
      <img src={IMAGES.Logo} />
    </div>
  );
};
