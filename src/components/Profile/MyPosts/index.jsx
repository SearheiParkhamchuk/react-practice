import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>New post</div>
            <div className={css.posts}>
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;