import React, { useState } from "react";
import * as ReactBooStrap from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import "./PopUp.css";

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="PopUp">
      <Button
        outline="none"
        className="update-button"
        variant="primary"
        onClick={handleShow}
      >
        Covid Updates
      </Button>

      <Modal className="Modal-main" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="pop-title">
            {" "}
            <span>🙏</span> Namaste, our commitment to the health and safety of
            our guests is of utmost importance.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pop-body">
          <span>ℹ️</span> No Inside seating but we have a few outside seats with
          heat lamps. If you have any question call{" "}
          <a href="tel:+1-707-996-1161"> 707-996-1161</a>.
        </Modal.Body>
        <Modal.Body className="pop-body">
          <span>ℹ️</span> We've implemented sanitation procedures, and we
          continue to update based on the newest CDC guidlines.{" "}
          <a
            style={{ display: "table-cell" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://covid19.ca.gov/?utm_source=google&utm_medium=cpc&utm_campaign=ca-covid19response-august2020&utm_term=covid%2019&gclid=Cj0KCQiAk53-BRD0ARIsAJuNhpuCva32h1NEvUCKuUiHgEKEfi8ZamA1etzixB3g4JgVjS14G3cAUdsaAsGfEALw_wcB"
          >
            (see guidlines)
          </a>
        </Modal.Body>
        <Modal.Body className="pop-body">
          <span>ℹ️</span> Staff is required to wash hands and santize
          frequently.
        </Modal.Body>
        <Modal.Footer className="pop-close-footer">
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default PopUp;
