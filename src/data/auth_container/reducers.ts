import { resultCodeEnum } from './../../api/authAPI';
import { authActions } from ".";
import { authAPI, securityAPI } from "../../api";
import { ActionTypes } from "./actions";

const { stopSubmit } = require('redux-form');

type InitialStateType ={
  id: string | null,
  login: string | null,
  email: string | null,
  isAuth: boolean | false,
  captchaUrl:string | null,
}

const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
}

export const authReducer = (state: InitialStateType = initialState, action: any) => {
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

export const getAuthMeThunkCreator = () => async (dispatch: any) => {
  const response = await authAPI.getAuth();
  
  if (!response.data.resultCode) {
    let { id, login, email } = response.data.data;
    dispatch(authActions.setUserData(id, login, email, true));
  }
}

export const setLogInThunkCreator = (email: string, password: string, remember: boolean, captcha: string) => (dispatch: any) => {
  authAPI.setLogIn(email, password, remember, captcha)
    .then(response => {
      console.log(response)
      if (!response.data.resultCode) {
        dispatch(getAuthMeThunkCreator());
      } else {
        if (response.data.resultCode === resultCodeEnum.captchaIsReq) {
          dispatch(getCaptchaUrlThunkCreator());
        }
        let message = response.data.messages[0] || 'Something went wrong';
        dispatch(stopSubmit('loginForm', { _error: message }))
      }

    });
}

export const setLogOutThunkCreator = () => (dispatch: any) => {
  authAPI.setLogOut()
    .then(response => {
      if (!response.data.resultCode) {
        dispatch(authActions.setUserData(null, null, null, false));
      }
    });
}

export const getCaptchaUrlThunkCreator = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(authActions.getCaptchaUrlSuccess(captchaUrl));
}
