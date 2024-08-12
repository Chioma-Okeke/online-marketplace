/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "./ListingSingle";

function ListingsGrid() {
    const { listings } = useContext(ListingsContext);
    console.log(listings, "listing in grid")

    return (
        <div className="relative h-4/6 min-h-96">
            {listings.length !== 0 ? <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-6 gap-2 lg:gap-5 px-3 md:px-5 w-full">
            {listings.map((listing) => {
                return (
                    <ListingSingle
                        title={listing.title}
                        location={listing.location}
                        price={listing.price}
                        key={listing.id}
                        id={listing.id}
                        img={listing.image}
                    />
                )
            })}
        </div> : <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-gray-400">No items available for Now</p>}
        </div>
    );
}

export default ListingsGrid;
