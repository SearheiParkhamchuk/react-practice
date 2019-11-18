const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    newPostText: 'ololl',
    userProfile: null
};

const addPost = state => {
    const post = {
        id: Math.round(Math.random() * 100),
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: state.newPostText
    };

    return {
        ...state,
        newPostText: '',
        posts: [...state.posts, post]
    };
};

const setProfile = (state, userProfile) => ({ ...state, userProfile });

const updateNewPostText = (state, newText) => ({ ...state, newPostText: newText });

const profileReducer = (state = initialState, action) => {
    const { type, text, profile } = action;
    switch(type) {
        case ADD_POST:
            return addPost(state);
        case UPDATE_NEW_POST_TEXT:
            return updateNewPostText(state, text);
        case SET_USER_PROFILE:
            return setProfile(state, profile);
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});

export default profileReducer;