import React from 'react';
import { Link } from 'react-router-dom';
import Navbars from '../Navbars/Navbars';

const Qus1 = () => {
    return (
        <div className=" allres">

 

            <div className="container qus">
                <h1 class="text-left pt-5">How to start tutoring at Online Tutor</h1>
                <hr />

                <p>Our aim here at Onlinrr Tutor is to bring tutors and students together. As a tutor, we want to make the experience of using our service as efficient as possible. We know there are many students out there looking for a tutor just like you, but there are a number of things you can do to help us achieve our goals. First of all, have a browse through some of the existing tutors on the site - you will be able to find then via the Onlinrr Tutor homepage, using the tutor search facility. Clicking on any individual that your search criteria yields will bring up that tutors profile. The profile is where you can be creative! This is what prospective students will see, and will be the inducement in choosing you as their teacher! You will state your hourly rate, the times you are available to teach, and the locus of your educational domain. If you are a seasoned tutor you may already have decided how far you are willing to travel; conversely, you may stipulate that pupils come to your place of residence. All this information will be presented on your profile. Any past experience of tutoring will be listed, as well at the availability of references. Don't worry if you are new to tutoring - even the best and most experienced of teachers had their first pupil. Along with your academic qualifications (GCSE's, A levels and degrees), a CRB check if held is presented on their homepage. This is a feature we at Onlinrr Tutor have always insisted upon displaying before any contact is made.</p>
                <br></br>
                <p className="text-secondary">Most tutors accede to the option of making a photo of themselves available to potential students, but this is certainly not obligatory. You will also be able to write a little about yourself, such as your profession, your hobbies and interests. This is an important part of the homepage, as it lets students know what kind of a person you are. Let us not forget the most vital piece of information that you can display: the subjects you are offering to teach! These will be clearly listed near the top of your homepage, with the price of each per hour of tuition. If the subjects are of national curriculum level you will state here what grade you teach - e.g. primary, ks2, GCSE or A level. You can offer to tutor just one subject, or as many as ten or even more, and vary the price per hour of each.</p>

                <p className="text-secondary">If all this sounds tempting, why not <Link to='/register'> sign up </Link> today? Maybe you have been tutoring for some time, but remain frustrated by the small number of students you currently teach - if so Tutor Hunt could be perfect for you! We specialise in bringing those students who are in need of your educational expertise to you, and we are justly proud of the success of our service. Signing up is quick and easy, and within minutes you could be constructing your own profile. There are likely many students, even as you read these words, scouring our site looking for a teacher just like you. Why not put all those academic subjects to good use, and let your education, which you worked so earnestly to acquire, now work and earn some money for you?

                </p></div>

        </div>
    );
};

export default Qus1;