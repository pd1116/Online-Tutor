import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import './Navbars.css';
import useAuth from '../Login/FirebaseConfig/useAuth';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbars = () => {

    const { user, logout } = useAuth();
    //   const { user } = useAuth();
    // console.log(" myuser:",user);   
    const [userData, setUserData] = useState([]);
    console.log(user.email);
    console.log(userData);
    useEffect(() => {
        fetch('http://localhost:4000/role', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [])
    return (
        <div className="">
            {/* Navbar start here  */}
            <Navbar expand="sm" className="nav_bar p-0">


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">

                        <NavLink className="p-4  " style={{ textDecoration: 'none' }} to="/home">Home</NavLink>
                        <NavLink className="p-4 " style={{ textDecoration: 'none' }} to="/search">Search Tutor</NavLink>


                        {/* <NavDropdown title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Features</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Request for tutor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Student Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Help Forum</NavDropdown.Item>

                        </NavDropdown> */}


                        <NavLink className=" p-4 " style={{ textDecoration: 'none' }} to="/post">Post</NavLink>
                        <NavLink className="p-4 " style={{ textDecoration: 'none' }} to="/contact">Contact Us</NavLink>

                    </Nav>

                    {
                        userData[0]?.role === "Teacher" ?
                            <NavLink to="/teachermain" class="login_btn  text-white d-flex align-items-center"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>Name:teacher  {userData[0].name}</NavLink>
                        : userData[0]?.role === "Student" ?  
                        <NavLink to="/studentmain" class="login_btn  text-white d-flex align-items-center"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>Name: student {userData[0].name}</NavLink>
                          :
                        <h5>Unknown</h5>

                    }
                      {
                        user?.email ?
                            <NavLink to="/login" onClick={logout} class="login_btn  text-dark mx-5"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>LogOut {user.displayName}</NavLink>

                            :
                           
                            <NavLink to="/login" class="login_btn  text-dark mx-5"><span class="header_icon"><LoginRoundedIcon sx={{ fontSize: 30, mr: 1 }}></LoginRoundedIcon></span>Login</NavLink>
                    }



                </Navbar.Collapse>

            </Navbar>



        </div>
    );
};

export default Navbars;