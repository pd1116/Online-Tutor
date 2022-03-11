import React from 'react';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../FirebaseConfig/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className=" bg-white header  ">

            {/* top banner start here  */}

            <div class="row mx-5 py-4">
                <div class=" col-md-4  ">
                    <h1 class="text-center" >Online Tutor</h1>
                </div>
                <div class=" col-md-8  ">

                    <h4 class=" text-center pt-2 " ><span class="header_icon"><AddIcCallOutlinedIcon sx={{ fontSize: 35, mr: 1 }}></AddIcCallOutlinedIcon></span> 01303001354  
                    {
                        user?.email ?
                            <Link to="/login" onClick={logout} class="login_btn  text-dark mx-5"><span class="header_icon"><LogoutIcon sx={{ fontSize: 30, mr: 1 }}></LogoutIcon></span>LogOut {user.email}</Link>

                            :
                           
                            <Link to="/login" class="login_btn  text-dark mx-5"><span class="header_icon"><LoginRoundedIcon sx={{ fontSize: 30, mr: 1 }}></LoginRoundedIcon></span>Login</Link>
                    }
                    </h4>




                </div>

            </div>




        </div>
    );
};

export default Header;