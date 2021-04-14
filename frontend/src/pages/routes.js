import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/login"));
const RegiserPage = lazy(() => import("../pages/register"));
const HomePage = lazy(() => import("../pages/home"));
// const SearchPage = lazy(() => import("../pages/search"));
const MovieDetailPage = lazy(() => import("../pages/movie-detail"));
const MovieGenrePage = lazy(() => import("../pages/movie-genre"));
const NotFoundPage = lazy(() => import("../pages/notfound"));
const ProfilePage = lazy(() => import("../pages/profile"));

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
        path: "/movie/:slug",
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
