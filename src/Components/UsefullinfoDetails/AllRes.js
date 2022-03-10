import React from 'react';
import Qus1 from './Qus1';
import  Navbars from '../Navbars/Navbars';
import './AllRes.css';
import Qus2 from './Qus2';
import Qus3 from './Qus3';
import Qus4 from './Qus4';
import Qus5 from './Qus5';
import Qus6 from './Qus6';
import Qus7 from './Qus7';
import Qus8 from './Qus8';
import Qus9 from './Qus9';
const AllRes = () => {
    return (
        <div className="allres ">
            <Navbars></Navbars>
            <div className="container">
            <Qus1></Qus1>
            <Qus2></Qus2>
            <Qus3></Qus3>
            <Qus4></Qus4>
            <Qus5></Qus5>
            <Qus6></Qus6>
            <Qus7></Qus7>
            <Qus8></Qus8>
            <Qus9></Qus9>
                </div>
           
        </div>
    );
};

export default AllRes;