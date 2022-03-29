import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import StudentNavbar from '../StudentNavbar/StudentNavbar';




const StudentMain = () => {
    const [postinfo, setPostinfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/postinfo')
            .then(res => res.json())
            .then(data => setPostinfo(data))
        
    }, [])
    return (
        <div className="bg-dark">
            <Header></Header>
            <StudentNavbar></StudentNavbar>
            <h3>newsfeed</h3>
            <div className="post_info  row p-3 m-3"></div>
            {

                postinfo.map(postinfo => <Newsfeed postinfo={postinfo} key={postinfo._id}></Newsfeed>)

            }





        </div>
    );
};

export default StudentMain;