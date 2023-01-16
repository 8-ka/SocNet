export const getUserProfile = (state) => {
    return state.profilePage.userProfile;
}

export const getUserStatus = (state) => {
    return state.profilePage.userStatus;
}

export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getUserId = (state) => {
    return state.auth.userId;
}
