import React from 'react';
import '../css/LoginTooltip.css';

const LoginTooltip = () => {
    return (
        <div className='logintooltip'>
            <div className='logintooltip_in signup'>
                <h5>New Customer?</h5>
                <h5>Signup</h5>
            </div>
            <hr/>
            <div className='logintooltip_in'>
                <i className="bi bi-person-circle"></i>
                <p>My Profile</p>
            </div>
            <hr/>
            <div className='logintooltip_in'>
                <i className="bi bi-wallet2"></i>
                <p>Orders</p>
            </div>
            <hr/>
            <div className='logintooltip_in'>
                <i className="bi bi-heart-fill"></i>
                <p>Wishlist</p>
            </div>
            <hr/>
            <div className='logintooltip_in'>
                <i className="bi bi-cash"></i>
                <p>Reward</p>
            </div>
        </div>
    )
}

export default LoginTooltip