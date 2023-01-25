export const ActionTypes = {
    SET_USER_DATA: 'SET_USER_DATA',
    GET_CAPTCHA_URL: 'GET_CAPTCHA_URL',
}

export const setUserData = (id, login, email, isAuth) => ({
    type: ActionTypes.SET_USER_DATA,
    payload: { id, login, email, isAuth },
})

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: ActionTypes.GET_CAPTCHA_URL,
    captchaUrl,
})
    