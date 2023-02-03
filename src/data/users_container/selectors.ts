import { createSelector } from "reselect";

export const getUsers = (state: any) => {
    return state.usersPage.users;
}

export const getPageSize = (state: any) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state: any) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state: any) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: any) => {
    return state.usersPage.isFetching;
}

export const getIsFollowingProgress = (state: any) => {
    return state.usersPage.isFollowingProgress;
}

export const getUsersSelectorLibrary = createSelector(getUsers, (users: Array<any>) => {
    return users.filter((user) => user);
})

export const getFilter = (state: any) => {
    return state.usersPage.filter;
}
