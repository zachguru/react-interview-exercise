import React, { useEffect, useState } from 'react';
import {
  Button,
  Input,
  Spinner,
  InputGroup, // Some Chakra components that might be usefull
  Container,
  InputRightElement,
  Text,
  IconButton,
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
import { SearchIcon } from '@chakra-ui/icons';

const FreshMap: React.FC = () => {
  const [searching, setSearching] = React.useState(false);
  const [district, setDistrict] = useState('');
  const [dataMarkers, setDataMarkers] = useState<NCESDistrictFeatureAttributes[]>([]);
  const [center, setCenter] = useState<[number, number]>([39.8283, -98.5795]);
  const [zoom, setZoom] = useState(4);
  const [selectedView, setSelectedView] = useState('Map View')

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

  const handleViewSelection = (e:any) => {
    setSelectedView(e);
  }

  return (
    <>
      <InputGroup>
        <Input size="md" placeholder="Search for district" value={district} onChange={handleDistrictChange} />
        <InputRightElement>
            <IconButton color='green.600' variant='ghost' rounded='false' aria-label='Search school district' icon={<SearchIcon/>} onClick={handleSearch}/>
        </InputRightElement>
      </InputGroup>
      <RadioGroupStack handleSwitch={handleViewSelection}/>
      {searching ? <Spinner width="75vh" height='75vh' thickness='10px' color='green.400' /> : <DistrictMap center={center} zoom={zoom} markers={dataMarkers} />}
    </>
  );
};

export default FreshMap;
