import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../reusable/Button";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "../listings/ListingSingle";
import { ModalContext } from "../../context/ModalContext";
import DeleteListingsModal from "../modals/DeleteListingModal";
import ListingService from "../../services/Listing";

function SellingListings() {
    const { listingsSoldByUser, listings } = useContext(ListingsContext);
    const [isDeleteInProgress, setIsDeleteInProgress] = useState(false);
    const  [listingId, setListingId]  = useState("");
    const { showDeleteListingsModal } = useContext(ModalContext);

    async function deleteListing() {
        try {
            console.log(listingId)
            setIsDeleteInProgress(true);
            const response = await ListingService.deleteListing(listingId);
            console.log(response);
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            setIsDeleteInProgress(false);
        }
    }

    console.log(typeof deleteListing, "in parent")

    return (
        <section>
            <div className="flex items-center p-3 gap-3 w-full lg:hidden">
                <div className="w-[90%] mx-auto">
                    <Link to={"/create"}>
                        <Button className="p-4 rounded-md w-full bg-[#e8d7ee] text-[#720D96] font-semibold transition ease-in-out hover:text-white hover:bg-[#720D96]">
                            + Create a New Listing
                        </Button>
                    </Link>
                </div>
            </div>
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
                                isSellerListings={true}
                                setListingId={setListingId}
                            />
                        );
                    })}
                </div>
            ) : (
                <p className="text-center p-3 border-t-2 md:border-none text-sm md:text-xl font-semibold text-gray-400">
                    Listings that you are selling on marketplace will appear
                    here.
                </p>
            )}
            {showDeleteListingsModal && (
                <DeleteListingsModal
                    isDeleteInProgress={isDeleteInProgress}
                    deleteListing={deleteListing}
                />
            )}
        </section>
    );
}

export default SellingListings;
