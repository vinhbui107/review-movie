import axiosClient from "./axiosClient";

const movieApi = {
    getMovieDetail: (slug) => {
        const url = `/movies/ + ${slug}`;
        return axiosClient.post(url, slug);
    },

    getMovieGenre: (slug) => {
        const url = `/auth/register`;
        return axiosClient.get(url, slug);
    },

    getMovieRecommend: (slug) => {
        const url = `/auth/register`;
        return axiosClient.get(url, slug);
    },
};

export default movieApi;
