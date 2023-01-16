export const ActionTypes = {
  FOLLOW: 'FOLLOW',
  UNFOLLOW: 'UNFOLLOW',
  SET_USERS: 'SET_USERS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_TOTAL_COUNT: 'SET_TOTAL_COUNT',
  IS_LOADING: 'IS_LOADING',
  IS_FOLLOWING_PROGRESS: 'IS_FOLLOWING_PROGRESS',
}

export const followSuccess = (userId) => ({
  type: ActionTypes.FOLLOW,
  userId,
});

export const unFollowSuccess = (userId) => ({
  type: ActionTypes.UNFOLLOW,
  userId,
});

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  users,
});

export const setCurrentPage = (currentPage) => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalCount = (totalCount) => ({
  type: ActionTypes.SET_TOTAL_COUNT,
  totalCount,
});

export const setIsFetching = (isFetching) => ({
  type: ActionTypes.IS_LOADING,
  isFetching,
});

export const setIsFollowingProgress = (isFetching, userId) => ({
  type: ActionTypes.IS_FOLLOWING_PROGRESS,
  userId,
  isFetching,
});
