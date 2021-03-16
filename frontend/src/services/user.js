import axiosClient from "./axiosClient";

const userApi = {
    login: (params) => {
        const url = "/token";
        return axiosClient.post(url, { params });
    },

    logout: () => {},

    register: (params) => {
        const url = `/auth/register`;
        return axiosClient.post(url, { params });
    },

    getUser: () => {
        const url = "/auth";
        return axiosClient.get(url);
    },
};

export default userApi;
