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

// export const isEmail = (value) => {};

// export const isNumber = (value) => {};

// export const isString = (value) => {};
