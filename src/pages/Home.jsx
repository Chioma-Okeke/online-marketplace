// import React from 'react'
import { ListingsProvider } from "../context/ListingsContext";
import NavContainer from "../components/navBar/NavContainer";
import AppHeader from "../components/shared/AppHeader";
import ListingsGrid from "../components/listings/ListingsGrid";

function Home() {
    return (
        <div className=" relative lg:flex justify-between">
            <ListingsProvider>
                <NavContainer
                    className="hidden lg:block"
                    authenticated={false}
                />
                <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                    <div className="sticky top-0 left-0 bg-white z-20">
                        <AppHeader authenticated={false} />
                    </div>
                    <NavContainer authenticated={false} />
                    <ListingsGrid />
                </div>
            </ListingsProvider>
        </div>
    );
}

export default Home;
