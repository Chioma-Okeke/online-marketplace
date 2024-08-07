// import React from 'react'
import { ListingsProvider } from "../context/ListingsContext";
import NavContainer from "../components/navBar/NavContainer";
import AppHeader from "../components/shared/AppHeader";
import ListingsGrid from "../components/listings/ListingsGrid";
import PageLayout from "../components/shared/Layouts/PageLayout";

function Home() {
    return (
        <PageLayout pageName={"Home"}>
            <ListingsGrid />
        </PageLayout>
    );
}

export default Home;
