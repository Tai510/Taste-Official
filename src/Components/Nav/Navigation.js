import React from 'react';
import * as ReactBooStrap from 'react-bootstrap';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavMain = styled.div`
    p {
        margin-bottom: -1px;
        font-weight: bolder !important;
        text-decoration: none !important;
    }
    a {
        color: #454444;
        text-decoration: none !important;
        font-weight: bolder !important;
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        a:hover {
        color: rgb(111, 179, 77) !important;
        text-decoration: none !important;
    }
    }
`;

const Navigation = () => {
    return (
        <NavMain>
            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="/"><h1>Taste of the Himalayas</h1></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <img src='https://cdn.doordash.com/media/restaurant/cover/TasteoftheHimalayas_2633_Sausalito_CA.png'></img> */}
                    </Nav>
                    <ReactBooStrap.Nav>
                        <ReactBooStrap.Nav.Link><p className='home-nav'><Link to='/'>Home</Link></p></ReactBooStrap.Nav.Link>
                        <ReactBooStrap.NavDropdown title={<a>Menu</a>} id="basic-nav-dropdown">
                            <ReactBooStrap.NavDropdown.Item><p><Link to='/lunch-menu'>Lunch Menu</Link></p></ReactBooStrap.NavDropdown.Item>
                            <ReactBooStrap.NavDropdown.Item><p><Link to='/dinner-menu'>Dinner Menu</Link></p></ReactBooStrap.NavDropdown.Item>
                            <ReactBooStrap.NavDropdown.Item><p><Link to='/wine-list'>Wine List</Link></p></ReactBooStrap.NavDropdown.Item>
                        </ReactBooStrap.NavDropdown>
                        <ReactBooStrap.Nav.Link><p><Link to='/take-out'>Take-Out</Link></p></ReactBooStrap.Nav.Link>
                        <ReactBooStrap.Nav.Link eventKey={2} href='/contact'><p><Link to='/contact'>Contact</Link></p></ReactBooStrap.Nav.Link>
                    </ReactBooStrap.Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavMain>
    )
}

export default Navigation;