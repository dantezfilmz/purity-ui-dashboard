// import
import Dashboard from "views/Dashboard/Dashboard";
import Inventory from "views/Dashboard/Inventory";
import Members from "views/Dashboard/Members";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import Staff from "views/Dashboard/Staff";
import Appointment from "views/Dashboard/Appointment";

import {
  HomeIcon,
  ProfileIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  ClockIcon,
  SupportIcon,
} from "components/Icons/Icons";


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
        path: "/members",
        name: "Members",
        icon: <PersonIcon color="inherit" />,
        component: Members,
        layout: "/admin",
      },
      {
        path: "/staff",
        name: "Staff",
        icon: <ProfileIcon color="inherit" />,
        component: Staff,
        layout: "/admin",
      },
      {
        path: "/appointment",
        name: "Appointments",
        icon: <ClockIcon color="inherit" />,
        secondaryNavbar: true,
        component: Appointment,
        layout: "/admin",
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
