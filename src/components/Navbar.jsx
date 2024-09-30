import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import { useAuth } from "../context/AuthContext";

const AppNavbar = () => {
  const { logout } = useAuth();
  const username = localStorage.getItem("username");
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
      expand="lg"
      className="px-4 position-fixed w-100 top-0 z-2 shadow"
    >
      <Navbar.Brand href="/">Products</Navbar.Brand>

      {/* Navbar toggler for mobile view */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Collapsible content for responsive view */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            href="/home"
            className={
              pathname === "/home" ? "text-light fw-bold" : "text-secondary"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/products"
            className={
              pathname === "/products" ? "text-light fw-bold" : "text-secondary"
            }
          >
            Products
          </Nav.Link>
          <Nav.Link
            href="/add-product"
            className={
              pathname === "/add-product"
                ? "text-light fw-bold"
                : "text-secondary"
            }
          >
            Add Product
          </Nav.Link>
        </Nav>

        <Navbar.Text className="me-3 text-light">
          Signed in as: <strong>{username || "Guest"}</strong>
        </Navbar.Text>

        <Button variant="outline-light" className="px-4" onClick={handleLogout}>
          <HiArrowRightOnRectangle /> Logout
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
