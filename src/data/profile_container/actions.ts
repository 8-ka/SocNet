export const ActionTypes = {
  ADD_POST: 'ADD-POST',
  UPDATE_POST: 'UPDATE-POST',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  SET_USER_STATUS: 'SET_USER_STATUS',
  SAVE_AVATAR_SUCCESS: 'SAVE_AVATAR_SUCCESS',
}

export const addPost = (newPostText: string) => ({
  type: ActionTypes.ADD_POST,
  newPostText,
})

export const updatePost = (text: string) => ({
  type: ActionTypes.UPDATE_POST,
  text,
})

export const setUserProfile = (userProfile: string) => ({
  type: ActionTypes.SET_USER_PROFILE,
  userProfile,
})

export const setUserStatus = (userStatus: string) => ({
  type: ActionTypes.SET_USER_STATUS,
  userStatus,
})

export const saveAvatarSuccess = (photos: any) => ({
  type: ActionTypes.SAVE_AVATAR_SUCCESS,
  photos,
})
