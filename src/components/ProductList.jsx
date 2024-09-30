import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HiPlus } from "react-icons/hi2";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductList = ({ products, onDelete }) => {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <>
      <Row className="align-items-center my-4 pt-5">
        <Col>
          <h2 className="mb-0">Products</h2>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/add-product">
            <HiPlus />
            Add New Product
          </Button>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4 mb-5">
        {visibleProducts.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 product-card">
              <Card.Img
                variant="top"
                src={product.imageURL || "https://via.placeholder.com/150"}
                alt={product.name}
                className="product-image"
              />

              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <strong>{product.name}</strong>
                  <p>${product.price}</p>
                </Card.Title>
                <div className="d-flex justify-content-between">
                  <Link to={`/products/${product.id}`}>
                    <Button variant="primary" className="me-2">
                      <FaEye /> View
                    </Button>
                  </Link>
                  <Link to={`/products/${product.id}/edit`}>
                    <Button variant="warning" className="me-2">
                      <FaEdit /> Edit
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => onDelete(product.id)}>
                    <FaTrash /> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visibleCount < products.length && (
        <div className="text-center my-4">
          <Button variant="secondary" className="px-5" onClick={handleShowMore}>
            Show More
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductList;
