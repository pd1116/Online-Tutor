import React from 'react';
const Clients = ({clientsinfo}) => {
    const {name,email,gender,role,phone} = clientsinfo;
 


    return (
        <div>
            <h2>Name: { name}</h2>
            <h2>phone: { phone}</h2>
        </div>
    );
};

export default Clients;