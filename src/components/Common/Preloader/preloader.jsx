import React from 'react';
import style from './preloader.module.css';
import preloader from './../../../assets/loader.svg';

export const Preloader = props => {
    return <div className={ style.loader_wrapper }><img src={preloader} alt="preloader"/></div>
}