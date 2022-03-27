import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import Newsfeed from '../Newsfeed/Newsfeed';

import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';


const TeacherMain = () => {
    // const [clients, setClients] = useState({});
    // const [loginData, setLoginData] = useState({});

    // const { user } = useAuth();
    // useEffect(() => {

    // },[])
    
    // fetch('http://localhost:4000/clientsrole' )
    // .then(res=>res.json())
    // .then(data =>setClients(data))
   
    return (
        <div>
            <Header></Header>
           <TeacherNavbar  ></TeacherNavbar>
           <Newsfeed  ></Newsfeed>
           
         

          
      
        </div>
    );
};

export default TeacherMain;