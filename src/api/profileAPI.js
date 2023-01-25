import Instance from "./instance"

const instance = Instance();

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
