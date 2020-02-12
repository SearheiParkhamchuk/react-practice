import { createSelector } from "reselect";

export const getUsers = state => {
    return state.users.users;
}

export const getUsersSelector = createSelector(getUsers, users => {
    return users.filter(u => true);
})

export const getPageSize = state => state.users.pageSize
export const getTotalUserCount = state => state.users.totalUserCount;
export const getCurrentPage = state => state.users.currentPage;
export const getIsFetching = state => state.users.isFetching;
export const getFollowingInProgress = state => state.users.followingInProgress