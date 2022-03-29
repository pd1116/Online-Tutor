import React, { useEffect, useState } from 'react';
import './TeacherNewsfeed.css'
import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import stdicons from "../../../images/stdicons.PNG"




const TeacherNewsfeed = ({ postinfo }) => {
    const { user, logout } = useAuth();

    const [notifications, setNotifications] = useState(false);


    const hendleApply = () => {
        // console.log(userData[0].name);
        console.log(user.email);

    }
    return (
        

           
                <div className="col-md-6 ">
                    <Card className="techers_card py-3 m-3 w-70">
                        {/* <img className="cardimg mx-auto d-block" variant="top" src="" alt="" /> */}

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
                                <img className="cardimg mx-auto d-block" variant="top" src={stdicons} alt="" />

                            </div>
                            <button className='btn btn-outline-success w-50 mx-auto' onclick={hendleApply}>Apply</button>



                        </Card.Body>
                    </Card>
                </div>


          

       
    );
};

export default TeacherNewsfeed;