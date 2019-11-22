import { getMyProfile } from "./auth-reducer";

const SET_INIT = 'SET_INIT';

const initalState = {
    isInit: false
};

const appReducer = (state = initalState, action) => {
    const { type } = action;
    switch(type) {
        case SET_INIT: {
            return {
                ...state,
                isInit: true
            }
        }
        default:
            return state;
    }
};

export const setSuccessInit = () => ({ type: SET_INIT });

export const initializeApp = () => dispatch => {
    dispatch(getMyProfile());
    dispatch(setSuccessInit());
}

export default appReducer;