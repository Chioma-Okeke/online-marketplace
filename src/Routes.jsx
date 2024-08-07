import { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PropTypes from "prop-types";
const SignUp = lazy(() => import("./pages/authPages/SignUp"));
const SignIn = lazy(() => import("./pages/authPages/SignIn"));
const ForgotPassword = lazy(() => import("./pages/authPages/ForgotPassword"));
const SingleListing = lazy(() => import("./pages/SingleListing"));
const Listings = lazy(() => import("./pages/Listings"));
const CreateListing = lazy(() => import("./pages/CreateListing"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Home = lazy(() => import("./pages/Home"));
const Notifications = lazy(() => import("./pages/Notifications"));
const UserListings = lazy(() => import("./pages/UserListings"));
const ListingsBought = lazy(() => import("./pages/ListingsBought"));
const Favorites = lazy(() => import("./pages/Favorites"));
const ChangePassword = lazy(() => import("./pages/authPages/ChangePassword"))

export function PageRoutes() {
    return (
        <Router>
            <Suspense fallback={""}>
                <Routes>
                    {/* unauthorized route  */}
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/signin" element={<SignIn />} />
                    <Route exact path="/listing" element={<SingleListing />} />
                    <Route exact path="/dashboard" element={<UserListings />} />
                    <Route exact path="/selling" element={<UserListings />} />
                    <Route exact path="/buying" element={<ListingsBought />} />
                    <Route exact path="/favorites" element={<Favorites />} />
                    <Route
                        exact
                        path="/searchmarketplace"
                        element={<SearchPage />}
                    />
                    <Route
                        exact
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route
                        exact
                        path="/changepassword"
                        element={<ChangePassword />}
                    />

                    {/* Protected Routes */}
                    <Route element={<ProtectedRoutes />}>
                        <Route exact path="/listings" element={<Listings />} />
                        <Route
                            exact
                            path="/create"
                            element={<CreateListing />}
                        />
                        <Route
                            exact
                            path="/notifications"
                            element={<Notifications />}
                        />
                    </Route>
                    {/* <Route element={<ProtectedRoutes />}>
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/signin" element={<SignIn />} />
                    <Route
                        exact
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    {userType != "Admin" ? (
                        <>
                            <Route
                                exact
                                path="/"
                                element={<Navigate to="/listings" />}
                            />
                            <Route
                                exact
                                path="/create"
                                element={<CreateListing />}
                            />

                            <Route
                                exact
                                path="/notifications"
                                element={<Notifications />}
                            />
                        </>
                    ) : (
                        <>
                            <Route
                                exact
                                path="/"
                                element={<Navigate to="/admin-dashboard" />}
                            />
                            <Route
                                exact
                                path="/create"
                                element={<Navigate to="/" />}
                            />
                            <Route
                                exact
                                path="/searchmarketplace"
                                element={<Navigate to="/" />}
                            />
                            <Route
                                exact
                                path="/notifications"
                                element={<Navigate to="/" />}
                            />
                        </>
                    )}
                </Route> */}
                    {/* Catch-all route */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

PageRoutes.propTypes = {
    isLoggedIn: PropTypes.bool,
    userType: PropTypes.string,
};
