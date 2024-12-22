import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="app-layout">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
