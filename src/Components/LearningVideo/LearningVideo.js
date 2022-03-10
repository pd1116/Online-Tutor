import React from 'react';
import { Carousel } from 'react-bootstrap';
import './LearningVideo.css';


const LearningVideo = () => {
    return (
        <div className="learningVideos container  ">
            <h1 className="title">Learning Videos</h1>
            <hr style={{ border: '2px solid black' }}></hr>
           <div className="row pt-4">
               
               <div className="col-md-6 ">
               <Carousel>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/r5zf-0hAaAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kWmX3pd1f10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Xyz0NpURbGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gG7uCskUOrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            </Carousel>
                   </div>
               <div className="col-md-6 ">
               <Carousel>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JcNTptn8twU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uzjA5d0QXv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                </Carousel.Item>
                <Carousel.Item>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eA8elCQ0tLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
                <Carousel.Item>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bBKYZFtcWHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Carousel.Item>
            </Carousel>
                   </div>
               </div>
          



            <section class="sectionnGap"></section>

        </div>
    );
};

export default LearningVideo;