import { rerenderEntireTree } from "../render";


const state = {
    profile: {
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
        ],
        newPostText: 'ololl'
    },
    dialogs: {
        users: [
            { name: 'Siarhei', id: 1},
            { name: 'Masha', id: 2},
            { name: 'Ivan', id: 3},
            { name: 'Petya', id: 4},
            { name: 'Marta', id: 5},
        ],
        messages: [
            { message: 'Hi' },
            { message: 'Hello' },
            { message: 'How are u doing?' },
            { message: 'I\'m ok' }
        ]
    }
}

export const addPost = () => {
    state.profile.posts.push(
    {
        id: Math.random() * 100,
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: state.profile.newPostText
    })
    state.profile.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;