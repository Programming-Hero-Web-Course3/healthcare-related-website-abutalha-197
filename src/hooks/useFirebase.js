
import React, {useEffect, useState} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import firebaseAuthentication from '../firebase/firebase.init';

firebaseAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
        })
    },[])

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    return {
        user,
        error,
        handleGoogleSignIn,
        logout
    }
};

export default useFirebase;