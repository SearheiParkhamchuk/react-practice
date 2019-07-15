import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts';

const MyPosts = (props) => {
    const postsItems = props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const newValue = newPostElement.current.value;
        props.updateNewPostText(newValue);
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={ onPostChange } value={props.newPostText} ref={ newPostElement }></textarea>
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