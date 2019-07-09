import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                <div className={`${css.dialog} ${css.active}`}>
                    <NavLink to='/dialogs/1'>Siarhei</NavLink>    
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/2'>Marta</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/3'>Dima</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/4'>Katya</NavLink>
                </div>
                <div className={css.dialog}>
                    <NavLink to='/dialogs/5'>Olga</NavLink>
                </div>
            </div>
            <div className={css.messages}>
                <div className={css.message}>Hi</div>
                <div className={css.message}>Hello</div>
                <div className={css.message}>How are u doing?</div>
            </div>
        </div>    
    );
}

export default Dialogs