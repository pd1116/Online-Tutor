import React from 'react';
import './Main.css';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Main = () => {
    return (
        <div className="container">
            <div className="container bg-warning ">

                {/* top banner start here  */}

                <div class="row mt-1 ">
                    <div class=" col-md-6  text-center ">
                        <h2 >Online Tutor</h2>
                    </div>
                    <div class="col-md-6 ">

                        <button class="btn btn-sm btn-primary top-btn m-2">Register</button>
                        <button class=" btn btn-sm btn-primary top-btn m-2">Login</button>

                    </div>
                    {/* top banner ends here  */}

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
           


            </div>
                 {/* Navbar ends here  */}
                 
            {/* service section start here */}
            <Service></Service>
            {/* service section ends here */}

        </div>
    );
};

export default Main;