import { lazy } from "react";

const LoginPage = lazy(() => import("./Login"));
const RegiserPage = lazy(() => import("./Register"));
const HomePage = lazy(() => import("./Home/"));
const SearchPage = lazy(() => import("./Search"));
const MovieDetailPage = lazy(() => import("./MovieDetail"));
const MovieGenrePage = lazy(() => import("./MovieGenre"));
const NotFoundPage = lazy(() => import("./NotFound"));
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
        path: "/movie/:id",
        exact: true,
        component: MovieDetailPage,
        isAppLayout: true,
    },
    {
        path: "/genre/:id",
        exact: true,
        component: MovieGenrePage,
        isAppLayout: true,
    },
    {
        path: "/search-results/:id",
        exact: true,
        component: SearchPage,
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
