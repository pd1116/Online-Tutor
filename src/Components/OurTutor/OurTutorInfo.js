import React from 'react';
import OurTutor from './OurTutor';
import nayem from '../../images/nayem.jpg';
import payel from '../../images/payel.jpg';
import anik from '../../images/anik.jpg';

const teachersData = [
    {
        name: "Nayeem Zaman",
        description: "It was an awesome experience for me in improving, especially my teaching skills to a new level by Online Tutor, I learned and benefited immensely from this site.",
        versity: "Daffodil International University",
        Location: "Dhanmondi",
        icon: nayem
    },
    {
        name: "Payel Kabir",
        description: "As a teacher, I value education above all else. Online Tutor has combined traditional methods like online tutoring, to provide complete educational support for our children",
        versity: "Daffodil International University",
        Location: "Mirpur",
        icon: payel
    },
    {
        name: "Shahriar Mahmud",
        description: " Truly an eye-opener for several faculty like me who register this website for tutoring.Thanks to online tutor instructors for their wonderful synergy and contribution.",
        versity: "Brac University",
        Location: "Bashundhara",
        icon: anik
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
                teachersData.map(info => <OurTutor info={info}></OurTutor>)
            }
                </div>

        </div>
    );
};

export default OurTutorInfo;