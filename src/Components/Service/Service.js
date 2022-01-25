import React from 'react';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Service = () => {
    return (
        <div className="service bg-info py-5">
          {/* Service section  */}


    <div class="container-fluid">

        <div class="row align-items-center text-center text-white  ">
            <div class="col-md-6 col-lg-4 d-flex my-3">
            <i class="fas fa-spinner fa-5x mr-3 "></i>

                <div class="inner-text">
                <PersonSearchIcon  style={{color:'red',fontSize:'60px'}}></PersonSearchIcon>
                    <h1 class="my-3">Search Tutor</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                </div>
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">
               
                <div class="inner-text">
                <PersonSearchIcon  style={{color:'red',fontSize:'60px'}}></PersonSearchIcon>
                    <h1 class="my-3">Review Teacher</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                </div>  
            </div>

            <div class="col-md-6 col-lg-4 d-flex my-3">
                {/* <i class="fas fa-star fa-5x mr-3 "></i> */} 
                <div class="inner-text">
                <PersonSearchIcon  style={{color:'red',fontSize:'60px'}}></PersonSearchIcon>
                    <h1 class="my-3">Connect Tutor</h1>
                    <p class="lead">Lorem ipsum dolor sit amet cons?Lorem ipsum dolor sit amet cons?</p>
                </div>
            </div>

        </div>
    </div>


        </div>
    );
};

export default Service;