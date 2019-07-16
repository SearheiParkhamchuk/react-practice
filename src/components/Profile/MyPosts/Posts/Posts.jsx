import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <div className={css.avatar}>
                <img src={props.avatarUrl} alt="Avatar"/>
            </div>
            <span className={css.title}>{props.title}</span>
        </div>
    )
}

export default Post;