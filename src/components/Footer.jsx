import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <Container>
        <Row className="py-4">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Anas Hany. All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">
              Follow me on:
              <a
                href="https://www.linkedin.com/in/anashany219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                LinkedIn
              </a>
              |
              <a
                href="https://github.com/AnasHany2193"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                GitHub
              </a>
              |
              <a
                href="https://www.facebook.com/anashany219"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                Facebook
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
