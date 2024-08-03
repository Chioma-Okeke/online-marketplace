// import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
    const isLoggedIn = window.localStorage.getItem("loggedIn");
    const location = useLocation()

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" state={{ from: location }} />
    );
}

export default ProtectedRoutes;
