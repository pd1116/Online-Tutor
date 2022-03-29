import React from 'react';
import './Newsfeed.css';
import { Card } from 'react-bootstrap';
import stdicons from "../../../images/stdicons.PNG"
const Newsfeed = ({ postinfo }) => {
    console.log(postinfo);
    return (
        <div className="p-3">

            <div className="row">
                <div className="col-md-6">
                   
                    <Card className="techers_card   my-3 p-2  w-70">
                      

                        <Card.Body className="row">

                            <div className="col-md-8">
                                <Card.Text className="card_text">
                                    <p className="text-success w-50"><b> ID: </b> {postinfo._id}</p>
                                    <p><b> Name: </b> {postinfo.name}</p>
                                    <p><b> Subject:  </b>{postinfo.subject}</p>
                                    <p><b> Class: </b>{postinfo.className}</p>
                                    <p><b> Medium: </b>{postinfo.medium}</p>
                                    <p><b> Salary: </b>{postinfo.salary}</p>
                                    <p><b> Institute: </b>{postinfo.institute}</p>
                                    <p><b> Phone: </b>{postinfo.phone}</p>
                                    <p><b> Location: </b>{postinfo.location}</p>




                                </Card.Text>
                            </div>
                            <div className="col-md-4">
                                <img className="cardimg mx-auto d-block" variant="top" src={stdicons} alt="" />

                            </div>
                            {/* <button className='btn btn-success w-50'>apply</button> */}



                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Newsfeed;