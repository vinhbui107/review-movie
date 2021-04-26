import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/defines";
import * as Helpers from "../utils/helpers";

const userApi = {
    login: (params) => {
        const urlLogin = `${BASE_URL_API}/auth/login/`;
        return axiosClient.post(urlLogin, params);
    },

    logout: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");

        Helpers.removeLocalStorage("name");
        Helpers.removeLocalStorage("access_token");
        Helpers.removeLocalStorage("refresh_token");

        const urlLogout = `${BASE_URL_API}/auth/logout/`;
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(urlLogout, param);
    },

    register: (params) => {
        const urlRegister = `${BASE_URL_API}/auth/register/`;
        return axiosClient.post(urlRegister, params);
    },

    getUser: (uuid) => {
        const url = `/auth`;
        return axiosClient.get(url, uuid);
    },
};

export default userApi;
