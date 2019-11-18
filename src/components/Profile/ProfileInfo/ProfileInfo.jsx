import React from 'react';
import css from './ProfileInfo.module.css';
import avatar from './../../../assets/avatar.png';
import { Preloader } from '../../Common/Preloader/preloader';

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader />
    }

    const contacts = props.profile.contacts;
    const getContacts = () => {
        const contactsArray = Object.keys(contacts)
            .filter(key => contacts[key])
            .map(key => <div><span style={{ fontWeight: 'bold' }}>{key}</span>: <span><a href={'https://' + contacts[key]}>{contacts[key]}</a></span></div>);
        return contactsArray.length === 0 ? <span>No contacts</span> : contactsArray;
    }

    return (
        <div>
            <div className={css.header__img}>
                <img src="http://www.b17.ru/foto/uploaded/upl_1536215588_12069.jpg" alt="" />
            </div>
            <div>
                <div>
                    <img src={ props.profile.photos.small || avatar } alt='avatar'/>
                </div>
                { getContacts() }
            </div>
            <div>------------------------------</div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Name: </span>
                <span>{ props.profile.fullName }</span>
            </div>
            <div>------------------------------</div>
            <div>
                <span style={{ fontWeight: 'bold' }}>About me: </span>
                <span>{ props.profile.aboutMe }</span>
            </div>
            <div>------------------------------</div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Looking for a job: </span>
                <span>{ props.profile.lookingForAJob ? 'Yes' : 'No' }</span>
            </div>
            <div>------------------------------</div>
            <div>
                <span style={{ fontWeight: 'bold' }}>Looking for a job description: </span>
                <span>{ props.profile.lookingForAJobDescription }</span>
            </div>
            <div>------------------------------</div>
        </div>
    );
};

export default ProfileInfo;