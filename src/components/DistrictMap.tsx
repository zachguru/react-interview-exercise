import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import locationIcon from 'public/location.png'

const customIcon = new Icon({
  iconUrl: locationIcon,
  iconSize: [38, 38],
});

const markers = [
  {
    geocode: L.latLng(48.86, 2.3522),
    popUp: 'Pop 1',
  },
  {
    geocode: L.latLng(48.85, 2.3522),
    popUp: 'Pop 2',
  },
  {
    geocode: L.latLng(48.855, 2.34),
    popUp: 'Pop 3',
  },
];

const DistrictMap: React.FC = ({ children }) => {
  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.geocode} position={marker.geocode} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
};

export default DistrictMap;
