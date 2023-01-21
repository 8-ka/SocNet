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

export const getProfile = (userId) => {
  return instance
    .get(`profile/${userId}`)
}

export const getStatus = (userId) => {
  return instance
    .get(`profile/status/${userId}`)
}

export const updateStatus = (status) => {
  return instance
    .put(`profile/status`, { status: status })
}

export const saveAvatar = (file) => {
  const formData = new FormData();
  formData.append('image', file);

  return instance
    .put(`profile/photo`, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      }
    })
}
