import {
  Table,
  Thead,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { PaginatedData } from "@components/design/PaginationData";
import { NCESSchoolFeatureAttributes } from "@utils/nces";
import React from "react";

export interface SchoolTableProps {
  data: NCESSchoolFeatureAttributes[]; // School data to be displayed
}

// Table filled with school data. Displays when Table View -> View Schools
// Due to difference in table headers, had to make separate tables for schools and distrcts
export const SchoolsTable: React.FC<SchoolTableProps> = ({ data }) => {
  return (
    <>
      <TableContainer margin="10px">
        <Table className="responsive-table" size="sm" variant="striped" colorScheme="green">
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
          <PaginatedData data={data} type="school" />
        </Table>
      </TableContainer>
    </>
  );
};
