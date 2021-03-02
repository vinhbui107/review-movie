import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import PublicRoute from "./pages/routers/PublicRoute";
import PrivateRoute from "./pages/routers/PrivateRoute";
import "./App.scss";
import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";

// Lazy load - code splitting
const LoginPage = lazy(() => import("./pages/Login/index.jsx"));
const RegisterPage = lazy(() => import("./pages/Register/index.jsx"));

const HomePage = lazy(() => import("./pages/Home/index.jsx"));
const SearchPage = lazy(() => import("./pages/Search/index.jsx"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetail/index.jsx"));
const MovieListPage = lazy(() => import("./pages/MovieCate/index.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound/index.jsx"));
const ProfilePage = lazy(() => import("./pages/Profile/index.jsx"));

function App() {
    return (
        <div className="review-movie-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    {/* <!-- PUBLIC ROUTE --> */}
                    <PublicRoute restricted component={LoginPage} template={PublicLayout} path="/login" exact />
                    <PublicRoute restricted component={RegisterPage} template={PublicLayout} path="/register" exact />

                    {/* <!-- PRIVATE ROUTE --> */}
                    <PrivateRoute component={HomePage} template={AppLayout} path="/" exact />
                    <PrivateRoute component={MovieDetailPage} template={AppLayout} path="/moviedetail" exact />
                    <PrivateRoute component={MovieListPage} template={AppLayout} path="/movielist" exact />
                    <PrivateRoute component={ProfilePage} template={AppLayout} path="/profile" exact />
                    <PrivateRoute component={SearchPage} template={AppLayout} path="/search" exact />
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
