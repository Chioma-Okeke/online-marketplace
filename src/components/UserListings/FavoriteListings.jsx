import { useContext } from "react";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "../listings/ListingSingle";

function FavoriteListings() {
    const { userFavoriteListings } = useContext(ListingsContext);

    return (
        <section>
            {userFavoriteListings.length > 0 ? (
                <div className="grid grid-cols-2 mt-6 gap-2 px-3 w-full">
                    {userFavoriteListings.map((listing) => {
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
                <p className="text-center p-3 text-xl font-semibold text-gray-400">
                    You have no favorite listings. Listings you like will appear here.
                </p>
            )}
        </section>
    );
}

export default FavoriteListings;
