import React, { useState } from 'react';
import * as ReactBooStrap from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import './PopUp.css';

function PopUp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className='PopUp'>
        <Button variant="primary" onClick={handleShow}>
          Covid Information
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Namaste, we are open. Please check for business hours.</Modal.Title>
          </Modal.Header>
          <Modal.Body>No Inside seating but we have a few outside seats with heat lamps.
              If you have any question call <a href="tel:+1-707-996-1161"> 707-996-1161</a>.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
export default PopUp;