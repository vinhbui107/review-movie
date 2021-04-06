import axiosClient from "./axiosClient";

const commentApi = {
    // get all comment by slug of movie
    get: (slug) => {
        const url = "/token";
        return axiosClient.post(url, { params });
    },

    post: (params) => {
        const url = `/auth/register`;
        return axiosClient.post(url, params);
    },

    put: (id, params) => {
        const url = `/auth/register`;
        return axiosClient.put(url, params);
    },

    delete: (id) => {
        const url = `/auth/register`;
        return axiosClient.delete(url, id);
    },
};

export default commentApi;
