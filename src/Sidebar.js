import React from 'react';
import './Sidebar.css';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__option">
                <GpsFixedIcon/>
                <h4>Track Location</h4>
            </div>
            <div className='sidebar__option'>
                <SecurityOutlinedIcon/>
                <h4>Security</h4>
            </div>

            <div className='sidebar__option'>
                <FeedbackOutlinedIcon/>
                <h4>Feedback/Rating</h4>
            </div>

            <div className='sidebar__option'>
                <ChatIcon/>
                <h4>Chat</h4>
            </div>

            <div className='sidebar__option'>
                <SettingsIcon/>
                <h4>Settings</h4>
            </div>

            <div className='sidebar__option'>
                <HistoryOutlinedIcon/>
                <h4>History</h4>
            </div>
        </div>
    )
}

export default Sidebar
