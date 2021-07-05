import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";

const ratingApi = {
    getMovieRatings: (movieSlug) => {
        const url = `${BASE_URL_API}/ratings/?movie_slug=${movieSlug}`;
        return axiosClient.get(url);
    },

    postRating: (params) => {
        const url = `${BASE_URL_API}/ratings/`;
        return axiosClient.post(url, params);
    },

    deleteComment: (movieSlug, ratingId) => {},
};

export default ratingApi;
