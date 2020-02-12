import { usersAPI, followAPI } from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_FETCH = 'SET_FETCH';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initalState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
    const { type, userId, users, total, page, isFetching, followingInProgress } = action;
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: followingInProgress ?
                    [...state.followingInProgress, userId] :
                    state.followingInProgress.filter(id => userId !== id)
            }
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
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId });

export const getRequestUsers = (page, pageSize) => {
    return dispatch => {
        dispatch(fetchingActionCreator(true));
        usersAPI.getUsers(page, pageSize)
        .then(data => {
            dispatch(setUsersActionCreator(data.items));
            dispatch(totalCountActionCreator(data.totalCount));
            dispatch(currentPageActionCreator(page))
        })
        .catch(e => console.error(e))
        .finally(() => dispatch(fetchingActionCreator(false)))
    }
}

export const userFollow = userId => {
    return dispatch => {
        dispatch(toggleIsFollowingProgress(true, userId));

        followAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(follwActionCreator(userId));
                }
            })
            .catch(e => console.log(e))
            .finally(() => dispatch(toggleIsFollowingProgress(false, userId)))
    }
}

export const userUnFollow = userId => {
    return dispatch => {
        dispatch(toggleIsFollowingProgress(true, userId));

        followAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(unFollwActionCreator(userId));
                }
            })
            .catch(e => console.log(e))
            .finally(() => dispatch(toggleIsFollowingProgress(false, userId)))
    }
}

export default usersReducer;