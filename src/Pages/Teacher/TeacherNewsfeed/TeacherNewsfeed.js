import React, { useEffect, useState } from 'react';
import './TeacherNewsfeed.css'
import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import swal from 'sweetalert';


import stdimg1 from "../../../images/avatar2.webp";


const TeacherNewsfeed = ({ postinfo }) => {
   
    // const {name, email, subject, className, medium, salary, institute, phone, location} = postinfo;
    const { user } = useAuth();
   
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/role', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [user.email])

    const hendleApply = e => {
      

        const applicatDetails = {
            email: user.email,
            name: userData[0].name,
            gender: userData[0].gender,
            phone: userData[0].phone,
            status: 'pending',
            appliedTime: new Date()
        };


        fetch('http://localhost:4000/applicantDetails', {
            method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(applicatDetails)
        })
            .then(res => res.json())
          
            .catch(err => console.log(err))
     
            e.preventDefault();
    
    }

    const popUp = () => {
        swal({
            title: "Successfully Applied!",
            text: " ",
            icon: "success",
            button: "OK",
        });
    }

    return (



        <div className="col-md-6 ">
            <Card className="techers_card py-3 m-3 w-70">
        

                <Card.Body className="row">

                    <div className="col-md-8">
                        <Card.Text className="card_text">
                            <p className="text-success w-50"><b> ID: </b> {postinfo._id}</p>
                            <p><b> Name: </b> {postinfo.name}</p>

                            <p><b> Subject:  </b>{postinfo.subject}</p>
                            <p><b> Class: </b>{postinfo.className}</p>
                            <p><b> Medium: </b>{postinfo.medium}</p>
                            <p><b> Salary: </b>{postinfo.salary}</p>
                            <p><b> Institute: </b>{postinfo.institute}</p>
                            <p><b> Phone: </b>{postinfo.phone}</p>
                            <p><b> Location: </b>{postinfo.location}</p>




                        </Card.Text>
                    </div>
                    <div className="col-md-4">
                        <img className="cardimg mx-auto d-block" variant="top" src={stdimg1} alt="" />



                    </div>
                    <button  className='btn btn-outline-success w-50 mx-auto' id="myBtn" onClick={hendleApply}><span onClick={popUp} >Apply</span></button>
                   



                </Card.Body>
            </Card>
        </div>





    );
};

export default TeacherNewsfeed;