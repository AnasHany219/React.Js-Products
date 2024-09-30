import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
