import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './OurTutor.css';
// import nayeem from '../../images/student 4.jpg'


const OurTutor = ({ info }) => {
    return (
        <div className=" col-md-4 ">

            <div className="">
            <Card  className="techers_card   my-5 py-3 w-100">
                <img className="teacherimg mx-auto d-block"  variant="top" src={info.icon}alt="" />
             
                <Card.Body>
                    <Card.Title>Name: {info.name}</Card.Title>
                    <Card.Text  className="card_text">
                        <p><b> Institute: </b>{info.versity}</p>
                        <p><b> Location: </b>{info.Location}</p>

                        <small>{info.description}</small>
                    </Card.Text>

                </Card.Body>
            </Card>
                </div>

            <section class="sectionnGap"></section>

        </div>
    );
};

export default OurTutor;