export const ActionTypes = {
    SET_USER_DATA: 'SET_USER_DATA',
    GET_CAPTCHA_URL: 'GET_CAPTCHA_URL',
}

export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean | null) => ({
    type: ActionTypes.SET_USER_DATA,
    payload: { id, login, email, isAuth },
})

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: ActionTypes.GET_CAPTCHA_URL,
    captchaUrl,
})
    