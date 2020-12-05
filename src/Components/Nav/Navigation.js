import React from "react";
import * as ReactBooStrap from "react-bootstrap";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import "./Navbar.css";

const Navigation = () => {
  return (
    <div className="Navbar-Main">
      <PopUp />
      <Navbar data-toggle="collapse" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ReactBooStrap.Nav className="links">
            {/* <div className="pop-up-Link">
              <PopUp />
            </div> */}
            <ReactBooStrap.Nav.Link
              eventKey={2}
              href="/"
              className="nav-active"
            >
              <div className="home-nav">
                <Link to="/">Home</Link>
              </div>
            </ReactBooStrap.Nav.Link>
            <ReactBooStrap.NavDropdown
              title={<a>Menu</a>}
              id="basic-nav-dropdown"
            >
              <ReactBooStrap.NavDropdown.Item eventKey={2} href="/lunch-menu">
                <div className="drop-down-links">
                  <Link to="/lunch-menu">Lunch Menu</Link>
                </div>
              </ReactBooStrap.NavDropdown.Item>
              <ReactBooStrap.NavDropdown.Item eventKey={2} href="/dinner-menu">
                <div className="drop-down-links">
                  <Link to="/dinner-menu">Dinner Menu</Link>
                </div>
              </ReactBooStrap.NavDropdown.Item>
              <ReactBooStrap.NavDropdown.Item eventKey={2} href="/wine-list">
                <div className="drop-down-links">
                  <Link to="/wine-list">Wine List</Link>
                </div>
              </ReactBooStrap.NavDropdown.Item>
            </ReactBooStrap.NavDropdown>
            <ReactBooStrap.Nav.Link eventKey={2} href="/take-out">
              <Link to="/take-out">
                <div>Take-Out</div>
              </Link>
            </ReactBooStrap.Nav.Link>
            <ReactBooStrap.Nav.Link eventKey={2} href="/contact">
              <Link to="/contact">
                <div>Contact</div>
              </Link>
            </ReactBooStrap.Nav.Link>
          </ReactBooStrap.Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
