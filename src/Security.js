import { Button } from '@mui/material';
import React from 'react';
import './Security.css';
function Security() {
    return (
        <div className='security'>
            <Button className='security__amb'>
                Ambulance
            </Button>
            <Button className='security__pol'>
                Police
            </Button>
            <Button className='security__fire'>
               Fire Department
            </Button>
        </div>
    )
}

export default Security
