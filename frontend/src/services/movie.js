import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/defines";

const movieApi = {
    getMoviesTrending: (page) => {
        const url = `${BASE_URL_API}/search/movies/?ordering=-year&page=${page}`;
        return axiosClient.get(url);
    },

    getMoviesPopular: (page) => {
        const url = `${BASE_URL_API}/search/movies/?ordering=-imdb_rating&page=${page}`;
        return axiosClient.get(url);
    },

    getMovieComments: (movieId) => {
        const url = `${BASE_URL_API}/movies/${movieId}/comments`;
        return axiosClient.get(url);
    },

    getMovieItem: (movieId) => {
        const url = `${BASE_URL_API}/search/movies/?id=${movieId}`;
        return axiosClient.get(url);
    },
};

export default movieApi;
