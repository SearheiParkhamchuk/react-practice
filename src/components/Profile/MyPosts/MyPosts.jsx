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
class MyPosts extends React.Component {
    addPost = formData => {
        this.props.addPost(formData.newPostBody);
    };

    render() {
        const postsItems = this.props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
        return (
            <div>
                <span>My posts</span>
                <AddPostReduxForm onSubmit={ this.addPost.bind(this) }/>
                <div>New post</div>
                <div className={css.posts}>
                    { postsItems }
                </div>
            </div>
        )
    }
}

export default MyPosts;