import { resultCodeEnum } from './../../api/authAPI';
import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { usersActions } from ".";
import { usersAPI } from "../../api";
import { ActionTT, ActionTypes } from "./actions"

type InitialStateType = {
  users: Array<any>,
  pageSize: number | null,
  totalCount: number | null,
  currentPage: number | null,
  isFetching: boolean | null,
  isFollowingProgress: Array<any>,
  filter: {
    term: string,
    friend: boolean | null,
  },
}

export type FilterType = typeof initialStateUsers.filter;

const initialStateUsers = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: [],
  filter: {
    term: '',
    friend: false,
  },
};

export const usersReducer = (state: InitialStateType = initialStateUsers, action: ActionTT) => {
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
    case ActionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state;
  }
}

export const getUsersThunkCreator = (page: number, pageSize: number, filter: FilterType ) => async (dispatch: Dispatch<ActionTT>) => {
  dispatch(usersActions.setIsFetching(true));
  dispatch(usersActions.setCurrentPage(page));
  dispatch(usersActions.setFilter(filter))

  const data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
      dispatch(usersActions.setCurrentPage(page));
      dispatch(usersActions.setIsFetching(false));
      dispatch(usersActions.setUsers(data.items));
      dispatch(usersActions.setTotalCount(data.totalCount));
};

export const followThunkCreator = (userId: number) => (dispatch: Dispatch<ActionTT>) => {
  dispatch(usersActions.setIsFollowingProgress(true, userId));
  usersAPI
    .follow(userId)
    .then((response: AxiosResponse<any>) => {
      if (response.data.resultCode === resultCodeEnum.success) {
        
        dispatch(usersActions.followSuccess(userId));
      }
      dispatch(usersActions.setIsFollowingProgress(false, userId));
    })
}

export const unFollowThunkCreator = (userId: number) => (dispatch: Dispatch<ActionTT>) => {
  dispatch(usersActions.setIsFollowingProgress(true, userId));
  usersAPI
    .unFollow(userId)
    .then((response: AxiosResponse<any>)  => {
      console.log(response.data)
      if (response.data.resultCode === resultCodeEnum.success) {
        
        dispatch(usersActions.unFollowSuccess(userId));
      }
      dispatch(usersActions.setIsFollowingProgress(false, userId));
    })
};
