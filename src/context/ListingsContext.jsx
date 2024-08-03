/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import { listings as listingsData } from "../data/listings";
import axios from "axios";

export const ListingsContext = createContext();

export const ListingsProvider = (props) => {
    const [listings, setListings] = useState(listingsData);
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        async function getListings () {
            try {
                const response = await axios.get("https://composed-visually-newt.ngrok-free.app/listing")
                const listingsData = response.json()
                console.log(listingsData)
            } catch(err) {
                console.error(err)
            }
        }

        getListings()
    }, [])

    function searchListings(query) {
        if (!query) {
            setListings(listingsData);
        } else if (typeof query === 'string') {
            const lowerCaseQuery = query.toLowerCase();
            const filteredListings = listingsData.filter(
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
            setListings(listingsData);
        } else {
            const filteredListings = listingsData.filter((listing) =>
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
