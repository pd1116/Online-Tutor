import React from 'react';
import './Newsfeed.css';
import { Card } from 'react-bootstrap';
const Newsfeed = ({postinfo}) => {
    console.log(postinfo);
    return (
        <div>

            <div className="row">
                <div className="col-md-6">
                    <Card className="techers_card   my-5 py-3 w-70">
                    <img className="cardimg mx-auto d-block" variant="top" src="" alt="" />

                        <Card.Body>
                           
                            <Card.Text className="card_text">
                                <p><b> Name: </b> {postinfo.name }</p>
                                <p><b> Subject:  </b>{postinfo.subject}</p>
                                <p><b> Class: </b>{postinfo.className}</p>
                                <p><b> Medium: </b>{ postinfo.medium}</p>
                                <p><b> Salary: </b>{postinfo.salary}</p>
                                <p><b> Institute: </b>{postinfo.institute}</p>
                                <p><b> Phone: </b>{ postinfo.phone}</p>
                                <p><b> Location: </b>{postinfo.location }</p>




                            </Card.Text>
                            <button className='btn btn-success w-50'>apply</button>

                          

                        </Card.Body>
                    </Card>
                </div>


            </div>

        </div>
    );
};

export default Newsfeed;