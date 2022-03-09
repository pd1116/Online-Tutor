import React from 'react';
import Qus1 from './Qus1';
import  Navbars from '../Navbars/Navbars';
import './AllRes.css';
const AllRes = () => {
    return (
        <div className="allres ">
            <Navbars></Navbars>
            <div className="container">
            <Qus1></Qus1>
                </div>
           
        </div>
    );
};

export default AllRes;