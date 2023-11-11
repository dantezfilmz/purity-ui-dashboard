// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import StaffTable from "./components/Staff";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Staff() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <StaffTable
        title={"Staff"}
        captions={["Name", "Phone", "Status", "Due Date", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Add New Staff"}
      />
    </Flex>
  );
}

export default Staff;
