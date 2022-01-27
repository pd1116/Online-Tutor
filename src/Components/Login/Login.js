import React from 'react';
import { Link } from 'react-router-dom';
import Navbars from '../Navbars/Navbars';

const Login = () => {
    return (
        <div className="container">
            <Navbars></Navbars>
            <h1>This is  login</h1>


            {/* testing  */}
        
            <Link to="/login2" class="btn btn-sm btn-primary top-btn text-white m-2">Loginxxx</Link>
            
        </div>
    );
};

export default Login;