import React from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profile.posts}
                dispatch={props.dispatch}
                newPostText={props.profile.newPostText}/>
        </div>
    )
}

export default Profile;