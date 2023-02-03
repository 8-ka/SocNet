import Instance from "./instance";

const instance = Instance();

export const getCaptchaUrl = () => {
    return instance
        .get(`security/get-captcha-url`);
};
