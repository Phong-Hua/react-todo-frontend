import validator from 'validator';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/shared'

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validator.isEmail(email))
        {
            setEmailError('Email is invalid.')
            return;
        }
        setEmailError('');
        setEmail('');
        setPassword('');

        props.dispatch(handleLogin(email, password))
        console.log('Submit');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/> 
                <br/>
                {emailError.length > 0 && 
                    <p>{emailError}</p>
                }
                <br/>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
                <br/>
                <br/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default connect()(Login);