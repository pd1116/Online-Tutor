import React from 'react';
import { Link } from 'react-router-dom';
import Navbars from '../Navbars/Navbars';

const Register = () => {
    return (
        <div className="container">
            <Navbars></Navbars>
            <h1>Please Register</h1>
            <button> <Link>As a Student</Link></button>
            <button> <Link>As a Teacher</Link></button>
        </div>
    );
};

export default Register;