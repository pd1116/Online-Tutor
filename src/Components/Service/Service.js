import React from 'react';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

const Service = () => {
    return (
        <div className="service  py-5 ">
          {/* Service section  */}


    <div class="container-fluid">

        <div class="row align-items-center text-center text-dark  ">
            <div class="col-md-6 col-lg-4 d-flex my-3">
            <i class="fas fa-spinner fa-5x mr-3 "></i>

                <div class="inner-text">

                <PersonSearchOutlinedIcon className="text-dark"  style={{color:'red',fontSize:'60px'}}></PersonSearchOutlinedIcon>
                    <h1 class="my-3">Search Tutor</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                    <button class="btn btn-outline-info">Search</button>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">
               
                <div class="inner-text">
                <ReviewsOutlinedIcon className="text-dark"   style={{color:'red',fontSize:'60px'}}></ReviewsOutlinedIcon>
                    <h1 class="my-3">Review Teacher</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                    <button class="btn btn-outline-info">Review</button>
                </div>  
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">

                <div class="inner-text">
                
                <AddIcCallOutlinedIcon className="text-dark"  style={{fontSize:'60px'}}></AddIcCallOutlinedIcon>
                    <h1 class="my-3">Connect Tutor</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                    <button class="btn btn-outline-info">Connect</button>
                </div>
            </div>

        </div>
    </div>


        </div>
    );
};

export default Service;