export const ActionTypes = {
    SET_USER_DATA: 'SET_USER_DATA',
}

export const setUserData = (id, login, email, isAuth) => ({
    type: ActionTypes.SET_USER_DATA,
    payload: { id, login, email, isAuth },
})
    