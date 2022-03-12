import React from 'react';
import Navbars from '../Navbars/Navbars';
import Search from '../Search/Search'
import'./HomeSearch.css'

const HomeSearch = () => {
    return (
        <div className="Homesearch_tutor">
        
         <div className="">

                {/* <section class="sectionnGap"></section> */}
            {/* <Navbars></Navbars> */}
            {/* <h1 className="text-center text-white">Find a Tutor </h1> */}
            
            <Search></Search>
            <section class="sectionnGap"></section>
         </div>
            
        </div>
    );
};

export default HomeSearch;