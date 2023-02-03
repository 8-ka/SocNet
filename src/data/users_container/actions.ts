import { FilterType } from "./reducers";

export type ActionTT = {
  type: string,
  userId?: number,
  users?: Array<any>,
  currentPage?: number,
  totalCount?: number,
  isFetching?: boolean,
  payload?: any,
}

export const ActionTypes = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_USERS: 'SET_USERS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_TOTAL_COUNT: 'SET_TOTAL_COUNT',
  IS_LOADING: 'IS_LOADING',
  IS_FOLLOWING_PROGRESS: 'IS_FOLLOWING_PROGRESS',
  SET_FILTER: 'SET_FILTER',
}

export const followSuccess = (userId: number): ActionTT => ({
  type: ActionTypes.FOLLOW,
  userId,
});

export const unFollowSuccess = (userId: number): ActionTT => ({
  type: ActionTypes.UNFOLLOW,
  userId,
});

export const setUsers = (users: Array<any>): ActionTT => ({
  type: ActionTypes.SET_USERS,
  users,
});

export const setCurrentPage = (currentPage: number): ActionTT => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalCount = (totalCount: number): ActionTT => ({
  type: ActionTypes.SET_TOTAL_COUNT,
  totalCount,
});

export const setIsFetching = (isFetching: boolean): ActionTT => ({
  type: ActionTypes.IS_LOADING,
  isFetching,
});

export const setIsFollowingProgress = (isFetching: boolean, userId: number): ActionTT => ({
  type: ActionTypes.IS_FOLLOWING_PROGRESS,
  userId,
  isFetching,
});

export const setFilter = (filter: FilterType): ActionTT => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
})
