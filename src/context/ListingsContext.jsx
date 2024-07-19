/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { listings as listingsData } from "../data/listings";

export const ListingsContext = createContext();

export const ListingsProvider = (props) => {
    const [listings, setListings] = useState(listingsData);

    return (
        <ListingsContext.Provider value={{ listings, setListings }}>
            {props.children}
        </ListingsContext.Provider>
    );
};
