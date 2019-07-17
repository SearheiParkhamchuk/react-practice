import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts/Posts';

const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
    const addPost = () => {
        props.addPost();
    };

    const onPostChange = (event) => {
        const newValue = event.target.value;
        props.updateNewPostText(newValue);
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add Post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={css.posts}>
                { postsItems }
            </div>
        </div>
    )
}

export default MyPosts;