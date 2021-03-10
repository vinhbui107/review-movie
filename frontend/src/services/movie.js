import axiosClient from "./axiosClient";

const productApi = {
    getAll: () => {
        const url = "https://5fe08f9504f0780017de8ea4.mockapi.io/nhanVien";
        return axiosClient.get(url);
    },

    getMovieById: (params) => {
        const url = `http://svcy.myclass.vn/api/Movie/GetMovieDetail/${params}`;
        return axiosClient.get(url, { params });
    },
};

export default productApi;
