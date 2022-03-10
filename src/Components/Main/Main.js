import React from 'react';
import './Main.css';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

import ExploreTutor from '../ExploreTutor/ExploreTutor';
import MeetTutor from '../MeetTutor/MeetTutor';
import AboutUs from '../AboutUs/AboutUs';
import UsefulInfo from '../UsefulInfo/UsefulInfo';
import LearningVideo from '../LearningVideo/LearningVideo';
import Footer from '../Footer/Footer';
import OurTutor from '../OurTutor/OurTutor';
import Navbars from '../Navbars/Navbars';


const Main = () => {
    return (
        <div className="">
            <div className="container bg-dark text-white ">

                {/* top banner start here  */}

                <div class="row mt-1 ">
                    <div class=" col text-center ">
                        <h2 class="text-center" >Online Tutor</h2>
                    </div>



                    {/* <Link to="/register" class="btn btn-sm btn-primary top-btn text-white m-2">Register</Link>
                        <Link to="/login" class="btn btn-sm btn-primary top-btn text-white m-2">Login</Link> */}


                    {/* top banner ends here  */}



                </div>




            </div>
            {/* Navbar start here  */}
            <Navbars></Navbars>
         
            {/* Navbar ends here  */}


            {/* service section start here */}
            <Service></Service>
            {/* service section ends here */}


            {/* explore tutor start here */}
            <ExploreTutor></ExploreTutor>
            {/* explore tutor ends here */}
            {/* meet tutor start here */}
            <MeetTutor></MeetTutor>
            {/* meet tutor ends here */}


            {/* Aboutus start here */}
            <AboutUs></AboutUs>
            {/* Aboutus ends here */}


            {/* Our Tutor start here */}
            <OurTutor></OurTutor>

            {/*Our tutor tutor ends here */}


            {/* Usefulinfo start here */}
            <UsefulInfo></UsefulInfo>
            {/* Usefulinfo ends here */}

            {/* Learning video start here */}
            <LearningVideo></LearningVideo>
            {/* Learning video ends here */}
            {/* Footer start here */}
            <Footer></Footer>
            {/* Footer  ends here */}
        </div>
    );
};

export default Main;