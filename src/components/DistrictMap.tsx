import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon, MapOptions } from 'leaflet';
import locationIcon from '/location.png';
import schoolLocationIcon from '/schoolicon.png'
import { NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from '@utils/nces';

interface DistrictMapProps {
  center: [number, number];
  zoom: number;
  districtMarkers: NCESDistrictFeatureAttributes[];
  schoolMarkers : NCESSchoolFeatureAttributes[];
  handleDistrictSelection: (e:any) => void
}

interface DistrictMarkerProps {
  data: NCESDistrictFeatureAttributes[];
  handleDistrictSelection: (e: any) => void;
}

interface SchoolMarkerProps {
  data: NCESSchoolFeatureAttributes[];
}

const customIcon = new Icon({
  iconUrl: locationIcon,
  iconSize: [38, 38],
});

const schoolIcon = new Icon({
  iconUrl: schoolLocationIcon,
  iconSize: [38,38]
})

const DistrictMarkers: React.FC<DistrictMarkerProps> = ({ data, handleDistrictSelection }) => {
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
              handleDistrictSelection(marker.LEAID)
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

const SchoolMarkers: React.FC<SchoolMarkerProps> = ({ data }) => {
  const map = useMap();
  return data.length > 0 ? (
    <>
      {data.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.LAT, marker.LON]}
          icon={schoolIcon}
          eventHandlers={{
            click: () => {
              map.setView([marker.LAT, marker.LON], 14);
            },
          }}
        >
          <Popup>
            <div>
              <p>
                <strong>Name: </strong> {marker.NAME}
              </p>
              <p>
                <strong>Location: </strong> {marker.STREET}, {marker.CITY}, {marker.STATE}, {marker.ZIP}
              </p>
              <p>
                <strong>County: </strong>
                {marker.NMCNTY}
              </p>
              <p>
                <strong>Locale: </strong>
                {marker.LOCALE}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  ) : null;
};


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
