import Instance from "./instance"

const instance = Instance();

export const getAuth = () => {
  return instance
    .get('auth/me')
}

export const setLogIn = (email, password, remember = false, captcha) => {
  return instance
    .post('auth/login', { email, password, remember, captcha })
}

export const setLogOut = () => {
  return instance
    .delete('auth/login')
}
