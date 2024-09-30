import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Breadcrumb,
  Modal,
} from "react-bootstrap";

const ProductPage = ({ products, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <Container className="my-5">
        <h1 className="text-center fw-bold">Product not found</h1>
      </Container>
    );
  }

  const handleEdit = () => {
    navigate(`/products/${id}/edit`);
  };

  const handleDelete = () => {
    onDelete(id);
    navigate("/products");
  };

  const handleImageClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="my-5 pt-5">
      <Breadcrumb>
        <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="justify-content-center">
        <Col>
          <Card className="shadow-lg">
            <Card.Img
              variant="top"
              src={product.imageURL}
              alt={product.name}
              className="img-fluid rounded-top"
              style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
              onClick={handleImageClick} // Add onClick event
            />
            <Card.Body>
              <Card.Title className="display-6 mb-3">{product.name}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
              <Card.Text>
                <strong>Quantity:</strong> {product.quantity}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {product.description}
              </Card.Text>
              <Card.Text>
                <strong>Category:</strong> {product.category}
              </Card.Text>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="primary" onClick={handleEdit}>
                  Edit Product
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                  Delete Product
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for displaying larger image */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={product.imageURL}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "80vh", objectFit: "contain" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ProductPage;
