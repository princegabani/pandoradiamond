

// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import DevelopmentTable from "views/admin/deals/components/DevelopmentTable";
import CheckTable from "views/admin/deals/components/CheckTable";
import ColumnsTable from "views/admin/deals/components/ColumnsTable";
import ComplexTable from "views/admin/deals/components/ComplexTable";
import {
  columnsDataDevelopment,
  columnsDataCheck,
  columnsDataColumns,
  columnsDataComplex,
} from "views/admin/deals/variables/columnsData";
import tableDataDevelopment from "views/admin/deals/variables/tableDataDevelopment.json";
import tableDataCheck from "views/admin/deals/variables/tableDataCheck.json";
import tableDataColumns from "views/admin/deals/variables/tableDataColumns.json";
import tableDataComplex from "views/admin/deals/variables/tableDataComplex.json";
import React from "react";
import RequestTable from "./components/RequestTable";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb='20px'
        columns={{ sm: 1, md: 2 }}
        spacing={{ base: "20px", xl: "20px" }}>
          <RequestTable 
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}/>
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <ColumnsTable
          columnsData={columnsDataColumns}
          tableData={tableDataColumns}
        />
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
