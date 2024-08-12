import React, { useLayoutEffect, useState } from "react";
import PropTypes from "prop-types"

import SellingListings from "./SellingListings";
import ListingsBought from "./ListingsBought";
import FavoriteListings from "./FavoriteListings";
import UserProfile from "./UserProfile";

function MainPage({pageName}) {
    const [pageContent, setPageContent] = useState(() => SellingListings)

    useLayoutEffect(() => {
        switch(pageName) {
            case "Selling": {
                setPageContent(() => SellingListings)
                break;
            }
            case "Buying": {
                setPageContent(() => ListingsBought)
                break;
            }
            case "Favorites": {
                setPageContent(() => FavoriteListings)
                break;
            }
            case "User Profile": {
                setPageContent(() => UserProfile)
                break;
            }
        }
    },[pageName])

    return (
        <section>
            {React.createElement(pageContent)}
        </section>
    );
}

MainPage.propTypes = {
    pageName: PropTypes.string
}

export default MainPage;
