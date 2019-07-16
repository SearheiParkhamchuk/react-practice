import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={css.header__img}>
                <img src="http://www.b17.ru/foto/uploaded/upl_1536215588_12069.jpg" alt="" />
            </div>

            <div>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;