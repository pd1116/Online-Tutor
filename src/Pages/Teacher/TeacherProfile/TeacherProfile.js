import React, { useState } from 'react';

import Header from '../../../Components/Header/Header';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
import './TeacherProfile.css';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/FirebaseConfig/useAuth';
import TeacherSetting from '../TeacherSetting/TeacherSetting';
const TeacherProfile = () => {
    const { user, logout } = useAuth();
    console.log("My user:,", user);
    const Handle=()=>{
        alert("rs")
    }

    // modal setup
    const [modalIsOpen, setIsOpen] = useState (false);

    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div>+
            <Header></Header>
            <TeacherNavbar></TeacherNavbar>
            <div className="row">
                <div className="prfilenav col-md-6 pt-5">
           
                    <Link className="btn btn-outline-success w-50" to="/posts">Post</Link> <br />
                    <Link className="btn btn-outline-success w-50" to="/teacherabout">About</Link><br />
                  
                  <button onClick={openModal} className="btn btn-outline-success w-50 " to="/Setting">Setting</button> 



                </div>
                <div className="col-md-6">

                    <div className=" col-md-6 ">

                        <div className="">
                            <Card className="techers_card   my-5 py-3 w-100">
                                <img className="teacherimg mx-auto d-block" variant="top" src={user.photoURL} alt="" />
                                
                                <Card.Body>
                                    <Card.Title><p><b>Account Type: </b></p></Card.Title>
                                    <Card.Text className="card_text">
                                        <p><b> Name: </b> {user.displayName}</p>
                                        <p><b> Email:  </b>{user.email}</p>
                                        <p><b> Phone: </b>{ }</p>
                                        <p><b> Gender: </b>{ }</p>
                                        <p><b> Institute: </b>{ }</p>




                                    </Card.Text>
                                    <Card.Title>Tution Information </Card.Title>
                                    <Card.Text className="card_text">
                                        <p><b> Medium: </b>{ }</p>
                                        <p><b> Class: </b>{ }</p>
                                        <p><b> Subject: </b>{ }</p>
                                        <p><b> Salary: </b>{ }</p>
                                        <p><b> Location: </b>{Location}</p>


                                    </Card.Text>
                                    <button className="btn btn-success">Update info</button>

                                </Card.Body>
                            </Card>
                        </div>

                        <section class="sectionnGap"></section>

                    </div>

                </div>



            </div>


        {/* modal */}
        <TeacherSetting closeModal={closeModal} modalIsOpen={modalIsOpen}></TeacherSetting>

        </div>
    );
};

export default TeacherProfile;