import React, { useEffect, useState } from 'react';
import Clients from '../Clients/Clients';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {
    const [clients,setClients] = useState([]);
  
        useEffect(() => {
            console.log("hit");
            fetch('http://localhost:4000/Clients')
                .then(res => res.json())
                // .then(data => console.log("our clients",data));
                .then(data => setClients(data ))
            
        }, [])
        
    return (
        <div>
 
            <div className="container-fluid row p-0">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-10">
                    <Clients clients={clients} ></Clients>
                    
                </div>

            </div>
        </div>
    );
};

export default Dashboard;