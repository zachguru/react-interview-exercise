import { Text } from '@chakra-ui/layout';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import React from 'react';
import { Popup } from 'react-leaflet';

// School Popup component. Opens when you click on a school marker
export const SchoolPopup: React.FC<{ school: NCESSchoolFeatureAttributes }> = ({ school }) => {
  return (
    <Popup>
      <>
        <Text>
          <strong>Name: </strong> {school.NAME}
        </Text>
        <Text>
          <strong>Location: </strong> {school.STREET}, {school.CITY}, {school.STATE}, {school.ZIP}
        </Text>
        <Text>
          <strong>County: </strong>
          {school.NMCNTY}
        </Text>
      </>
    </Popup>
  );
};
