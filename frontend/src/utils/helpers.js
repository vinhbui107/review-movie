export const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
};

export const saveLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key);
};

export const removeAuth = () => {
    removeLocalStorage("access_token");
    removeLocalStorage("refresh_token");
    removeLocalStorage("currentUser");
};

export const isLogin = () => {
    if (getLocalStorage("access_token") && getLocalStorage("refresh_token")) {
        return true;
    }
    removeAuth();
    return false;
};

export const isEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

export const sortByID = (arr) => {
    arr.sort(function (a, b) {
        return b.id - a.id;
    });
    return arr;
};
