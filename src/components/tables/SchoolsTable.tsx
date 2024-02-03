import { Table, Thead, Tr, Th, TableCaption, TableContainer } from '@chakra-ui/react';
import { PaginatedData } from '@components/design/PaginationData';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import React from 'react';

export interface SchoolTableProps {
  data: NCESSchoolFeatureAttributes[];
}

export const SchoolsTable: React.FC<SchoolTableProps> = ({ data }) => {
  return (
    <>
      <TableContainer margin="10px">
        <Table size="sm" variant="striped" colorScheme="green">
          <TableCaption>Schools and school districts</TableCaption>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>LEAID</Th>
              <Th>STREET</Th>
              <Th>CITY</Th>
              <Th>STATE</Th>
              <Th>ZIP</Th>
              <Th>NCESSCH</Th>
              <Th>OPSTFIPS</Th>
              <Th>STFIP</Th>
              <Th>NMCNTY</Th>
              <Th>LOCALE</Th>
            </Tr>
          </Thead>
          <PaginatedData data={data} type='school'/>
        </Table>
      </TableContainer>
    </>
  );
};
