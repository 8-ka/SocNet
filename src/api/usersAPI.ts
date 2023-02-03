import Instance from "./instance";

const instance = Instance();

export const getUsers = (currentPage: number, pageSize: number, term: string, friend: boolean) => {
  const setFriend = friend ? `&friend=${friend}` : '';

  return instance
    .get(`users?page=${currentPage}&count=${pageSize}&term=${term}${setFriend}`)
    .then(response => response.data);
}

export const follow = (userId: number) => {
  return instance
    .post(`follow/${userId}`)
}

export const unFollow = (userId: number) => {
  return instance
    .delete(`follow/${userId}`)
}
