import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import Footer from "../Pages/Home/Footer/Footer";

const HomeLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayouts;
