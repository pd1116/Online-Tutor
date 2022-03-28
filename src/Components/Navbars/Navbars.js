import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbars.css';
import useAuth from '../Login/FirebaseConfig/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

                        <NavLink className="p-4 " style={{ textDecoration: 'none' }} to="/contact">Contact Us</NavLink>

                    </Nav>

                    {
                        userData[0]?.role === "Teacher" ?
                            <NavLink to="/teachermain" class="login_btn  text-white d-flex align-items-center"><span class="nav_icon"><AccountCircleIcon sx={{ fontSize: 30, mr: 1 }}></AccountCircleIcon></span> {userData[0].name}</NavLink>
                        : userData[0]?.role === "Student" ?  
                        <NavLink to="/studentmain" class="login_btn  text-white d-flex align-items-center "><span class="nav_icon"><AccountCircleIcon sx={{ fontSize: 30, mr: 1 }}></AccountCircleIcon></span>{userData[0].name}</NavLink>
                          :
                        <h5> </h5>

                    }
                     



                </Navbar.Collapse>

            </Navbar>



        </div>
    );
};

export default Navbars;