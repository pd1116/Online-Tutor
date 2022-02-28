import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light py-5 px-2">
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <div className="social pb-3">
                    <h3>Follow us</h3>
                    <a href="http://facebook.com/"><FacebookOutlinedIcon className=""></FacebookOutlinedIcon></a>
                    <a href="http://twitter.com/"><TwitterIcon className="text-info"></TwitterIcon></a>
                    <a href="http://twitter.com/"><InstagramIcon className="text-danger"></InstagramIcon></a>
                    
                    </div>
                    <p>&nbsp;©Copyright {(new Date()).getFullYear()}, onlinetutor.com : All Rights Reserved.</p>
                    <p>Privacy Policy&nbsp;&nbsp;Terms of Service &nbsp;&nbsp; </p>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="social pb-3">
                    <h3>Customer Service</h3>
                   <Link href="#" > <WhatsAppIcon className="text-success"></WhatsAppIcon></Link> <h5>01303001354</h5>
                    <h6>How it works?</h6>
                    <h6>FAQ</h6>

                   
                    </div>

                </div>
                <div className="col-md-4 col-sm-12">
                <div className=" pb-3">
                    <h3>About</h3>
                    <p>My Tutor makes it easy to search and find professional top-rated tutors across Bangladesh.</p>
                 
                    <button className="btn btn-primary">Join our Website Today <DoubleArrowIcon></DoubleArrowIcon></button>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;