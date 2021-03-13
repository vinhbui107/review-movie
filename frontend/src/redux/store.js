import { createStore, combineReducers } from "redux";
import { movieReducer } from "./MovieReducer";
const rootReducer = combineReducers({
    movieReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
