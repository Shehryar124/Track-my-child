import React from 'react'
import './Body.css'
function Body() {
    return (
        <div className='body'>
            <div className='body__index'>
                <h2>Key</h2>
                <div className='body__option'>
                    <h4>Favorite Locations</h4>
                </div>

                <div className='body__option'>
                    <h4>Restricted Locations</h4>
                </div>

                <div className='body__option'>
                    <h4>Most visited locations</h4>
                </div>
            </div>
        </div>
    )
}

export default Body 
