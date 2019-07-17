const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
};

const addPost = (state) => {
    state.posts.push(
        {
            id: Math.random() * 100,
            avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
            title: state.newPostText
        })
        state.newPostText = '';
};

const updateNewPostText = (state, newText) => {
    state.newPostText = newText;
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            addPost(state);
            return state;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(state, action.text);
            return state;
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});

export default profileReducer;