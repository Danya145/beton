import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

export const CustomMap = ({ latitude, longitude, zoom = 14 }: MapProps) => {
  const coordinates = [latitude, longitude];
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        marginTop: isMobile ? '-45px' : '-70px',
      }}>
      <YMaps
        query={{
          lang: 'ru_RU',
          load: 'package.full',
        }}>
        <Map
          defaultState={{ center: coordinates, zoom }}
          width="100%"
          height="100%"
          modules={[
            'control.ZoomControl',
            'control.FullscreenControl',
            'control.TypeSelector',
            'control.GeolocationControl',
          ]}
          state={{
            center: coordinates,
            zoom,
            controls: [
              'zoomControl',
              'fullscreenControl',
              'typeSelector',
              'geolocationControl',
            ],
          }}>
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>
    </div>
  );
};
