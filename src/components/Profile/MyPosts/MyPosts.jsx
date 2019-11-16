import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts/Posts';

class MyPosts extends React.Component {
    addPost = () => {
        this.props.addPost();
    };

    onPostChange = (event) => {
        const newValue = event.target.value;
        this.props.updateNewPostText(newValue);
    }

    render() {
        const postsItems = this.props.posts.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
        return (
            <div>
                My posts
                <div>
                    <div>
                        <textarea onChange={ this.onPostChange } value={this.props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={ this.addPost }>Add Post</button>
                    </div>
                </div>
                <div>New post</div>
                <div className={css.posts}>
                    { postsItems }
                </div>
            </div>
        )
    }
}

export default MyPosts;