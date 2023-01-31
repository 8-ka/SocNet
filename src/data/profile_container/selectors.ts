export const getUserProfile = (state: any) => {
    return state.profilePage.userProfile;
}

export const getUserStatus = (state: any) => {
    return state.profilePage.userStatus;
}

export const getIsAuth = (state: any) => {
    return state.auth.isAuth;
}

export const getUserId = (state: any) => {
    return state.auth.userId;
}
