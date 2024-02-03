import React from 'react';
import { Popup } from 'react-leaflet';

interface DistrictPopupProps {
  district: {
    NAME?: string;
    LCITY?: string;
    LSTATE?: string;
    LZIP?: string;
    NMCNTY15?: string;
  };
}

export const DistrictPopup: React.FC<DistrictPopupProps> = ({ district }) => {
  return (
    <Popup>
      <div>
        <p>
          <strong>Name: </strong> {district.NAME}
        </p>
        <p>
          <strong>Location: </strong> {district.LCITY}, {district.LSTATE}, {district.LZIP}
        </p>
        <p>
          <strong>County: </strong>
          {district.NMCNTY15}
        </p>
      </div>
    </Popup>
  );
};
