import React from 'react';
import { Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { NCESDistrictFeatureAttributes } from '../../utils/nces';
import districtMarkerIcon from '/location.png';
import { DistrictPopup } from '@components/popups/DistrictPopup';

interface DistrictMarkerProps {
  data: NCESDistrictFeatureAttributes[]; // Data to be used for denotation of district locations
  handleDistrictSelection: (e: any) => void; // Function which handles marker selection
}

// District markers appear on Map View when searching for district
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
              map.setView([marker.LAT1516, marker.LON1516], 15);
              handleDistrictSelection(marker.LEAID);
            },
          }}
        >
          <DistrictPopup district={marker} />
        </Marker>
      ))}
    </>
  ) : null;
};
