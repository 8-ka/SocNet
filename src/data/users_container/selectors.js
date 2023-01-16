import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getIsFollowingProgress = (state) => {
    return state.usersPage.isFollowingProgress;
}

export const getUsersSelectorLibrary = createSelector(getUsers, (users) => {
    return users.filter(user => true);
})
