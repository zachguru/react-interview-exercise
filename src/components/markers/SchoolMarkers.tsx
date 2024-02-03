import React from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import  { Icon } from 'leaflet';
import schoolMarkerIcon from '/schoolicon.png';
import { NCESSchoolFeatureAttributes } from '@utils/nces';


interface SchoolMarkerProps {
  data: NCESSchoolFeatureAttributes[];
}

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
