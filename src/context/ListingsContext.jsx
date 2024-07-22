/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { listings as listingsData } from "../data/listings";

export const ListingsContext = createContext();

export const ListingsProvider = (props) => {
    const [listings, setListings] = useState(listingsData);
    const [searchHistory, setSearchHistory] = useState([]);

    function searchListings(query) {
        if (!query) {
            setListings(listingsData);
        } else {
            const filteredListings = listingsData.filter(listing =>
                listing.title.toLowerCase().includes(query.toLowerCase())
                // listing.description.toLowerCase().includes(query.toLowerCase())
            )
            console.log(filteredListings, "filtered")
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

    function clearSearchHistory() {
        setSearchHistory([]);
    }

    return (
        <ListingsContext.Provider
            value={{
                listings,
                searchListings,
                searchHistory,
                clearSearchHistory,
            }}
        >
            {props.children}
        </ListingsContext.Provider>
    );
};
