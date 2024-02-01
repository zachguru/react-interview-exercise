import React, { useEffect, useState } from 'react';
import {
  Button,
  Center,
  Heading,
  Text,
  Icon,
  Input,
  ScaleFade,
  OrderedList,
  Divider,
  ListItem,
  Spinner,
  InputGroup, // Some Chakra components that might be usefull
  HStack,
  VStack,
  InputRightAddon,
  Container,
  InputRightElement,
  Box,
} from '@chakra-ui/react';
import { Card } from '@components/design/Card';
import {
  searchSchoolDistricts,
  searchSchools,
  NCESDistrictFeatureAttributes,
  NCESSchoolFeatureAttributes,
} from '@utils/nces';
import DistrictMap from './DistrictMap';
import FreshMap from './FreshMap'
import L from 'leaflet';

interface Marker {
  geocode: [number, number];
  popUp: string;
}

const Home: React.FC = () => {
  const [searching, setSearching] = React.useState(false);
  const [district, setDistrict] = useState('');
  const [dataMarkers, setDataMarkers] = useState<NCESDistrictFeatureAttributes[]>([]);
  const [center, setCenter] = useState<[number, number]>([39.8283, -98.5795]);
  const [zoom, setZoom] = useState(4);
  const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
  const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);

  const demo = async () => {
    // see console for api result examples
    setSearching(true);
    const demoDistrictSearch = await searchSchoolDistricts('Peninsula School District');
    setDistrictSearch(demoDistrictSearch);
    console.log('District example', demoDistrictSearch);

    const demoSchoolSearch = await searchSchools('k', demoDistrictSearch[1].LEAID);
    setSchoolSearch(demoSchoolSearch);
    console.log('School Example', demoSchoolSearch);
    setSearching(false);
  };

  const handleDistrictChange = (event: any) => {
    setDistrict(event.target.value);
  };

  const handleSearch = async () => {
    const data = await searchSchoolDistricts(district);
    setDataMarkers(data);
  };

  useEffect(() => {
    demo();
  }, []);

  return (
    <>
      <Center padding="100px" height="90vh">
        <ScaleFade initialScale={0.9} in={true}>
          <Card variant="rounded" borderColor="blue">
            <Heading>School Data Finder</Heading>
            {/* <Text>
              How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? <br />
              Using{' '}
              <a href="https://chakra-ui.com/docs/principles" target="_blank">
                Chakra-UI
              </a>{' '}
              or your favorite UI toolkit, build an interface that allows the user to: <br />
            </Text>
            <OrderedList>
              <ListItem>Search for a district</ListItem>
              <ListItem>Search for a school within the district (or bypass district filter)</ListItem>
              <ListItem>View all returned data in an organized way</ListItem>
            </OrderedList>
            <Divider margin={4} />
            <Text>
              Check the console for example of returned data. <b>Happy coding!</b>
              <br />
            </Text>
            {searching ? <Spinner /> : <></>}
            <br />
            {districtSearch.length} Demo Districts
            <br />
            {schoolSearch.length} Demo Schools
            <br /> */}
            <FreshMap />
            <Box marginTop={4} />
          </Card>
        </ScaleFade>
      </Center>
    </>
  );
};

export default Home;
