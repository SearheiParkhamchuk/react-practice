import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src="https://cdn.pixabay.com/photo/2015/04/10/08/17/lion-715852_960_720.png" alt="Logo" />
        </header>
    )
}

export default Header;