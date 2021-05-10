import axiosClient from "./axiosClient";
import { BASE_URL_API } from "../utils/env";

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

    // Rate API
    getMovieRatings: (movieId) => {
        const url = `${BASE_URL_API}/movies/${movieId}/ratings`;
        return axiosClient.get(url);
    },

    postRating: (movieId, value) => {},

    // Search API
    searchMovie: (searchText) => {
        const url = `${BASE_URL_API}/search/movies/?search=${searchText}`;
        return axiosClient.get(url);
    },

    suggestMovie: (searchText) => {
        const url = `${BASE_URL_API}/search/movies/suggest/?title_suggest__completion=${searchText}`;
        return axiosClient.get(url);
    },
};

export default movieApi;
