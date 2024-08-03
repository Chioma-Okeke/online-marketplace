import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";
import SignUp from "./pages/authPages/SignUp";
import SignIn from "./pages/authPages/SignIn";
import ForgotPassword from "./pages/authPages/ForgotPassword";
import SingleListing from "./pages/SingleListing";
import Listings from "./pages/Listings";
import CreateListing from "./pages/CreateListing";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export function PageRoutes() {
    const {isAuthenticated} = useContext(AuthContext)
    return (
        <Router>
            <Routes>
                {/* unauthorized route  */}
                {!isAuthenticated && (
                    <>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/signin" element={<SignIn />} />
                        <Route
                            exact
                            path="/listing"
                            element={<SingleListing />}
                        />
                        <Route
                            exact
                            path="/searchmarketplace"
                            element={<SearchPage />}
                        />
                    </>
                )}
                <Route element={<ProtectedRoutes />}>
                    <Route
                        exact
                        path="/forgotpassword"
                        element={<ForgotPassword />}
                    />
                    <Route
                        exact
                        path="/listings"
                        element={<Listings/>}
                    />
                    <Route exact path="/create" element={<CreateListing />} />
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
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

PageRoutes.propTypes = {
    isLoggedIn: PropTypes.bool,
    userType: PropTypes.string,
};
