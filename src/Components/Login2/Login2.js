import React, { useState } from 'react';
import Navbars from '../Navbars/Navbars';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// import firebaseConfig from '../FirebaseConfig/firebaseConfig'
const firebaseConfig = {
    apiKey: "AIzaSyCpWcDy2KgVm32aFsjBHdFL1TVk1EUsW0A",
    authDomain: "nline-tutor-2022.firebaseapp.com",
    projectId: "nline-tutor-2022",
    storageBucket: "nline-tutor-2022.appspot.com",
    messagingSenderId: "555367822954",
    appId: "1:555367822954:web:d215012953a44b8806fc13"
};

const app = initializeApp(firebaseConfig);
const Login2 = () => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({
        issignIn: false,
        name: '',
        email: '',
        pass: '',
        photo: ''
    })

    // sign in pop up
    const handleClick = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // const user = result.user;
                const { displayName, email, photoURL } = result.user;

                const userSignIn = {
                    issignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL

                }

                setUser(userSignIn);

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


    }

    // sign out pop up
    const handleSignout = () => {


        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.

            const userSignOut = {
                issignIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(userSignOut)
        }).catch((error) => {
            // An error happened.
        });

    }
    const handleBlur = (e) => {
        let isFormValid =true ;
        // if (e.target.name === 'name') {
           
        //     isFormValid = (e.target.value);
        // }
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'pass') {
            const passLengthValid = (e.target.value).length >= 6;
            const passNumberValid = /(?=.*[0-9])/.test(e.target.value);
            isFormValid = (passLengthValid && passNumberValid);
        }
       
        if (isFormValid) {
            const newUser = {...user};
            newUser[e.target.name] =  e.target.value;
            setUser(newUser);
        }

    }
    const handleSubmit = () => {



    }
    return (
        <div>
            <Navbars></Navbars>
            <h1>fire base login</h1>
            {
                user.issignIn ? <button onClick={handleSignout} className="btn btn-outline-danger">Sign Out</button> :

                    <button onClick={handleClick} className="btn btn-outline-danger">Sign In </button>
            }
            {/* <h3>Name: {user.displayName}</h3>
        <p>Email:{user.email}</p> */}

            {
                user.issignIn && <div>

                    <img className="img-thumbnail mt-3" src={user.photo} alt="" />
                    <h4> Welcome, {user.name}</h4>
                    <p> Email: {user.email}</p>

                </div>

            }

            <br />
            <h1>New user Authentication</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Pass: {user.pass}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onBlur={handleBlur} id="" required placeholder="Your name"/>
                <br />
                <input type="text" name="email" id="" onBlur={handleBlur} placeholder="Enter your email address" required />
                <br />
                <input type="password" name="pass" id="" onBlur={handleBlur} placeholder="Enter your email password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default Login2;