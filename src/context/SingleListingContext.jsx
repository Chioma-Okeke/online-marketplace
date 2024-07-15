/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { singleListingData } from "../data/singleListingData";

const SingleListingContext = createContext();

export function SingleListingProvider({ children }) {
    const [singleListing, setSingleListing] = useState(singleListingData);
    return (
        <SingleListingContext.Provider
            value={{ singleListing, setSingleListing }}
        >
            {children}
        </SingleListingContext.Provider>
    );
}

export default SingleListingContext;
