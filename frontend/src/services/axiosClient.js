import axios from "axios";
import { notification } from "antd";
import queryString from "query-string";
import { BASE_URL_API } from "../utils/env";
import * as Helpers from "../utils/helpers";
import userApi from "./user";

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
        const response = await userApi.refresh();
        Helpers.saveLocalStorage("access_token", response.access);
        console.log("get new token");
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.access;
    } catch {
        notification["info"]({
            message: "Your token is expired, reload page!!!",
        });
        Helpers.removeAuth();
    }
};

axiosClient.interceptors.request.use(async (config) => {
    const access_token = Helpers.getLocalStorage("access_token");
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
                const refreshToken = Helpers.getLocalStorage("refresh_token");
                if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
                    getNewToken();
                    return axios(originalRequest);
                }
            case 403:
                break;
            case 404:
                break;
            case 500:
                break;
            default:
                throw error;
        }
    }
);

export default axiosClient;
