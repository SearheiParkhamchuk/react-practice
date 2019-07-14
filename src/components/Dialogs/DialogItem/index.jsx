import React from 'react';
import css from './DialogItem.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={css.dialog}>
            <NavLink activeClassName={css.active} to={path}>{props.name}</NavLink>    
        </div>
    );
}

export default DialogItem;