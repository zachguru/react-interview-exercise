import {
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  HStack,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NCESSchoolFeatureAttributes } from "@utils/nces";
import { NCESDistrictFeatureAttributes } from "@utils/nces";

// Interface for pagination component. It contains table rows and page selection footer
// Right now pagination can only display schools and districts, but if you add a new interface and use a different API with different fields
// you can make this component work with every NCES type of data.
interface PaginationProps {
  data: (NCESSchoolFeatureAttributes | NCESDistrictFeatureAttributes)[];
  type: string; // Used to distinguish if the data provided is for school or for district
}

// Component used to display tabular data. It displays 10 rows per page
export const PaginatedData: React.FC<PaginationProps> = ({ data, type }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(data.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Tbody>
        {data.length > 0 ? (
          type === "school" ? (
            currentData.map((school, index) => (
              <Tr key={index}>
                <Td>{(school as NCESSchoolFeatureAttributes).NAME}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).LEAID}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).STREET}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).CITY}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).STATE}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).ZIP}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).NCESSCH}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).OPSTFIPS}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).STFIP}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).NMCNTY}</Td>
                <Td>{(school as NCESSchoolFeatureAttributes).LOCALE}</Td>
              </Tr>
            ))
          ) : (
            currentData.map((school, index) => (
              <Tr key={index}>
                <Td>{(school as NCESDistrictFeatureAttributes).LEAID}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).NAME}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).LSTATE}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).CNTY15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).NMCNTY15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).CBSA15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).NMCBSA15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).CD15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).SLDL15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).SLDU15}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).LZIP}</Td>
                <Td>{(school as NCESDistrictFeatureAttributes).LZIP4}</Td>
              </Tr>
            ))
          )
        ) : (
          <Tr>
            <Td colSpan={12} style={{ textAlign: "center" }}>
              No data
            </Td>
          </Tr>
        )}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th colSpan={12}>
            <HStack spacing={4} justify="center">
              <Button
                size="sm"
                hidden={currentPage == 1 || data.length == 0}
                onClick={() => handlePageChange(currentPage - 1)}
                _hover={{ backgroundColor: "#2AB8FF" }}
                color="white"
                backgroundColor="blue.400"
              >
                {"Prev"}
              </Button>
              <Box hidden={data.length == 0}>{currentPage}</Box>
              <Button
                size="sm"
                hidden={currentPage == totalPages || data.length == 0}
                onClick={() => handlePageChange(currentPage + 1)}
                _hover={{ backgroundColor: "#2AB8FF" }}
                color="white"
                backgroundColor="blue.400"
              >
                {"Next"}
              </Button>
            </HStack>
          </Th>
        </Tr>
      </Tfoot>
    </>
  );
};
