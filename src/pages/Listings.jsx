// import React from 'react'

// import Container from "../components/container/Container";
import PropTypes from "prop-types"
import ListingsGrid from "../components/listings/ListingsGrid";
import NavContainer from "../components/navBar/NavContainer";
import AppHeader from "../components/shared/AppHeader";
import { ListingsProvider } from "../context/ListingsContext";
import { ToastContainer } from "react-toastify";

function Listings() {
    return (
        <div className=" relative lg:flex justify-between">
            <ListingsProvider>
                <NavContainer className="hidden lg:block" />
                <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                    <div className="sticky top-0 left-0 bg-white z-20">
                        <AppHeader />
                    </div>
                    <NavContainer />
                    <ListingsGrid />
                </div>
                <ToastContainer/>
            </ListingsProvider>
        </div>
    );
}

Listings.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default Listings;
