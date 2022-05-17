
import React from 'react';
import { Link } from 'react-router-dom';
 
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
const TeacherSidebar = () => {
    const {  logout } = useAuth();
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                
                <li>
                    <Link to="/home" className="text-light">
                    <HomeIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </HomeIcon> <span>Home</span>
                    
                       
                      
                    </Link>
                </li>
            
                <li>
                    <Link to="/teacherprofile" className="text-light">
                    <PersonOutlineIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </PersonOutlineIcon> <span>Profile</span>
                    
                       
                      
                    </Link>
                </li>
              
                <li>
                    <Link to="/teacherpayments" className="text-light">
                    <PaidIcon className="text-light"  style={{color:'red',fontSize:'20px'}}> </PaidIcon> <span>Payments</span>
                    
                       
                      
                    </Link>
                </li>
               
            </ul>
                
            <div>
                <Link onClick={logout} to="/" className="text-white"> <LogoutIcon  className="text-light"  style={{color:'red',fontSize:'20px'}}> </LogoutIcon> <span>Logout</span> </Link>
            </div>
        </div>
    );
};

export default TeacherSidebar;

