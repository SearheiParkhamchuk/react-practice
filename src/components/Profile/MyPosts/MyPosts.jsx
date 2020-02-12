import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts/Posts';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLength } from '../../../helpers/validators/validators';
import { Textarea } from '../../Common/Forms/Forms';

const maxLength30 = maxLength(30);

const AddPostForm = props => {
    return <form onSubmit={ props.handleSubmit }>
        <div>
            <Field
                component={Textarea}
                name='newPostBody'
                placeholder='Enter your message...'
                validate={[ requiredField, maxLength30 ]}
            />
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

const MyPosts = props => {
    const addPost = formData => {
        props.addPost(formData.newPostBody);
    };

    const postsItems = props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
    return (
        <div>
            <span>My posts</span>
            <AddPostReduxForm onSubmit={ addPost }/>
            <div>New post</div>
            <div className={css.posts}>
                { postsItems }
            </div>
        </div>
    )
};

export default React.memo(MyPosts)