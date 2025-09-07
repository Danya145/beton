import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { useAlert } from '@/ui/Alert/useAlert';
import { ICONS } from '@/ui/constants';
import { brandOptions, COST_PER_KM } from '@/utils/db';

import * as styles from './Calculator.module.scss';

export const Calculator = () => {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [volume, setVolume] = useState('');
  const [distance, setDistance] = useState('');
  const [countRes, setCountRes] = useState(0);

  const { showAlert } = useAlert();

  const handleCalculate = () => {
    const volumeValue = parseFloat(volume.replace(',', '.'));
    const distanceValue = parseFloat(distance.replace(',', '.'));
    if (!type || !brand || isNaN(volumeValue) || isNaN(distanceValue)) {
      setCountRes(0);
      return;
    }

    const pricePerCube =
      brandOptions[type].find(b => b.value === brand)?.price ?? 0;
    const total = pricePerCube * volumeValue + distanceValue * COST_PER_KM;
    setCountRes(total);
  };

  const handleNumberInput = (
    val: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    if (/^[0-9]*[,]?[0-9]*$/.test(val)) {
      setter(val);
    }
  };
  const handleClick = useCallback(() => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:+375 (29) 750 13 68`;
    } else {
      navigator.clipboard
        .writeText('+375(29)7501368')
        .then(() => {
          showAlert({
            type: 'success',
            message: `Номер +375 (29) 750 13 68 скопирован в буфер обмена`,
          });
        })
        .catch(() => {
          console.error('Не удалось скопировать номер');
        });
    }
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.container} id="calculator">
      <div className={styles.calculator_wrapper}>
        <div className={styles.calculator}>
          <h1>Калькулятор стоимости</h1>
          <div className={styles.countForm}>
            <FormControl
              sx={{
                width: isMobile ? '100%' : '40%',
                gridArea: isMobile ? 'type' : 'none',
              }}
              size="small">
              <InputLabel>Тип бетона</InputLabel>
              <Select
                value={type}
                label="Тип бетона"
                onChange={(e: SelectChangeEvent<string>) => {
                  setType(e.target.value);
                  setBrand('');
                }}>
                <MenuItem value="gravel">На гравии</MenuItem>
                <MenuItem value="crushedStone">На щебне</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                width: isMobile ? '100%' : '40%',
                gridArea: isMobile ? 'mark' : 'none',
              }}
              disabled={!type}
              size="small">
              <InputLabel>Марка бетона</InputLabel>
              <Select
                value={brand}
                label="Марка бетона"
                onChange={(e: SelectChangeEvent<string>) =>
                  setBrand(e.target.value)
                }>
                {type &&
                  brandOptions[type].map(b => (
                    <MenuItem key={b.value} value={b.value}>
                      {b.label}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              label="Объем, куб"
              value={volume}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleNumberInput(e.target.value, setVolume)
              }
              sx={{
                width: isMobile ? '100%' : '40%',
                gridArea: isMobile ? 'volume' : 'none',
              }}
              size="small"
            />
            <TextField
              label="Расстояние, км"
              value={distance}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleNumberInput(e.target.value, setDistance)
              }
              sx={{
                width: isMobile ? '100%' : '40%',
                gridArea: isMobile ? 'dist' : 'none',
              }}
              size="small"
            />
            <Button
              variant="contained"
              onClick={handleCalculate}
              sx={{
                width: isMobile ? '100%' : '40%',
                height: '50px',
                backgroundColor: 'rgb(42, 95, 158)',
                mt: '25px',
                gridArea: isMobile ? 'btn' : 'none',
              }}
              disabled={!distance || !volume || !brand || !type}>
              Рассчитать
            </Button>
            <p className={styles.result}>Итого: {countRes} byn</p>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <ICONS.Info />
          <p>
            Точные цены и подробную информацию уточнять по
            <span onClick={handleClick}> телефону</span>
          </p>
        </div>
      </div>
    </section>
  );
};
