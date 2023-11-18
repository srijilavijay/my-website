import React, { useState } from "react";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

function Modal1() {
  const [show, setshow] = useState(true);
  const handleClose = () => setshow(false);
  return (
    <div>
      <div
        className="modal show"
        style={{
          display: "block",
          position: "initial",
          backgroundColor: "#464747",
        }}
      >
        <Modal
          show={show}
          onHide={handleClose}
          style={{ boxShadow: "20px 18px 20px black" }}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#8bd9af" }}>
            <Modal.Title style={{ color: "White", justifyContent: "center" }}>
              Photography Contest
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#d2fce5" }}>
            <Container>
              <Row>
                <Col>
                  <img
                    src="./images/1647933121-462385-marco-xu-toupbco62lw-unsplashjpg.avif"
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "1.5rem",
                      boxShadow: "12px 12px 20px",
                    }}
                    alt="Photography Contest Image"
                  />
                </Col>
                <Col>
                  <p>
                    Photography contests are excellent if you want to make a
                    name for yourself in the photography world and gain
                    exposure, prestige and recognition
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              View Photos
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Participate
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Modal1;
