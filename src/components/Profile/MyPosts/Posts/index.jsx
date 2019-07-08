import React from 'react';
import css from './Post.module.css';

const Post = () => {
    return (
        <div className={css.item}>
            <div className={css.avatar}>
                <img src="https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg" alt="Avatar"/>
            </div>
            <span className={css.title}>Post 1</span>
        </div>
    )
}

export default Post;