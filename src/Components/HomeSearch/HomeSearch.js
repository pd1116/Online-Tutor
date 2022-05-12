import React from 'react';
 
import Search from '../Search/Search'
import './HomeSearch.css'

const HomeSearch = () => {
    return (
        <div className="Homesearch_tutor">
            {/* <div className="row">
                <div className="col-md-4">
                    <Search></Search>
                </div>
                <div className="col-md-4">
                    <Carousel>
                        <Carousel.Item>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/V8y4DD6W4bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div> */}
            <Search></Search>

            <div>





                <section class="sectionnGap"></section>
            </div>

        </div>
    );
};

export default HomeSearch;