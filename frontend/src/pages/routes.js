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
        path: "/login",
        exact: true,
        component: LoginPage,
        restricted: true,
    },
    {
        path: "/register",
        exact: true,
        component: RegisterPage,
        restricted: true,
    },
    {
        path: "/",
        exact: true,
        component: HomePage,
        restricted: false,
    },
    {
        path: "/u/:username",
        exact: true,
        component: ProfilePage,
        restricted: false,
    },
    {
        path: "/movie/:slug",
        exact: true,
        component: MovieDetailPage,
        restricted: false,
    },
    {
        path: "/genre/:genre",
        exact: true,
        component: MoviesGenrePage,
        restricted: false,
    },
    {
        path: "/recommend",
        exact: true,
        component: MoviesRecommendPage,
        restricted: false,
    },
    {
        path: "/search",
        exact: true,
        component: SearchResultPage,
        restricted: false,
    },
    {
        path: "/404",
        exact: true,
        component: NotFoundPage,
        restricted: false,
    },
];
export { routes };
