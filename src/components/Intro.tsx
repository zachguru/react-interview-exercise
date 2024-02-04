import React, { useEffect, useState } from 'react';
import {
  Center,
  Heading,
  Text,
  ScaleFade,
  OrderedList,
  Divider,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { Card } from '@components/design/Card';
import {
  searchSchoolDistricts,
  searchSchools,
  NCESDistrictFeatureAttributes,
  NCESSchoolFeatureAttributes,
} from '@utils/nces';


// Intro is a not used component. It displays initial project state. Saving it for personal sentimental value
const Intro: React.FC = () => {
  const [searching, setSearching] = React.useState(false);
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

  useEffect(() => {
    demo();
  }, []);

  return (
    <>
      <Center height='105vh'>
        <ScaleFade initialScale={0.9} in={true}>
          <Card variant="rounded" borderColor="blue">
            <Heading>School Data Finder</Heading>
            <Text>
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
            <br />
          </Card>
        </ScaleFade>
      </Center>
    </>
  );
};

export default Intro
