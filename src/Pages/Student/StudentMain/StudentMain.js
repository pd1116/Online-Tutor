import React from 'react';
import Header from '../../../Components/Header/Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import StudentNavbar from '../StudentNavbar/StudentNavbar';

// import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';


const StudentMain = () => {
    return (
        <div>
            <Header></Header>
            <StudentNavbar></StudentNavbar>
   
           <Newsfeed></Newsfeed>
           
         

          
      
        </div>
    );
};

export default StudentMain;