import React from "react";

import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

import products from "../data/productsData";

function Home() {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="mt-5 pt-5">
      {/* Welcome Section */}
      <Container className="my-5 text-center">
        <h1>Welcome to Our Product Store!</h1>
        <p className="lead">
          Explore a wide variety of products tailored just for you.
        </p>
      </Container>

      {/* Product Image Slider */}
      <Carousel>
        {products.map((product) => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100 rounded-4"
              src={product.imageURL}
              alt={product.name}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Link to={`/products/${product.id}`}>
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Category Section */}
      <Container className="my-5">
        <h2 className="mb-4">Categories</h2>
        <Row xs={1} md={2} lg={3}>
          {categories.map((category) => (
            <Col key={category} className="mb-4">
              <Card className="category-card shadow border-0 hover-card">
                <Card.Body>
                  <Card.Title className="text-center">{category}</Card.Title>
                  <Card.Text className="text-center">
                    Discover products in the <strong>{category}</strong>{" "}
                    category.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
