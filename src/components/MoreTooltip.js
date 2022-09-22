import React from 'react';
import '../css/MoreTooltip.css';

const MoreTooltip = () => {
    return (
        <div className='moretooltip'>
            <div className='moretooltip_in'>
                <i className="bi bi-bell-fill"></i>
                <p>Notification Preferences</p>
            </div>
            <hr/>
            <div className='moretooltip_in'>
                <i className="bi bi-question-square-fill"></i>
                <p>24x7 Customer Care</p>
            </div>
            <hr/>
            <div className='moretooltip_in'>
                <i className="bi bi-graph-up-arrow"></i>
                <p>Advertise</p>
            </div>
            <hr/>
            <div className='moretooltip_in'>
                <i className="bi bi-download"></i>
                <p>Download App</p>
            </div>
        </div>
    )
}

export default MoreTooltip