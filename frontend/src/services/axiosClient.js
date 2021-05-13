import axios from "axios";
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
    const response = await userApi.refresh();
    Helpers.saveLocalStorage("access_token", response.access);
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.access;
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
                // handle expired token
                const originalRequest = error.config;
                const refreshToken = Helpers.getLocalStorage("refresh_token");
                if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
                    try {
                        getNewToken();
                        console.log("get new token");
                        return axios(originalRequest);
                    } catch {
                        alert("Refresh token expired. Login again!!!");
                        Helpers.removeAuth();
                    }
                }
            case 404:
                break;
            default:
                throw error;
        }
    }
);

export default axiosClient;
