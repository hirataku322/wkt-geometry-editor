'use client';

import * as React from 'react';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Page() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 139.717,
        latitude: 35.674,
        zoom: 14
      }}
      style={{ width: 1100, height: 650 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
