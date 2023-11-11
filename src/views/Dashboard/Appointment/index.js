// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import AppointmentTable from "./components/Appointment";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";

function Appointment() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <AppointmentTable
        title={"Appointment"}
        captions={["Name", "Phone", "Status", "Due Date", ""]}
        data={tablesTableData}
      />
      <Projects
        title={"Add New Appointment"}
      />
    </Flex>
  );
}

export default Appointment;
