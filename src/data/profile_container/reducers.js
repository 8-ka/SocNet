import { profileActions } from ".";
import { profileAPI } from "../../api";
import { ActionTypes } from "./actions"

const initialStateProfilePage = {
  posts: [
    { id: 1, post: 'Hi, there!' },
    { id: 2, post: 'Ooops' },
    { id: 3, post: 'Great' },
    { id: 4, post: 'Look' },
    { id: 5, post: 'Like!' },
  ],
  userProfile: null,
  userStatus: '',
}

export const profilePageReducer = (state = initialStateProfilePage, action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: '100', post: action.newPostText }],
      };
    case ActionTypes.UPDATE_POST:
      return {
        ...state,
        newPostText: action.text,
      };
    case ActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case ActionTypes.SET_USER_STATUS:
      return {
        ...state,
        userStatus: action.userStatus,
      }
    default:
      return state;
  }
}

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
   .then(response =>
    dispatch(profileActions.setUserProfile(response.data)));
}

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
   .then(response => 
    dispatch(profileActions.setUserStatus(response.data)));
}

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if(!response.data.resultCode) {
        dispatch(profileActions.setUserStatus(status))
      }
    })
}