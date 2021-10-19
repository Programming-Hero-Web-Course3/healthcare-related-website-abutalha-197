import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div>
            <button className="btn btn-info py-2 px-5 text-dark mx-2 my-5" onClick={handleGoogleSignIn}>GoogleSignIn</button>
            <Link to="/register">New USer?</Link>
        </div>
    );
};

export default Login;