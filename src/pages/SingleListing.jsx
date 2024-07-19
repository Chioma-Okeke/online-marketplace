import React from "react";
import ListingGallery from "../components/listings/ListingGallery";
import Container from "../components/container/Container";
import ListingInfo from "../components/listings/ListingInfo";
// import AppHeader from "../components/shared/AppHeader";
import ListingHeader from "../components/listings/ListingHeader";

function SingleListing() {
    return (
        <Container className="">
            <ListingHeader/>
            <div className="flex w-full min-h-[100vh] flex-col md:flex-row md:py-8">
                <ListingGallery />
                <ListingInfo/>
            </div>
        </Container>
    );
}

export default SingleListing;
