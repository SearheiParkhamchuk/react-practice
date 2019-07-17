import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    const store = props.store;
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    };

    const updateNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (<MyPosts
                updateNewPostText={updateNewPostText}
                addPost={addPost}
                posts={state.profile.posts}
                newPostText={state.profile.newPostText} />);
}

export default MyPostsContainer;