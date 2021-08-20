import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";
import * as Helpers from "../utils/helpers";

const UserService = {
    login: (params) => {
        const url = `${BASE_URL_API}/auth/login/`;
        return axiosClient.post(url, params);
    },

    register: (params) => {
        const url = `${BASE_URL_API}/auth/register/`;
        return axiosClient.post(url, params);
    },

    logout: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        const url = `${BASE_URL_API}/auth/logout/`;
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(url, param);
    },

    refresh: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        const url = `${BASE_URL_API}/auth/login/refresh/`;
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(url, param);
    },

    // authenticated user
    getUserData: (username) => {
        const url = `${BASE_URL_API}/auth/users/${username}/`;
        return axiosClient.get(url);
    },

    getAuthenticatedUser: () => {
        const url = `${BASE_URL_API}/auth/user/`;
        return axiosClient.get(url);
    },

    updateUserProfile: (params) => {
        const url = `${BASE_URL_API}/auth/user/`;
        return axiosClient.patch(url, params);
    },

    changePassword: (params) => {
        const url = `${BASE_URL_API}/auth/user/setting/`;
        return axiosClient.patch(url, params);
    },

    deleteAccount: (params) => {
        const url = `${BASE_URL_API}/auth/user/delete/`;
        return axiosClient.post(url, params);
    },

    // user data
    getUserRatings: (username, page = 1) => {
        const url = `${BASE_URL_API}/auth/users/${username}/ratings/?page=${page}`;
        return axiosClient.get(url);
    },

    getUserComments: (username, page = 1) => {
        const url = `${BASE_URL_API}/auth/users/${username}/comments?page=${page}`;
        return axiosClient.get(url);
    },
};

export default UserService;
