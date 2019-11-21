import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import avatar from './../../assets/avatar.png';

const Header = props => {
    const loginUserView = () => {
        return <div>
            {props.profile ? <div style={{ display: 'inline-block' }}><img src={props.profile.photos.small ? props.photos.small : avatar} alt="avatar"/></div> : <></>}
            <div style={{ display: 'inline-block', verticalAlign: 'top' }}>{props.login}</div>
        </div>
    }
    return (
        <header className={css.header}>
            <img src="https://cdn.pixabay.com/photo/2015/04/10/08/17/lion-715852_960_720.png" alt="Logo" />
            <div style={{ float: 'right', color: '#000' }}>
                { props.isAuth ? loginUserView() : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;