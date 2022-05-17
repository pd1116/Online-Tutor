import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Grid, TextField, Typography } from '@mui/material';
import './StudentUpdate.css';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import swal from 'sweetalert';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
const StudentUpdate = ({ modalIsOpen2, closeModal2 }) => {
    const [loginData, setLoginData] = useState({});
    const [isStudent, setIsStudent] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:4000/isStudent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())

            .then(data => setIsStudent(data));
    }, [user.email])

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const email = user.email;
        const newLoginData = { ...loginData, email };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        console.log("studentupdate", isStudent);
        fetch('http://localhost:4000/UpdateStudent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())

            .then(data => setLoginData(data))
            .catch(err => console.log(err))


        if (isStudent) {
            console.log(isStudent[0].email);
            console.log(isStudent[0]._id);
            fetch(`http://localhost:4000/studentUpdate/${isStudent[0]._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log("Updated Successfully")
                    }
                })
        }
        else {
            fetch('http://localhost:4000/UpdateStudent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())

                .then(data => setLoginData(data))
                .catch(err => console.log(err))
        }

        e.preventDefault();
    }

    const popUp = () => {
        swal({
            title: "Your Information is Updated!",
            text: "",
            icon: "success",
            button: "OK",
        });
    }

    return (
        <div >

            <Modal

                isOpen={modalIsOpen2}

                onRequestClose={closeModal2}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row ">
                    <div className="col-md-10  ">
                        <Typography className="text-center " variant="body1" gutterBottom>     <h5>Update Student info</h5></Typography>


                    </div>
                    <div className="col-md-2 text-center  ">
                        <button type="button" className=" btn btn-outline-danger " onClick={closeModal2}>x</button>
                    </div>
                </div>
                <Grid container spacing={2}>

                    <Grid item sx={{ mt: 2 }} xs={12} md={12}>

                        <form onSubmit={handleLoginSubmit}>
                            <div className="row   ">
                                <div className="col-12 w-70" >

                                    <Grid item sx={{ mt: 5 }} xs={12} md={12}>


                                        <TextField
                                            sx={{ width: '75%', m: 1 }}
                                            id="standard-basic"
                                            label="Your Name"
                                            name="name"
                                            onBlur={handleOnBlur}
                                            variant="standard" />

                                        <TextField
                                            sx={{ width: '75%', m: 1 }}
                                            id="standard-basic"
                                            label="Your Phone Number"
                                            name="phone"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        <TextField
                                            sx={{ width: '75%', m: 1 }}
                                            id="standard-basic"
                                            label="Your Institute"
                                            name="institute"
                                            onBlur={handleOnBlur}
                                            variant="standard" />
                                        <div className="Gender pt-2">
                                            <div onBlur={handleOnBlur}>
                                                <label className="mx-2" >Gender</label>
                                                <input className="mx-1" type="radio" value="Male" name="gender" /> Male
                                                <input className="mx-1" type="radio" value="Female" name="gender" /> Female
                                            </div>
                                        </div>
                                    </Grid>
                                    <button onClick={popUp} className="btn btn-success d-flex mx-auto mb-2 pt-2  " sx={{ width: '70%', my: 1 }} type="submit" >Update Information </button>
                                </div>

                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Modal>

        </div>
    );
};

export default StudentUpdate;