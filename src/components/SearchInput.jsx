import React from "react";
import FormInput from "./FormInput";
import { IoSearch } from "react-icons/io5";
import { ListingsContext } from "../context/ListingsContext"

function SearchInput() {
    const { searchListings, searchHistory, clearSearchHistory } =
        React.useContext(ListingsContext);
    const [query, setQuery] = React.useState("");
    const [showHistory, setShowHistory] = React.useState(false);

    function handleSearch(e) {
        const value = e.target.value;
        console.log(value, "here")
        setQuery(value);
        searchListings(value);
    }

    function handleFocus() {
        setShowHistory(true);
    }

    function handleBlur() {
        setTimeout(() => {
            setShowHistory(false);
        }, 200);
    }

    function handleHistorySelect(query) {
        setQuery(query);
        searchListings(query);
        setShowHistory(false);
    }

    return (
        <div className="relative md:w-[30%]">
            <div className="md:flex items-center justify-between md:border-2 border-[#720D96] py-1 pl-5 pr-2 md:w-full max-w-md rounded-3xl">
                <FormInput
                    inputName="search"
                    inputGroupClassNames="hidden md:block w-full"
                    placeholderText="Search for items..."
                    inputValue={query}
                    inputId="search"
                    ariaLabelName="search bar"
                    onChange={handleSearch}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="border-r border-white mb-0 bg-transparent border-0 focus:border-0 focus:outline-none w-full flex-1"
                />
                <div className="bg-[#e4e6eb] md:bg-[#720D96] p-2 rounded-full cursor-pointer">
                    <IoSearch
                        size={20}
                        color="white"
                        className="hidden md:block"
                    />
                    <IoSearch size={20} className="md:hidden" />
                </div>
            </div>
            {showHistory && searchHistory.length > 0 && (
                <div className="mt-2 absolute top-full left-0 w-full py-2 bg-white border rounded-md shadow z-10">
                    <ul className="list-none z-50">
                        {searchHistory.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => handleHistorySelect(item)}
                                    className="p-2 cursor-pointer transition ease-in-out hover:bg-[#f0f0f0] duration-300"
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <span
                        onClick={clearSearchHistory}
                        className="text-[#720D96] pl-2 transition ease-in-out hover:underline duration-300 cursor-pointer text-sm"
                    >
                        Clear Recent Searches
                    </span>
                </div>
            )}
        </div>
    );
}

export default SearchInput;
