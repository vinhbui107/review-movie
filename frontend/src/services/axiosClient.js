import axios from "axios";
import queryString from "query-string";
import { BASE_URL_API } from "../utils/env";
import * as Helpers from "../utils/helpers";

const axiosClient = axios.create({
    baseURL: BASE_URL_API,
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
            try {
                const response = axios.post(`${BASE_URL_API}/auth/login/refresh`, { refreshToken });
                const access_token = response.data.accessToken;
                Helpers.saveLocalStorage("access_token", access_token);
                axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
                return axios(originalRequest);
            } catch {
                alert("Refresh token expired. Login again!!!");
                Helpers.removeLocalStorage("name");
                Helpers.removeLocalStorage("access_token");
                Helpers.removeLocalStorage("refresh_token");
            }
        }

        throw error;
    }
);

export default axiosClient;
