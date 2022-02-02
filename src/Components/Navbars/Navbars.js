import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css';

const Navbars = () => {
    return (
        <div className="">
            {/* Navbar start here  */}
            <Navbar bg="danger" expand="sm" className="navbar">

<Navbar.Brand href="#home " >Tutor</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        {/* <Link to="/home" >Home</Link> */}
        <Nav.Link href="/home" >Home</Nav.Link>
        <Nav.Link href="/search">Search Tutor</Nav.Link>
        <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Request for tutor</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Student Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Help Forum</NavDropdown.Item>


        </NavDropdown>

        <Nav.Link href="#link">Classroom</Nav.Link>
        <Nav.Link href="#link">Contact Us</Nav.Link>

    </Nav>
</Navbar.Collapse>

</Navbar>


            
        </div>
    );
};

export default Navbars;