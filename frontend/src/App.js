import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";

// Lazy load - code splitting
const HomePage = lazy(() => import("./pages/Home/index.jsx"));
const SearchPage = lazy(() => import("./pages/Search/index.jsx"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetail/index.jsx"));
const MovieListPage = lazy(() => import("./pages/MovieList/index.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFound/index.jsx"));
const LoginPage = lazy(() => import("./pages/Login/index.jsx"));
const RegisterPage = lazy(() => import("./pages/Register/index.jsx"));
const ProfilePage = lazy(() => import("./pages/Profile/index.jsx"));

function App() {
    return (
        <div className="review-movie-app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Header />
                    <ul>
                        <li>
                            <Link to="/search">Go to search page</Link>
                        </li>
                        <li>
                            <Link to="/moviedetail">Go to Movie Detail page</Link>
                        </li>
                        <li>
                            <Link to="/movielist">Go to movie list page</Link>
                        </li>
                        <li>
                            <Link to="/login">Go to login page</Link>
                        </li>
                        <li>
                            <Link to="/register">Go to register page</Link>
                        </li>
                        <li>
                            <Link to="/profile">Go to profile page</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/moviedetail" component={MovieDetailPage} />
                        <Route path="/movielist" component={MovieListPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
