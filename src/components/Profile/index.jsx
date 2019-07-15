import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;