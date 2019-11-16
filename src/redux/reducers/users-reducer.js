const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';

const initalState = {
    users: []
};

const follow = (state, userId) => {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? { ...user, followed: true } : user )
    };
};

const unfollow = (state, userId) => {
    return {
        ...state,
        users: state.users.map(user => user.id === userId ? { ...user, followed: false } : user )
    };
};

const setUsers = (state, users) => {
    return { ...state, users: [...state.users, ...users] };
}

const usersReducer = (state = initalState, action) => {
    const { type, userId, users } = action;
    switch(type) {
        case FOLLOW:
            return follow(state, userId);
        case UNFOLLOW:
            return unfollow(state, userId);
        case SET_USERS:
            return setUsers(state, users);
        default:
            return state;
    }
};

export const follwActionCreator = userId => ({ type: FOLLOW, userId });
export const unFollwActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = users => ({ type: SET_USERS, users });

export default usersReducer;