import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";

function Home({ products, categories }) {
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
      <Carousel interval={2000}>
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

      {/* Featured Products Section */}
      <Container className="my-5">
        <h2 className="mb-4">Featured Products</h2>
        <Row xs={1} md={2} lg={3}>
          {products.slice(0, 3).map((product) => (
            <Col key={product.id} className="mb-4">
              <Card className="shadow border-0 product-card">
                <Card.Img
                  variant="top"
                  src={product.imageURL || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="product-image"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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

      <Container className="my-5 text-center">
        <h2 className="mb-4">What Our Customers Say</h2>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card className="testimonial-card shadow border-0">
              <Card.Body>
                <Card.Text>
                  "Great quality products! Highly recommend."
                </Card.Text>
                <Card.Footer className="text-muted">- Jane Doe</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="testimonial-card shadow border-0">
              <Card.Body>
                <Card.Text>
                  "Amazing customer service and fast shipping!"
                </Card.Text>
                <Card.Footer className="text-muted">- John Smith</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="testimonial-card shadow border-0">
              <Card.Body>
                <Card.Text>"I'm very satisfied with my purchase!"</Card.Text>
                <Card.Footer className="text-muted">
                  - Emily Johnson
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
