import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';

import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
import TeacherNewsfeed from '../TeacherNewsfeed/TeacherNewsfeed';


const TeacherMain = () => {
    const [postinfo, setPostinfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/postinfo')
            .then(res => res.json())
            .then(data => setPostinfo(data))
        
    }, [])


    return (
        <div>
            <Header></Header>
            <TeacherNavbar  ></TeacherNavbar>
            <div className="post_info  row p-3 m-3">
                {
                    postinfo.map(postinfo => <TeacherNewsfeed postinfo={postinfo} key={postinfo._id}></TeacherNewsfeed>)
                }
            </div>








        </div>
    );
};

export default TeacherMain;