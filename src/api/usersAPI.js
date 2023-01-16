import axios from "axios"

const instance = axios.create(
  {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
      "API-KEY": "2ddc8a84-8813-4c0f-b3d5-65380b3d0e75",
    }
  }
);

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
