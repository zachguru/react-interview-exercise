import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from '@utils/nces';
import { DistrictMarkers } from './markers/DistrictMarkers'
import { SchoolMarkers } from './markers/SchoolMarkers'

interface ScholartMapProps {
  center: [number, number]; // Center of map
  zoom: number; // Zoom intesity
  districtMarkers: NCESDistrictFeatureAttributes[]; // Markers which resemble district locations on map
  schoolMarkers : NCESSchoolFeatureAttributes[]; // Markers which resemble school locations on map
  handleDistrictSelection: (e:any) => void // Handler method for updating LEAID when clicking on district
}

// Map commponent
const ScholarMap: React.FC<ScholartMapProps> = ({ center, zoom, districtMarkers, schoolMarkers, handleDistrictSelection }) => {
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

export default ScholarMap;
