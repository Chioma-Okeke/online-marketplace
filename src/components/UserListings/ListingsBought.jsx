import { useContext } from "react";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "../listings/ListingSingle";

function ListingsBought() {
    const { listingBoughtByUser } = useContext(ListingsContext);

    return (
        <section>
            {listingBoughtByUser.length > 0 ? (
                <div className="grid grid-cols-2 mt-6 gap-2 px-3 w-full">
                    {listingBoughtByUser.map((listing) => {
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
                <p className="text-center p-3">
                    Listings that you are buying on marketplace will appear here.
                </p>
            )}
        </section>
    );
}

export default ListingsBought;
