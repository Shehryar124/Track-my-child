import React from 'react'
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import QuizIcon from '@mui/icons-material/Quiz';
import { Avatar } from '@mui/material';
function Header() {
    return (
        <div className = 'header'>
            <div className = 'header__left'>
                <div className='header__avatar'>
                    <Avatar className='header__user' src='https://scontent.fisb17-1.fna.fbcdn.net/v/t1.18169-9/14955976_1014201018725979_8865916219997238837_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2yL2CI0BCuIAX9CEtmA&_nc_ht=scontent.fisb17-1.fna&oh=edcd79ce551a6bc1b10b44dc44eba977&oe=61DBA185' alt = ''/>
                    <h3>Shehryar Khan</h3>
                </div>
                <div className = 'header__option'>
                    <HomeIcon/>
                    <h3>Home</h3>
                </div>
                <div className = 'header__option'>
                    <InfoIcon/>
                    <h3>About us</h3>
                </div>
            </div>
            <div className = 'header__title'>
                <h1>Track My Child</h1>
            </div>
            <div className = 'header__right'>
                <div className='header__option'>
                    <ListIcon/>
                    <h3>Features</h3>
                </div>

                <div className='header__option'>
                    <QuizIcon/>
                    <h3>FAQs</h3>
                </div>
                <div className = 'header__search'>
                    <input type = 'text' placeholder = 'Search'></input>
                    <SearchIcon/>
                </div>
            </div>

        </div>
    )
}

export default Header
