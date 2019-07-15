import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts';

const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>New post</div>
            <div className={css.posts}>
                { postsItems }
            </div>
        </div>
    )
}

export default MyPosts;