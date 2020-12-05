import React from "react";
import * as ReactBooStrap from "react-bootstrap";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUp";

const NavMain = styled.div`
  .dropdown-item.active {
    background: transparent !important;
  }

  
                    /* background for  link divs */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .navbar-nav {
    margin-top: 100px;
    border: 1px solid white;
    position: absolute;
    background: black;
    right: -17px;

    width: 321px;

    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    .navbar-nav {
      /* margin-top: 70px; */
      /* background: #00a1ff; */
    }
  }

  @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-nav {
      /* iphone 8 plus responsive */

      /* margin-top: 70px; */
      /* background: purple !important; */
      /* padding-right: 110px !important; */
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
    .navbar-nav {
      /* Iphone X responsive */

      /* margin-top: 70px; */
      /* background: orange; */
      /* padding-right: 0px !important; */
    }
  }

  /* background for  link divs end */

  /* Scroll down background on responsive */
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .navbar-collapse {
      /* Iphone 5 responsive */
      background-color: #b74040;
      margin-right: -17px;
      margin-left: -117px;
      height: 600px;
      z-index: 1;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    .navbar-collapse {
      /* Iphone 8 responsive */
   
      /* margin-right: -22px;
      padding-top: 110px !important;
      height: 615px;
      margin-left: -121px; */
    }
  }

  @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-collapse {
      /* Iphone 8 plus responsive */

      /* margin-right: -22px;
      padding-top: 76px;
      margin-left: -125px !important;
      height: 738px;  */
    }
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-collapse {
      /* Iphone X responsive */

      /* height: 845px;
      z-index: 1; */
    }
  }

  #links {
    background: transparent !important;
    border-top: 1px solid #a04545;
    border-bottom: 1px solid #a04545;
    margin-top: 0;
    height: 117px !important;
  }

  .modal-footer {
    padding: 0 !important;
  }

  .dropdown-item:hover {
    background-color: rgba(207, 31, 37, 0.9);
  }

  .dropdown-menu {   /* drop down background  */
    padding: 0 !important;
    border-radius: 0;
    text-align: center !important;
    background-color: rgb(228 37 37);
    margin-left: -36px !important;
    border: none !important;
    margin-top: -16px !important;

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      /* Iphone 5 responsive */
      margin-top: -20px !important;
      color: black !important;
      padding-left: 38px !important;
      margin-bottom: 10px !important;
      background-color: rgb(228 37 37);
    }

    @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
      /* Iphone 8 plus responsive */
      margin-top: 0px !important;
      color: black !important;
      padding-left: 38px !important;
      margin-bottom: 10px !important;
    }
  }

  #basic-nav-dropdown:hover {
    /* dropdown arrow icon */
    color: #ef9c04 !important;
    border: none !important;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    #basic-nav-dropdown:hover {
      /* Iphone 5 responsive */
    }
  }

  .drop-down-links a {
    /* dropdown links on menu */
    color: white !important;
    font-size: 25px;
    /* border: 5px solid yellow !important; */
  }

  .navbar-light .navbar-nav .nav-link {
    /* responsive nav-link individual link divs */
    /* height: 115px !important; */
    padding: 15px;
    height: 107px;
    /* padding-top: 70px;
    margin-top: 2px; */

    :hover { /*  on desktop div hover on cursor */
      background-color: rgb(228 37 37);
      cursor: pointer !important;

      @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
        /* Iphone 5 responsive */
        background: #ff3333 !important;
      }
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      /* Iphone 5 responsive */
      height: 70px !important;
      width: 100% !important;
      /* border: 5px solid yellow !important; */
      margin: auto;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      /* Iphone X responsive */
      height: 90px !important;
      padding: 0;
      margin: 0;
      padding-top: 22px;
    }
  }

  .bg-light {
    /* the div holding the the div with the links */
   
    background-color: transparent !important;
    border-top: transparent !important;
    border-bottom: transparent !important;
    padding: 0;
    margin-top: 10px !important;
    height: 127px !important;
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
    /* links styling */
    color: white !important;
    text-decoration: none !important;
    font-weight: bolder !important;
    font-size: 23px;
    font-family: "Barlow Condensed", sans-serif !important;
    border: transparent !important;

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      /* Iphone 5 responsive */
      font-size: 25px;
      color: white !important;
      padding-top: 16px !important;
      /* text-shadow: 1px 1px black; */
    }

    @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
      /* Iphone 8 plus responsive */
      font-size: 30px;
    }

    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      /* Iphone X responsive */
      font-size: 30px !important;
    }
    a:hover {
      color: white !important;
      text-decoration: none !important;
      height: 131px;
      width: 100px;
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
      /* Iphone 5 responsive */
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
      position: absolute;
      margin-left: 145px;
      /* margin-top: -15px; */
      z-index: 2;
    }
  }

  @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-light .navbar-toggler {
      /* Iphone 8 plus responsive */
      margin-left: 214px;
      margin-top: -15px;
      z-index: 2;
    }
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-light .navbar-toggler {
      /* Iphone X responsive */
      margin-left: 175px !important;
      z-index: 2;
      margin-top: 13px;
    }
  }

  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    .navbar-light .navbar-toggler-icon {
      /* Iphone X responsive */
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
      <Navbar data-toggle="collapse" id="links" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ReactBooStrap.Nav className="links">
            {/* <PopUp /> */}
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
    </NavMain>
  );
};

export default Navigation;
