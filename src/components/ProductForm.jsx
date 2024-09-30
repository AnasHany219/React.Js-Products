import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ProductForm = ({ product = {}, onSave }) => {
  // Initial values for form fields
  const initialValues = {
    name: product.name || "",
    price: product.price || "",
    quantity: product.quantity || "",
    description: product.description || "",
    category: product.category || "",
    imageURL: product.imageURL || "",
  };

  // State hooks for each form field
  const [name, setName] = useState(initialValues.name);
  const [price, setPrice] = useState(initialValues.price);
  const [quantity, setQuantity] = useState(initialValues.quantity);
  const [description, setDescription] = useState(initialValues.description);
  const [category, setCategory] = useState(initialValues.category);
  const [imageURL, setImageURL] = useState(initialValues.imageURL);

  // Submit handler to pass the form data to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, price, quantity, description, category, imageURL });
  };

  // Reset handler to reset form fields to initial values
  const handleReset = () => {
    setName(initialValues.name);
    setPrice(initialValues.price);
    setQuantity(initialValues.quantity);
    setDescription(initialValues.description);
    setCategory(initialValues.category);
    setImageURL(initialValues.imageURL);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col>
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="text-center mb-4">
              {product.id ? "Edit Product" : "Add New Product"}
            </h2>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    <strong>Price</strong>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    <strong>Quantity</strong>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} md={6}>
                  <Form.Label>
                    <strong>Category</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md={12}>
                  <Form.Label>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md={12}>
                  <Form.Label>
                    <strong>Image URL</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <div className="d-flex justify-content-end">
                <Button
                  type="button"
                  className="me-2 px-4"
                  variant="secondary"
                  onClick={handleReset}
                >
                  <strong>Reset</strong>
                </Button>
                <Button type="submit" className="px-4" variant="primary">
                  <strong>Save</strong>
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductForm;
