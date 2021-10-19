import React, { useState } from 'react';
import './Register.css'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile, FacebookAuthProvider } from "firebase/auth";
import firebaseAuthentication from '../../firebase/firebase.init';
import { useHistory } from 'react-router';
firebaseAuthentication();

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false)
    const history = useHistory();
    const auth = getAuth();
    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {

            })
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Should atleast 6 character')
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password Should atleast 1 capital letter')
            return;
        }
        
        console.log(email, password)
        isLogin ? processLogin(email, password) : createNewUser(email, password)

        

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                history.push('/home');
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                // verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message)
            })

        
    }

    return (
        <div className='register py-5'>
            <h3>Please {isLogin ? 'Login' : 'Register'}</h3>
            <form onSubmit={handleRegistration}className="w-50 p-5  mx-auto border">
                {!isLogin && <div class="row mb-3">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input onBlur={handleName} type="text" class="form-control" id="name"/>
                    </div>
                </div>}
                <div class="row mb-3">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input onChange={handleEmailChange} type="email" class="form-control" id="email"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="password" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input onChange={handlePasswordChange} type="password" class="form-control" id="password"/>
                    </div>
                </div>
                <div class="form-check">
                    <input onChange={toggleLogin} className="form-check-input ms-5" type="checkbox" id="gridCheck1" />
            
                    <span className="form-check-label" htmlFor="gridCheck1">
                        Already registered?
                    </span>
                </div>
                <div className="text-danger">{error}</div>
                <button type="submit" class="mt-2 btn btn-primary"> {isLogin ? 'Login' : 'Register'}</button>
            </form>
        </div>
    );
};

export default Register;