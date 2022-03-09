import React from 'react';
import './UsefulInfo.css'
import { Link } from 'react-router-dom';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const UsefulInfo = () => {
    return (
        <div className="useful-info">
            
            <h3 className="pb-5">&nbsp;Useful Tutor Information </h3>
            <ul>
                <div className="row">
                    <div className="col-md-4">
{/*                     
    <a href="qus1.html"> go to qus 1
        
    </a> */}
                       
                        <Link style={{ textDecoration: "none" }} to="/Qus1"><li> How to start tutoring at Online Tutor</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>How to find a tutor at Online Tutor</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>The Benefits of a Scientific Education</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>The importance of education in everyday life</li></Link>
                    </div>
                    <div className="col-md-4">
                        <Link style={{ textDecoration: "none" }} to="/search"><li>Extra curricular activities</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>The importance &amp; benefits of private tutoring</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>Tracking student progress</li></Link>
                        <Link style={{ textDecoration: "none" }} to="/search"><li>Good revision techniques</li></Link>
                    </div>
                    <div className="col-md-4">
                        <Link style={{ textDecoration: "none" }} to="/search"><li>Finding a secondary school to suit your child</li></Link>
                        <Link style={{ textDecoration: "none" }} to='/res'><button className="btn btn-primary m-3">View all our resources</button></Link>
                   
                            
                  
                    </div>
                </div>

            </ul>
            <section class="sectionnGap"></section>

        </div>
    );
};

export default UsefulInfo;