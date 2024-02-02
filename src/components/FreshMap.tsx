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
  Tooltip,
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
import { SchoolTable } from './design/SchoolTable';
import { CENTEROFAMERICA } from 'src/constants/centerOfAmerica';

const FreshMap: React.FC = () => {
  const [searching, setSearching] = React.useState(false);
  const [district, setDistrict] = useState('');
  const [districtDataMarkers, setDistrictDataMarkers] = useState<NCESDistrictFeatureAttributes[]>([]);
  const [schoolDataMarkers, setSchoolDataMarkers] = useState<NCESSchoolFeatureAttributes[]>([]);
  const [center, setCenter] = useState<[number, number]>(CENTEROFAMERICA);
  const [zoom, setZoom] = useState(3);
  const [selectedView, setSelectedView] = useState('Map View');
  const [leaid, setLeaid] = useState('')
  const [school, setSchool] = useState('')

  const radioOptions = ['Map View', 'Table View'];

  const handleDistrictChange = (event: any) => {
    setDistrict(event.target.value);
  };

  const handleSchoolChange = (event: any) => {
    setSchool(event.target.value);
  }

  const handleLeaidChange = (event: any) => {
    setLeaid(event.target.value);
  }

  const handleDistrictSearch = async () => {
    if (district == '') return;
    setSearching(true);
    const data = await searchSchoolDistricts(district);
    setDistrictDataMarkers(data);
    setSearching(false);
  };

   const handleSchoolSearch = async () => {
     if (school == '') return;
     setSearching(true);
     const data = await searchSchools(school, leaid);
     setSchoolDataMarkers(data);
     setSearching(false);
     console.log(schoolDataMarkers);
   };

  const handleViewSelection = (e: any) => {
    setSelectedView(e);
  };

  const handleDistrictSelection = (e:any) => {
    setLeaid(e);
    console.log(leaid);
  }

  return (
    <>
      <InputGroup width="400px">
        <Input size="md" placeholder="Search for a district" value={district} onChange={handleDistrictChange} />
        <InputRightElement>
          <IconButton
            color="green.600"
            variant="ghost"
            rounded="false"
            aria-label="Search school district"
            icon={<SearchIcon />}
            onClick={handleDistrictSearch}
          />
        </InputRightElement>
      </InputGroup>
      <InputGroup width="400px">
        <Tooltip
          label="Optional: LEAID is educational institution identifier. It is required to search for schools within a district. Search for a district and then click on a marker. It will fill this field."
          fontSize="md"
        >
          <Input width="1/2" size="md" placeholder="LEAID" value={leaid} onChange={handleLeaidChange}/>
        </Tooltip>
        <Input size="md" placeholder="Search for a school" value={school} onChange={handleSchoolChange} />
        <InputRightElement>
          <IconButton
            color="green.600"
            variant="ghost"
            rounded="false"
            aria-label="Search for school"
            icon={<SearchIcon />}
            onClick={handleSchoolSearch}
          />
        </InputRightElement>
      </InputGroup>
      <RadioGroupStack handleSwitch={handleViewSelection} options={radioOptions} defaultValue='Map View' name='view'/>
      {searching ? (
        <Spinner width="75vh" height="75vh" thickness="10px" color="green.400" />
      ) : selectedView == 'Map View' ? (
        <DistrictMap center={center} zoom={zoom} districtMarkers={districtDataMarkers} schoolMarkers={schoolDataMarkers} handleDistrictSelection={handleDistrictSelection} />
      ) : (
        <SchoolTable data={districtDataMarkers} />
      )}
    </>
  );
};

export default FreshMap;
