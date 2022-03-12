import React from 'react';
import Search from '../Search/Search'
import'./HomeSearch.css'

const HomeSearch = () => {
    return (
        <div className="Homesearch_tutor  ">
        
            <section class="sectionnGap"></section>
            <h1 className="text-center text-white">Find a Tutor </h1>
            <br />
            <Search></Search>
            <section class="sectionnGap"></section>
            
        </div>
    );
};

export default HomeSearch;