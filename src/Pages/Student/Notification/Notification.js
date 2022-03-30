import React, { useEffect, useState } from 'react';


import Header from '../../../Components/Header/Header';
import StudentNavbar from '../StudentNavbar/StudentNavbar';

const Notification = () => {
    const [applicantresponse, setapplicantresponse] = useState([]);
    console.log(applicantresponse[0]);
    useEffect(() => {
        fetch('http://localhost:4000/applicantresponse')
            .then(res => res.json())
            .then(data => setapplicantresponse(data))
    }, [])
    
    return (
        <div>

            <Header></Header>
            <StudentNavbar></StudentNavbar>
            {/* <h1>{applicantresponse[0]?.name} just Accept Your Request</h1> */}
            <p><b> Name: </b> {applicantresponse[0]?.name} accept your request</p>
            <p><b> Name: </b> {applicantresponse[0]?.email} accept your request</p>
            <p><b> Name: </b> {applicantresponse[0]?.phone} accept your request</p>
        </div>
    );
};

export default Notification;