import React from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import schoolMarkerIcon from '/schoolicon.png';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import { SchoolPopup } from '@components/popups/SchoolPopup';

interface SchoolMarkerProps {
  data: NCESSchoolFeatureAttributes[]; // Data to be used for denotation of school locations
}

// School markers appear on a Map View when searching for schools
export const SchoolMarkers: React.FC<SchoolMarkerProps> = ({ data }) => {
  const schoolIcon = new Icon({
    iconUrl: schoolMarkerIcon,
    iconSize: [38, 38],
  });

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
              map.setView([marker.LAT, marker.LON], 15);
            },
          }}
        >
          <SchoolPopup school={marker} />
        </Marker>
      ))}
    </>
  ) : null;
};
