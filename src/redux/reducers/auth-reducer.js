import { usersAPI, profileAPI, authAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

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
    const { type, payload, profile } = action;
    switch(type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...payload,
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

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});
export const setCurrentUserProfile = profile => ({type: SET_CURRENT_USER_PROFILE, profile});

export const getMyProfile = () => {
    return dispatch => {
        usersAPI.getMyself()
            .then(data => {
                if (data.resultCode === 0) {
                    const { login, id, email } = data.data;
                    dispatch(setUserData(id, email, login, true));
                    return profileAPI.getProfileById(id);
                }
            })
            .then(data => dispatch(setCurrentUserProfile(data)))
            .catch(e => console.error(e))
            .finally(() => {})
    }
}

export const login = (email, password, rememberMe) =>  dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getMyProfile())
            } else {
                dispatch(stopSubmit('login', {_error: data.messages[0]}));
            }
        })
        .catch(e => console.error(e))
        .finally(() => {})
}

export const logout = () =>  dispatch => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
        .catch(e => console.error(e))
        .finally(() => {})
}


export default authReducer;