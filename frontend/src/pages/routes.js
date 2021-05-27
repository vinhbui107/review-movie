import { lazy } from "react";

const LoginPage = lazy(() => import("./Login"));
const RegisterPage = lazy(() => import("./Register"));
const HomePage = lazy(() => import("./Home"));
const MovieDetailPage = lazy(() => import("./MovieDetail"));
const NotFoundPage = lazy(() => import("./Notfound"));
const ProfilePage = lazy(() => import("./Profile"));
const SearchResultPage = lazy(() => import("./SearchResult"));
const MoviesGenrePage = lazy(() => import("./MoviesGenre"));
const MoviesRecommendPage = lazy(() => import("./MoviesRecommend"));

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        isAppLayout: true,
    },
    {
        path: "/login",
        exact: true,
        component: LoginPage,
        isAppLayout: false,
    },
    {
        path: "/register",
        exact: true,
        component: RegisterPage,
        isAppLayout: false,
    },
    {
        path: "/users/:username",
        exact: true,
        component: ProfilePage,
        isAppLayout: true,
    },
    {
        path: "/movies/:movieId",
        exact: true,
        component: MovieDetailPage,
        isAppLayout: true,
    },
    {
        path: "/genres/:genre",
        exact: true,
        component: MoviesGenrePage,
        isAppLayout: true,
    },
    {
        path: "/recommend",
        exact: true,
        component: MoviesRecommendPage,
        isAppLayout: true,
    },
    {
        path: "/search",
        exact: true,
        component: SearchResultPage,
        isAppLayout: true,
    },
    {
        path: "/404",
        exact: true,
        component: NotFoundPage,
        isAppLayout: true,
    },
];
export { routes };
