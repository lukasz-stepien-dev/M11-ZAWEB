import React from 'react';

const Header = ({ title, images }) => {
    return (
        <header>
            <div>
                <img src={images[0]} alt="Mouse 1" />
            </div>
            <h1>{title}</h1>
            <div>
                <img src={images[1]} alt="Mouse 2" />
            </div>
        </header>
    );
};

export default Header;
