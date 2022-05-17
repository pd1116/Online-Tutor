import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import './StudentProfile.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import Footer from '../../../Components/Footer/Footer';
import StudentNavbar from '../StudentNavbar/StudentNavbar';
import StudentSetting from '../StudentSetting/StudemtSetting';
import StudentUpdate from '../StudentUpdate/StudentUpdate';
import stdimg from '../../../images/avatar2.webp'
import { useEffect } from 'react';
const StudentProfile = () => {
    const { user  } = useAuth();
    const [userData, setUserData] = useState([]);
    const [userUpdate, setUserUpdate] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/role', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setUserData(data));
    }, [user.email])

    useEffect(() => {
        fetch('http://localhost:4000/updateinfo2')
            .then(res => res.json())
            .then(data => setUserUpdate(data))

    }, [userData])
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
                     
                    <button onClick={openModal} className="btn btn-outline-success w-50 " >Setting</button>



                </div>
                <div className="col-md-6">

                    <div className=" col-md-6 ">

                        <div className="">
                            <Card className="techers_card   my-5 py-3 w-100">
                                <img className="teacherimg mx-auto d-block" variant="top" src={stdimg} alt="" />

                                <Card.Body>
                                    <Card.Title><p><b>Account Type: </b>{userData[0]?.role}</p></Card.Title>
                                    <Card.Text className="card_text">

                                        {
                                            

                                            user?.email === userData[userData.length - 1]?.mail ?
                                                <div className="information">
                                                    <p><b> Name:  </b>{userData[userData.length - 1]?.name}</p>
                                                    <p><b> Email:  </b>{userData[userData.length - 1]?.mail}</p>
                                                    <p><b> Phone: </b>{userData[userData.length - 1]?.phone}</p>
                                                    <p><b> Gender: </b>{userData[ userData.length - 1]?.gender}</p>
                                                    <p><b> Institute: </b>{userData[ userData.length - 1]?.institute}</p>
                                                </div>
                                                :
                                                <div className="informationupdate">
                                                    <p><b> Name: </b> {userUpdate[userUpdate.length - 1]?.name}</p>
                                                    <p><b> Email:  </b>{userUpdate[userUpdate.length - 1]?.email}</p>
                                                    <p><b> Phone: </b>{userUpdate[userUpdate.length - 1]?.phone}</p>
                                                    <p><b> Gender: </b>{userUpdate[userUpdate.length - 1]?.gender}</p>
                                                    <p><b> Institute: </b>{userUpdate[userUpdate.length - 1]?.institute}</p>
                                                </div>
                                        }













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
            <StudentSetting closeModal={closeModal} modalIsOpen={modalIsOpen}></StudentSetting>
            <StudentUpdate closeModal2={closeModal2} modalIsOpen2={modalIsOpen2}></StudentUpdate>

            {/* added footer here */}
            <Footer></Footer>

        </div >
    );
};

export default StudentProfile;