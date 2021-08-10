import axios from "axios";
import queryString from "query-string";
import { message, notification } from "antd";

import { UserService } from "./index";
import { Messages } from "../utils/messages";
import { getLocalStorage, saveLocalStorage, removeAuth } from "../utils/helpers";

import { BASE_URL_API } from "../utils/env";

const axiosClient = axios.create({
    baseURL: BASE_URL_API,
    headers: {
        "content-type": "application/json",
        accept: "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

const getNewToken = async () => {
    try {
        const { access } = await UserService.refresh();
        saveLocalStorage("access_token", access);

        axios.defaults.headers.common["Authorization"] = "Bearer " + access;
    } catch {
        removeAuth();

        message.error(Messages.getTokenFailed);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
};

axiosClient.interceptors.request.use(async (config) => {
    const access_token = getLocalStorage("access_token");

    if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        switch (error.response.status) {
            case 401:
                const originalRequest = error.config;
                const refreshToken = getLocalStorage("refresh_token");
                if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
                    getNewToken();
                    return axios(originalRequest);
                }
            case 500:
                notification["error"]({
                    message: Messages.apiErrorMes,
                    description: Messages.apiErrorDes,
                });
                break;
            default:
                throw error;
        }
    }
);

export default axiosClient;
