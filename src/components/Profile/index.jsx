import React from 'react';
import css from './Profile.module.css';

const Profile = () => {
    return (
        <div className={css.content}>
            <div className={css.header__img}>
                <img src="http://www.b17.ru/foto/uploaded/upl_1536215588_12069.jpg" alt="" />
            </div>

            <div>
                ava+description
            </div>

            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;