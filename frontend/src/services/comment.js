import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";

const commentApi = {
    getMovieComments: (movieSlug) => {
        const url = `${BASE_URL_API}/comments/?movie_slug=${movieSlug}`;
        return axiosClient.get(url);
    },

    postComment: (params) => {
        const url = `${BASE_URL_API}/comments/`;
        return axiosClient.post(url, params);
    },

    deleteComment: (commentId) => {},
};

export default commentApi;
