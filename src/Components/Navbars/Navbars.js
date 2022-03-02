import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import './Navbars.css';
import useAuth from '../../Components/FirebaseConfig/useAuth';

const Navbars = () => {

      const {user,logout} =useAuth();

    return (
        <div className="">
            {/* Navbar start here  */}
            <Navbar bg="danger" expand="sm" className="navbar">

                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Link to="/home" >Home</Link> */}
                        <Link className="m-2 " to="/home" >Home</Link>
                        <Link className="m-2 " to="/search">Search Tutor</Link>
                        <NavDropdown title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Request for tutor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Student Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Help Forum</NavDropdown.Item>


                        </NavDropdown>

                        <NavLink className="m-2 "  style={{textDecoration:'none'}}to="/post">Post</NavLink>
                        <NavLink className="m-2 "  style={{textDecoration:'none'}}to="/contactus">Contact Us</NavLink>
                       

                    </Nav>
                    {/* <Link to="/login" > <button class=" btn btn-sm btn-primary top-btn text-white m-2">Login</button> </Link> */}

                    {
                        user?.email ? 
                        <Link to="/login" onClick={logout} class=" btn btn-sm btn-primary top-btn text-white m-2">LogOut</Link>
                            :
                            <Link to="/login" class=" btn btn-sm btn-primary top-btn text-white m-2">Login</Link>
                    }


                </Navbar.Collapse>

            </Navbar>



        </div>
    );
};

export default Navbars;