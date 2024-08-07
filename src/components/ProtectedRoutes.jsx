import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProtectedRoutes() {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if (!isAuthenticated) {
        // Store the initial URL in sessionStorage
        sessionStorage.setItem("redirectBackTo", location.pathname);
        return <Navigate to="/signin" state={{ from: location }} />;
    }

    return <Outlet />;
}

export default ProtectedRoutes;
