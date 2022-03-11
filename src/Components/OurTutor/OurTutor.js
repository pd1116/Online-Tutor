import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './OurTutor.css';
import nayeem from '../../images/student 4.jpg'


const OurTutor = ({ x2 }) => {
    return (
        <div className=" col-md-4 ">

            <div className="div">
            <Card  className="w-70 mx-5 my-5 img-fluid p-2">
                <img className="teacherimg mx-auto d-block"  variant="top" src={nayeem}alt="" />
             
                <Card.Body>
                    <Card.Title>Name: {x2.name}</Card.Title>
                    <Card.Text>
                        <p><b> Institute: </b>{x2.versity}</p>
                        <p><b> Location: </b>{x2.Location}</p>

                        <small>{x2.description}</small>
                    </Card.Text>

                </Card.Body>
            </Card>
                </div>

            <section class="sectionnGap"></section>

        </div>
    );
};

export default OurTutor;