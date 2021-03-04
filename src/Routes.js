import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";
import Login from "@/pages/Login/Login";
import ErrorPage from "@/pages/Error/Error";
import Projects from "@/pages/Projects/ProjectManagement/Projects";
import Tasks from "@/pages/Projects/Tasks/Tasks";
// import Reports from "@/pages/Projects/Reports/Reports";
import UserManagement from "@/pages/UserManagement/UserManagement";
import Users from "@/pages/UserManagement/Users/Users";
import Roles from "@/pages/UserManagement/Roles/Roles";
import CreateUser from "@/pages/UserManagement/Users/CreateUser/CreateUser";
import CreateRole from "@/pages/UserManagement/Roles/CreateRole/CreateRole";
// Core
import TypographyPage from "@/pages/Typography/Typography";

// Tables
import TablesBasicPage from "@/pages/Tables/Basic";

// Maps
import GoogleMapPage from "@/pages/Maps/Google";

// Main
import AnalyticsPage from "@/pages/Dashboard/Dashboard";

// Charts
import ChartsPage from "@/pages/Charts/Charts";

// Ui
import IconsPage from "@/pages/Icons/Icons";
import NotificationsPage from "@/pages/Notifications/Notifications";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
    {
      path: "/app",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "AnalyticsPage",
          component: AnalyticsPage,
        },
        {
          path: "projects/project-management",
          name: "Projects",
          component: Projects,
        },
        {
          path: "projects/tasks",
          name: "Tasks",
          component: Tasks,
        },
        // {
        //   path: "projects/reports",
        //   name: "Reports",
        //   component: Reports,
        // },
        {
          path: "usermanagement",
          name: "UserManagement",
          component: UserManagement,
        },
        {
          path: "usermanagement/users",
          name: "Users",
          component: Users,
        },
        {
          path: "usermanagement/roles",
          name: "Roles",
          component: Roles,
        },
        {
          path: "usermanagement/users/createuser",
          name: "CreateUser",
          component: CreateUser,
        },
        {
          path: "usermanagement/roles/createrole",
          name: "CreateRole",
          component: CreateRole,
        },
        {
          path: "typography",
          name: "TypographyPage",
          component: TypographyPage,
        },
        {
          path: "components/icons",
          name: "IconsPage",
          component: IconsPage,
        },
        {
          path: "notifications",
          name: "NotificationsPage",
          component: NotificationsPage,
        },
        {
          path: "components/charts",
          name: "ChartsPage",
          component: ChartsPage,
        },
        {
          path: "tables",
          name: "TablesBasicPage",
          component: TablesBasicPage,
        },
        {
          path: "components/maps",
          name: "GoogleMapPage",
          component: GoogleMapPage,
        },
      ],
    },
  ],
});
