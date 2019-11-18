const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'currentPage';
const SET_TOTAL_COUNT = 'totalCount';
const SET_FETCH = 'setFetch';

const initalState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
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
    return { ...state, users: [ ...users] };
}

const totalCount = (state, totalUserCount) => {
    return { ...state, totalUserCount };
}

const currentPage = (state, currentPage) => {
    return { ...state, currentPage };
}

const fetching = (state, isFetching) => {
    return { ...state, isFetching };
}

const usersReducer = (state = initalState, action) => {
    const { type, userId, users, total, page, isFetching } = action;
    switch(type) {
        case FOLLOW:
            return follow(state, userId);
        case UNFOLLOW:
            return unfollow(state, userId);
        case SET_USERS:
            return setUsers(state, users);
        case SET_TOTAL_COUNT:
            return totalCount(state, total);
        case SET_CURRENT_PAGE:
            return currentPage(state, page);
        case SET_FETCH:
            return fetching(state, isFetching);
        default:
            return state;
    }
};

export const follwActionCreator = userId => ({ type: FOLLOW, userId });
export const unFollwActionCreator = userId => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = users => ({ type: SET_USERS, users });
export const totalCountActionCreator = total => ({ type: SET_TOTAL_COUNT, total });
export const currentPageActionCreator = page => ({ type: SET_CURRENT_PAGE, page });
export const fetchingActionCreator = isFetching => ({ type: SET_FETCH, isFetching });

export default usersReducer;