import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";

const state = {
    posts: [
        {
            avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
            title: "Post 1",
            id: 1
        },
        {
            avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
            title: "Post 2",
            id: 2
        },
        {
            avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
            title: "Post 3",
            id: 3
        },
    ]
};

it('new post should be add', () => {
    const action = addPostActionCreator('gfgf');

    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});

it('delete post', () => {
    const action = deletePostActionCreator(1);
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});