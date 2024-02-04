import React from 'react';
import {
  Center,
  Heading,
  ScaleFade,
  Box,
} from '@chakra-ui/react';
import { Card } from '@components/design/Card';
import AcademicExplorer from './AcademicExplorer'


const Home: React.FC = () => {

  return (
    <>
      <Center height='105vh'>
        <ScaleFade initialScale={0.9} in={true}>
          <Card variant="rounded" borderColor="blue">
            <Heading>School Data Finder</Heading>
            <AcademicExplorer />
            <Box marginTop={4} />
          </Card>
        </ScaleFade>
      </Center>
    </>
  );
};

export default Home;
