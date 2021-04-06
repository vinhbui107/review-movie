import axios from "axios";
import queryString from "query-string";
import { urlRefresh } from "../utils/defines";
import * as Helpers from "../utils/helpers";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "content-type": "application/json",
        accept: "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

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
        // handle expired token
        const originalRequest = error.config;
        const refreshToken = Helpers.getLocalStorage("refresh_token");
        if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
            return axios.post(urlRefresh, { refreshToken }).then((res) => {
                if (res.status === 200) {
                    const access_token = res.data.accessToken;
                    Helpers.saveLocalStorage("access_token", access_token);
                    axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
                    console.log("it works");
                    return axios(originalRequest);
                }
            });
        }

        throw error;
    }
);

export default axiosClient;
