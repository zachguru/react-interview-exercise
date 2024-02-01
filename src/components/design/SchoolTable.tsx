import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { NCESDistrictFeatureAttributes } from '@utils/nces';
import React from 'react';

export interface SchoolTableProps {
  data: NCESDistrictFeatureAttributes[];
}

export const SchoolTable: React.FC<SchoolTableProps> = ({ data }) => {
  return (
    <TableContainer margin="10px">
      <Table size="sm" variant="striped" colorScheme="green">
        <TableCaption>Schools and school districts</TableCaption>
        <Thead>
          <Tr>
            <Th>LEAID</Th>
            <Th>NAME</Th>
            <Th>LSTATE</Th>
            <Th>CNTY15</Th>
            <Th>NMCNTY15</Th>
            <Th>CBSA15</Th>
            <Th>NMCBSA15</Th>
            <Th>CD15</Th>
            <Th>SLDL15</Th>
            <Th>SLDU15</Th>
            <Th>LZIP</Th>
            <Th>LZIP4</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((school, index) => (
            <Tr>
              <Td>{school.LEAID}</Td>
              <Td>{school.NAME}</Td>
              <Td>{school.LSTATE}</Td>
              <Td>{school.CNTY15}</Td>
              <Td>{school.NMCNTY15}</Td>
              <Td>{school.CBSA15}</Td>
              <Td>{school.NMCBSA15}</Td>
              <Td>{school.CD15}</Td>
              <Td>{school.SLDL15}</Td>
              <Td>{school.SLDU15}</Td>
              <Td>{school.LZIP}</Td>
              <Td>{school.LZIP4}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>LEAID</Th>
            <Th>NAME</Th>
            <Th>LSTATE</Th>
            <Th>CNTY15</Th>
            <Th>NMCNTY15</Th>
            <Th>CBSA15</Th>
            <Th>NMCBSA15</Th>
            <Th>CD15</Th>
            <Th>SLDL15</Th>
            <Th>SLDU15</Th>
            <Th>LZIP</Th>
            <Th>LZIP4</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
