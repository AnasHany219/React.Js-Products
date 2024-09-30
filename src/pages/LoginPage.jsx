import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const [username, setUsername] = useState("Anas");
  const [password, setPassword] = useState("123456789");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    if (username === "Anas" && password === "123456789") {
      login(username);
      navigate("/products");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-center w-100">
        <Col>
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}{" "}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Username</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  <strong>Password</strong>
                </Form.Label>
                <Form.Control
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button type="submit" className="px-5 w-100" variant="primary">
                  <strong>Login</strong>
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
