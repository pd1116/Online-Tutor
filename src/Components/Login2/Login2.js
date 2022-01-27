import React, { useState } from 'react';
import Navbars from '../Navbars/Navbars';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

    const [user,setUser] = useState({})

    const handleClick = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                setUser(user);
                // ...
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
    return (
        <div>
            <Navbars></Navbars>
            <h1>fire base login</h1>
            <button onClick={handleClick} className="btn btn-outline-danger">Signin with Google</button>
        <h3>Name: {user.displayName}</h3>
        <p>Email:{user.email}</p>

        </div>
    );
};

export default Login2;