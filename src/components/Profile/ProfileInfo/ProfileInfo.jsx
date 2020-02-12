import React from 'react';
import avatar from './../../../assets/avatar.png';
import { Preloader } from '../../Common/Preloader/preloader';
import ProfileStatusHook from './ProfileStatusHook';

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

    const mainPhotoSelect = e => {
        props.savePhoto(e.target.files[0]);
    }

    return (
        <div>
            <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus} />
            <div>
                <div>
                    <img src={ props.profile.photos.small || avatar } alt='avatar'/>
                    {
                        props.isOwner && <div><input onChange={ mainPhotoSelect } type="file" /></div>
                    }
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