import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import Newsfeed from '../Newsfeed/Newsfeed';

import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';


const TeacherMain = () => {
    
   
    return (
        <div>
            <Header></Header>
           <TeacherNavbar  ></TeacherNavbar>
           <Newsfeed  ></Newsfeed>
           {/* <p>{userData[0].name}</p> */}
           
         

          
      
        </div>
    );
};

export default TeacherMain;