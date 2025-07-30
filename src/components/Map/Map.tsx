import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

export const CustomMap = ({ latitude, longitude, zoom = 14 }: MapProps) => {
  const coordinates = [latitude, longitude];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <YMaps
        query={{
          lang: 'ru_RU', // Язык интерфейса
          load: 'package.full', // Загружаем все модули, включая маршруты
        }}
      >
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
            controls: ['zoomControl', 'fullscreenControl', 'typeSelector', 'geolocationControl'],
          }}
        >
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>
    </div>
  );
};
