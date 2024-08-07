/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
// import { listings as listingsData } from "../data/listings"; 
// import axios from "axios";
import ListingService from "../services/Listing";
import FetchClient from "../ServiceClients/FetchClient";

export const ListingsContext = createContext();

export const ListingsProvider = (props) => {
    const [listings, setListings] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [originalListings, setOriginalListings] = useState([])
    const [listingsSoldByUser, setListingsSoldByUser] = useState([])
    const [listingBoughtByUser, setListingBoughtByUser] = useState([])
    const [userFavoriteListings, setUserFavoriteListings] = useState([])

    useEffect(() => {
        const listingService = new ListingService(FetchClient)
        async function getListings () {
            try {
                const allListings = await listingService.getListings()
                const userListings = await listingService.getUserListings()
                const userListingsBought = await listingService.getListingsBought()
                const favoriteListings = await listingService.getFavorites()
                setListings(allListings)
                setListingsSoldByUser(userListings)
                setListingBoughtByUser(userListingsBought)
                setUserFavoriteListings(favoriteListings)
                setOriginalListings(allListings)
            } catch(err) {  
                console.error(err)
            }
        }

        getListings()
    }, [])

    function searchListings(query) {
        if (!query) {
            setListings(originalListings);
        } else if (typeof query === 'string') {
            const lowerCaseQuery = query.toLowerCase();
            const filteredListings = originalListings.filter(
                (listing) =>
                    listing.title.toLowerCase().includes(lowerCaseQuery)
                // listing.description.toLowerCase().includes(lowerCaseQuery)
            );
            console.log(filteredListings, "filtered");
            setListings(filteredListings);

            //updating search History
            if (!searchHistory.includes(query)) {
                setSearchHistory((prevHistory) => [
                    query,
                    ...prevHistory.slice(0, 4),
                ]);
            }
        }
    }

    function showCategory(category) {
        if (!category || category === "Browse All") {
            setListings(originalListings);
        } else {
            const filteredListings = originalListings.filter((listing) =>
                listing.category.toLowerCase().includes(category.toLowerCase())
            );
            console.log(filteredListings, "in cat")
            setListings(filteredListings);
        }
    }

    function clearSearchHistory() {
        setSearchHistory([]);
    }

    return (
        <ListingsContext.Provider
            value={{
                listings,
                userFavoriteListings,
                listingsSoldByUser,
                listingBoughtByUser,
                searchListings,
                searchHistory,
                clearSearchHistory,
                showCategory,
            }}
        >
            {props.children}
        </ListingsContext.Provider>
    );
};
