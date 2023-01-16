export const ActionTypes = {
  ADD_POST: 'ADD-POST',
  UPDATE_POST: 'UPDATE-POST',
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  SET_USER_STATUS: 'SET_USER_STATUS',
}

export const addPost = (newPostText) => ({
  type: ActionTypes.ADD_POST,
  newPostText,
})

export const updatePost = (text) => ({
  type: ActionTypes.UPDATE_POST,
  text,
})

export const setUserProfile = (userProfile) => ({
  type: ActionTypes.SET_USER_PROFILE,
  userProfile,
})

export const setUserStatus = (userStatus) => ({
  type: ActionTypes.SET_USER_STATUS,
  userStatus,
})
