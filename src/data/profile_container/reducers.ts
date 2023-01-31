import { profileActions } from ".";
import { profileAPI } from "../../api";
import { ActionTypes } from "./actions"

type PostsType = {
  id: number,
  post: string,
}

type InitialStateType = {
  posts: Array<PostsType>,
  userProfile: any,
  userStatus: string | null,
}

const initialStateProfilePage: InitialStateType = {
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

export const profilePageReducer = (state: InitialStateType = initialStateProfilePage, action: any) => {
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
    case ActionTypes.SAVE_AVATAR_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos
        },
      }
    default:
      return state;
  }
}

export const getUserProfileThunkCreator = (userId: string) => (dispatch: any) => {
  profileAPI.getProfile(userId)
    .then(response =>
      dispatch(profileActions.setUserProfile(response.data)));
}

export const getUserStatusThunkCreator = (userId: string) => (dispatch: any) => {
  profileAPI.getStatus(userId)
    .then(response =>
      dispatch(profileActions.setUserStatus(response.data)));
}

export const updateUserStatusThunkCreator = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (!response.data.resultCode) {
        dispatch(profileActions.setUserStatus(status))
      }
    })
}

export const saveAvatarThunkCreator = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.saveAvatar(file)

  if (!response.data.resultCode) {
    dispatch(profileActions.saveAvatarSuccess(response.data.data.photos))
  }
}
