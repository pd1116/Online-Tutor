import React from 'react';
import Main from '../Main/Main';

const Search = () => {
    return (
        <div className="container p-0">
            <Main></Main>
            <h1>This is search section </h1>

     
            <select class="custom-select form-control">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>


        </div>
    );
};

export default Search;