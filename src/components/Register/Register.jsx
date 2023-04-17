import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [error, setError] = useState('')
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password != confirm) {
            setError('Your password did not match')
            return
        } else if (password.length < 6) {
            setError('Your password should longer than 6 character')
            return
        }
    }
    return (
        <div className='form-container'>
            <h2>Register</h2>
            <p className='error-message'>{error}</p>
            <form action="" onSubmit={handleRegister}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name='confirm' />
                </div>
                <button type="submit" value="Login" className='btn-submit'>Sign Up</button>
            </form>
            Already have account? <Link to="/login">Login now</Link>
        </div>
    );
};

export default Register;