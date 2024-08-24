import { useContext } from "react";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "../listings/ListingSingle";

function ListingsBought() {
    const { listingBoughtByUser, listings } = useContext(ListingsContext);

    return (
        <section>
            {listings.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-6 gap-2 px-3 w-full">
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
                        );
                    })}
                </div>
            ) : (
                <p className="text-center p-3 text-sm md:text-xl font-semibold text-gray-400">
                    Listings that you are buying on marketplace will appear here.
                </p>
            )}
        </section>
    );
}

export default ListingsBought;
