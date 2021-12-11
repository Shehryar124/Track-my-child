import React from 'react';
import './Home.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Body from './Body';

function Home() {
    return (
        <div className = 'home'>
            <Header />
            <div className='home__body'>
                <Sidebar />
                <Body/>
            </div>
        </div>
    )
}

export default Home
