import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
    userProfile: null,
    status: ''
};

const addPost = (state, text) => {
    const post = {
        id: Math.round(Math.random() * 100),
        avatarUrl: "https://avatarko.ru/img/kartinka/2/igra_Mass_Effect_Tali_1686.jpg",
        title: text
    };

    return {
        ...state,
        posts: [...state.posts, post]
    };
};

const setProfile = (state, userProfile) => ({ ...state, userProfile });

const profileReducer = (state = initialState, action) => {
    const { type, text, profile, status } = action;
    switch(type) {
        case ADD_POST:
            return addPost(state, text);
        case SET_USER_PROFILE:
            return setProfile(state, profile);
        case SET_USER_STATUS:
            return {
                ...state,
                status
            }
        default:
            return state;
    }
};


export const addPostActionCreator = text => ({type: ADD_POST, text});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const getUserProfile = userId => {
    return dispatch => {
        profileAPI.getProfileById(userId)
            .then(data => dispatch(setUserProfile(data)))
            .catch(e => console.error(e))
            .finally(() => {})
    }
}

export const getUserStatus = userId => {
    return dispatch => {
        profileAPI.getStaus(userId)
            .then(data => dispatch(setUserStatus(data)))
            .catch(e => console.error(e))
            .finally(() => {})
    }
}

export const updateUserStatus = status => {
    return dispatch => {
        profileAPI.updateStaus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
            .catch(e => console.error(e))
            .finally(() => {})
    }
}

export default profileReducer;