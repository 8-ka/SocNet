import { usersActions } from ".";
import { usersAPI } from "../../api";
import { ActionTypes } from "./actions"


const initialStateUsers = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: [],
};

export const usersReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case ActionTypes.FOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? { ...user, followed: true } : user),
      }
    case ActionTypes.UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? { ...user, followed: false } : user),
      }
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case ActionTypes.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      }
    case ActionTypes.IS_LOADING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case ActionTypes.IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter(id => id !== action.userId),
      }
    default:
      return state;
  }
}

export const getUsersThunkCreator = (page, pageSize) => (dispatch) => {
  dispatch(usersActions.setIsFetching(true));
  dispatch(usersActions.setCurrentPage(page));

  usersAPI.getUsers(page, pageSize)
    .then(data => {
      dispatch(usersActions.setCurrentPage(page));
      dispatch(usersActions.setIsFetching(false));
      dispatch(usersActions.setUsers(data.items));
      dispatch(usersActions.setTotalCount(data.totalCount));
    });
};

export const followThunkCreator = (userId) => (dispatch) => {
  dispatch(usersActions.setIsFollowingProgress(true, userId));
  usersAPI
    .follow(userId)
    .then(response => {
      if (response.data.resultCode === 0) {
        
        dispatch(usersActions.followSuccess(userId));
      }
      dispatch(usersActions.setIsFollowingProgress(false, userId));
    })
}

export const unFollowThunkCreator = (userId) => (dispatch) => {
  dispatch(usersActions.setIsFollowingProgress(true, userId));
  usersAPI
    .unFollow(userId)
    .then(response => {
      console.log(response.data)
      if (response.data.resultCode === 0) {
        
        dispatch(usersActions.unFollowSuccess(userId));
      }
      dispatch(usersActions.setIsFollowingProgress(false, userId));
    })
};
