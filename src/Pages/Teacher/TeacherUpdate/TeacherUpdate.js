import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import swal from 'sweetalert';
import './TeacherUpdate.css';
import useAuth from '../../../Components/Login/FirebaseConfig/useAuth';
import post from '../../../images/post.png';
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
const TeacherUpdate = ({ modalIsOpen2, closeModal2 }) => {
    const [loginData, setLoginData] = useState({});
    const [isUser, setIsUser] = useState(false);
    const { user,Loading } = useAuth();
    useEffect(() => {
        fetch('http://localhost:4000/isUser', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            
            .then(data => setIsUser(data));
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
        fetch('http://localhost:4000/UpdateTutor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData)
            })
                .then(res => res.json())

                .then(data => setLoginData(data))
                .catch(err => console.log(err))
        
       
        console.log("User ki ache? ", isUser);
        if (isUser) {
            console.log(isUser[0]._id);
            fetch(`http://localhost:4000/teacherUpdate/${isUser[0]._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginData),
            })
            .then(res => res.json())
            .then(data => setIsUser(data))
        
        }
        else {
            fetch('http://localhost:4000/UpdateTutor', {
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
            title: "Your information is Updated!",
            text: " ",
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
                        <Typography className="text-center " variant="body1" gutterBottom>     <h5>Update Tutor info</h5></Typography>


                    </div>
                    <div className="col-md-2 text-center  ">
                        <button type="button" className=" btn btn-outline-danger " onClick={closeModal2}>x</button>
                    </div>
                </div>
                <Grid container spacing={2}>
                    <Grid item sx={{ mt: 3 }} xs={12} md={6}>

                        {!Loading && <form onSubmit={handleLoginSubmit}>

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Location"
                                name="location"
                                onBlur={handleOnBlur}
                                variant="standard" />


                            <div className="Medium pt-2">
                                <div onBlur={handleOnBlur}>
                                    <label className="mx-2" >Medium</label>
                                    <input className="mx-1" type="radio" value="Bangla" name="medium" /> Bangla
                                    <input className="mx-1" type="radio" value="English" name="medium" /> English
                                </div>
                            </div>

                            <div className="row">
                                <div class="form-group w-75 mx-auto p-2 col " onBlur={handleOnBlur}>
                                    <label className="mx-2" >Select salary</label>
                                    <select class="form-control p-3" name="salary" aria-label="Default select example">

                                        <option value="Not set" disabled={true}>Select salary</option>
                                        <option value="1000-2000">1000-2000</option>
                                        <option value="2000-5000">2000-5000</option>
                                        <option value="5000-10000">5000-10000</option>
                                        <option value="10000-15000">10000-15000</option>
                                    </select>

                                </div>
                                <div class="form-group w-50 p-2 col " onBlur={handleOnBlur}>
                                    <label className="mx-2 " >Class</label>
                                    <select class="form-control p-3 " name="class" aria-label="Default select example">

                                        <option value="Not set" disabled={true}>Select Class</option>
                                        <option value="One-Three">One-Three</option>
                                        <option value="Four-Five">Four-Five</option>
                                        <option value="Six-Eight">Six-Eight</option>
                                        <option value="Nine-Ten">Nine-Ten</option>
                                        <option value="Eleven-Twelve">Eleven-Twelve</option>
                                    </select>

                                </div>
                            </div>



                            <div class="form-group w-75  p-2 " onBlur={handleOnBlur}>
                                <label className="mx-2" >Select Subject</label>
                                <select class="form-control p-3" name="subject" aria-label="Default select example">

                                    <option value="Not set" disabled={true}>Select Subject</option>
                                    <option value="Bangla">Bangla</option>
                                    <option value="English">English</option>
                                    <option value="Math">Math</option>
                                    <option value="General Science"> General Science</option>
                                    <option value="ICT"> ICT</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="Math">Physics</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Social Science">Social Science</option>
                                    <option value="Religion">Religion</option>
                                    <option value="Higher Math">Higher Math</option>
                                    <option value="Accounting">Accounting</option>
                                    <option value="Finance">Finance</option>


                                </select>

                            </div>



                            <Button onClick={popUp} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Update</Button>

                        </form>}
                        {
                            Loading && <CircularProgress />
                        }




                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', paddingTop: "30px" }} src={post} alt="" />
                    </Grid>
                </Grid>




            </Modal>

        </div>
    );
};

export default TeacherUpdate;