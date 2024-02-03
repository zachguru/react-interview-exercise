import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { NCESSchoolFeatureAttributes } from '@utils/nces';
import React, { useState } from 'react';

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
          <Tbody>
            {data.length > 0 ? (
              data.map((school, index) => (
                <Tr>
                  <Td>{school.NAME}</Td>
                  <Td>{school.LEAID}</Td>
                  <Td>{school.STREET}</Td>
                  <Td>{school.CITY}</Td>
                  <Td>{school.STATE}</Td>
                  <Td>{school.ZIP}</Td>
                  <Td>{school.NCESSCH}</Td>
                  <Td>{school.OPSTFIPS}</Td>
                  <Td>{school.STFIP}</Td>
                  <Td>{school.NMCNTY}</Td>
                  <Td>{school.LOCALE}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={12} style={{ textAlign: 'center' }}>
                  No data
                </Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot>
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
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
