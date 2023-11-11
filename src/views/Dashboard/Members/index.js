// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import MembersTable from "./components/Members";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Members() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <MembersTable
        title={"Subscribers"}
        captions={["Name", "Phone", "Status", "Due Date", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Add New Subscriber"}
      />
    </Flex>
  );
}

export default Members;
