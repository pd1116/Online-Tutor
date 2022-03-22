import React from 'react';
import './Main.css';


import Service from '../Service/Service';

import ExploreTutor from '../ExploreTutor/ExploreTutor';
import MeetTutor from '../MeetTutor/MeetTutor';
import AboutUs from '../AboutUs/AboutUs';
import UsefulInfo from '../UsefulInfo/UsefulInfo';
import LearningVideo from '../LearningVideo/LearningVideo';
import Footer from '../Footer/Footer';

// import useAuth from '../FirebaseConfig/useAuth';
import Header from '../Header/Header';
import OurTutorInfo from '../OurTutor/OurTutorInfo';
import HomeSearch from '../HomeSearch/HomeSearch';
// import TeacherMain from '../../Pages/Teacher/TeacherMain/TeacherMain';



const Main = () => {
    // const { user, logout } = useAuth();

    return (
        <div className="bg-white ">
            <Header></Header>
            {/* <TeacherMain></TeacherMain> */}
        
          
            {/* Navbar start here  */}
            {/* <Navbars></Navbars> */}


            {/* Navbar ends here  */}

            <HomeSearch></HomeSearch>



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
            {/* <OurTutor></OurTutor> */}
            <OurTutorInfo></OurTutorInfo>

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