import { Button } from '@mui/material'
import React from 'react'
import './Signup.css'
function Signup() {
    return (
        <div className='signUp'>
            <div className = 'signUp__container'>
                <div className='signUp__option'>
                    <h3>First Name:</h3>
                    <input type='text'></input>
                </div>
                <div className='signUp__option'>
                    <h3>Last Name:</h3>
                    <input type='text'></input>
                </div>
                <div className='signUp__option'>
                    <h3>Email:</h3>
                    <input type='text'></input>
                </div>
                <div className='signUp__option'>
                    <h3>Contact No:</h3>
                    <input type='text'></input>
                </div>
                <div className='signUp__option'>
                    <h3>Address:</h3>
                    <input type='text'></input>
                </div>
                <div className='signUp__option'>
                    <h3>Tracker ID:</h3>
                    <input type='text'></input>
                </div>
                <Button type='submit' className='signUp__button'>
                    Create your Account
                </Button>
            </div>
        </div>
    )
}

export default Signup 
