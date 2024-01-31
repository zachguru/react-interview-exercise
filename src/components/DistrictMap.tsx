import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon, MapOptions } from 'leaflet';
import locationIcon from '/location.png';
import { NCESDistrictFeatureAttributes } from '@utils/nces';

interface DistrictMapProps {
  center: [number, number];
  zoom: number;
  markers: NCESDistrictFeatureAttributes[];
}

interface MarkerData {
  data: NCESDistrictFeatureAttributes[];
}

const customIcon = new Icon({
  iconUrl: locationIcon,
  iconSize: [38, 38],
});

const Markers: React.FC<MarkerData> = ({ data }) => {
  const map = useMap();
  return data.length > 0 ? (
    <>
      {data.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.LAT1516, marker.LON1516]}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              map.setView([marker.LAT1516, marker.LON1516], 14);
            },
          }}
        >
          <Popup>
            <div>
              <p><strong>Name: </strong> {marker.NAME}</p>
              <p><strong>Location: </strong> {marker.LCITY}, {marker.LSTATE}, {marker.LZIP}</p>
              <p><strong>County: </strong>{marker.NMCNTY15}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  ) : null;
};

const DistrictMap: React.FC<DistrictMapProps> = ({ center, zoom, markers }) => {
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers data={markers} />
    </MapContainer>
  );
};

export default DistrictMap;
