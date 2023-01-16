import { appActions } from ".";
import { authReducers } from "../auth_container";
import { ActionTypes } from "./action"

const initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;
  }
}

export const setInitializedAppThunkCreator = () => (dispatch) => {
  dispatch(authReducers.getAuthMeThunkCreator())
    .then(() => {
      dispatch(appActions.setInitialized())
    });
}
