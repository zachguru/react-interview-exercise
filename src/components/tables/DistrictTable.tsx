import {
  Table,
  Thead,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { PaginatedData } from "@components/design/PaginationData";
import { NCESDistrictFeatureAttributes } from "@utils/nces";
import React from "react";

export interface DistrictTableProps {
  data: NCESDistrictFeatureAttributes[]; // District data to be displayed
}

// Table filled with district data, displays on Table View -> View Districts
// Due to difference in table headers, had to make separate tables for schools and distrcts
export const DistrictTable: React.FC<DistrictTableProps> = ({ data }) => {
  return (
    <>
      <TableContainer margin="10px">
        <Table className="responsive-table" size="sm" variant="striped" colorScheme="green">
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
          <PaginatedData data={data} type="district" />
        </Table>
      </TableContainer>
    </>
  );
};
