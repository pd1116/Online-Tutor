import React from "react";
import Navbars from '../Navbars/Navbars';
import {  Button} from '@mui/material';
import Footer from '../Footer/Footer'
import SendIcon from '@mui/icons-material/Send';
import swal from 'sweetalert';
import './Contact.css'

const Contact = () => {
    // const handleOnBlur = () => {

    // }
    // const handleLoginSubmit = () => {

    // }
    const popUp = () => {
        swal({
            title: "Thanks for contacting us!",
            text: "We will be in touch with you shortly.",
            icon: "success",
            button: "OK",
        });
    }
    return (
        <div className="contact_form" >
            <Navbars></Navbars>



           

                <div class="container contact  h-50 ">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="contact-info">
                              
                                <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="" />
                                <h2>Contact Us</h2>
                                <h4>We would love to hear from you !</h4>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="contact-form">

                                <form action="">
                                <div class="form-group">
                                    <label class="control-label col-sm-2  " for="fname" >First Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="lname">Last Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="email">Email:</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-sm-2" for="comment">Comment:</label>
                                    <div class="col-sm-10">
                                        <textarea class="form-control" rows="5" id="comment"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <Button onClick={popUp} sx={{ width: '75%', m: 1 }} type="submit" variant="contained"><SendIcon className="mx-3 m-2" ></SendIcon>  Send</Button>

                                    </div>
                                </div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
        





            <Footer></Footer>
        </div>
    );
};

export default Contact;