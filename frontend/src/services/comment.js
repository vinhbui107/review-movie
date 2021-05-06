import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";

const commentApi = {
    getMovieComments: (movieId) => {
        const url = `${BASE_URL_API}/movies/${movieId}/comments`;
        return axiosClient.get(url);
    },

    postComment: (movieId, content) => {},

    deleteComment: (commentId) => {},
};

export default commentApi;
