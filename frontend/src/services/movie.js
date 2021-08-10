import axiosClient from "./axiosClient";
import { BASE_URL_API, RS_URL_API } from "../utils/env";

const MovieService = {
    getMoviesTopRated: (page) => {
        const url = `${BASE_URL_API}/search/movies/?ordering=-rating_average&ordering=-rating_count&page=${page}`;
        return axiosClient.get(url);
    },

    getMoviesPopular: (page) => {
        const url = `${BASE_URL_API}/search/movies/?ordering=-year&ordering=-view_count&page=${page}`;
        return axiosClient.get(url);
    },

    getMoviesRecommend: (username) => {
        const url = `${RS_URL_API}/${username}`;
        return axiosClient.get(url);
    },

    getMovieItem: (movieSlug) => {
        const url = `${BASE_URL_API}/movies/${movieSlug}/`;
        return axiosClient.get(url);
    },

    getMoviesGenre: (genre) => {
        const url = `${BASE_URL_API}/search/movies/?genres=${genre}&ordering=-year&ordering=-view_count`;
        return axiosClient.get(url);
    },

    // search
    searchMovie: (searchText) => {
        const url = `${BASE_URL_API}/search/movies/?search=${searchText}`;
        return axiosClient.get(url);
    },

    suggestMovie: (searchText) => {
        const url = `${BASE_URL_API}/search/movies/suggest/?title_suggest__completion=${searchText}`;
        return axiosClient.get(url);
    },
};

export default MovieService;
