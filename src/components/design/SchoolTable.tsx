import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { NCESDistrictFeatureAttributes } from '@utils/nces';
import React from 'react';

export interface SchoolTableProps {
  data: NCESDistrictFeatureAttributes[];
}

export const SchoolTable: React.FC<SchoolTableProps> = ({ data }) => {
  return (
    <TableContainer margin="10px">
      <Table variant="striped" colorScheme="green">
        <TableCaption>Schools and school districts</TableCaption>
        <Thead>
          <Tr>
            <Th>CBSA 15</Th>
            <Th>CBSA TYPE 15</Th>
            <Th>CD15</Th>
            <Th>CNTY15</Th>
            <Th>CSA15</Th>
            <Th>LAT1516</Th>
            <Th>LCITY</Th>
            <Th>LEAID</Th>
            <Th>LON1516</Th>
            <Th>LSTREET</Th>
            <Th>LZIP</Th>
            <Th>LZIP4</Th>
            <Th>NAME</Th>
            <Th>NECTA15</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((school, index) => (
            <Tr>
              <Td>{school.CBSA15}</Td>
              <Td>{school.CBSATYPE15}</Td>
              <Td>{school.CD15}</Td>
              <Td>{school.CNTY15}</Td>
              <Td>{school.CSA15}</Td>
              <Td>{school.LAT1516}</Td>
              <Td>{school.LCITY}</Td>
              <Td>{school.LEAID}</Td>
              <Td>{school.LON1516}</Td>
              <Td>{school.LSTREE}</Td>
              <Td>{school.LZIP}</Td>
              <Td>{school.LZIP4}</Td>
              <Td>{school.NAME}</Td>
              <Td>{school.NECTA15}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>CBSA 15</Th>
            <Th>CBSA TYPE 15</Th>
            <Th>CD15</Th>
            <Th>CNTY15</Th>
            <Th>CSA15</Th>
            <Th>LAT1516</Th>
            <Th>LCITY</Th>
            <Th>LEAID</Th>
            <Th>LON1516</Th>
            <Th>LSTREET</Th>
            <Th>LZIP</Th>
            <Th>LZIP4</Th>
            <Th>NAME</Th>
            <Th>NECTA15</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
