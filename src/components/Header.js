import React from 'react';
import '../css/Header.css';
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import MoreTooltip from './MoreTooltip';
import LoginTooltip from './LoginTooltip';
import { Link } from 'react-router-dom';

const Header = ({totalItem}) => {
    return (
        <div className='header'>
            <div className='header_first'>
                <Link to="/">
                    <img src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='Logo' />
                    <div className='header_first1'>
                        <span style={{fontSize: '11px', color: 'white', fontStyle: 'italic'}}>Explore</span>
                        <span style={{fontSize: '11px', color: '#f9e107', fontStyle: 'italic'}}>Plus</span>
                        <span>
                            <img width="10px" src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='Logo Plus' />
                        </span>
                    </div>
                </Link>
            </div>
            <div className='header_second'>
                <input placeholder="Search for products..." type="text" />
                <i className="bi bi-search"></i>
            </div>
            <div className='header_third'>
                <Tippy
                    content={<LoginTooltip></LoginTooltip>}
                    interactive={true}
                    theme="light"
                    offset={[5, 0]}
                    placement="bottom"
                >
                    <button>Login</button>
                </Tippy>
            </div>
            <div className='header_fourth'>
                <Link to="/products"><p>All Products</p></Link>
            </div>
            <div className='header_fifth'>
                <Tippy
                    content={<MoreTooltip></MoreTooltip>}
                    interactive={true}
                    theme="light"
                    offset={[5, 0]}
                >
                    <span className="tp">More
                        <i className="bi bi-caret-down-fill"></i>
                    </span>
                </Tippy>
            </div>
            <div className='header_sixth'>
                <Link to="/cart">
                    <i className="bi bi-cart-fill position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle badge text-bg-danger">{totalItem}</span>
                    </i>
                    <p>Cart</p>
                </Link>
            </div>
        </div>
    )
}

export default Header