import React from 'react';
import TitleHeader from "./titleHeader/TitleHeader.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'

const Header = () => {
    return (
        <>
            <header className='header'>
                <TitleHeader/>
            </header>
        </>
    );
};

export default Header;