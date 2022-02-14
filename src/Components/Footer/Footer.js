import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light py-5">
            <div className="row">
                <div className="col-md-4 col-sm-12 ">
                    <div className="social pb-3">
                    <h3>Follow us</h3>
                    <a href="http://facebook.com/"><FacebookOutlinedIcon></FacebookOutlinedIcon></a>
                    <a href="http://twitter.com/"><TwitterIcon></TwitterIcon></a>
                    <a href="http://twitter.com/"><InstagramIcon></InstagramIcon></a>
                    
                    </div>
                    <p>&nbsp;©  2021-2012, onlinetutor.com : All rights reserved.</p>
                    <p>Privacy Policy&nbsp;&nbsp;&nbsp;Terms of Service &nbsp;&nbsp; </p>
                </div>
                <div className="col-md-4 col-sm-12"></div>
                <div className="col-md-4 col-sm-12"></div>
            </div>
        </div>
    );
};

export default Footer;