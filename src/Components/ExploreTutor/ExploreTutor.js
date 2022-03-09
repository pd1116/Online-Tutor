import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreTutor.css'

const ExploreTutor = () => {
    return (
        <div className=" container explore_tutor">
            <h1 className="py-3 text-light">Explore teacher</h1>


            <div className="Explore">

                <div className="join">
                    <h3><span >Join as a </span>STUDENT</h3>
                    <ul>
                        <li>Search for online and local tutors</li>

                        <li>Communicate with any of our tutors for free</li>
                        <li>Manage your lessons through our bookings system</li>
                        <li>If you are not satisfied with your tutor we will refund our fee</li>
                    </ul>
    
                    <div class="joinbtn"><Link class="btn btn-primary " to="/register">REGISTER</Link></div>
                </div>


                        {/* //teacher */}
                <div className="join " style={{color:'#fff',backgroundColor:'#7aa3e4' }}>
                    <h3 className="text-light"><span className="text-light">Join as a </span>TUTOR</h3>
                    <ul>
                        <li>Our site is completely free for tutors.</li>

                        <li>Create your own profile and advertise your services</li>
                        <li>Tutor both face to face or online using our interactive whiteboard</li>
                        <li>Search for tuition jobs using our search</li>
                    </ul>
 
                    <div class="joinbtn"><Link class="btn btn-outline-danger" to="/register">REGISTER</Link></div>
                </div>


            </div>
             <section class="sectionnGap"></section>

        </div>
    );
};

export default ExploreTutor;