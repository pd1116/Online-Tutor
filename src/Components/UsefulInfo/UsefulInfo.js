import React from 'react';
import './UsefulInfo.css'
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import InfoIcon from '@mui/icons-material/Info';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const UsefulInfo = () => {
    return (
        <div className="useful-info container">
            
            <h1 className="pb-5"><InfoIcon sx={{ fontSize: 35,mb: 1, }}></InfoIcon> Useful Information </h1>
            <ul>
                <div className="row">
                    <div className="col-md-4">
{/*                     
    <a href="qus1.html"> go to qus 1
        
    </a> */}
                       
                        <Link style={{ textDecoration: "none" }} to="/Qus1"><li> How to start tutoring at Online Tutor</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus2"><li>How to find a tutor at Online Tutor</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus3"><li>The Benefits of a Scientific Education</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus4"><li>The importance of education in everyday life</li></Link>
                    </div>
                    <div className="col-md-4">
                        <Link style={{ textDecoration: "none" }} to="/Qus5"><li>Extra curricular activities</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus6"><li>The importance &amp; benefits of private tutoring</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus7"><li>Tracking student progress</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/Qus8"><li>Good revision techniques</li></Link>
                    </div>
                    <div className="col-md-4">
                        <Link style={{ textDecoration: "none" }} to="/Qus9"><li>Finding a secondary school to suit your child</li></Link>
                        <Link style={{ textDecoration: "none" }} to='/res'><button className="btn btn-primary m-3">View all our resources <DoubleArrowIcon></DoubleArrowIcon></button></Link>
                   
                            
                  
                    </div>
                </div>

            </ul>
            <section class="sectionnGap"></section>

        </div>
    );
};

export default UsefulInfo;