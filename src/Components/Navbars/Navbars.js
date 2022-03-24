import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

import './Navbars.css';
import useAuth from '../Login/FirebaseConfig/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbars = () => {

      const {user,logout} =useAuth(); 

    return (
        <div className="">
            {/* Navbar start here  */}
            <Navbar expand="sm" className="nav_bar p-0">

                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">
                        
                        <NavLink className="p-4  "  style={{textDecoration:'none'}}to="/home">Home</NavLink>
                        <NavLink className="p-4 "  style={{textDecoration:'none'}}to="/search">Search Tutor</NavLink>
                       
                        
                        {/* <NavDropdown title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Request for tutor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Student Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Help Forum</NavDropdown.Item>

                        </NavDropdown> */}
                    

                        <NavLink className=" p-4 "  style={{textDecoration:'none'}}to="/post">Post</NavLink>
                        <NavLink className="p-4 "  style={{textDecoration:'none'}}to="/contact">Contact Us</NavLink>
                       
                    </Nav>

                    {
                       user?.email && 
                        <NavLink to="/teachermain"  class="login_btn  text-white d-flex align-items-center"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>Name:  {user.displayName}</NavLink>

                          
                    }
                   


                </Navbar.Collapse>

            </Navbar>



        </div>
    );
};

export default Navbars;