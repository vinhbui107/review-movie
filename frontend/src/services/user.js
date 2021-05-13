import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";
import * as Helpers from "../utils/helpers";

const userApi = {
    login: (params) => {
        const urlLogin = `${BASE_URL_API}/auth/login`;
        return axiosClient.post(urlLogin, params);
    },

    register: (params) => {
        const urlRegister = `${BASE_URL_API}/auth/register`;
        return axiosClient.post(urlRegister, params);
    },

    logout: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        const urlLogout = `${BASE_URL_API}/auth/logout`;
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(urlLogout, param);
    },

    refresh: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        const urlRefresh = `${BASE_URL_API}/auth/login/refresh`;
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(urlRefresh, param);
    },

    getUserProfile: (username) => {
        const urlGetUserProfile = `${BASE_URL_API}/auth/users/${username}`;
        axiosClient.get(urlGetUserProfile);
    },

    getCurrentUser: () => {
        const urlCurrentUser = `${BASE_URL_API}/auth/current-user`;
        return axiosClient.get(urlCurrentUser);
    },

    updateUserProfile: () => {},

    deleteAccount: () => {},

    updateUserProfile: () => {},
};

export default userApi;
