import { usersAPI, profileAPI, authAPI, securityAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER_PROFILE = 'SET_CURRENT_USER_PROFILE';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';

const initalState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    profile: null,
    captchaUrl: null
};

const authReducer = (state = initalState, action) => {
    const { type, payload, profile, captchaUrl } = action;
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
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl
            }
        default:
            return state;
    }
};

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: { userId, email, login, isAuth }});
export const setCurrentUserProfile = profile => ({type: SET_CURRENT_USER_PROFILE, profile});
export const setCaptchaUrl = captchaUrl => ({type: GET_CAPTCHA_URL, captchaUrl});

export const getMyProfile = () => async (dispatch) => {
    try {
        const response = await usersAPI.getMyself();
        if (response.resultCode === 0) {
            const { login, id, email } = response.data;
            dispatch(setUserData(id, email, login, true));
            const response2 = await profileAPI.getProfileById(id);
            dispatch(setCurrentUserProfile(response2))
        } else throw new Error(response.messages[0]);
    } catch(e) {
        console.error(e)
    }
}

export const login = payload =>  async (dispatch) => {
    try {
        const response = await authAPI.login(payload);
        if (response.resultCode === 0) {
            dispatch(getMyProfile())
            dispatch(setCaptchaUrl(null))
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaURL());
            }
            dispatch(stopSubmit('login', {_error: response.messages[0]}));
        }
    } catch(e) {
        console.error(e);
    }
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

export const getCaptchaURL = () => async (dispatch) => {
    try {
        const response = await securityAPI.getCaptchaURL();
        dispatch(setCaptchaUrl(response.url));
    } catch(e) {
        console.error(e);
    }
}


export default authReducer;