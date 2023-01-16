import { stopSubmit } from "redux-form";
import { authActions } from ".";
import { authAPI } from "../../api";
import { ActionTypes } from "./actions";

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
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

export const setLogInThunkCreator = (email, password, remember) => (dispatch) => {
  authAPI.setLogIn(email, password, remember)
    .then(response => {
      console.log(response)
      if (!response.data.resultCode) {
        dispatch(getAuthMeThunkCreator());
      }
      let message = response.data.messages[0] || 'Something went wrong';
      dispatch(stopSubmit('loginForm', { _error: message }))
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
