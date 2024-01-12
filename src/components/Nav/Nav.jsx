import React from 'react';
import './Nav.css';
import homesvg from './images/home.svg';

const Nav = () => {
    const heading = ['About Us', 'Features', 'Support'];

    return (
       
            <div className="nav-bar">
                <div className="left-box">
                    <div className="nav-logo">
                        <img src={''} height={100}></img>
                    </div>
                    <div className="nav-child">
                        {heading.map((item, idx) => (
                            <div className="heading" key={idx}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-Schedule">Download App</div>
            </div>
        
    );
};

export default Nav;