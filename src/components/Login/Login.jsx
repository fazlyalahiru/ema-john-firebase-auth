import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2>Login</h2>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email" name='email' />
            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" name='password' />
            </div>
            <button type="submit" value="Login" className='btn-submit'>Login</button>
            New to Ema John <Link to="/register">Sign up</Link>
        </div>
    );
};

export default Login;