import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="text-center">
        <Col>
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="mb-4">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button as={Link} to="/" variant="primary" className="px-4 w-100">
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
