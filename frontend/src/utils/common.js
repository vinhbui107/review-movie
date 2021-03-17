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

export const isEqualTwoString = (str1, str2) => {
    if (str1 === str2) return true;
    return false;
}

export const hasNumber = (str) => {
    return /\d/.test(str);
}

export const isStrengthPassword = (password) => {
    return password.length >= 10 && hasNumber(password);
}

// export const isEmail = (value) => {};

// export const isNumber = (value) => {};

// export const isString = (value) => {};
