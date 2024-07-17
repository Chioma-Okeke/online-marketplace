import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/authPages/SignUp";
import SignIn from "./pages/authPages/SignIn";
import ForgotPassword from "./pages/authPages/ForgotPassword";
import SingleListing from "./pages/SingleListing";
import Listings from "./pages/Listings";


export function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/signup" element={<SignUp />}/>
                <Route exact path="/signin" element={<SignIn />}/>
                <Route exact path="/forgotpassword" element={<ForgotPassword />}/>
                <Route exact path="/listing" element={<SingleListing />}/>
                <Route exact path="/listings" element={<Listings />}/>
            </Routes>
        </Router>
    )
}