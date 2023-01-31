import { appActions } from ".";
import { authReducers } from "../auth_container";
import { ActionTypes } from "./action"

type InitialStateType = {
  initialized: boolean,
}

const initialState: InitialStateType = {
  initialized: false,
}

export const appReducer = (state = initialState, action: any): InitialStateType => {
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

export const setInitializedAppThunkCreator = () => (dispatch: any) => {
  dispatch(authReducers.getAuthMeThunkCreator())
    .then(() => {
      dispatch(appActions.setInitialized())
    });
}
