import React from 'react';
import '../css/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_first'>
                <img src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Logo' />
                <div className='header_first1'>
                    <span style={{fontSize: '11px', color: 'white', fontStyle: 'italic'}}>Explore</span>
                    <span style={{fontSize: '11px', color: '#f9e107', fontStyle: 'italic'}}>Plus</span>
                    <span>
                        <img width="10px" src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='Logo Plus' />
                    </span>
                </div>
            </div>
            <div className='header_second'>
                <input placeholder="Search for products..." type="text" />
                <i class="bi bi-search"></i>
            </div>
            <div className='header_third'>
                <button>Login</button>
            </div>
            <div className='header_fourth'>
                <p>Become a Seller</p>
            </div>
            <div className='header_fifth'>
                <span>More</span>
                <i class="bi bi-caret-down-fill"></i>
            </div>
            <div className='header_sixth'>
                <i class="bi bi-cart-fill"></i>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Header