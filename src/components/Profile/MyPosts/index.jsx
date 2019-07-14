import React from 'react';
import css from './MyPosts.module.css';
import Post from './Posts';

const postsData = [
    {
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: "Post 1"
    },
    {
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: "Post 2"
    },
    {
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: "Post 3"
    },
];

const MyPosts = () => {
    const postsItems = postsData.map(post => <Post avatarUrl={post.avatarUrl} title={post.title} />);
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