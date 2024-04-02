import React from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="jackpot m-10">
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
