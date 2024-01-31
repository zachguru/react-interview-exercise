import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Spinner,
  InputGroup, // Some Chakra components that might be usefull
  Container,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import {
  searchSchoolDistricts,
  searchSchools,
  NCESDistrictFeatureAttributes,
  NCESSchoolFeatureAttributes,
} from '../utils/nces';
import DistrictMap from './DistrictMap';
import L from 'leaflet';
import { RadioGroupStack } from './design/RadioGroupStack';

const FreshMap: React.FC = () => {
  const [searching, setSearching] = React.useState(false);
  const [district, setDistrict] = useState('');
  const [dataMarkers, setDataMarkers] = useState<NCESDistrictFeatureAttributes[]>([]);
  const [center, setCenter] = useState<[number, number]>([39.8283, -98.5795]);
  const [zoom, setZoom] = useState(4);

  const handleDistrictChange = (event: any) => {
    setDistrict(event.target.value);
  };

  const handleSearch = async () => {
    if(district=='')  return;
    setSearching(true);
    const data = await searchSchoolDistricts(district);
    setDataMarkers(data);
    setSearching(false);
  };

  return (
    <>
      <InputGroup>
        <Input size="md" placeholder="Search for district" value={district} onChange={handleDistrictChange} />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleSearch}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <RadioGroupStack/>
      {searching ? <Spinner width="75vh" height="75vh" /> : <DistrictMap center={center} zoom={zoom} markers={dataMarkers} />}
    </>
  );
};

export default FreshMap;
