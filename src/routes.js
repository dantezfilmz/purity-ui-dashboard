// import
import Dashboard from "views/Dashboard/Dashboard";
import Inventory from "views/Dashboard/Inventory";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";

import {
  HomeIcon,
  ProfileIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";
import { ClockIcon } from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },

  {
    path: "/inventory",
    name: "Inventory",
    icon: <DocumentIcon color="inherit" />,
    component: Inventory,
    layout: "/admin",
  },
  {
    name: "Team",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/tables",
        name: "Members",
        icon: <PersonIcon color="inherit" />,
        component: Tables,
        layout: "/admin",
      },
      {
        path: "/rtl-support-page",
        name: "Staff",
        icon: <ProfileIcon color="inherit" />,
        component: RTLPage,
        layout: "/admin",
      },
      {
        path: "/signup",
        name: "Appointments",
        icon: <ClockIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
  {
    name: "Account",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Reports",
        icon: <StatsIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
