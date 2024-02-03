import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from '@utils/nces';
import { DistrictMarkers } from './markers/DistrictMarkers'
import { SchoolMarkers } from './markers/SchoolMarkers'

interface DistrictMapProps {
  center: [number, number];
  zoom: number;
  districtMarkers: NCESDistrictFeatureAttributes[];
  schoolMarkers : NCESSchoolFeatureAttributes[];
  handleDistrictSelection: (e:any) => void
}


const DistrictMap: React.FC<DistrictMapProps> = ({ center, zoom, districtMarkers, schoolMarkers, handleDistrictSelection }) => {
  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DistrictMarkers data={districtMarkers} handleDistrictSelection={handleDistrictSelection} />
      <SchoolMarkers data={schoolMarkers} />
    </MapContainer>
  );
};

export default DistrictMap;
