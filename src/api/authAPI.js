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

export const getAuth = () => {
  return instance
    .get('auth/me')
}

export const setLogIn = (email, password, remember = false) => {
  return instance
    .post('auth/login', { email, password, remember })
}

export const setLogOut = () => {
  return instance
    .delete('auth/login')
}
