import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="aboutus">
            <section class="sectionnGap"></section>
            <div className="row">
                <div className="col-md-4">
                    <img style={{width: '90%', height: ''}} className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkn0YQQNBxin8MRXFppIRGnQPYqG-CNVNVK6ktQ6rWS_-mjMZ41szzu9YsMQoQr0GNuHo&usqp=CAU" alt="aboutimg" />


                </div>
                <div className="col-md-8 abouttutor">
                    <h1> About Online Tutor</h1>
                    <p className="text-secondary">My Tutor, at its core, is about helping students, parents and educators connect. However, it is also so much more. We are a team of parents and teachers, dealing with the challenges faced by students and parents in digital Bangladesh. We have built a platform to help parents connect with tutors - more importantly - we are connecting students to the power of online tutoring and so much more.</p>

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