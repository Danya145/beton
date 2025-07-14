import {
  FullscreenControl,
  Map,
  Placemark,
  TypeSelector,
  YMaps,
  ZoomControl,
} from '@pbe/react-yandex-maps';

export const MapBlock = () => {
  return (
    <YMaps>
      <div style={{ width: '100%', height: '400px' }}>
        <Map
          defaultState={{
            center: [53.819609, 27.696066],
            zoom: 15,
          }}
          width="100%"
          height="100%"
        >
          <ZoomControl options={{ position: { right: 10, top: 50 } }} />
          <FullscreenControl options={{ position: { left: 10, top: 50 } }} />
          <TypeSelector />
          <Placemark geometry={[53.819609, 27.696066]} />
        </Map>
      </div>
    </YMaps>
  );
};
