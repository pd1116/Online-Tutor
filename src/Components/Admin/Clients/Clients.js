import React from 'react';
const Clients = ({ clients }) => {
    // const {name,email,gender,role,phone} = clientsinfo;

    console.log(clients);

    return (
        <div className="clients">
            <h2>Total Clients: {clients.length}</h2>
            <table className="table table-borderless">

                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Gender</th>
                        <th className="text-secondary" scope="col">Role</th>
                    </tr>
                </thead>

                <tbody className="text-none">
                    {
                        clients.map((clients, index) =>
                            <tr >
                                <td className="text-danger"> {clients.name}</td>
                                <td> {clients.mail}</td>
                                <td> {clients.phone}</td>
                                <td> {clients.gender}</td>
                                <td> {clients.role}</td>

                            </tr>

                        )
                    }
                </tbody>

            </table>
        </div>


    );
};

export default Clients;