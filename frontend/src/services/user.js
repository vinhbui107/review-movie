import axiosClient from "./axiosClient";
import { urlToken, urlRegister } from "../utils/defines";
import { removeLocalStorage } from "../utils/helpers";

const userApi = {
    login: (params) => {
        return axiosClient.post(urlToken, params);
    },

    logout: () => {
        removeLocalStorage("access_token");
        removeLocalStorage("refresh_token");
        return axiosClient.post();
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
