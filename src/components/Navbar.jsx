import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

const AppNavbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="px-5 position-fixed w-100 top-0 z-2"
    >
      <Navbar.Brand href="/">Products</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link
          href="/products"
          className={pathname === "/products" ? "text-light fw-bold" : ""}
        >
          Home
        </Nav.Link>
        <Nav.Link
          href="/add-product"
          className={pathname === "/add-product" ? "text-light fw-bold" : ""}
        >
          Add Product
        </Nav.Link>
      </Nav>
      <Button variant="outline-light" className="px-5" onClick={handleLogout}>
        <HiArrowRightOnRectangle /> logout
      </Button>
    </Navbar>
  );
};

export default AppNavbar;
