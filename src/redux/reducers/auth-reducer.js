import { usersAPI, profileAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';

const initalState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    profile: null
};

const authReducer = (state = initalState, action) => {
    const { type, data, profile } = action;
    switch(type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...data,
                isAuth: true
            }
        case SET_CURRENT_USER_PROFILE:
                return {
                    ...state,
                    profile
                }
        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: { userId, email, login }});
export const setCurrentUserProfile = profile => ({type: SET_CURRENT_USER_PROFILE, profile});

export const getMyProfile = () => {
    return dispatch => {
        usersAPI.getMyself()
            .then(data => {
                if (data.resultCode === 0) {
                    const { login, id, email } = data.data;
                    dispatch(setUserData(id, email, login));
                    return profileAPI.getProfileById(id);
                }
            })
            .then(data => dispatch(setCurrentUserProfile(data)))
            .catch(e => console.error(e))
            .finally(() => {})
    }
}

export default authReducer;