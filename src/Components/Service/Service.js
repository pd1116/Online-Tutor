import React from 'react';

import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <div className="service  py-5 bg-white container ">
          {/* Service section  */}


    <div class="container-fluid">

        <div class="row align-items-center text-center text-dark  ">
            <div class="col-md-6 col-lg-4 d-flex my-3">
            <i class="fas fa-spinner fa-5x mr-3 "></i>

                <div class="inner-text">

                <PersonSearchOutlinedIcon className="text-dark"  style={{color:'red',fontSize:'60px'}}></PersonSearchOutlinedIcon>
                    <h1 class="my-3">Search Tutor</h1>
                    <p class="lead ">Search local tutors for at-home or in-person tutoring. Search nationally across Bangladesh for instant online tutoring.</p>
                    <div class="joinbtn"><Link class="btn btn-primary" to="/search">Search</Link></div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">
               
                <div class="inner-text">
                <ReviewsOutlinedIcon className="text-dark"   style={{color:'red',fontSize:'60px'}}></ReviewsOutlinedIcon>
                    <h1 class="my-3">Review Teacher</h1>
                    <p class="lead">Our tutors and their performance our verified and reviewed by the most important people: people like you and me.</p>
                    <div class="joinbtn"><Link class="btn btn-primary" to="/review">Review</Link></div>
                </div>  
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">

                <div class="inner-text">
                
                <AddIcCallOutlinedIcon className="text-dark"  style={{fontSize:'60px'}}></AddIcCallOutlinedIcon>
                    <h1 class="my-3">Connect Tutor</h1>
                    <p class="lead">Connect with tutors by email, live-chat, phone or in-person. It's FREE for students and parents - takes 2 minutes!</p>
                    <div class="joinbtn"><Link class="btn btn-primary" to="/register">Connect</Link></div>
                </div>
            </div>

        </div>
    </div>


        </div>
    );
};

export default Service;