import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
function Login() {
    return (
        <div className='login'>
            <div className='login__container'>
                <h2>Log in to your Account</h2>
                <div className='login__option'>
                    <h3>Email:</h3>
                    <input type='text' placeholder='@gmail.com'></input>
                </div>
                <div className='login__option'>
                        <h3>Password:</h3>
                        <input type='text'></input>
                </div>
                <Button className='login__button'>
                    Login
                </Button>
            </div>
                
        </div>
    )
}

export default Login;

