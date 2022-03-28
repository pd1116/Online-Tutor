import React, { useEffect, useState } from 'react';
import './TeacherNewsfeed.css'
import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';





const TeacherNewsfeed = ({postinfo}) => {
    const { user, logout } = useAuth();

    const [notifications,setNotifications] = useState(false);


  const hendleApply=()=>{
    // console.log(userData[0].name);
    console.log(user.email);

  }
    return (
        <div>

            <div className="row">
                <div className="col-md-6">
                    <Card className="techers_card   my-5 py-3 w-70">
                    <img className="cardimg mx-auto d-block" variant="top" src="" alt="" />

                        <Card.Body>
                           
                            <Card.Text className="card_text">
                            <p><b> Name: </b> {postinfo.name }</p>
                                <p><b> Subject:  </b>{postinfo.subject}</p>
                                <p><b> Class: </b>{postinfo.className}</p>
                                <p><b> Medium: </b>{ postinfo.medium}</p>
                                <p><b> Salary: </b>{postinfo.salary}</p>
                                <p><b> Institute: </b>{postinfo.institute}</p>
                                <p><b> Phone: </b>{ postinfo.phone}</p>
                                <p><b> Location: </b>{postinfo.location }</p>




                            </Card.Text>
                            <button className='btn btn-success w-50' onClick={hendleApply}>apply</button>

                          

                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default TeacherNewsfeed ;