// Chakra imports
import {
    Flex,
    Grid,
    Image,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData, EquipmentTableData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Equipment from "./components/Equipment";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Inventory() {
    const iconBoxInside = useColorModeValue("white", "white");

    return (
        <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing='24px'>
                <MiniStatistics
                    title={"Total Equipment"}
                    amount={"$53,000"}
                    percentage={55}
                    icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
                />
                <MiniStatistics
                    title={"Active"}
                    amount={"2,300"}
                    percentage={5}
                    icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
                />
                <MiniStatistics
                    title={"Repair"}
                    amount={"+3,020"}
                    percentage={-14}
                    icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
                />
            </SimpleGrid>
            <Grid
                templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
                templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
                gap='24px'
                mb={{ lg: "26px" }}>
                <ActiveUsers
                    title={"Active Hours"}
                    percentage={23}
                    chart={<BarChart />}
                />
                <SalesOverview
                    title={"Income Overview"}
                    percentage={5}
                    chart={<LineChart />}
                />
            </Grid>
            <Equipment
                title={"Equipment"}
                captions={["Item", "Description", "Condition", "Amenities", "Hours"]}
                data={EquipmentTableData}
            />
        </Flex>
    );
}
