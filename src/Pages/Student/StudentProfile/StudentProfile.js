import React, { useState } from 'react';

import Header from '../../../Components/Header/Header';

import './StudentProfile.css';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/FirebaseConfig/useAuth';
// import TeacherSetting from '../TeacherSetting/TeacherSetting';
// import TeacherUpdate from '../TeacherUpdate/TeacherUpdate';
import Footer from '../../../Components/Footer/Footer';
import StudentNavbar from '../StudentNavbar/StudentNavbar';
import StudentSetting from '../StudentSetting/StudemtSetting';
const StudentProfile= () => {
    const { user, logout } = useAuth();
    console.log("My user:,", user);
    const Handle = () => {
        alert("rs")
    }

    // modal setup
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openModal2() {
        setIsOpen2(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    function closeModal2() {
        setIsOpen2(false);
    }

    return (
        <div className="StudentProfile">
            <Header></Header>
           <StudentNavbar></StudentNavbar>
            <div className="row ">
                <div className="prfilenav  col-md-6  pt-5">
                    <Link className="btn  btn-success s w-50" to="/StudentProfile">About</Link><br />
                    <Link className="btn btn-outline-success w-50" to="/posts">Post</Link> <br />


                    <button onClick={openModal} className="btn btn-outline-success w-50 " >Setting</button>



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
                             
                                    <button onClick={openModal2} className="btn btn-success">Update info</button>
                                    {/* <button onClick={openModal} className="btn btn-outline-success w-50 " >Setting</button>  */}

                                </Card.Body>
                            </Card>
                        </div>



                    </div>

                </div>



            </div>


            {/* modal */}
            {/* passing modal info */}
            <StudentSetting closeModal={closeModal} modalIsOpen={modalIsOpen}></StudentSetting>
            {/* <TeacherUpdate closeModal2={closeModal2} modalIsOpen2={modalIsOpen2}></TeacherUpdate> */}

            {/* added footer here */}
            <Footer></Footer>

        </div>
    );
};

export default StudentProfile;