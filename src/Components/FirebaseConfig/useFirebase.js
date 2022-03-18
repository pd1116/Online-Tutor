import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,  signOut } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCpWcDy2KgVm32aFsjBHdFL1TVk1EUsW0A",
    authDomain: "nline-tutor-2022.firebaseapp.com",
    projectId: "nline-tutor-2022",
    storageBucket: "nline-tutor-2022.appspot.com",
    messagingSenderId: "555367822954",
    appId: "1:555367822954:web:d215012953a44b8806fc13"
};
// const app = initializeApp(firebaseConfig);
 initializeApp(firebaseConfig);


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [Loading,setLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

//signin with google

const signInWithGoogle = (location, history) => {
    // setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            // saveUser(user.email, user.displayName, 'PUT');
            console.log(user);
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        });
}



    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('');

            })
            .catch((error) => {
                
                setAuthError(error.message)

            })
            
            .finally(()=>setLoading(false));
    }


    const loginUser = (email, password,location,history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const destination = location?.state?.from || '/';
              history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(()=>setLoading(false));

    }


    //observing user present 
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {

                setUser({})

            }
            setLoading(false)
        });

        return () => unsubscribe;

    }, [])




    const logout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
        Loading,
        authError,

    }


}

export default useFirebase;