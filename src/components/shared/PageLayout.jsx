import React from "react";
import { ListingsProvider } from "../../context/ListingsContext";
import NavContainer from "../navBar/NavContainer";
import AppHeader from "./AppHeader";
import ListingsGrid from "../listings/ListingsGrid";

function PageLayout({ children }) {
    return (
        <div className="relative lg:flex justify-between">
            <ListingsProvider>
                <NavContainer
                    className="hidden lg:block"
                    authenticated={true}
                />
                <div className="flex flex-col relative lg:w-3/4 2xl:w-4/5">
                    <div className="sticky top-0 left-0 bg-white z-20">
                        <AppHeader authenticated={true} />
                    </div>
                    {/* <NavContainer authenticated={true} />
                    <ListingsGrid /> */}
                    {children}
                </div>
            </ListingsProvider>
        </div>
    );
}

export default PageLayout;
