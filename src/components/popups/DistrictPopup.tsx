import { Text } from '@chakra-ui/layout';
import { NCESDistrictFeatureAttributes } from '@utils/nces';
import React from 'react';
import { Popup } from 'react-leaflet';

// District Popup component. Opens when you click on a district marker
export const DistrictPopup: React.FC<{ district: NCESDistrictFeatureAttributes }> = ({ district }) => {
  return (
    <Popup>
      <>
        <Text>
          <strong>Name: </strong> {district.NAME}
        </Text>
        <Text>
          <strong>Location: </strong> {district.LCITY}, {district.LSTATE}, {district.LZIP}
        </Text>
        <Text>
          <strong>County: </strong>
          {district.NMCNTY15}
        </Text>
      </>
    </Popup>
  );
};
