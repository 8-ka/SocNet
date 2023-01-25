import Instance from "./instance";

const instance = Instance();

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
}

export const follow = (userId) => {
  return instance
    .post(`follow/${userId}`)
}

export const unFollow = (userId) => {
  return instance
    .delete(`follow/${userId}`)
}
