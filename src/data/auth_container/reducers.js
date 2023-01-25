import { stopSubmit } from "redux-form";
import { authActions } from ".";
import { authAPI, securityAPI } from "../../api";
import { ActionTypes } from "./actions";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case ActionTypes.GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      }
    default:
      return state;
  }
}

export const getAuthMeThunkCreator = () => (dispatch) => {
  return authAPI.getAuth()
    .then(response => {
      if (!response.data.resultCode) {
        let { id, login, email } = response.data.data;
        dispatch(authActions.setUserData(id, login, email, true));
      }
    });
}

export const setLogInThunkCreator = (email, password, remember, captcha) => (dispatch) => {
  authAPI.setLogIn(email, password, remember, captcha)
    .then(response => {
      console.log(response)
      if (!response.data.resultCode) {
        dispatch(getAuthMeThunkCreator());
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrlThunkCreator());
        }
        let message = response.data.messages[0] || 'Something went wrong';
        dispatch(stopSubmit('loginForm', { _error: message }))
      }

    });
}

export const setLogOutThunkCreator = () => (dispatch) => {
  authAPI.setLogOut()
    .then(response => {
      if (!response.data.resultCode) {
        dispatch(authActions.setUserData(null, null, null, false));
      }
    });
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(authActions.getCaptchaUrlSuccess(captchaUrl));
}
