import React from 'react';
import './AboutUs.css';


import teacher3 from '../../images/teacher3.jpg';

const AboutUs = () => {
    return (
        <div className="aboutus container">
            <hr style={{border: '2px solid black'}}></hr>
            <section class="sectionnGap"></section>
            <div className="row">
                <div className="col-md-4 pt-3">
                    <img className=" img-fluid rounded"    src={teacher3} alt="aboutimg" />


                </div>
                <div className="col-md-8 abouttutor">
                    <h1> About Online Tutor</h1>
                    <br />
                    <p className="text-secondary rounded">Online Tutor, at its core, is about helping students, parents and educators connect. However, it is also so much more. We are a team of parents and teachers, dealing with the challenges faced by students and parents in digital Bangladesh. We have built a platform to help parents connect with tutors - more importantly - we are connecting students to the power of online tutoring and so much more.</p>

                    <h3>WHAT YOU GET:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ul>
                                        <li>Connect with Verified Tutors</li>
                                        <li>In-Person Local Tutoring</li>
                                        <li>Online School and Tutoring</li>
                                    </ul>

                                </td>
                                <td>
                                    <ul>
                                        <li>Classroom:Video & Whiteboard Software</li>
                                        <li>Community Forum and Q&A </li>
                                        <li>Access to Learning Textbook Guides</li>
                                    </ul>

                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>



            </div>
            <section class="sectionnGap"></section>
        </div>
    );
};

export default AboutUs;