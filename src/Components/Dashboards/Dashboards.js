import React, { useEffect, useState } from 'react';
import StudentMain from '../../Pages/Student/StudentMain/StudentMain';
 
import TeacherProfile from '../../Pages/Teacher/TeacherProfile/TeacherProfile';
import useAuth from '../Login/FirebaseConfig/useAuth';

const Dashboards = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, Loading, authError } = useAuth();
    useEffect(() => {
        fetch('https:// /isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email:loginData.email })
        })
            .then(res => res.json())
            .then(data => setLoginData(data));
    }, [])

    return (
        <div className="row">
        {
           user?.email ? <TeacherProfile></TeacherProfile>
           : <StudentMain></StudentMain>
        }
    </div>
    );
};

export default Dashboards;