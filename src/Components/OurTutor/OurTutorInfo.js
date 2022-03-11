import React from 'react';
import OurTutor from './OurTutor';

const teachersData = [
    {
        name: "Nayeem Zaman",
        description: "It was an awesome experience for me in improving, especially my teaching skills to a new paradigm, I learned and benefited immensely from this site",
        versity: "Daffodil International University",
        Location: "Dhanmondi",
        icon: ''
    },
    {
        name: "Payel Kabir",
        description: "As a teacher, and most importantly, as a parent, I value education above all else. My Tutor has combined traditional methods like in-person tutoring, with the new, online tutoring via video and whiteboard, and they have even thrown in some e-learning, to provide complete educational support for our children",
        versity: "Daffodil International University",
        Location: "Mirpur",
        icon: ''
    },
    {
        name: "Shahriar Mahmud",
        description: "Amazing experience. Truly an eye-opener for several faculty like me who enrolled for the course from my institution. Thanks to both the course instructors for their wonderful synergy and contribution.",
        versity: "Independent University,Bangladesh",
        Location: "Bashundhara",
        icon: ''
    }
]

const OurTutorInfo = () => {

    return (
        <div className=" Our_Tutor container  ">
               <h1 className="title">What's Our teachers </h1>
            <h1 className="title">Says</h1>
            <hr style={{border: '2px solid black'}}></hr>

            <div className="row">
         

            {
                teachersData.map(x2 => <OurTutor x2={x2}></OurTutor>)
            }
                </div>

        </div>
    );
};

export default OurTutorInfo;