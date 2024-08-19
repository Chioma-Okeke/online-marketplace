// import React from 'react'

// import Container from "../components/container/Container";
import PropTypes from "prop-types"
import ListingsGrid from "../components/listings/ListingsGrid";
import PageLayout from "../components/shared/Layouts/PageLayout";

function Listings() {
    return (
        <PageLayout pageName={"Listings"}>
            <ListingsGrid />
        </PageLayout>
    );
}

Listings.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default Listings;
