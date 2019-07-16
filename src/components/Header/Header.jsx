import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src="http://logodust.com/img/free/logo46.png" alt="Logo" />
        </header>
    )
}

export default Header;