// import React from 'react'

// import Container from "../components/container/Container";
import ListingsGrid from "../components/listings/ListingsGrid";
import NavContainer from "../components/navBar/NavContainer";
import AppHeader from "../components/shared/AppHeader";
import { ListingsProvider } from "../context/ListingsContext";

function Listings() {
    return (
        <div className="bg-[#FCFCFD] relative lg:flex justify-between">
            <NavContainer className="hidden lg:block"/>
            <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                <AppHeader />
                <NavContainer/>
                <ListingsProvider>
                    <ListingsGrid />
                </ListingsProvider>
            </div>
        </div>
    );
}

export default Listings;
