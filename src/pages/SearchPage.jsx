import React from "react";
import { ListingsProvider } from "../context/ListingsContext";
import ListingsGrid from "../components/listings/ListingsGrid";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import SearchInput from "../components/SearchInput";

function SearchPage() {
    const [mouseEnter, setMouseEnter] = React.useState(false);

    return (
        <div>
            <ListingsProvider>
                <div className="flex items-center justify-between p-3 border-b">
                    <Link
                        to={"/listings"}
                        className="flex items-center gap-2 cursor-pointer"
                        onMouseEnter={() => setMouseEnter(true)}
                        onMouseLeave={() => setMouseEnter(false)}
                    >
                        <IoMdArrowBack
                            size={20}
                            className={`${
                                mouseEnter
                                    ? "transition ease-in-out w-8 duration-500"
                                    : ""
                            }`}
                        />
                        <p className="text-sm">Search Marketplace</p>
                    </Link>
                </div>
                <hr />
                <SearchInput/>
                <ListingsGrid />
            </ListingsProvider>
        </div>
    );
}

export default SearchPage;
