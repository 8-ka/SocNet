import Instance from "./instance"

const instance = Instance();

type authType = {
  data: {
    id?: number,
    email?: string,
    login?: string,
    userId?: number,
  },
  resultCode: resultCodeEnum,
  messages: Array<any>,
}

export enum resultCodeEnum {
  success = 0,
  error = 1,
  captchaIsReq = 10,
}

export const getAuth = () => {
  return instance
    .get<authType>('auth/me')
}

export const setLogIn = (email: string, password: string, remember: boolean = false, captcha: string) => {
  return instance
    .post<authType>('auth/login', { email, password, remember, captcha })
}

export const setLogOut = () => {
  return instance
    .delete<authType>('auth/login')
}
