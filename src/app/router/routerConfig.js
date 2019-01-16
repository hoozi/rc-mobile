import React from "react";
import Loadable from "react-loadable";
import ScreenLoading from "@/components/ScreenLoading";

const LoadingComponent = (path) => {
  return Loadable({
    loader: () => import(`@/screens/${path}`),
    loading: () => <ScreenLoading/>
  });
}

// pages
const Login = LoadingComponent("User/Login");
const Test = LoadingComponent("Test");

const authorizedRoutes = [
  {
    path: "/test",
    exact: true,
    //unauthorized: Exception403,
    component: Test
  }
]

const normalRoutes = [
  {
    path: "/user/login",
    exact: true,
    component: Login
  }
];


const combineRoutes = [
  ...authorizedRoutes,
  ...normalRoutes
];

export {
  authorizedRoutes,
  normalRoutes,
  combineRoutes
}