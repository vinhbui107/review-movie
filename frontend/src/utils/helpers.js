export const getLocalStorage = (key) => {
    return window.localStorage.getItem(key);
};

export const saveLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key);
};

export const isLogin = () => {
    if (getLocalStorage("access_token")) {
        return true;
    }
    return false;
};

export const isEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const isStrongPassword = (password) => {
    if (password.length >= 10) return true;
    return false;
};

export const isValidBirthday = (birthday) => {
    const isValidBirthdate = require("is-valid-birthdate");
    return isValidBirthdate(birthday);
};
