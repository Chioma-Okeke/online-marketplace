import { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../reusable/Button";
import profile from "../../assets/profile.svg";
import { ListingsContext } from "../../context/ListingsContext";
import ListingSingle from "../listings/ListingSingle";

function SellingListings() {
    const { listingsSoldByUser } = useContext(ListingsContext);

    return (
        <section>
            <div className="flex items-center p-3 gap-3 w-full md:hidden">
                <div className="w-[10%]">
                    <Link>
                        <img
                            src={profile}
                            alt=""
                            className="cursor-pointer w-10"
                        />
                    </Link>
                </div>
                <div className="w-[90%]">
                    <Link to={"/create"}>
                        <Button className="p-4 rounded-md w-full bg-[#e8d7ee] text-[#720D96] font-semibold transition ease-in-out hover:text-white hover:bg-[#720D96]">
                            + Create a New Listing
                        </Button>
                    </Link>
                </div>
            </div>
            {listingsSoldByUser.length > 0 ? (
                <div className="grid grid-cols-2 mt-6 gap-2 px-3 w-full">
                    {listingsSoldByUser.map((listing) => {
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
                <p className="text-center p-3 border-t-2 md:border-none text-xl font-semibold text-gray-400">
                    Listings that you are selling on marketplace will appear here.
                </p>
            )}
        </section>
    );
}

export default SellingListings;
