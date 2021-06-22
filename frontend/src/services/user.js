import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";
import * as Helpers from "../utils/helpers";

const userApi = {
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

    getUserData: (username) => {
        const url = `${BASE_URL_API}/auth/users/${username}/`;
        return axiosClient.get(url);
    },

    getAuthenticatedUser: () => {
        const url = `${BASE_URL_API}/auth/user/`;
        return axiosClient.get(url);
    },

    updateUserProfile: () => {},

    changePassword: () => {},

    deleteAccount: () => {},

    getUserRatings: (username) => {
        const url = `${BASE_URL_API}/auth/users/${username}/ratings?page=${1}`;
        return axiosClient.get(url);
    },

    getUserComments: (username) => {
        const url = `${BASE_URL_API}/auth/users/${username}/comments?page=${1}`;
        return axiosClient.get(url);
    },
};

export default userApi;
