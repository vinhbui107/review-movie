const initialState = {
    movies: [],
};
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_MOVIES":
            state.movies = action.data;
            return { ...state };

        default:
    }

    return { ...state };
};
