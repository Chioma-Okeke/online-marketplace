// import React from 'react'
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
