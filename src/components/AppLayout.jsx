// src/components/AppLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
