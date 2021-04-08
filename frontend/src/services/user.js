import axiosClient from "./axiosClient";
import { urlLogin, urlRegister, urlLogout } from "../utils/defines";
import * as Helpers from "../utils/helpers";

const userApi = {
    login: (params) => {
        return axiosClient.post(urlLogin, params);
    },

    logout: () => {
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        const param = {
            refresh: refreshToken,
        };
        return axiosClient.post(urlLogout, param);
    },

    register: (params) => {
        return axiosClient.post(urlRegister, params);
    },

    getUser: (uuid) => {
        const url = `/auth`;
        return axiosClient.get(url, uuid);
    },
};

export default userApi;
