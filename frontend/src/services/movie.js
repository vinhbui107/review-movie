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

    getMovieItem: (movieId) => {
        const url = `${BASE_URL_API}/search/movies/?id=${movieId}`;
        return axiosClient.get(url);
    },

    getMovieComments: (movieId) => {
        const url = `${BASE_URL_API}/movies/${movieId}/comments`;
        return axiosClient.get(url);
    },

    postComment: (movieId, content) => {},

    deleteComment: (commentId) => {},

    getMovieRatings: (movieId) => {
        const url = `${BASE_URL_API}/movies/${movieId}/ratings`;
        return axiosClient.get(url);
    },

    postRating: (movieId, value) => {},

    searchMovie: (key) => {
        const url = `${BASE_URL_API}/search/movies/suggest/?title_suggest__completion=${key}`;
    },

    suggestMovie: (key) => {
        const url = `${BASE_URL_API}/search/movies/suggest/?title_suggest__completion=${key}`;
        return axiosClient.get(url);
    },
};

export default movieApi;
