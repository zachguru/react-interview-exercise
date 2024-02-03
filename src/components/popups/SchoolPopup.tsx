import React from 'react';
import { Popup } from 'react-leaflet';

interface SchoolPopupProps {
  school: {
    NAME?: string;
    STREET?: string;
    CITY?: string;
    STATE?: string;
    ZIP?: string;
    NMCNTY?: string;
    LOCALE?: string;
  };
}

export const SchoolPopup: React.FC<SchoolPopupProps> = ({ school }) => {
  return (
    <Popup>
      <div>
        <p>
          <strong>Name: </strong> {school.NAME}
        </p>
        <p>
          <strong>Location: </strong> {school.STREET}, {school.CITY}, {school.STATE}, {school.ZIP}
        </p>
        <p>
          <strong>County: </strong>
          {school.NMCNTY}
        </p>
        <p>
          <strong>Locale: </strong>
          {school.LOCALE}
        </p>
      </div>
    </Popup>
  );
};
