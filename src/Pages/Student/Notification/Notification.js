import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import teacherimg from '../../../images/teacherimg.jpg';

import Header from '../../../Components/Header/Header';
import StudentNavbar from '../StudentNavbar/StudentNavbar';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';

const Notification = () => {




    // console.log(user.email);
    const [applicantresponse, setapplicantresponse] = useState([]);
    console.log(applicantresponse[0]);
    useEffect(() => {
        fetch('http://localhost:4000/applicantresponse')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setapplicantresponse(data))
    }, [])
    console.log(" myuser:", applicantresponse[0]?.email);
    // applicantresponse
    return (
        <div>

            <Header></Header>
            <StudentNavbar></StudentNavbar>
            {applicantresponse[0]?.email?
   <Card className="techers_card py-3 mx-auto m-5 w-50">

   <Card.Body className="row">
       <Card.Title>{applicantresponse[0]?.name} just Accept Your Request</Card.Title>
    
       <div className="col-md-8">
           <Card.Text className="card_text">
               <p className="text-success w-50"><b> ID: </b> {applicantresponse[0]?._id}</p>
               <p><b> Name: </b> {applicantresponse[0]?.name} </p>
               <p><b> Email: </b> {applicantresponse[0]?.email} </p>
               <p><b> Phone: </b>{applicantresponse[0]?.phone}</p>
               <p><b> Gender: </b>{applicantresponse[0]?.gender}</p>


           </Card.Text>
       </div>
       <div className="col-md-4">
           <img className="cardimg mx-auto d-block" variant="top" src={teacherimg} alt="" />



       </div>



   </Card.Body>
</Card>
 : <h3 className="text-danger">Opps here is no notification</h3>


}


          
        </div>
    );
};

export default Notification;