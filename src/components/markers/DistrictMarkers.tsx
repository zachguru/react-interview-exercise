import React from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { NCESDistrictFeatureAttributes } from '../../utils/nces';
import districtMarkerIcon from '/location.png';


interface DistrictMarkerProps {
  data: NCESDistrictFeatureAttributes[];
  handleDistrictSelection: (e: any) => void;
}

export const DistrictMarkers: React.FC<DistrictMarkerProps> = ({ data, handleDistrictSelection }) => {

  const customIcon = new Icon({
    iconUrl: districtMarkerIcon,
    iconSize: [38, 38],
  });  

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
              handleDistrictSelection(marker.LEAID);
            },
          }}
        >
          <Popup>
            <div>
              <p>
                <strong>Name: </strong> {marker.NAME}
              </p>
              <p>
                <strong>Location: </strong> {marker.LCITY}, {marker.LSTATE}, {marker.LZIP}
              </p>
              <p>
                <strong>County: </strong>
                {marker.NMCNTY15}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  ) : null;
};
