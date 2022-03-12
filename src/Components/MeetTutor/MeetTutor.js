import React from 'react';
import './MeetTutor.css';
import teacher1 from '../../images/teacher.jpg';




const MeetTutor = () => {
    return (
        <div className="meetTutor container ">
            <h1 className="pt-5">Meet the best Online tutor in BD</h1>
            <div className="row pt-5 ">
                <div className="onlinetutor col-md-8 col-sm-12">
                    <h2><strong>1. In-Person Tutors</strong></h2>
                    <p><span className="text-secondary" style={{ fontSize: '18px' }}>We have local tutors across Bangladesh from the very best universities who can tutor you one-to-one. You can search tutors by Medium, Class, Subject and Location. It is as simple as 1-2-3 click!</span></p>


                    <h2><strong>2. Online Tutors</strong></h2>
                    <p><span className="text-secondary" style={{ fontSize: '18px' }}>The highest calibre tutors charging the best rates could be on the other side of the city, so why should you miss out? My Tutor has built-in video and whiteboard technology you can use for FREE!</span></p>
                    <h2><strong>3. Coaching and Groups</strong></h2>
                    <p><span className="text-secondary" style={{ fontSize: '18px' }}>Some students excel in &nbsp; coaching &nbsp; sessions - others thrive in group tutoring sessions. These are all tools to help you achieve your educational goals. We give you a choice to use the tool that fits you.</span></p>
                </div>

                <div className="onlinetutor col-md-4 col-sm-12">
                   <img   className=" img-fluid rounded"  src={teacher1} alt="img" />
                   
                </div>


            </div>

        </div>
    );
};

export default MeetTutor;