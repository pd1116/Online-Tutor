
import React from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../Login/FirebaseConfig/useAuth';
import './Sidebar.css';
 
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
const Sidebar = () => {
    const { user, logout } = useAuth();
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/home" className="text-light">
                    <HomeIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </HomeIcon> <span>Home</span>
                    
                       
                      
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-light">
                    <DashboardIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </DashboardIcon> <span>Dashboard</span>
                    
                       
                      
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-light">
                    <PersonOutlineIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </PersonOutlineIcon> <span>Teachers</span>
                    
                       
                      
                    </Link>
                </li>
                <li>
                    <Link to="/home" className="text-light">
                    <PersonOutlineIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </PersonOutlineIcon> <span>Students</span>
                    
                       
                      
                    </Link>
                </li>
               
            </ul>
                
            <div>
                <Link onClick={logout} to="/" className="text-white"> <LogoutIcon  className="text-light"  style={{color:'red',fontSize:'20px'}}> </LogoutIcon> <span>Logout</span> </Link>
            </div>
        </div>
    );
};

export default Sidebar;