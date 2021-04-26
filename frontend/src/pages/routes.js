import { lazy } from "react";

const LoginPage = lazy(() => import("./Login"));
const RegiserPage = lazy(() => import("./Register"));
const HomePage = lazy(() => import("./Home"));
// const SearchPage = lazy(() => import("../pages/search"));
const MovieDetailPage = lazy(() => import("./MovieDetail"));
const MovieGenrePage = lazy(() => import("./MoviesGenre"));
const NotFoundPage = lazy(() => import("./Notfound"));
const ProfilePage = lazy(() => import("./Profile"));

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
        component: RegiserPage,
        isAppLayout: false,
    },
    {
        path: "/profile",
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
        path: "/genre/:slug",
        exact: true,
        component: MovieGenrePage,
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
