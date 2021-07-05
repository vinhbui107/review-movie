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
    removeLocalStorage("auth");
    removeLocalStorage("access_token");
    removeLocalStorage("refresh_token");
};

export const isLogin = () => {
    if (getLocalStorage("access_token") && getLocalStorage("refresh_token") && getLocalStorage("auth")) {
        return true;
    }
    removeAuth();
    return false;
};

export const isUsingRS = () => {
    if (isLogin()) {
        const moment = require("moment");
        const auth = getLocalStorage("auth");
        const createdDate = auth.created_at;
        var today = moment().format("YYYY-MM-DD");
        const isAfterCreatedDate = moment(today).isAfter(createdDate);
        if (isAfterCreatedDate) return true;
        else return false;
    }
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

// export const encodeToken = () => {
//     const accessToken = getLocalStorage("access_token");

//     const jwt_decode = require("jwt-decode");
// };

export const displayGenre = (genres) => {
    const arrName = genres.map((genre) => genre.name);
    return arrName.join(", ");
};

export const displayMemberSince = (date) => {
    const moment = require("moment");
    return `Member since ${moment(date).format("ll")}`;
};

export const displayDate = (date) => {
    const moment = require("moment");
    return moment(date).format("ll");
};
