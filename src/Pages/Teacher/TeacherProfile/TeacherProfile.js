import React, { useState } from 'react';

import Header from '../../../Components/Header/Header';
import TeacherNavbar from '../TeacherNavbar/TeacherNavbar';
import './TeacherProfile.css';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import TeacherSetting from '../TeacherSetting/TeacherSetting';
import TeacherUpdate from '../TeacherUpdate/TeacherUpdate';
import Footer from '../../../Components/Footer/Footer';
import { useEffect } from 'react';
const TeacherProfile = () => {

    const { user, logout } = useAuth();
    const [userData, setUserData] = useState([]);
    console.log(user.email);
    console.log(userData);
    useEffect(() => {
        fetch('http://localhost:4000/role', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [])

   
    
    
//    console.log(user.email);

    useEffect(() => {
        fetch('http://localhost:4000/role',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => console.log(" role of user:",data));
    }, [])
   
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
        <div className="teacherProfile">
            <Header></Header>
            <TeacherNavbar></TeacherNavbar>
            <div className="row ">
                <div className="prfilenav  col-md-6  pt-5">
                    <Link className="btn  btn-success s w-50" to="/teacherprofile">About</Link><br />
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
                                        <p><b> Name: </b> {userData[0].name}</p>
                                        <p><b> Email:  </b>{userData[0].mail}</p>
                                        <p><b> Phone: </b>{userData[0].name}</p>
                                        <p><b> Gender: </b>{userData[0].gender}</p>
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
                                    <button onClick={openModal2} className="btn btn-success">Update info</button>
                                   

                                </Card.Body>
                            </Card>
                        </div>



                    </div>

                </div>



            </div>


            {/* modal */}
            {/* passing modal info */}
            <TeacherSetting closeModal={closeModal} modalIsOpen={modalIsOpen}></TeacherSetting>
            <TeacherUpdate closeModal2={closeModal2} modalIsOpen2={modalIsOpen2}   ></TeacherUpdate>

            {/* added footer here */}
            <Footer></Footer>

        </div>
    );
};

export default TeacherProfile;