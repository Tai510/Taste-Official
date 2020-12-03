import React from "react";
import * as ReactBooStrap from "react-bootstrap";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUp";

const NavMain = styled.div`
  #links {
    background: #a04545 !important;
    border-top: 1px solid #a04545;
    border-bottom: 1px solid #a04545;
  }

  .modal-footer {
    padding: 0 !important;
  }

  .dropdown-item:hover {
    background: #a04545 !important;
  }

  .dropdown-menu {
    padding: 0 !important;
    background: #a04545 !important;
    border-top: 1px solid #a04545;
    border-radius: 0;
    text-align: center !important;
  }

  #basic-nav-dropdown:hover {
    color: rgb(111, 179, 77) !important;
  }

  .drop-down-links a {
    color: white !important;
  }

  .navbar-light .navbar-nav .nav-link {
    margin: 0 50px;
  }

  .bg-light {
    background-color: white !important;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    padding: 0;
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: white;
    justify-content: center;
    width: 35px;
    margin: auto;
    outline: none;
    padding: 0;
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: -1px;
    font-weight: bolder !important;
    text-decoration: none !important;
  }

  a {
    color: white !important;
    text-decoration: none !important;
    font-weight: bolder !important;
    font-size: 20px;
    font-family: "Barlow Condensed", sans-serif !important;

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      font-size: 20px;
    }
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 22px;
    }
    a:hover {
      color: rgb(111, 179, 77) !important;
      text-decoration: none !important;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
      justify-content: center !important;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .navbar-light .navbar-toggler-icon {
      background-image: url(
        data:image/svg + xml,
        %3csvgxmlns="http://www.w3.org/2000/svg"width="30"height="30"viewBox="0 0 30 30"%3e%3cpathstroke="rgba%280, 0, 0, 0.5%29"stroke-linecap="round"stroke-miterlimit="10"stroke-width="2"d="M4 7h22M4 15h22M4 23h22"/%3e%3c/svg%3e
      );
      font-size: 16px;
    }
    .navbar {
      border: none !important;
    }
    .modal-footer {
      padding: 0 !important;
    }
    .navbar-light .navbar-toggler {
      margin-left: 20px;
    }
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-light .navbar-toggler-icon {
      background-image: url(
        data:image/svg + xml,
        %3csvgxmlns="http://www.w3.org/2000/svg"width="30"height="30"viewBox="0 0 30 30"%3e%3cpathstroke="rgba%280, 0, 0, 0.5%29"stroke-linecap="round"stroke-miterlimit="10"stroke-width="2"d="M4 7h22M4 15h22M4 23h22"/%3e%3c/svg%3e
      );
      font-size: 20px;
    }
  }
`;

const Navigation = () => {
  return (
    <NavMain>
      <Navbar id="links" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ReactBooStrap.Nav className="links">
            <PopUp />
            <ReactBooStrap.Nav.Link>
              <p className="home-nav">
                <Link to="/">Home</Link>
              </p>
            </ReactBooStrap.Nav.Link>
            <ReactBooStrap.NavDropdown
              title={<a>Menu</a>}
              id="basic-nav-dropdown"
            >
              <ReactBooStrap.NavDropdown.Item>
                <p className="drop-down-links">
                  <Link to="/lunch-menu">Lunch Menu</Link>
                </p>
              </ReactBooStrap.NavDropdown.Item>
              <ReactBooStrap.NavDropdown.Item>
                <p className="drop-down-links">
                  <Link to="/dinner-menu">Dinner Menu</Link>
                </p>
              </ReactBooStrap.NavDropdown.Item>
              <ReactBooStrap.NavDropdown.Item>
                <p className="drop-down-links">
                  <Link to="/wine-list">Wine List</Link>
                </p>
              </ReactBooStrap.NavDropdown.Item>
            </ReactBooStrap.NavDropdown>
            <ReactBooStrap.Nav.Link>
              <p>
                <Link to="/take-out">Take-Out</Link>
              </p>
            </ReactBooStrap.Nav.Link>
            <ReactBooStrap.Nav.Link eventKey={2} href="/contact">
              <p>
                <Link to="/contact">Contact</Link>
              </p>
            </ReactBooStrap.Nav.Link>
          </ReactBooStrap.Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavMain>
  );
};

export default Navigation;
