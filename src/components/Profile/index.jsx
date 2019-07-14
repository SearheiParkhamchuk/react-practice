import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;